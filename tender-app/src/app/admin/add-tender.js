// pages/admin/add-tender.js

import React from 'react';
import Layout from '../../components/Layout';
import TenderForm from '../../components/TenderForm';

const AddTender = () => {
  const handleAddTender = (tenderDetails) => {
    // Handle adding tender details (e.g., send data to the server)
    console.log('Added Tender:', tenderDetails);
  };

  return (
    <Layout>
      <h1>Add Tender</h1>
      <TenderForm onSubmit={handleAddTender} />
    </Layout>
  );
};

export default AddTender;
