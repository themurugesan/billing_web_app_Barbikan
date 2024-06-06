import React, { useState } from 'react';
import '../Styles/Summary.css';

const Summary = () => {
  const [subTotal] = useState(23000);
  const [discount, setDiscount] = useState(5);
  const [isTDSApplicable, setIsTDSApplicable] = useState(false);
  const [isTCSApplicable, setIsTCSApplicable] = useState(false);
  const [totalAmount, setTotalAmount] = useState(22600);

  const handleDiscountChange = (e) => {
    const discountValue = parseFloat(e.target.value);
    setDiscount(discountValue);
    calculateTotal(subTotal, discountValue, isTDSApplicable, isTCSApplicable);
  };

  const handleTDSChange = () => {
    setIsTDSApplicable(!isTDSApplicable);
    calculateTotal(subTotal, discount, !isTDSApplicable, isTCSApplicable);
  };

  const handleTCSChange = () => {
    setIsTCSApplicable(!isTCSApplicable);
    calculateTotal(subTotal, discount, isTDSApplicable, !isTCSApplicable);
  };

  const calculateTotal = (subTotal, discount, isTDSApplicable, isTCSApplicable) => {
    let discountAmount = (subTotal * discount) / 100;
    let tdsAmount = isTDSApplicable ? (subTotal * 10) / 100 : 0;
    let tcsAmount = isTCSApplicable ? (subTotal * 1) / 100 : 0; 
    let total = subTotal - discountAmount - tdsAmount + tcsAmount;
    setTotalAmount(total);
  };

  return (
    <div className="App">
      <div className='seperation'>
        <div className="customer-notes">
        <label>Customers Notes:</label>
        <textarea rows="3"></textarea>
        

        <div className="terms-conditions">
          <label>Terms & Conditions:</label>
          <ul>
            
            <li>Lorem ipsum is simply dummy text of the printing and typesetting <br></br>industryLorem ipsum is simply dummy text of the printing and typesetting industry.</li>
            <li>Lorem ipsum is simply dummy text of the printing and typesetting industry.</li>
          </ul>
        </div>
        </div>
        <div className="summary">
        <div className="summary-item">
          <label>Sub Total</label>
          <span>{subTotal.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <label>Discount</label>
          <input type="number" value={discount} onChange={handleDiscountChange} />%
          <span>{((subTotal * discount) / 100).toFixed(2)}</span>
        </div>
        <div className="summary-item check">
          <label>TDS Applicable?</label>
          <input type="checkbox" checked={isTDSApplicable} onChange={handleTDSChange}  class="sc-gJwTLC ikxBAC"/>
          <span>{isTDSApplicable ? ((subTotal * 10) / 100).toFixed(2) : '0.00'}</span>
        </div>
        <div className="summary-item check">
          <label>TCS Applicable?</label>
          <input type="checkbox" checked={isTCSApplicable} onChange={handleTCSChange} />
          <span>{isTCSApplicable ? ((subTotal * 1) / 100).toFixed(2) : '0.00'}</span>
        </div>
        <div className="summary-item">
          <label>Total Amount:</label>
          <span>{totalAmount.toFixed(2)}</span>
        </div>
        <div className="buttons">
          <button className='save'>Save</button>
          <button className='save'>Save and Send</button>
        </div>
      </div>
      </div>
    </div>
  );
};


export default Summary;
