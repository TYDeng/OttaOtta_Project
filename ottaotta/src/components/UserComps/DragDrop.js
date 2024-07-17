// useDragAndDrop.js
import { useState } from 'react';

const useDragAndDrop = () => {
  const [file, setFile] = useState(null);  // State to hold the file

  const onDragOver = (e) => {
    e.preventDefault();  // Prevent the default behavior to allow for dropping
  };

  const onDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);  // Set the file when dropped
    }
  };

  return {
    file,
    setFile,  // Make sure to return setFile here
    onDragOver,
    onDrop
  };
};

export default useDragAndDrop;
