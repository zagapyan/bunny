import {
  SCREEN_RESIZE,
  SWIPER_STATE
} from '../actions/clientActions';

const initialState = {
  screenWidth: typeof window === 'object' ? window.innerWidth : null,
  swiperActive: true
};

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case SCREEN_RESIZE:
      return {
        ...state,
        screenWidth: action.screenWidth
      }
    case SWIPER_STATE:
      return{
        ...state,
        swiperActive: action.swiperActive
      }
    default:
      return state;
  }
}