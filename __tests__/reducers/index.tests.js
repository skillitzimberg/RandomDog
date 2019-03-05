import constants from "./../../src/constants";
import setImageUrlReducer from './../../src/reducers/setImageUrlReducer';
import { createStore } from 'redux';

describe("dogsAPI", () => {
  const {initialState, types} = constants;
  const store = createStore(setImageUrlReducer, initialState);

  describe("setImageUrlReducer", () => {
    it("should accept and return initial state", () => {
      expect(setImageUrlReducer(initialState.imageURL, { type: null })).toEqual(initialState.imageURL);
    });

    it("should")

  });
});
