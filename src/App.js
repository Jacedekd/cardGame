import { useState, useEffect } from 'react';
import './App.css';
import GameMain from './components/GameMain/GameMain';
import Modal from './components/Modal/Modal'
import _ from 'lodash'

const arr = [
  {src: 'img/boy.png', id: 1},
  {src: 'img/boy2.png', id: 2},
  {src: 'img/boy3.png', id: 3},
  {src: 'img/boy4.png', id: 4},
  {src: 'img/girl.png', id: 5},
  {src: 'img/girl2.png', id: 6},
];
const double = [...arr, ...arr];
let shuffle = _.shuffle(double);
function App() {

  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

// GameMain

    const [opened, setOpened] = useState([])
    const [matched, setMatched] = useState([])

    useEffect(() => {
        if (opened.length === 2) {
            setTimeout(() => {
                setOpened([])
            }, 500)
        };

    }, [opened]);

    useEffect(() => {
        if (opened.length < 2) return;
        const first = shuffle[opened[0]]
        const second = shuffle[opened[1]]

        if (first.id === second.id) {
            setMatched(matched => [...matched, first.id])
            console.log(matched);
        }
        if (matched.length === 5) {
          setTimeout(() => {
            setShow(true)
          }, 1000)
          
        }
    }, [opened]);

    const cardFlip = (index) => {
        if (opened.includes(index)) return;
        if (opened.length === 2) {
            setOpened([])
        }
        setOpened(opened => [...opened, index])
        setCount(count => count + 1)
    }
    const backModal = () => {
      setShow(false)
    }
    const reloadPage = () => {
      setCount(0)
      setOpened(opened => [])
      setMatched(matched => [])
      setShow(false)
    }

  return (
    <div className="App">
      <h1 className="game__title">Игра на память</h1>
      <div className="game__subtitle">Кол-во движений: <span>{count}</span></div>
      <GameMain 
      shuffle={shuffle}
      opened={opened}
      matched={matched}
      cardFlip={cardFlip}
      />

      {
        show ? <Modal backModal={backModal} reloadPage={reloadPage}/> : null
      }
    </div>
  );
}

export default App;
