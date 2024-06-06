import React from 'react';
import CustomerDetails from './CustomerDetails';
import ProductDetails from './ProductDetails';
import Summary from './Summary';
import { FaArrowLeft } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpFromBracket} from '@fortawesome/free-solid-svg-icons'
import '../Styles/CreateInvoice.css';


const CreateInvoice = () => {
  return (
    <div className="create-invoice">
      <div className='heading'>
      <FaArrowLeft id='back'/>
      <h3>Create Invoice</h3>
        </div>  
        <label for="upload" >Add Company Logo</label>
      <div className="upload-logo" id='upload'>
      <FontAwesomeIcon icon={faArrowUpFromBracket} className='upload-icon'/>
        <p>Max. file size 5MB</p>
        <p>Drag & Drop your file or <span style={{ color: "#007bff" }}>browse</span></p>
      </div>
      <CustomerDetails />
      <ProductDetails />
      <Summary />
    </div>
  );
};

export default CreateInvoice;
