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
  }
]

class HomeComponent extends Component{
  constructor(props){
    super(props);
  }
  null
  componentDidMount(){
    endpoints.map(o=>this.props.fetchFeeds(o.url, o.name))
  }
  render(){
    let iterateListComponent = Object.keys(this.props.items).map(key =>
      <ListComponent value={key} items={this.props.items[key]} name={key} />
    )

    return(
      <div className="HomeComponent">
        <HeaderComponent />
        <div className="ListBodyComponent">
          {iterateListComponent}
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
    name: state.domainReducer.name
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
  items: PropTypes.array
}
ListComponent.defaultProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(HomeComponent);
