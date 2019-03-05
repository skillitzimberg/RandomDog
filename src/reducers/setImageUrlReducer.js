import constants from './../constants';
const { initialState, types } = constants;

const setImageUrlReducer = (state = initialState.imageURL, action) => {
  switch (action.type) {
    case types.SET_IMAGE_URL:
      return action.newImageUrl;
    default:
      return state;
  }
}

export default setImageUrlReducer;
