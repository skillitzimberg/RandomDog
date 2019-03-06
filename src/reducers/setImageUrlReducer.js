import constants from './../constants';
const { initialState, types } = constants;

const setImageUrlReducer = (state = { imageUrl: '' }, action) => {
  let newImageUrl;

  switch (action.type) {
    case types.SET_IMAGE_URL:
      console.log("SET_IMAGE_URL triggered")
      return Object.assign({}, state, {imageUrl: action.newUrl});

    default:
      return state;
  }
}

export default setImageUrlReducer;
