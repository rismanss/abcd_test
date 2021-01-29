import React from "react";
import { readFile, modifyColumnToHaveChecked } from "./utils";

const Upload = ({ setData, setLoaded, setFetching, setError, setColumn }) => {
  // handle file upload
  const handleFileUpload = (e) => {
    readFile(e, setFetching, setError).then((result) => {
      setData(result);
      setColumn(modifyColumnToHaveChecked(result))
      setLoaded(true);
    });
  };

  return (
    <div>
      <input data-testid='file-upload' type="file" accept="text/csv" onChange={handleFileUpload} />
    </div>
  );
};

export default Upload;
