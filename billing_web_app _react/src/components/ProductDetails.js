import { useState } from "react";
import { TbPaperBag } from 'react-icons/tb';
import { MdOutlineDelete } from "react-icons/md";
import '../Styles/Product.css';

const initialProducts = [
  { id: 1, name: 'Test123', quantity: 5, unitPrice: 2300, discount: 0, netAmount: 11500 },
  { id: 2, name: 'Test1232', quantity: 5, unitPrice: 2300, discount: 0, netAmount: 11500 }
];

const ProductDetails = () => {
  const [products, setProducts] = useState(initialProducts);
  const [discount, setDiscount] = useState(0);

  const handleDiscountChange = (e) => {
    const discountValue = parseFloat(e.target.value);
    setDiscount(discountValue);
    setProducts(products.map(product => ({
      ...product,
      discount: (product.quantity * product.unitPrice * discountValue) / 100,
      netAmount: (product.quantity * product.unitPrice) - ((product.quantity * product.unitPrice * discountValue) / 100)
    })));
  };

  return (
    <div className="App">
      <div className="header">
      <TbPaperBag className="logo"/>
      <h2>Product Details</h2>
      </div>
      <div className="select-head">
        <div className="no-1">
        <label>Select Products</label>
        <input type="text"/>
        </div>
        <div className="no-2">
        <label>Quantity</label>
        <input type="number" />
        </div>
      </div>
        <button className="btn-add">+ Add to Bill</button>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Discount (Total Amount)</th>
            <th>Net Amount</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td><input type="number" value={product.quantity} readOnly /></td>
              <td><input type="number" value={product.unitPrice} readOnly /></td>
              <td><input type="number" value={product.discount.toFixed(2)} readOnly /></td>
              <td>{product.netAmount.toFixed(2)}</td>
              <td><MdOutlineDelete className="remove"/></td>

            </tr>
          ))}
        </tbody>
      </table>
      <div className="discount">
        <label>Apply discount(%) to all items?</label>
        <input type="number" value={discount} onChange={handleDiscountChange} />
      </div>
    </div>
  );
};

export default ProductDetails