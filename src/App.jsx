import marioSprite from './assets/marioSprite.png'
import Music from './components/Music'

function App () {
  return (
    <>
      <Music />

      <div id='mario' />
      <div id='coin' />
      <div id='pain' />

      <div className='loader'>
        <img src={marioSprite} className='loader-spritesheet' />
      </div>

    </>
  )
}

export default App
