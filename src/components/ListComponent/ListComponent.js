import React, { Component } from "react";
import "./ListComponent.css";
import withLoader from "../../containers/withLoader";
import ListHeaderComponent from "../ListHeaderComponent";
import LoadingListComponent from "../LoadingListComponent";
import FeedsListComponent from "../FeedsListComponent";

class ListComponent extends Component {
  componentDidMount() {
    this.props.fetchFeeds(
      this.props.url,
      this.props.name,
      this.props.homepage
    );
  }
  componentWillReceiveProps() {}
  render() {
    let isCurrentlyFetching =
      this.props.fetchStatus &&
      !this.props.fetchStatus[`${this.props.name}IsFetching`];

    return (
      <div className={`ListComponent ${this.props.name.toLowerCase()}`}>
        <ListHeaderComponent props={this.props} />
        {withLoader(isCurrentlyFetching, this.props)(
          FeedsListComponent,
          LoadingListComponent
        )}
      </div>
    );
  }
}

export default ListComponent;
