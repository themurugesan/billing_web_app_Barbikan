import React, { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { IoSearchOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from 'react-icons/ri';


const CustomerDetails = () => {
  const [customerName, setCustomerName] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [orderNumber, setOrderNumber] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');
  const [dueDate, setDueDate] = useState('');


  return (
    <>
      
    <div className='header'><FiUser className='logo' id='logo'/><h2>Customer Details</h2></div>
    <div className="customer-details">
      <div className="form-group">
        <label>Customer Name</label>
        <input
          type="text"
          id='name'
          placeholder="Search customers"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          />
        <span className='search'><IoSearchOutline/></span>
        <RiArrowDropDownLine className='rightarrow'/>
      </div>
      <div className="form-group">
        <label>Invoice</label>
        <input
          type="text"
          value={invoiceNumber}
          onChange={(e) => setInvoiceNumber(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Order Number</label>
        <input
          type="text"
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
          />
      </div>
      <div className="form-group">
        <label>Invoice Date</label>
        <input
          type="date"
          value={invoiceDate}
          onChange={(e) => setInvoiceDate(e.target.value)}
          />
      </div>
      <div className="form-group">
        <label>Due Date</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          />
      </div>
    </div>
          </>
  );
};

export default CustomerDetails;
