import { 
  RECEIVE_FEEDS,
  REJECT_FEEDS
} from '../actions/domainActions';

const initialState={
  items: {}
}

export default function postsReducer(state=initialState, action) {
  switch (action.type) {
    // receiving dynamic keyhash variables to dispatch actions to reducers
    case(RECEIVE_FEEDS):
      return{
        ...state,
        [`${action.name}Fetching`]: false,
        [`${action.name}Rejected`]: true,
        items: {
          ...state.items,
          [`${action.name}Items`]: action[`${action.name}Items`]
        },
        name: [`${action.name}`]
      }
    case(REJECT_FEEDS):
      return{
        ...state,
        fetching: action.fetching,
        rejected: action.rejected,
        items: action.items
      }
    default:
      return state;
  }
}