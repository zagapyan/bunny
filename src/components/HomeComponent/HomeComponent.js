import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import "./HomeComponent.css";
import HomeComponentMobile from "./HomeComponentMobile";
import HomeComponentDesktop from "./HomeComponentDesktop";
import withMediaScreenDetector from "../../containers/withMediaScreenDetector";
import * as domainActions from "../../actions/domainActions";
import * as clientActions from "../../actions/clientActions";

const endpoints = [
  {
    url: "https://www.producthunt.com/feed?category=undefined",
    name: "ProductHunt",
    homepage: "https://www.producthunt.com",
  },
  {
    url: "https://news.ycombinator.com/rss",
    name: "HackerNews",
    homepage: "https://news.ycombinator.com",
  },
  {
    url: "https://www.designernews.co/?format=rss",
    name: "DesignerNews",
    homepage: "https://www.designernews.co",
  },
  {
    url: "https://frontendfront.com/feed/stories",
    name: "FrontEndFront",
    homepage: "http://www.frontendfront.com/",
  },
  {
    url: "http://www.echojs.com/rss",
    name: "EchoJS",
    homepage: "http://www.echojs.com/",
  },
  {
    url: "https://lobste.rs/rss",
    name: "Lobsters",
    homepage: "https://lobste.rs/",
  },
];

class HomeComponent extends Component {
  componentDidMount() {
    // endpoints.map(o=>this.props.fetchFeeds(o.url, o.name, o.homepage))
    this.props.checkSwiperActive(this.props.screenWidth);
  }
  componentWillReceiveProps(nextProps) {
    // if new feeds
    if (nextProps.fetchFeeds !== this.props.fetchFeeds) {
      console.log(nextProps.fetchFeeds);
    }
    // if screen size changes
    if (nextProps.screenWidth !== this.props.screenWidth) {
      this.props.checkSwiperActive(this.props.screenWidth);
    }
  }
  render() {
    return (
      <div className="HomeComponent">
        <div className="header-container">
          <h1>Bunny News</h1>
        </div>
        <div
          className={`ListBodyComponent ${
            this.props.swiperActive ? "is-mobile" : "is-desktop"
          }`}
        >
          {withMediaScreenDetector(this.props, this.props.swiperActive)(
            HomeComponentMobile,
            HomeComponentDesktop
          )}
        </div>
      </div>
    );
  }
}

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
    endpoints: endpoints,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...clientActions,
      ...domainActions,
    },
    dispatch
  );
}

HomeComponent.propTypes = {
  fetchFeeds: PropTypes.func,
  fetchStatus: PropTypes.shape({
    ProductHuntIsFetching: PropTypes.bool,
    ProductHuntIsRejected: PropTypes.bool,
    HackerNewsIsFetching: PropTypes.bool,
    HackerNewsIsRejected: PropTypes.bool,
    DesignerNewsIsFetching: PropTypes.bool,
    DesignerNewsIsRejected: PropTypes.bool,
    EchoJSIsFetching: PropTypes.bool,
    EchoJSIsRejected: PropTypes.bool,
  }),
  items: PropTypes.array,
  screenWidth: PropTypes.number,
  swiperActive: PropTypes.bool,
};
HomeComponent.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
