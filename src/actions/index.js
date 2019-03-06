import * as types from "./../constants/ActionTypes";

export const newImageUrl = (url) => ({
  type: types.SET_IMAGE_URL,
  url
});
