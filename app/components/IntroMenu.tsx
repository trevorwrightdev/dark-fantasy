'use client'
import { useState } from 'react'

const IntroMenu: React.FC = () => {

    const [fade, setFade] = useState<boolean>(false)

    return (
        <main className={`flex flex-col items-center transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}>
            <h1 className='text-3xl mt-[220px] text-purple-600'>Nocturne</h1>
            <p>A Dark Fantasy Adventure</p>
            <p>All art is AI generated.</p>
            <button className='text-xl mt-8 hover:text-zinc-300' onClick={() => setFade(true)}>
                Begin
            </button>
        </main>
    )
}
export default IntroMenu
