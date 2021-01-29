import React from 'react';
import { Modal } from '@uikit/modal';
import CheckBox from '@uikit/checkbox';

const CustomModal = ({ column, setColumn, name }) => {
  const handleAllChecked = (event) => {
    let newCheckBox = [...column];
    newCheckBox.forEach((data) => (data.isChecked = event.target.checked));
    setColumn(newCheckBox);
  };

  const handleCheckChieldElement = (event, index) => {
    let newCheckBox = [...column];
    newCheckBox[index].isChecked = event.target.checked;
    setColumn(newCheckBox);
  };

  return (
    <Modal style={{ height: 200 }} height={200} name={name}>
      <input
        data-testid="check-all"
        type="checkbox"
        onClick={handleAllChecked}
        value="checkedall"
      />{' '}
      Check or Uncheck All
      {column &&
        column.map((data, index) => {
          return (
            <ul style={{listStyleType: 'none'}}>
              <CheckBox
                key={index}
                handleCheckChieldElement={(e) =>
                  handleCheckChieldElement(e, index)
                }
                {...data}
              />
            </ul>
          );
        })}
    </Modal>
  );
};

export default CustomModal;
