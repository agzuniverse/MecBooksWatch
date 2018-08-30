import {
  TEST,
  SET_UID,
  SET_NAME,
  SET_EMAIL,
  SET_PROPIC,
  SEARCH_STRING,
  YEARFILTER,
  BRANCHFILTER
} from "./Actions";

export const testRedux = text => ({
  type: TEST,
  text
});

export const setGlobalUid = uid => ({
  type: SET_UID,
  uid
});

export const setGlobalName = name => ({
  type: SET_NAME,
  name
});

export const setGlobalEmail = email => ({
  type: SET_EMAIL,
  email
});

export const setGlobalProPic = propic => ({
  type: SET_PROPIC,
  propic
});

export const searchString = query => ({
  type: SEARCH_STRING,
  query
});

export const setYearFilter = year => ({
  type: YEARFILTER,
  year
});

export const setBranchFilter = branch => ({
  type: BRANCHFILTER,
  branch
});
