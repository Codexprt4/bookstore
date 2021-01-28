const defaultState = {
  author: [],
};

const authorReducer = (state = defaultState, action) => {
  // console.log(action.payload.id);
  switch (action.type) {
    case "ADD_AUTHOR": {
      return {
        ...state,
        author: [
          ...state.author,
          { id: state.author.length, name: action.payload.name },
        ],
      };
    }
    case "REMOVE_AUTHOR": {
      return {
        ...state,
        author: state.author.filter((item) => item.id !== action.payload.id),
      };
    }
    case "EDIT_AUTHOR": {
      const UpdateAuthor = state.author;
      UpdateAuthor[action.payload.index].name = action.payload.name;
      // console.log(UpdateCategory);
      return {
        ...state,
        author: [...UpdateAuthor],
      };
    }

    default:
      return state;
  }
};
export default authorReducer;
