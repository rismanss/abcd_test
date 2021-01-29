import React from 'react';
import { render, screen, fireEvent } from "@utils/testUtils";
import { modifyColumnToHaveChecked } from '@features/upload/utils';
import Upload from '@features/upload';

describe('Funtion upload file csv', () => {
  it('should render a element input file csv', async () => {
    render(<Upload/>);
    expect(screen.getByTestId('file-upload')).toHaveAttribute('type', 'file');
    expect(screen.getByTestId('file-upload')).toHaveAttribute('accept', 'text/csv');
  });

  it('should clone result from file csv and update to new array', () => {
    const result = [
      ['name1.1', 'name1.2'],
      ['name2.1', 'name2.2'],
    ];

    expect(modifyColumnToHaveChecked(result)).toEqual([
      { name: 'name1.1', index: 0, isChecked: false },
      { name: 'name1.2', index: 1, isChecked: false },
    ]);
  });

  it('input method file upload', async () => {
    render(<Upload/>);

    const file = new File(['(⌐□_□)'], 'file.txt', { type: 'text/plain' });
    
    const handleFileUpload = jest.fn().mockImplementation(() => 
      Promise.resolve([['name1.1', 'name1.2'], ['name2.1', 'name2.2']])
    );

    fireEvent.change(screen.getByTestId('file-upload'), {
      target: {files: [file]}
    });

    expect(screen.getByTestId('file-upload').files[0]).toStrictEqual(file);
    expect(screen.getByTestId('file-upload').files).toHaveLength(1);
  })
});
