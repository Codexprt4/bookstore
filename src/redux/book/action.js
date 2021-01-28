export const addBook = (bookData) => ({
  type: "ADD_BOOK",
  payload: bookData,
});

export const removeBook = (id) => ({
  type: "REMOVE_BOOK",
  payload: {
    id,
  },
});
export const updateBook = (bookData) => ({
  type: "EDIT_BOOK",
  payload: bookData,
});
