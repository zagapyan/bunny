import React, { Component }from 'react'
import ListComponent from '../ListComponent'

// class HomeComponentDesktop extends Component{
//   render(){
//     return(
//       <Object.keys(this.props.items).map(key =>{
//           // console.log(this.props);
//           return <ListComponent
//             key={key}
//             items={this.props.items[key]}
//             name={key.replace('Items','')}
//             fetchStatus={this.props.fetchStatus}
//             />
//         }
//     )
//   }
// };

const HomeComponentDesktop  = (props)=>  
  <h1>I am Desktop</h1>

  export default HomeComponentDesktop;