import { useState } from 'react';
import InputBox from './components/InputBox';
 // Ensure this is the correct path to InputBox
import useCurrencyInfo from './Hooks/useCurrencyInfo';
import './App.css';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };

  return (
    <div className="Bux1">
      <div className="Bux2">
        <div className="Bux3">
          <form onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}>
            <div className="Bux4">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(value) => setAmount(value)}
              />
            </div>
            <div className="Bux5">
              <button type="button" className="btn" onClick={swap}>
                Swap
              </button>
            </div>
            <div className="Bux4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <div className="Bux6">
              <button type="submit" className="btn2">
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
