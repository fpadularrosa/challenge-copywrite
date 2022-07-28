import GET_TEXT from './constants'
import axios from 'axios'

const getText = (input) => {
  return async (dispatch) => {
    try {
      const text = await axios.get(`/reverse?text=${input}`)
      if (text.data) dispatch({ type: GET_TEXT, payload: text.data })
    } catch (error) {
      console.error(error.message)
    };
  }
}

export default getText
