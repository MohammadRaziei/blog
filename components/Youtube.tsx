'use client'

import React, { useState, useEffect } from 'react'

function Frame({ src, isLoading, ...rest }) {
  return (
    <div style={{ width: '100%', aspectRatio: '16 / 9' }} className="relative bg-black" {...rest}>
      <iframe
        className={`absolute left-0 top-0 h-full w-full ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        src={src}
        allowFullScreen
        title="video"
      />
      {isLoading && (
        <div className="duration-2000 absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black transition-opacity">
          <div className="spinner h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
        </div>
      )}
    </div>
  )
}

const Youtube = ({ id }) => {
  const [currentSource, setCurrentSource] = useState('_youtube')
  const [isLoading, setIsLoading] = useState(true)

  const sources: Array<{ key: string; label: string; url: string }> = [
    {
      key: '_youtube', //
      label: 'YouTube',
      url: 'https://www.youtube.com/embed/{}',
    },
    {
      key: '_piped', //
      label: 'Piped',
      url: 'https://piped.video/embed/{}',
    },
    {
      key: '_9xplayer', //
      label: '9xPlayer',
      url: 'https://9xplayer.com/?url=https://www.youtube.com/watch?v={}',
    },
    // {
    //   key: '_yewtu', //
    //   label: 'Invidious I',
    //   url: 'https://yewtu.be/embed/{}?t=5',
    // },
    {
      key: '_drgns', //
      label: 'Invidious',
      url: 'https://invidious.drgns.space/embed/{}?t=2',
    },
  ]
  const handleSourceChange = (newSource) => {
    setCurrentSource(newSource)
    setIsLoading(true)
  }

  // Setup the effect hook to turn off the loading spinner after 1 second
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [currentSource, id])

  const src = sources.find((s) => s.key === currentSource)?.url?.replace('{}', id)

  return (
    <div className="py-2">
      <div className="relative">
        <Frame src={src} isLoading={isLoading} />
      </div>
      <div className="justify-left mt-1 flex flex-wrap space-x-0">
        {sources.map((source) => (
          <button
            key={source.key}
            onClick={() => handleSourceChange(source.key)}
            className={`flex rounded px-3 py-1 text-xs font-bold shadow-sm shadow-gray-500/20 hover:bg-red-500 hover:text-white dark:text-white ${
              currentSource === source.key ? 'bg-red-600 text-white' : ''
            }`}
          >
            {source.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Youtube
