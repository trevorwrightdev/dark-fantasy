'use client'
import { Howl } from 'howler'
import { useState } from 'react'
import SpeakerWave from './Icons/SpeakerWave'
import SpeakerX from './Icons/SpeakerX'

const sound = new Howl({
    src: ['/music/yamaha.mp3'],
    loop: true,
})

const MusicButton: React.FC = () => {

    const [playing, setPlaying] = useState(false)

    const togglePlayback = () => {
        if (sound.playing()) {
            sound.pause()
            setPlaying(false)
        } else {
            sound.play()
            setPlaying(true)
        }
    }   

    return (
        <main className='w-full cursor-pointer flex flex-row justify-end p-4' onClick={togglePlayback}>
            {playing ? <SpeakerWave /> : <SpeakerX />}
        </main>
    )
}

export default MusicButton
