import GET_TEXT from './constants'

const initialState = {
  texts: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEXT:
      return {
        ...state,
        texts: [...state.texts, action.payload]
      }
    default: return state
  }
}

export default reducer
