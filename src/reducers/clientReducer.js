import {
  LOADED_CLIENT
} from '../actions/clientActions';

const initialState={
  authState: 'default'
}

export default function clientReducer(state=initialState, action) {
  switch (action.type) {
    case LOADED_CLIENT:
      return{
        ...state,
        authState: action.authState
      }
    default:
      return state;
  }
}
