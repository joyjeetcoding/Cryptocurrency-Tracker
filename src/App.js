import React, { useState, useEffect } from 'react'
import axios from "axios";
import Coin from "./components/Coin";
import Home from "./components/Home";


function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data);
      }).catch(error => console.error(error))
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  }

  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="App">
      <Home />
      <div className='coin-app bg-gradient-to-br from-gray-700 via-gray-900 to-black text-white flex flex-col items-center font-cryptowriting'>
        <div className="coin-search mb-[64px] flex flex-col justify-center items-center">
          <h1 className="coin-text mb-[32px] text-center font-extrabold text-3xl text-yellow-300">Search a Currency</h1>
          <form>
            <input type="text" placeholder='Search' className='coin-input pl-[16px] w-[300px] h-[50px] border-r-4 bordder-none text-black ' onChange={handleChange} />
          </form>
        </div>
        {filteredCoins.map(coin => {
          return (
            <Coin 
            key={coin.id} 
            name={coin.name} 
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
