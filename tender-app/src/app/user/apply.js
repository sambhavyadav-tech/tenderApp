// pages/user/apply.js

import React from 'react';
import Layout from '../../components/Layout';
import ApplyForm from '../../components/ApplyForm';

const Apply = () => {
  const handleApply = (applicationDetails) => {
    // Handle user application details (e.g., send data to the server)
    console.log('User Applied:', applicationDetails);
  };

  return (
    <Layout>
      <h1>Apply for Tender</h1>
      <ApplyForm onSubmit={handleApply} />
    </Layout>
  );
};

export default Apply;
