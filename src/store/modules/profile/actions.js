import Types from './types';

export function setCard(card) {
  return {
    type: Types.ADD_CARD,
    card,
  };
}

export function getRequest() {
  return {
    type: Types.GET_REQUEST,
  };
}

export function getSuccess(profile) {
  return {
    type: Types.GET_SUCCESS,
    payload: { profile },
  };
}

export function updateRequest(profile) {
  return {
    type: Types.UPDATE_REQUEST,
    payload: { profile },
  };
}

export function updateSuccess(profile) {
  return {
    type: Types.UPDATE_SUCCESS,
    payload: { profile },
  };
}
