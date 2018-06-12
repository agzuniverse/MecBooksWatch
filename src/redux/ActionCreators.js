import { TEST, SET_UID, SET_NAME, SET_EMAIL, SET_PROPIC, SEARCH_STRING, SEMFILTER, BRANCHFILTER } from './Actions';

export const testRedux = (text) => {
    return {
        type: TEST,
        text
    }
}

export const setGlobalUid = (uid) => {
    return {
        type: SET_UID,
        uid
    }
}

export const setGlobalName = (name) => {
    return {
        type: SET_NAME,
        name
    }
}

export const setGlobalEmail = (email) => {
    return {
        type: SET_EMAIL,
        email
    }
}

export const setGlobalProPic = (propic) => {
    return {
        type: SET_UID,
        propic
    }
}

export const searchString = (query) => {
    return {
        type: SET_UID,
        query
    }
}

export const setSemFilter = (sem) => {
    return {
        type: SET_UID,
        sem
    }
}

export const setBranchFilter = (branch) => {
    return {
        type: SET_UID,
        branch
    }
}
