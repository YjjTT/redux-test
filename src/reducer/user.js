import * as userConstants from '../constants/user'

export default function(state = {}, action) {
  switch (action.type){
    case userConstants.USER_LOGIN: {
      return {
        ...state,
        ...action.payload,
        isLogin: true,
      }
    }
    case userConstants.USER_LOGOUT: {
      return {
        isLogin: false,
      }
    }

    case userConstants.USER_UPDATE: {
      return {
        ...state,
        ...action.payload,
      }
    }
    default: {
      return state
    }
  }
}