import { useState } from 'react'
import useSound from 'use-sound'
import song from '../assets/song.mp3'
import { PlayIcon, PauseIcon } from '@heroicons/react/solid'

import { IconXs } from './Icons'

export default function Music () {
  const [playButton, setPlayButton] = useState(true)
  const [play, { stop }] = useSound(song, {
    volume: 0.2,
    interrupt: true
  })
  const playToggle = () => {
    setPlayButton(!playButton)
    playButton ? play() : stop()
  }
  return (
    <button className='button' onClick={() => playToggle()}>
      {playButton ? <IconXs Icon={PlayIcon} /> : <IconXs Icon={PauseIcon} />}
    </button>
  )
}
