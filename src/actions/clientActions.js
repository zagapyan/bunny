// import * as postsUtil from '../utils/postsUtil';
export const LOADED_CLIENT = 'LOADED_CLIENT';
export function setAppClientState (authState) {
  return {
    type: LOADED_CLIENT,
    authState
  }
}