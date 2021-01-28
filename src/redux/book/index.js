//Category Reducer
const defaultState = {
  book: [],
};

// const bookReducer = () => bookReducerDefaultState;
// export default bookReducer;

const bookReducer = (state = defaultState, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case "ADD_BOOK": {
      return {
        ...state,
        book: [...state.book, { id: state.book.length, ...action.payload }],
      };
    }
    case "REMOVE_BOOK": {
      return {
        ...state,
        book: state.book.filter((item) => item.id !== action.payload.id),
      };
    }
    case "EDIT_BOOK": {
      const UpdateBook = state.book;
      UpdateBook[action.payload.id] = action.payload;
      // console.log(UpdateBook);
      return {
        ...state,
        book: [...UpdateBook],
      };
    }

    default:
      return state;
  }
};
export default bookReducer;
