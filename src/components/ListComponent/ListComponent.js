import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ScaleLoader } from 'react-spinners'
import styles from './ListComponent.css'
import withLoader from '../../containers/withLoader';
import ListHeaderComponent from '../ListHeaderComponent'
import FeedsListComponent from '../FeedsListComponent';
import * as domainActions from '../../actions/domainActions'
import * as clientActions from '../../actions/clientActions'

class ListComponent extends Component {
  constructor(props) {
    super(props)
  }
  null
  componentDidMount() {
    this.props.fetchFeeds(this.props.url, this.props.name, this.props.homepage)
  }
  componentWillReceiveProps(nextProps) { }
  render() {
    let isCurrentlyFetching =
      this.props.fetchStatus
      && !this.props.fetchStatus[`${this.props.name}IsFetching`]

    return (
      <div className={`ListComponent ${this.props.name.toLowerCase()}`}>
        <ListHeaderComponent props={this.props} />
        {withLoader(isCurrentlyFetching)
          (<FeedsListComponent props={this.props} />,
            () =>
              (<ul className="FeedsList loading">
                <li>
                  <ScaleLoader color="#545454" />
                </li>
              </ul>)
          )
        }
      </div>
    );
  }
}

export default ListComponent;