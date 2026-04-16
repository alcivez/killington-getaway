'use client'

import { useState, useEffect } from 'react'

function getCondition(code) {
  if (code === 0)  return { label: 'Clear Sky',       icon: '☀️' }
  if (code === 1)  return { label: 'Mainly Clear',    icon: '🌤️' }
  if (code === 2)  return { label: 'Partly Cloudy',   icon: '⛅' }
  if (code === 3)  return { label: 'Overcast',        icon: '☁️' }
  if (code <= 48)  return { label: 'Foggy',           icon: '🌫️' }
  if (code <= 55)  return { label: 'Drizzle',         icon: '🌦️' }
  if (code <= 65)  return { label: 'Rain',            icon: '🌧️' }
  if (code <= 77)  return { label: 'Snow',            icon: '❄️' }
  if (code <= 82)  return { label: 'Rain Showers',    icon: '🌦️' }
  if (code <= 86)  return { label: 'Snow Showers',    icon: '🌨️' }
  return             { label: 'Thunderstorm',         icon: '⛈️' }
}

// Season from month index (0 = Jan)
function getSeason(month) {
  if (month >= 2 && month <= 4)  return 'spring'
  if (month >= 5 && month <= 7)  return 'summer'
  if (month >= 8 && month <= 10) return 'fall'
  return 'fall'
}

// Condition bucket from WMO code
function getCondBucket(code) {
  if (code <= 1)  return 'clear'
  if (code <= 3)  return 'cloudy'
  if (code <= 48) return 'fog'
  if (code <= 65 || (code >= 80 && code <= 82)) return 'rain'
  if (code <= 77 || (code >= 85 && code <= 86)) return 'snow'
  return 'storm'
}

// Season × condition → Unsplash photo ID
const BG = {
  spring: {
    clear:  'photo-1490750967868-88df5691cc11', // spring blossom / green meadow
    cloudy: 'photo-1503236823255-94609f598e71', // spring overcast sky
    fog:    'photo-1487621167305-5d248087c724', // misty morning green
    rain:   'photo-1428592953211-077101b2021b', // rain on leaves
    snow:   'photo-1519970773807-5fbb3e5e9e36', // late-season dusting
    storm:  'photo-1504384308090-c894fdcc538d', // dramatic spring storm
  },
  summer: {
    clear:  'photo-1506905925346-21bda4d32df4', // green Vermont mountain summit
    cloudy: 'photo-1523712999610-f77fbcfc3843', // summer cloud sky
    fog:    'photo-1476611338391-6f395a0ebc7b', // mountain summer mist
    rain:   'photo-1473773508845-188df298d2d1', // summer rain street
    snow:   'photo-1506905925346-21bda4d32df4', // high-altitude snow (rare) — reuse clear
    storm:  'photo-1605727216801-e27ce1d0cc28', // lightning storm
  },
  fall: {
    clear:  'photo-1508739773434-c26b3d09e071', // Vermont fall foliage road
    cloudy: 'photo-1507003211169-0a1dd7228f2d', // overcast autumn
    fog:    'photo-1474524955719-b9f87c50ce47', // foggy fall forest
    rain:   'photo-1476611338391-6f395a0ebc7b', // rainy fall scene
    snow:   'photo-1516592673884-4a382d1124c2', // early-season snowfall on foliage
    storm:  'photo-1604328698692-f76ea9498e76', // dramatic fall storm sky
  },
  winter: {
    clear:  'photo-1551524559-8af4e6624178',    // ski resort blue-sky day
    cloudy: 'photo-1516592673884-4a382d1124c2', // ski slopes overcast
    fog:    'photo-1486915309851-b0cc1f8a0084', // whiteout winter fog
    rain:   'photo-1476611338391-6f395a0ebc7b', // winter rain (rare)
    snow:   'photo-1517299321609-52687d1bc55a', // snowboarder in powder
    storm:  'photo-1549880338-65ddcdfd017b',    // blizzard/whiteout
  },
}

function getBgUrl(code) {
  const month  = new Date().getMonth()
  const season = getSeason(month)
  const bucket = getCondBucket(code)
  const id     = BG[season]?.[bucket] ?? BG.winter.clear
  return `https://images.unsplash.com/${id}?w=800&q=80&fit=crop`
}

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export default function WeatherWidget() {
  const [data, setData]       = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
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

      if (omResult.status !== 'fulfilled') { setLoading(false); return }

      const om    = omResult.value
      const cur   = om.current
      const daily = om.daily

      const temps   = [Math.round(cur.temperature_2m)]
      const sources = ['Open-Meteo']
      if (wttrResult.status === 'fulfilled') {
        const wf = parseInt(wttrResult.value?.current_condition?.[0]?.temp_F, 10)
        if (!isNaN(wf)) { temps.push(wf); sources.push('wttr.in') }
      }
      if (nwsTemp !== null) { temps.push(Math.round(nwsTemp)); sources.push('NWS') }

      const avgTemp = Math.round(temps.reduce((a, b) => a + b, 0) / temps.length)

      const forecast = daily.time.slice(0, 5).map((date, i) => ({
        dayName: i === 0 ? 'Today' : DAYS[new Date(date + 'T12:00:00').getDay()],
        high: Math.round(daily.temperature_2m_max[i]),
        low:  Math.round(daily.temperature_2m_min[i]),
        code: daily.weather_code[i],
        snow: daily.snowfall_sum[i] > 0 ? Number(daily.snowfall_sum[i]).toFixed(1) : null,
      }))

      setData({
        temp: avgTemp, sources, code: cur.weather_code,
        wind: Math.round(cur.wind_speed_10m),
        humidity: cur.relative_humidity_2m,
        snowDepthIn: cur.snow_depth > 0 ? Math.round(cur.snow_depth * 39.37) : 0,
        forecast,
        updatedAt: new Date().toLocaleTimeString('en-US', {
          hour: 'numeric', minute: '2-digit', timeZoneName: 'short',
        }),
      })
      setLoading(false)
    }
    load()
  }, [])

  if (loading) {
    return (
      <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-gray-100 animate-pulse">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/5 h-40" style={{ background: 'linear-gradient(135deg, #005f82, #00B4D8)' }} />
          <div className="flex-1 bg-white p-5 flex gap-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex-1 h-24 bg-gray-100 rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (!data) {
    return (
      <p className="text-center text-gray-400 text-sm py-8">
        Weather data temporarily unavailable — check back shortly.
      </p>
    )
  }

  const cond = getCondition(data.code)
  const bgUrl = getBgUrl(data.code)

  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col md:flex-row">

      {/* ── Left: current conditions with seasonal photo ── */}
      <div
        className="md:w-2/5 relative overflow-hidden flex flex-col justify-center"
        style={{
          backgroundImage: `url(${bgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '220px',
        }}
      >
        {/* Branded overlay so text stays readable */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(0,40,60,0.78) 0%, rgba(0,95,130,0.65) 50%, rgba(0,150,190,0.55) 100%)' }}
        />

        {/* Content */}
        <div className="relative z-10 px-6 py-5">
          <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-3">
            Killington, VT · 4,241 ft
          </p>
          <div className="flex items-center justify-between md:flex-col md:items-start gap-2">
            <div>
              <div className="flex items-end gap-1 leading-none">
                <span className="text-6xl font-black text-white">{data.temp}</span>
                <span className="text-white/75 text-xl font-bold mb-1">°F</span>
              </div>
              <p className="text-white/95 text-base font-semibold mt-2">{cond.label}</p>
              {data.sources.length > 1 && (
                <p className="text-white/50 text-xs mt-0.5">avg · {data.sources.length} sources</p>
              )}
            </div>
            <span className="text-6xl md:text-5xl select-none" role="img" aria-label={cond.label}>
              {cond.icon}
            </span>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4">
            <span className="text-white/80 text-xs font-medium">💨 {data.wind} mph</span>
            <span className="text-white/80 text-xs font-medium">💧 {data.humidity}%</span>
            {data.snowDepthIn > 0 && (
              <span className="text-white/80 text-xs font-medium">❄️ {data.snowDepthIn}" base</span>
            )}
          </div>
        </div>
      </div>

      {/* ── Right: 5-day forecast + attribution ── */}
      <div className="flex-1 bg-white flex flex-col">
        <div className="px-6 py-5 flex-1">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            5-Day Forecast
          </p>
          <div className="flex justify-between">
            {data.forecast.map((day) => {
              const dc = getCondition(day.code)
              return (
                <div key={day.dayName} className="flex flex-col items-center flex-1">
                  <span className="text-sm font-bold text-gray-500 whitespace-nowrap">{day.dayName}</span>
                  <span className="text-3xl my-1">{dc.icon}</span>
                  {day.snow && (
                    <span className="text-sm font-bold mb-0.5" style={{ color: '#00B4D8' }}>{day.snow}"</span>
                  )}
                  <span className="text-lg font-black text-black">{day.high}°</span>
                  <span className="text-sm text-gray-400">{day.low}°</span>
                </div>
              )
            })}
          </div>
        </div>
        <div className="border-t border-gray-100 px-6 py-3 flex items-center justify-between flex-wrap gap-1">
          <p className="text-xs text-gray-400">{data.sources.join(' · ')}</p>
          <p className="text-xs text-gray-400">{data.updatedAt}</p>
        </div>
      </div>

    </div>
  )
}
