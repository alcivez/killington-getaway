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

        if (omResult.status !== 'fulfilled') {
          setLoading(false)
          return
        }

        const om = omResult.value
        const cur = om.current
        const daily = om.daily

        const temps = [Math.round(cur.temperature_2m)]
        const sources = ['Open-Meteo']
        if (wttrResult.status === 'fulfilled') {
          const wf = parseInt(wttrResult.value?.current_condition?.[0]?.temp_F, 10)
          if (!isNaN(wf)) { temps.push(wf); sources.push('wttr.in') }
        }
        if (nwsTemp !== null) { temps.push(Math.round(nwsTemp)); sources.push('NWS') }

        const avgTemp = Math.round(temps.reduce((a, b) => a + b, 0) / temps.length)

        const forecast = daily.time.map((date, i) => ({
          dayName: i === 0 ? 'Today' : DAYS[new Date(date + 'T12:00:00').getDay()],
          high: Math.round(daily.temperature_2m_max[i]),
          low:  Math.round(daily.temperature_2m_min[i]),
          code: daily.weather_code[i],
          snow: daily.snowfall_sum[i] > 0 ? Number(daily.snowfall_sum[i]).toFixed(1) : null,
        }))

        setWeather({
          temp: avgTemp,
          sources,
          code: cur.weather_code,
          wind: Math.round(cur.wind_speed_10m),
          humidity: cur.relative_humidity_2m,
          snowDepth: cur.snow_depth > 0 ? Math.round(cur.snow_depth * 39.37) : 0,
          forecast,
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
