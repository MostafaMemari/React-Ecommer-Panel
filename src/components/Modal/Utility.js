export const handleImageUpload = (event, setSelectedImage, setFieldValue) => {
  const file = event.currentTarget.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };
    reader.readAsDataURL(file);
    setFieldValue('image', file);
  }
};

export const handleImageRemove = (setSelectedImage, setFieldValue) => {
  setSelectedImage(null);
  setFieldValue('image', null);
};
