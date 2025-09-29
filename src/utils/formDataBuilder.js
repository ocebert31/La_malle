// export const formDataBuilder = (data) => {
//     const dataForm = new FormData();
//     Object.entries(data).forEach(([key, value]) => dataForm.append(key, value));
//     return dataForm
// }

export const formDataBuilder = (data) => {
  const dataForm = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((v) => dataForm.append(`${key}[]`, v));
    } else {
      dataForm.append(key, value);
    }
  });
  return dataForm;
};
