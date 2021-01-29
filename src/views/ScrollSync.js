import React from "react";
import Layout from "@components/Layout";
import { ScrollSync } from 'react-virtualized';
import CustomTable from '@components/CustomTable';

const ScrollSyncView = () => {
  return (
    <Layout title="scroll-sync">
      <ScrollSync>
      {({ onScroll, scrollLeft, scrollTop }) => {
        return (
          <div className="Table">
            <h3>SCREEN 2</h3>
            <div className="LeftColumn" style={{ float: 'left' }}>
              <CustomTable isScrollSync onScroll={onScroll} name='table_1' />
            </div>
            <div className="RightColumn" style={{ float: 'left' }}>
              <CustomTable isScrollSync scrollLeft={scrollLeft} scrollTop={scrollTop} name='table_2' />
            </div>
          </div>
        );
      }}
    </ScrollSync>
    </Layout>
  );
};

export default ScrollSyncView;
