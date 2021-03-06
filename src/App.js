import './App.css';

function App() {
  return (
    <div className="App">
      <div id="game-area" className='snake-game-container' style={{left:0, top:0, width: 837, height: 955}}>

        {/* pause screen */}
        <div className='snake-pause-screen'style={{zindex: 10000}}>
          <div style={{padding: 10}}>
            "[paused]"
            <p>Press [space] to unpause.</p>
          </div>
        </div>

        {/* playing field */}
        <div id='playingField' className='snake-playing-field' style={{left: 20, top: 20, width: 780, height: 880}}></div>
        
        <div className='snake-panel-componenet' style={{top: 913, left: 30}}>Length: 1</div>
        <div className='snake-panel-componenet' style={{top: 913, left: 697}}>highscore: 106</div>


        {/* Welcome dialog */}
        <div id='sbWelcome0' className='snake-welcome-dialog' style={{zindex: 100}}>
          <div className='inner-snake-dialog'>
            Javascript Snake Game
            <p></p>
            Use the 
            <strong>Arro keys </strong>
            on your keyboard to play the game. On Windows, press F11 to play in Full Screen mode.
            <p></p>
          </div>
            <button>Play Game</button>
        </div>

        {/* Try again dialog */}
        <div id='sbTryAgain0' className='snake-try-again-dialog'>
          <div>
            Javascript Snake Game
              <p></p>
              "You died :("
              <p></p>
          </div>
              <button>Play Again?</button>
        </div>
        



      </div>
    </div>
  );
}

export default App;
