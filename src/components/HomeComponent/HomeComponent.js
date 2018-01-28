import React, { Component }from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import styles from './HomeComponent.css'
import HeaderComponent from '../HeaderComponent'
import ListComponent from '../ListComponent'
import HomeComponentMobile from './HomeComponentMobile'
import HomeComponentDesktop from './HomeComponentDesktop'

import * as domainActions from '../../actions/domainActions'
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
    this.props.checkSwiperActive(this.props.screenWidth);
  }
  componentWillReceiveProps(nextProps){
    // if new feeds
    if(nextProps.fetchFeeds !== this.props.fetchFeeds){
      console.log(nextProps.fetchFeeds);
    }
    // if screen size changes
    if(nextProps.screenWidth !== this.props.screenWidth){
      this.props.checkSwiperActive(this.props.screenWidth);
    }
  }
  render(){
    const mediaScreenType = props =>{
      if(!!props.swiperActive)
        return <HomeComponentMobile props={props}/>
      else
        return <HomeComponentDesktop props={props}/>
    };

    return(
      <div className="HomeComponent">
        <div className={`ListBodyComponent ${this.props.swiperActive ? 'is-mobile' : 'is-desktop'}`}>
          { mediaScreenType(this.props) }
        </div>
      </div>
    )
  }
};

// export default HomeComponent;
function mapStateToProps(state) {
  return {
    screenWidth: state.clientReducer.screenWidth,
    swiperActive: state.clientReducer.swiperActive,
    checkSwiperActive: clientActions.checkSwiperActive,
    fetchFeeds: domainActions.fetchFeeds,
    items: state.domainReducer.items,
    name: state.domainReducer.name,
    fetchStatus: state.domainReducer.fetchStatus,
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
  screenWidth: PropTypes.number,
  swiperActive: PropTypes.bool
}
ListComponent.defaultProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(HomeComponent);
