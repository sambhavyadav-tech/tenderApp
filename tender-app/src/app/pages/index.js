// pages/index.js

import React from 'react';
import Layout from '../components/Layout';
import TenderList from '../components/TenderList';

const Home = ({ tenders }) => {
  return (
    <Layout>
      <h1>Welcome to Tender App</h1>
      <TenderList tenders={tenders} />
    </Layout>
  );
};

// Fetch tenders data from a backend or API
export async function getServerSideProps() {
  // For simplicity, we'll use dummy data here
  const tenders = [
    { title: 'Tender 1', description: 'Description for Tender 1', deadline: '2022-12-31' },
    { title: 'Tender 2', description: 'Description for Tender 2', deadline: '2022-11-30' },
  ];

  return {
    props: {
      tenders,
    },
  };
}

export default Home;
