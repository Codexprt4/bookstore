export const addAuthor = (id, name) => ({
  type: "ADD_AUTHOR",
  payload: {
    id,
    name,
  },
});

export const removeAuthor = (id) => ({
  type: "REMOVE_AUTHOR",
  payload: {
    id,
  },
});
export const updateAuthor = (index, name) => ({
  type: "EDIT_AUTHOR",
  payload: {
    index,
    name,
  },
});
