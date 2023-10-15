import MusicButton from './components/MusicButton'
import IntroMenu from './components/IntroMenu'

export default function Home() {
  return (
      <main className='flex flex-col items-center'>
          <MusicButton />
          <IntroMenu />
      </main>
  )
}
