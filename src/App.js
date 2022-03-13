import axios from 'axios';
import React, { useState } from 'react';

// import components
import Bottom from './Components/Bottom/Bottom';
import Top from './Components/Top/Top';

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=9f59d1b13ee303fd09530ab1812b0cd4`

  const searchLocation = async (e) => {
    if (e.key === 'Enter') {
      const resp = await axios.get(url)
      console.log(resp)
      setData(resp.data)
      setLocation('')
    }
  }

  return (
    <div className='app'>
      <div className='container' >
        <div className="search">
          <input
            value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder='Enter Location'
            type="text" />
        </div>
        <Top className='top' data={data} />
        {data.name !== undefined && <Bottom className='bottom' data={data} />}
      </div>
    </div>
  );
}

export default App;
