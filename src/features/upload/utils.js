export const readFile = (e, setFetching, setError) => {
  return new Promise((resolve, reject) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.onload = (evt) => {
        setFetching(true);
        const csvData = evt.target.result;
        const lines = csvData.split("\n").map((line) => {
          return line.split(",");
        });

        if (!lines) {
          reject("Something went wrong!!");
          setError("No data! Please make sure your data");
        }
        resolve(lines);
      };
      reader.readAsText(file);
      reader.onerror = () => {
        setError(`Error to read file! ${reader.error}`);
        reader.abort();
      };
    }
  });
};

export const modifyColumnToHaveChecked = (result) => {
  const column = [];

  result[0].map((data, index) => {
    column.push({ index, name: data, isChecked: false });
  });

  return column;
};
