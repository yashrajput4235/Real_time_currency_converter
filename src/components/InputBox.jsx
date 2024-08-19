import React,{useId} from 'react';
import './InputBox.css'; // Import the component's CSS file

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
}) {
    const amountInputId=useId();
    return (
        <div className='Box1'>
            <div className='Box2'>
                <label className='lab' htmlFor={amountInputId}>
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className='Ip1'
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    disabled={amountDisable}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className='Box2'>
                <p>Currency Type</p>
                <select
                    className='Opt'
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
