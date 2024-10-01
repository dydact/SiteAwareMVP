import React, { useState } from 'react';
import { formatCurrency } from '../utils/formatters';
import { invoiceApi } from '../services/api';

// InvoiceForm component for creating new invoices
const InvoiceForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    clientId: '',
    invoiceDate: '',
    dueDate: '',
    items: [{ description: '', quantity: 1, unitPrice: 0 }],
  });

  // Handle input changes for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle changes in invoice items
  const handleItemChange = (index, field, value) => {
    const updatedItems = [...formData.items];
    updatedItems[index][field] = value;
    setFormData((prevData) => ({ ...prevData, items: updatedItems }));
  };

  // Add a new item to the invoice
  const addItem = () => {
    setFormData((prevData) => ({
      ...prevData,
      items: [...prevData.items, { description: '', quantity: 1, unitPrice: 0 }],
    }));
  };

  // Remove an item from the invoice
  const removeItem = (index) => {
    const updatedItems = formData.items.filter((_, i) => i !== index);
    setFormData((prevData) => ({ ...prevData, items: updatedItems }));
  };

  // Calculate the total amount of the invoice
  const calculateTotal = () => {
    return formData.items.reduce((total, item) => total + item.quantity * item.unitPrice, 0);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await invoiceApi.createInvoice(formData);
      onSubmit(response.data);
      // Reset form after successful submission
      setFormData({
        clientId: '',
        invoiceDate: '',
        dueDate: '',
        items: [{ description: '', quantity: 1, unitPrice: 0 }],
      });
    } catch (error) {
      console.error('Failed to create invoice:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Create New Invoice</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="clientId">
            Client
          </label>
          <select
            id="clientId"
            name="clientId"
            value={formData.clientId}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select Client</option>
            {/* Add client options here */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="invoiceDate">
            Invoice Date
          </label>
          <input
            type="date"
            id="invoiceDate"
            name="invoiceDate"
            value={formData.invoiceDate}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dueDate">
            Due Date
          </label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        {formData.items.map((item, index) => (
          <div key={index} className="mb-4">
            <input
              type="text"
              value={item.description}
              onChange={(e) => handleItemChange(index, 'description', e.target.value)}
              placeholder="Item description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              required
            />
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value))}
              min="1"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              required
            />
            <input
              type="number"
              value={item.unitPrice}
              onChange={(e) => handleItemChange(index, 'unitPrice', parseFloat(e.target.value))}
              min="0"
              step="0.01"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              required
            />
            <button
              type="button"
              onClick={() => removeItem(index)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Remove Item
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addItem}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
        >
          Add Item
        </button>
        <p className="text-xl font-bold mb-4">Total: {formatCurrency(calculateTotal())}</p>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create Invoice
        </button>
      </form>
    </div>
  );
};

export default InvoiceForm;