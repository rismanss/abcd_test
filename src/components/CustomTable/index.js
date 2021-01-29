import React, { useState, useEffect } from 'react';
import Upload from '@features/upload';
import Table from '@features/table';
import { useModal } from '@uikit/modal';
import { Button } from '@uikit/Button';
import { Input } from '@uikit/Input';
import CustomModal from '@components/CustomModal';

const CustomTable = ({ onScroll, scrollLeft, scrollTop, name, isScrollSync, height, width }) => {
  const [data, setData] = useState(null);
  const [column, setColumn] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [isFetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  const [dataSearch, setDataSearch] = useState('');
  const [index, setIndex] = useState({ row: 0, column: 0 });

  const { openModal } = useModal();

  useEffect(() => {
    if (data && dataSearch) {
      const index = getIndexOfArray(data, dataSearch);
      if (index) {
        setIndex({ row: index[0], column: index[1] });
      }
    }
  }, [data, dataSearch]);

  const renderModal = (name) => {
    if (!column.length) {
      return null;
    }

    return (
      <CustomModal
        data={data}
        setData={setData}
        column={column}
        setColumn={setColumn}
        name={name}
      />
    );
  };

  const renderTable = () => {
    if (isFetching && !isLoaded) {
      return <div>Loading ...</div>;
    }

    if (!data && !isLoaded && !isFetching) {
      return <div style={{width: '500px'}}>No data yet here..</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    return (
      <Table
        column={column}
        data={data}
        onScroll={onScroll}
        scrollLeft={scrollLeft}
        scrollTop={scrollTop}
        height={height}
        width={width}
        search={dataSearch}
        index={isScrollSync ? null : index}
      />
    );
  };

  const handleSearch = (e) => {
    setDataSearch(e.target.value);
  };

  const getIndexOfArray = (arr, key) => {
    for (let i = 0; i < arr.length; i++) {
      const index = arr[i].indexOf(key);
      if (index > -1) {
        return [i, index];
      }
    }
  };

  return (
    <div>
      <Button
        onClick={() => {
          !column.length
            ? alert(`no data in ${name}, please upload file csv!`.toUpperCase())
            : openModal(name);
        }}
      >
        View
      </Button>
      {column.length > 0 && (
        <Input
          type="search"
          placeholder="search"
          value={dataSearch}
          onChange={handleSearch}
        />
      )}
      <Upload
        setError={setError}
        setColumn={setColumn}
        setLoaded={setLoaded}
        setFetching={setFetching}
        setData={setData}
      />
      {renderTable()}
      {renderModal(name)}
    </div>
  );
};

export default CustomTable;
