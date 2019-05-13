import * as userConstants from '../constants/user';

const loginRequest = () => {
  return new Promise((resolve) => {
    window.setTimeout(()=>{
      resolve({
        isLogin: true,
        nickname: '李杨',
      })
    }, 3000)
  })
}

export const login = (payload) => {
  return async (dispatch) => {
    
    dispatch(update({loading: true}))

    const res = await loginRequest()
    dispatch(update({
      ...res,
      loading: false,
    }))
  }
  // return{
  //   type: userConstants.USER_LOGIN,
  //   payload,
  // }
}

export const logout = (payload) => {
  return {
    type: userConstants.USER_LOGOUT,
    payload,
  }
}

export const update = (payload) => {
  return {
    type: userConstants.USER_UPDATE,
    payload,
  }
}