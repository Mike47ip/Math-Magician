import React from 'react';
import Buttons from './Buttons';

function Calculator() {
  return (
    <div className="container">
      <div className="result">0</div>
      <div className="calc-row">
        <Buttons label="AC" className="normalBtn" />
        <Buttons label="+/-" className="normalBtn" />
        <Buttons label="%" className="normalBtn" />
        <Buttons label="÷" className="btn-special" />
      </div>
      <div className="calc-row">
        <Buttons label="7" className="normalBtn" />
        <Buttons label="8" className="normalBtn" />
        <Buttons label="9" className="normalBtn" />
        <Buttons label="×" className="btn-special" />
      </div>
      <div className="calc-row">
        <Buttons label="4" className="normalBtn" />
        <Buttons label="5" className="normalBtn" />
        <Buttons label="6" className="normalBtn" />
        <Buttons label="-" className="btn-special" />
      </div>
      <div className="calc-row">
        <Buttons label="1" className="normalBtn" />
        <Buttons label="2" className="normalBtn" />
        <Buttons label="3" className="normalBtn" />
        <Buttons label="+" className="btn-special" />
      </div>
      <div className="calc-row">
        <Buttons label="0" className="btn-double" />
        <Buttons label="." className="normalBtn" />
        <Buttons label="=" className="btn-special" />
      </div>
    </div>
  );
}

export default Calculator;
