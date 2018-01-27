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
      return setTimeout(()=>dispatch(setMobileSwiper()), 500)
    } 
  }
  else{
    console.log('should be desktop')
    return dispatch =>{
      return setTimeout(()=>dispatch(setDesktopSwiper()), 500)
    }
  }
}

export function setDesktopSwiper(){
  return{
    type: SWIPER_STATE,
    swiperActive: false
  }
}

export function setMobileSwiper(){
  return{
    type: SWIPER_STATE,
    swiperActive: true
  }
}