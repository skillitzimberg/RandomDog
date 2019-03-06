import constants from "./../../src/constants";
import setImageUrlReducer from './../../src/reducers/setImageUrlReducer';
import * as actions from './../../src/actions';
import { createStore } from 'redux';

describe("dogsAPI", () => {
  const {initialState, types} = constants;
  const store = createStore(setImageUrlReducer, initialState);

  describe("setImageUrlReducer", () => {
    it("should accept and return initial state", () => {
      expect(setImageUrlReducer(initialState.imageURL, { type: null })).toEqual(initialState.imageURL);
    });

    it("should update state when API call is returned", () => {
      const action = actions.newImageUrl('');
      const newStateEntry = {
        imageURL: action.url
      };
      expect(setImageUrlReducer(initialState.imageURL, actions.newImageUrl)).toEqual(newStateEntry.imageURL)
    });

  });
});
