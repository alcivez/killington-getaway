'use client'

import { useState, useEffect } from 'react'

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export function useWeather() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const LAT = 43.6753
        const LON = -72.7781

        // Fetching from Open-Meteo (reliable and fast)
        const [omResult, wttrResult] = await Promise.allSettled([
          fetch(
            `https://api.open-meteo.com/v1/forecast` +
            `?latitude=${LAT}&longitude=${LON}` +
            `&current=temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m,snow_depth` +
            `&daily=temperature_2m_max,temperature_2m_min,weather_code,snowfall_sum` +
            `&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch` +
            `&timezone=America%2FNew_York&forecast_days=5`
          ).then(r => r.json()),
          fetch('https://wttr.in/Killington+VT?format=j1').then(r => r.json()),
        ])

        let nwsTemp = null
        try {
          const pts = await fetch(
            `https://api.weather.gov/points/${LAT},${LON}`,
            { headers: { 'User-Agent': '(killingtongetaway.com, hello@killingtongetaway.com)' } }
          ).then(r => r.json())
          if (pts.properties?.forecastHourly) {
            const hourly = await fetch(pts.properties.forecastHourly, {
              headers: { 'User-Agent': '(killingtongetaway.com, hello@killingtongetaway.com)' },
            }).then(r => r.json())
            const now = new Date()
            const period = hourly.properties?.periods?.find(
              p => now >= new Date(p.startTime) && now < new Date(p.endTime)
            )
            if (period?.temperature != null) nwsTemp = period.temperature
          }
        } catch (_) {}

        // Fallback data if API fails completely so UI doesn't break
        if (omResult.status !== 'fulfilled' && wttrResult.status !== 'fulfilled') {
          setWeather({
            temp: 32,
            snowDepth: 0,
            newSnow: 0,
            code: 0,
            loading: false
          })
          setLoading(false)
          return
        }

        const om = omResult.status === 'fulfilled' ? omResult.value : null
        const wttr = wttrResult.status === 'fulfilled' ? wttrResult.value : null

        const temps = []
        if (om) temps.push(Math.round(om.current.temperature_2m))
        if (wttr) {
          const wf = parseInt(wttr.current_condition?.[0]?.temp_F, 10)
          if (!isNaN(wf)) temps.push(wf)
        }
        if (nwsTemp !== null) temps.push(Math.round(nwsTemp))

        const avgTemp = temps.length > 0 ? Math.round(temps.reduce((a, b) => a + b, 0) / temps.length) : 32

        const currentSnowDepth = om ? Math.round(om.current.snow_depth * 39.37) : 0
        const newSnowToday = om ? Number(om.daily.snowfall_sum[0]).toFixed(1) : 0

        const forecast = om ? om.daily.time.map((date, i) => ({
          dayName: i === 0 ? 'Today' : DAYS[new Date(date + 'T12:00:00').getDay()],
          high: Math.round(om.daily.temperature_2m_max[i]),
          low:  Math.round(om.daily.temperature_2m_min[i]),
          code: om.daily.weather_code[i],
          snow: om.daily.snowfall_sum[i] > 0 ? Number(om.daily.snowfall_sum[i]).toFixed(1) : null,
        })) : []

        setWeather({
          temp: avgTemp,
          snowDepth: currentSnowDepth,
          newSnow: newSnowToday,
          code: om ? om.current.weather_code : 0,
          wind: om ? Math.round(om.current.wind_speed_10m) : 0,
          humidity: om ? om.current.relative_humidity_2m : 0,
          forecast,
          sources: ['Open-Meteo', wttr ? 'wttr.in' : null, nwsTemp ? 'NWS' : null].filter(Boolean),
          updatedAt: new Date().toLocaleTimeString('en-US', {
            hour: 'numeric', minute: '2-digit', timeZoneName: 'short',
          }),
        })
      } catch (err) {
        console.error('Weather fetch error:', err)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

  return { weather, loading }
}
