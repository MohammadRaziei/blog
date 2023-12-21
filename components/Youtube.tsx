'use client'
// <iframe style={{width:"100%", aspectRatio: "16 / 9"}} frameborder="0" allowfullscreen="" allow="autoplay;fullscreen" crossorigin="anonymous" playsinline src="https://9xplayer.com/?url=https://www.youtube.com/watch?v=JrDWDWqv1Hg"></iframe>

import React, { useState } from 'react'

function Frame({ src, ...rest }) {
  return (
    <iframe
      style={{ width: '100%', aspectRatio: '16 / 9' }}
      src={src}
      allowFullScreen
      title="video"
    />
  )
}

const Youtube = ({ id }) => {
  const [currentSource, setCurrentSource] = useState('_youtube')
  const sources = [
    {
      key: '_youtube', //
      label: 'YouTube',
      url: 'https://www.youtube.com/embed/{}',
    },
    {
      key: '_piped', //
      label: 'Piped Video',
      url: 'https://piped.video/embed/{}',
    },
    {
      key: '_9xplayer', //
      label: '9xPlayer',
      url: 'https://9xplayer.com/?url=https://www.youtube.com/watch?v={}',
    },
    {
      key: '_yewtu', //
      label: 'Invidious I',
      url: 'https://yewtu.be/embed/{}?t=5',
    },
    {
      key: '_drgns', //
      label: 'Invidious II',
      url: 'https://invidious.drgns.space/embed/{}?t=2',
    },
  ]

  const handleSourceChange = (source) => {
    setCurrentSource(source)
  }

  return (
    <div className="py-2">
      <div className="relative">
        <Frame src={sources.find((s) => s.key === currentSource).url.replace('{}', id)} />
      </div>
      <div className="justify-left mt-2 flex flex flex-wrap space-x-0">
        {sources.map((source) => (
          <button
            key={source.key}
            onClick={() => handleSourceChange(source.key)}
            className={
              'flex rounded px-3 py-1 text-xs  font-bold text-white hover:bg-red-700 ' +
              (currentSource === source.key ? 'bg-red-500' : '')
            }
          >
            {source.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Youtube
