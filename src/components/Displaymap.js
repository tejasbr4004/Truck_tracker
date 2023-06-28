// Map.js
import React, { useState,useEffect} from 'react';
import { collection, addDoc,onSnapshot} from 'firebase/firestore';
import { db } from './firebase.config';
import './CustomerList.css';
import Navbar from './Navbar';
import './Addcustomer.css';
import { useNavigate } from "react-router-dom";


const CustomerList = () => {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Fetch customer data from Firestore
    const unsubscribe = onSnapshot(collection(db, 'customers'), (snapshot) => {
      const customerData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCustomers(customerData);
    });

    // Unsubscribe when component is unmounted
    return () => unsubscribe();
  }, []);


  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop:'40px',
    marginBottom: '30px',
  };

  const buttonStyle = {
    backgroundColor: '#420362',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };

 

  return (
    <div className="customer-list">
      <h2 className="cushead">Customer List</h2>
      {customers.length === 0 ? (
        <p>No customers found.</p>
      ) : (
        <ul className="customer-list-items">
          {customers.map((customer) => (
            <li key={customer.id} className="customer-item">
              <p className="customer-name">Name: {customer.name}</p>
              <p className="customer-phone">Phone Number: {customer.phoneNumber}</p>
              <p className="customer-location">
                Location: Lat {customer.location.latitude} deg, Lon {customer.location.longitude} deg
              </p>
            </li>
          ))}
        </ul>
      )}
       <div style={containerStyle}>
        <button
        style={buttonStyle}
        onClick={()=> navigate("/NewMap")}>
        ShowMap
      </button>
      </div>
      {/* <button onClick={()=> navigate("/mappage")}>ShowMap</button> */}

     </div>
  );
};

const AddCustomerForm= () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'customers'), {
        name,
        phoneNumber,
        location: { latitude, longitude },
      });

      // Reset form inputs
      setName('');
      setPhoneNumber('');
      setLatitude('');
      setLongitude('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      
      <div>
     <h2 className="addcus">Add Customer</h2>
     <form onSubmit={handleFormSubmit} className="form">
       <input
         type="text"
         placeholder="Name"
         value={name}
         onChange={(e) => setName(e.target.value)}
         className="input"
       />
       <input
         type="text"
         placeholder="Phone Number"
         value={phoneNumber}
         onChange={(e) => setPhoneNumber(e.target.value)}
         className="input"
       />
       <input
         type="text"
         placeholder="Latitude"
         value={latitude}
         onChange={(e) => setLatitude(e.target.value)}
         className="input"
       />
       <input
         type="text"
         placeholder="Longitude"
         value={longitude}
         onChange={(e) => setLongitude(e.target.value)}
         className="input"
       />
       <button type="submit" className="button">Add Customer</button>
     </form>
   </div>
    </div>
    
  );
}

const Displaymap = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <AddCustomerForm />
      <CustomerList />
    </div>
  );
};

export default Displaymap;
