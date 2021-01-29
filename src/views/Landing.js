import React from 'react';
import Layout from '@components/Layout';
import CustomTable from '@components/CustomTable';
import { AutoSizer } from 'react-virtualized';

const Landing = () => {
  return (
    <Layout title="landing">
      <h3>SCREEN 1</h3>
      <AutoSizer>
        {({ width }) => (
          <CustomTable name="table landing" height={400} width={width} />
        )}
      </AutoSizer>
    </Layout>
  );
};

export default Landing;
