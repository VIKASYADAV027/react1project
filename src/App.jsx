import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('red');

  console.log("Current color:", color); // Debugging

  return (
    <div className='w-full min-h-screen duration-100' >
      <div className='fixed flex flex-wrap justify-center top-80 inset-x-0 px-2'>
        <div className='gap-3 bg-white p-4 rounded-lg' style={{backgroundColor:color}}>
          <button className='outline-none px-4 py-1 rounded-full m-2.5 text-white bg-blue-500' onClick={() => setColor('blue')}>
            Set Blue
          </button>
          <button className='outline-none px-4 py-1 rounded-full m-2.5 text-white bg-green-500' onClick={() => setColor('green')}>
            Set Green
          </button>
          <button className='outline-none px-4 py-1 rounded-full m-2.5 text-white bg-orange-400' onClick={() => setColor('orange')}>
            Set Saffron
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

