export const editListState = (list, id, name, value) => {
  return list.map((item) => {
    if (item.id === id) {
      if (name === 'checkbox' && !item.checkbox) {
        return {
          ...item,
          checkbox: true,
        };
      } else if (name === 'checkbox' && item.checkbox) {
        return { ...item, checkbox: false };
      }
      return { ...item, [name]: value };
    } else {
      return { ...item };
    }
  });
};

export const removeFromLists = (list, id) => {
  return list.filter((item) => item.id !== id);
};

export const getSelectedObj = (list, id) => {
  return list.find((item) => item.id === id);
};
