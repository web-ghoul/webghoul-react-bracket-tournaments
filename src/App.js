// import Bracket from "./Bracket/Bracket"
import "./index.css"
import avatarImg from "./knight.png"
import loadingImg from "./loading.png"
import Bracket from "webghoul-react-bracket-tournament"

function App() {
  const data=[
    [
      {
        player1:"webGhoul",
        player2:"Amr006",
        avatar1:avatarImg,
        avatar2:avatarImg,
      },
      {
        player1:"webGhoul",
        player2:"Amr006",
        avatar1:avatarImg,
        avatar2:avatarImg
      },
      {
        player1:"webGhoul",
        player2:"Amr006",
        avatar1:avatarImg,
        avatar2:avatarImg,
      },
      {
        player1:"webGhoul",
        player2:"Amr006",
        avatar1:avatarImg,
        avatar2:avatarImg
      }
    ],
  ]

  return (
    <div className="App">
      <Bracket nodes={data} loadingImg={loadingImg}/>
    </div>
  );
}

export default App;
