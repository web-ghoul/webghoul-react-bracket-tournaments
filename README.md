
# webGhoul React Bracket Tournaments💯

[![NPM](https://nodei.co/npm/webghoul-react-bracket-tournaments.png)](https://nodei.co/npm/webghoul-react-bracket-tournaments/)
<br/>

[![npm version](https://img.shields.io/npm/v/webghoul-react-bracket-tournaments.svg?style=flat-square)](https://www.npmjs.com/package/webghoul-react-bracket-tournaments)
## Installation

In your command-line on Windows:

```bash
    c:\> npm i webghoul-react-bracket-tournaments
```

In your terminal on Mac OS X/Linux:

```bash
    $sudo npm install -g webghoul-react-bracket-tournaments
```

## Examples
<h4>📌Example 1</h4>
<p align="center">

```
import "./index.css"
import avatarImg from "./knight.png"
import loadingImg from "./loading.png"
// import Bracket from "webghoul-react-bracket-tournament"
import Bracket from "./Bracket/Bracket"

function App() {
  const data=[
    [
      {
        player1:"webGhoul",
        player2:"Amr006",
        avatar1:avatarImg,
        avatar2:avatarImg,
        matchLink:"",
        handleAbortMatch:()=>{},
        handleFinishMatch:()=>{},
        handlePlayer1Clicked:()=>{},
        handlePlayer2Clicked:()=>{}
      },
      {
        player1:"webGhoul1",
        player2:"Amr007",
        avatar1:avatarImg,
        avatar2:avatarImg,
        matchLink:"",
        handleAbortMatch:()=>{},
        handleFinishMatch:()=>{},
        handlePlayer1Clicked:()=>{},
        handlePlayer2Clicked:()=>{}
      }
    ],
    [
      {
        player1:"webGhoul",
        player2:"Amr007",
        avatar1:avatarImg,
        avatar2:avatarImg,
        matchLink:"",
        handleAbortMatch:()=>{},
        handleFinishMatch:()=>{},
        handlePlayer1Clicked:()=>{},
        handlePlayer2Clicked:()=>{}
      }
    ]
  ]

  return (
    <div className="App">
      <Bracket nodes={data} loadingImg={loadingImg}/>
    </div>
  );
}

export default App;
```
<img width="75%" align="center" alt="example 1" src="https://github.com/web-ghoul/webghoul-react-bracket-tournaments/assets/84246173/1f8fa894-b11e-4a6f-b5b3-465fce5622bb"/>
</p>
<h4>📌Example 2</h4>
<p align="center">
    
```
import "./index.css"
import avatarImg from "./knight.png"
import loadingImg from "./loading.png"
// import Bracket from "webghoul-react-bracket-tournament"
import Bracket from "./Bracket/Bracket"

function App() {
  const data=[
    [
      {
        player1:"webGhoul",
        player2:"Amr006",
        avatar1:avatarImg,
        avatar2:avatarImg,
        matchLink:"",
        handleAbortMatch:()=>{},
        handleFinishMatch:()=>{},
        handlePlayer1Clicked:()=>{},
        handlePlayer2Clicked:()=>{}
      },
      {
        player1:"webGhoul1",
        player2:"Amr007",
        avatar1:avatarImg,
        avatar2:avatarImg,
        matchLink:"",
        handleAbortMatch:()=>{},
        handleFinishMatch:()=>{},
        handlePlayer1Clicked:()=>{},
        handlePlayer2Clicked:()=>{}
      },
      {
        player1:"webGhoul2",
        player2:"Amr008",
        avatar1:avatarImg,
        avatar2:avatarImg,
        matchLink:"",
        handleAbortMatch:()=>{},
        handleFinishMatch:()=>{},
        handlePlayer1Clicked:()=>{},
        handlePlayer2Clicked:()=>{}
      },
      {
        player1:"webGhoul3",
        player2:"Amr009",
        avatar1:avatarImg,
        avatar2:avatarImg,
        matchLink:"",
        handleAbortMatch:()=>{},
        handleFinishMatch:()=>{},
        handlePlayer1Clicked:()=>{},
        handlePlayer2Clicked:()=>{}
      }
    ]
  ]

  return (
    <div className="App">
      <Bracket nodes={data} loadingImg={loadingImg}/>
    </div>
  );
}

export default App;
```

<img width="75%"   alt="example 2" src="https://github.com/web-ghoul/webghoul-react-bracket-tournaments/assets/84246173/2c003820-47e8-4cbb-9570-eb6feb8c2340"/>
</p>

## 🛒Parameters
| Props  | value |
| ------------- | ------------- |
| nodes | array of arrays , each array contains matches of a round  |
| loadingImg  | loading image for the matches that you don't set yet in nodes  |
