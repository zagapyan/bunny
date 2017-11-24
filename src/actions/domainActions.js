/*
* ==========
* ACTIONS
* ==========
*/

export const FETCH_FEEDS = 'FETCH_FEEDS';
export function fetchFeeds(endpoint, name){
  return dispatch =>{
    dispatch(requestFeeds(name));
    let rssToJSONEndpoint = `https://api.rss2json.com/v1/api.json?rss_url=${endpoint}`;

    return fetch(rssToJSONEndpoint).then(
        response => response.json(),
        err => console.log(err)
      )
      .then(json=>{
        return dispatch(receiveFeeds(json.items, name))
      })
  }
}

export const REQUEST_FEEDS = 'REQUEST_FEEDS';
export function requestFeeds(name){
  return{
    type: REQUEST_FEEDS,
    [`${name}Fetching`]: true,
    [`${name}Rejected`]: false
  }
}


export const RECEIVE_FEEDS = 'RECEIVE_FEEDS';

export function receiveFeeds(items, name){
  // sending dynamic keyhash variables to dispatch actions to reducers
  return{
    type: `RECEIVE_FEEDS`,
    name,
    [`${name}Fetching`]: false,
    [`${name}Rejected`]: false,
    [`${name}Items`]: items
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


// export const RECEIVE_FEEDS = 'RECEIVE_FEEDS';
// export function receiveFeeds(items, name){
//   switch(name){
//     case('ProductHunt'):
//       console.log('ProductHunt',name)
//       return{
//         type: RECEIVE_FEEDS,
//         fetching: false,
//         rejected: false,
//         name: name,
//         ProductHuntItems: items
//       }
//     case('HackerNews'):
//       console.log('HackerNews',name)
//       return{
//         type: RECEIVE_FEEDS,
//         fetching: false,
//         rejected: false,
//         name: name,
//         HackerNewsItems: items
//       }
//     case('DesignerNews'):
//       console.log('DesignerNews',name)
//       return{
//         type: RECEIVE_FEEDS,
//         fetching: false,
//         rejected: false,
//         name: name,
//         DesignerNewsItems: items
//       }
//     case('EchoJS'):
//       console.log('EchoJS',name)
//       return{
//         type: RECEIVE_FEEDS,
//         fetching: false,
//         rejected: false,
//         name: name,
//         EchoJSItems: items
//       }
//     default:
//       console.log('default', name)
//       return{

//       }
//   }
// }