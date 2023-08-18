import React from 'react';
import Buttons from './Buttons';

function Calculator() {
  return (
    <div className="container">
      <div className="result">0</div>
      <div className="calc-row">
        <Buttons label="AC" className="btn-normal" />
        <Buttons label="+/-" className="btn-normal" />
        <Buttons label="%" className="btn-normal" />
        <Buttons label="÷" className="btn-special" />
      </div>
      <div className="calc-row">
        <Buttons label="7" className="btn-normal" />
        <Buttons label="8" className="btn-normal" />
        <Buttons label="9" className="btn-normal" />
        <Buttons label="×" className="btn-special" />
      </div>
      <div className="calc-row">
        <Buttons label="4" className="btn-normal" />
        <Buttons label="5" className="btn-normal" />
        <Buttons label="6" className="btn-normal" />
        <Buttons label="-" className="btn-special" />
      </div>
      <div className="calc-row">
        <Buttons label="1" className="btn-normal" />
        <Buttons label="2" className="btn-normal" />
        <Buttons label="3" className="btn-normal" />
        <Buttons label="+" className="btn-special" />
      </div>
      <div className="calc-row">
        <Buttons label="0" className="btn-double" />
        <Buttons label="." className="btn-normal" />
        <Buttons label="=" className="btn-special" />
      </div>
    </div>
  );
}

export default Calculator;
