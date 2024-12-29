import './App.css';
import { Forms } from './components/Forms';
import { useState } from 'react';
import { Trening } from './components/Trening';


function App() {

  const [treningList, setTreningList] = useState([])

  const addTrening = (trening) => {
    !treningList.some(({ date }) => date === trening.date)
      ? setTreningList(prev => [...prev, trening])
      : changeTrening(trening)
  }

  const removeTrening = (date)=> {
    setTreningList(treningList.filter(item => item.date !== date))
  }

  const sortedList = () => {
    return [...treningList].sort((a, b) => +b.date - +a.date)
  }

  const changeTrening = (trening)=> {
    setTreningList(prev => prev.map(item => item.date === trening.date
      ? {...item, distance: item.distance + trening.distance}
      : item))
  }



  return (
    <div className="App">
        <Forms addTrening={addTrening} />
        <div className="wrp">
            <div className="headers">
                <div className='w'>Дата (ДД.ММ.ГГ)</div>
                <div className='w'>Пройдено км</div>
                <div className='w'>Действие</div>
            </div>
            <div className="widget">
              {
                sortedList().map(trening => {
                  return <Trening 
                    key={trening.date}
                    trening={trening}
                    removeTrening={removeTrening}
                  />
                  
                })
              }  
            </div>
        </div>
  
    </div>
  );
}

export default App;
