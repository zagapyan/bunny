/*
* ==========
* ACTIONS
* ==========
*/

export const FETCH_FEEDS = 'FETCH_FEEDS';
export function fetchFeeds(endpoint){
  return dispatch =>{
    dispatch(requestFeeds());
    let rssToJSONEndpoint = `https://api.rss2json.com/v1/api.json?rss_url=${endpoint}`;

    return fetch(rssToJSONEndpoint).then(
        response => response.json(),
        err => console.log(err)
      )
      .then(json=>{
        return dispatch(receiveFeeds(json.items))
      })
  }
}

export const REQUEST_FEEDS = 'REQUEST_FEEDS';
export function requestFeeds(items){
  return{
    type: REQUEST_FEEDS,
    fetching: true,
    rejected: false
  }
}

export const RECEIVE_FEEDS = 'RECEIVE_FEEDS';
export function receiveFeeds(items){
  return{
    type: RECEIVE_FEEDS,
    fetching: false,
    rejected: false,
    items: items
  }
}

export const REJECT_FEEDS = 'REJECT_FEEDS';
export function rejectFeeds(){
  return{
    type: REJECT_FEEDS,
    fetching: false,
    rejected: true,
    items: []
  }
}