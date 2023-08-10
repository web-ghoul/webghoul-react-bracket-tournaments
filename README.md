
# webGhoul React Bracket Tournament💯

[![NPM](https://nodei.co/npm/webghoul-react-bracket-tournament.png)](https://nodei.co/npm/webghoul-react-bracket-tournament/)
<br/>

[![npm version](https://img.shields.io/npm/v/webghoul-react-bracket-tournament.svg?style=flat-square)](https://www.npmjs.com/package/webghoul-react-bracket-tournament)
## Installation

In your command-line on Windows:

```bash
    c:\> npm i webghoul-react-bracket-tournament
```

In your terminal on Mac OS X/Linux:

```bash
    $sudo npm install -g webghoul-react-bracket-tournament
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
<img width="75%" align="center" alt="example 1" src="https://github.com/web-ghoul/webghoul-react-bracket-tournament/assets/84246173/1f8fa894-b11e-4a6f-b5b3-465fce5622bb"/>
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

<img width="75%"   alt="example 2" src="https://github.com/web-ghoul/webghoul-react-bracket-tournament/assets/84246173/2c003820-47e8-4cbb-9570-eb6feb8c2340"/>
</p>
## Contributing!

Cordova is an open source Apache project and contributors are needed to keep this project moving forward. Learn more on
[how to contribute on our website][contribute].

## Reporting Issues

If you find issues with the Cordova CLI, please follow our guidelines for [reporting issues]. Please bear in mind that most of `cordova-cli`'s functionality is implemented in [cordova-lib], so that could be the place to report your issue.
Platform-specific issues should be reported in the relevant repositories, such as [cordova-android] and [cordova-ios].

[Overview of Cordova]: http://cordova.apache.org/docs/en/latest/guide/overview/
[Create your first Cordova app]: http://cordova.apache.org/docs/en/latest/guide/cli/index.html
[Reference docs]: http://cordova.apache.org/docs/en/latest/cordova-cli/index.html
[Supported platforms]: http://cordova.apache.org/docs/en/latest/guide/support/index.html
[Project directory structure]: http://cordova.apache.org/docs/en/latest/cordova-cli/index.html#directory-structure
[Contribute]: http://cordova.apache.org/contribute/
[Reporting issues]: http://cordova.apache.org/contribute/issues.html
[cordova-lib]: https://github.com/apache/cordova-lib
[cordova-android]: https://github.com/apache/cordova-android
[cordova-ios]: https://github.com/apache/cordova-ios
