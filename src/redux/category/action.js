export const addCategory = (id, name) => ({
  type: "ADD_CATEGORY",
  payload: {
    id,
    name,
  },
});

export const removeCategory = (id) => ({
  type: "REMOVE_CATEGORY",
  payload: {
    id,
  },
});
export const updateCategory = (index, name) => ({
  type: "EDIT_CATEGORY",
  payload: {
    index,
    name,
  },
});
