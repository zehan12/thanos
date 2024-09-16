import { useState } from 'react';
import InfinityGauntlet from 'react-thanos-snap';
import { Thanos } from "react-thanos";

import './App.css';



function App() {
  const [snap, setSnap] = useState(false);
  return (
    <div className="overflow-hidden">
      <InfinityGauntlet snap={snap}>
        <div className='mx-auto my-20 flex justify-center items-center w-3/6 h-[50vh]'>
          <img className='w-full h-full' src='./avengers.png' />
        </div>
      </InfinityGauntlet>


      <button className='w-screen h-[90vh] flex justify-center items-end' onClick={() => setSnap(!snap)}>
        <Thanos
          onSnap={() => setSnap(true)}
          onSnapReverse={() => setSnap(false)}
        />
      </button>
    </div>
  );
}


export default App;
