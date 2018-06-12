import { TEST, SET_UID, SET_NAME, SET_EMAIL, SET_PROPIC, SEARCH_STRING, SEMFILTER, BRANCHFILTER } from './Reducers';

export function testRedux(text){
    return {
        type: TEST,
        text
    }
}

export function setGlobalUid(uid){
    return {
        type: SET_UID,
        uid
    }
}

export function setGlobalName(name){
    return {
        type: SET_NAME,
        name
    }
}

export function setGlobalEmail(email){
    return {
        type: SET_EMAIL,
        email
    }
}

export function setGlobalProPic(propic){
    return {
        type: SET_UID,
        propic
    }
}

export function searchString(query){
    return {
        type: SET_UID,
        query
    }
}

export function setSemFilter(sem){
    return {
        type: SET_UID,
        sem
    }
}

export function setBranchFilter(branch){
    return {
        type: SET_UID,
        branch
    }
}
