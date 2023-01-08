import React from 'react'

const Coin = ({name, image, symbol, price, volume, priceChange, marketcap}) => {
  return (
    <div className='coin-container flex justify-center'>
        <div className="coin-row flex flex-row justify-start items-center h-[80px] border-b-2 w-[900px]">
            <div className="coin flex items-center pr-6 min-w-[300px]">
                <img src={image} alt="crypto" className='h-[30px] w-[30px] mr-[10px]' />
                <h1 className='text-sm w-36'>{name}</h1>
                <p className="coin-symbol uppercase">{symbol}</p>

            </div>
            <div className="coin-data flex items-center justify-between w-[100%]">
                <p className="coin-price w-[110px]">${price}</p>
                <p className="coin-volume w-[230px] ">${volume.toLocaleString()}</p>
                {priceChange < 0 ? (
                    <p className="coin-percent  text-red-600">{priceChange.toFixed(2)}%</p>
                ) : (<p className="coin-percent2 text-green-400">{priceChange.toFixed(2)}%</p>)
            }
            <p className="coin-marketcap w-[155px]">
                Mkt Cap: ${marketcap.toLocaleString()}
            </p>
            </div>
        </div>
    </div>
  )
}

export default Coin