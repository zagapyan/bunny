import { 
  RECEIVE_FEEDS,
  REQUEST_FEEDS,
  REJECT_FEEDS
} from '../actions/domainActions';

import * as domainActions from '../actions/domainActions'

// console.log(domainActions);
const initialState={
  items: {},
  fetchStatus: {}
}

export default function postsReducer(state=initialState, action) {
  switch (action.type) {
    // receiving dynamic keyhash variables to dispatch actions to reducers
    case(RECEIVE_FEEDS):
      return{
        ...state,
        [`${action.name}Homepage`]: action[`${action.name}Homepage`],
        items: {
          ...state.items,
          [`${action.name}Items`]: action[`${action.name}Items`]
        },
        fetchStatus: Object.assign({},
          state.fetchStatus, {
          [`${action.name}IsFetching`]: action[`${action.name}IsFetching`],
          [`${action.name}IsRejected`]: action[`${action.name}IsRejected`]
        }),
      }
    case(REQUEST_FEEDS):
    return{
        ...state,
        fetchStatus: Object.assign({}, state.fetchStatus, {
          [`${action.name}IsFetching`]: action[`${action.name}IsFetching`],
          [`${action.name}IsRejected`]: action[`${action.name}IsRejected`]
        }),
      }
    case(REJECT_FEEDS):
      return{
        ...state,
        fetchStatus: Object.assign({}, state.fetchStatus, {
          [`${action.name}IsFetching`]: action[`${action.name}IsFetching`],
          [`${action.name}IsRejected`]: action[`${action.name}IsRejected`]
        }),
        errorMessage: action.errorMessage
      }
    default:
      return state;
  }
}