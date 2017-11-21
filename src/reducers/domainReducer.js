import { 
  REQUEST_FEEDS,
  RECEIVE_FEEDS,
  REJECT_FEEDS
} from '../actions/domainActions';

const initialState={
  posts: []
}

export default function postsReducer(state=initialState, action) {
  switch (action.type) {
    case(REQUEST_FEEDS):
      return{
        fetching: action.fetching,
        rejected: action.rejected
      }
    case(RECEIVE_FEEDS):
      return{
        fetching: action.fetching,
        rejected: action.rejected,
        items: action.items
      }
    case(REJECT_FEEDS):
      return{
        fetching: action.fetching,
        rejected: action.rejected,
        items: action.items
      }
    default:
      return state;
  }
}