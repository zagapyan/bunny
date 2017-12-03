import React, { Component }from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import styles from './HomeComponent.css'
import HeaderComponent from '../HeaderComponent';
import ListComponent from '../ListComponent'

import * as domainActions from '../../actions/domainActions';
import * as clientActions from '../../actions/clientActions'

const endpoints = [
  {
    url: 'https://www.producthunt.com/feed?category=undefined',
    name: 'ProductHunt'
  },
  {
    url: 'https://news.ycombinator.com/rss',
    name: 'HackerNews'
  },
  {
    url: 'https://www.designernews.co/?format=rss',
    name: 'DesignerNews'
  },
  {
    url: 'http://www.echojs.com/rss',
    name: 'EchoJS'
  },
]

class HomeComponent extends Component{
  constructor(props){
    super(props);
  }
  null
  componentDidMount(){
    endpoints.map(o=>this.props.fetchFeeds(o.url, o.name))
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.fetchFeeds !== this.props.fetchFeeds){
      console.log(nextProps.fetchFeeds);
    }
  }
  render(){
    const iterateListComponent = Object.keys(this.props.items).map(key =>
      {
        console.log(this.props);
        return <ListComponent
          key={key}
          items={this.props.items[key]}
          name={key.replace('Items','')}
          fetchStatus={this.props.fetchStatus}
          />
      }
    )
    return(
      <div className="HomeComponent">
        <HeaderComponent />
        <div className="ListBodyComponent">
          <div className="columns">
            {iterateListComponent}
          </div>
        </div>
      </div>
    )
  }
};

// export default HomeComponent;
function mapStateToProps(state) {
  return {
    fetchFeeds: domainActions.fetchFeeds,
    items: state.domainReducer.items,
    name: state.domainReducer.name,
    fetchStatus: state.domainReducer.fetchStatus
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...clientActions,
    ...domainActions
  }, dispatch);
}

ListComponent.propTypes = {
  fetchFeeds: PropTypes.func,
  items: PropTypes.array,
}
ListComponent.defaultProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(HomeComponent);
