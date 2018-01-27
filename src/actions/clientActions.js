export const SWIPER_STATE = 'SWIPER_STATE'
export const SCREEN_RESIZE = 'SCREEN_RESIZE'

export function screenResize(width) {
  return {
      type: SCREEN_RESIZE,
      screenWidth: width
  };
}

export function checkSwiperActive(windowWidth){
  if(windowWidth<768){
    console.log('should be mobile')
    return dispatch =>{
      return setTimeout(()=>
        dispatch(setMobileView()), 500)
    } 
  }
  else{
    console.log('should be desktop')
    return dispatch =>{
      return setTimeout(()=>
        dispatch(setDesktopView()), 500)
    }
  }
}

export function setDesktopView(){
  return{
    type: SWIPER_STATE,
    swiperActive: false
  }
}

export function setMobileView(){
  return{
    type: SWIPER_STATE,
    swiperActive: true
  }
}