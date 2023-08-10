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
