import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ScaleLoader } from 'react-spinners'
import styles from './ListComponent.css'
import * as domainActions from '../../actions/domainActions'
import * as clientActions from '../../actions/clientActions'

class ListComponent extends Component {
  constructor(props) {
      super(props)
  }
  null
  componentDidMount(){
    this.props.fetchFeeds(this.props.url, this.props.name, this.props.homepage)
  }
  componentWillReceiveProps(nextProps){}
  render() {
    let isCurrentlyFetching =
      this.props.fetchStatus
      && !this.props.fetchStatus[`${this.props.name}IsFetching`]
      
    let ListItems =
      <ul className="FeedsList">{
        this.props.items[`${this.props.name}Items`]
          ? this.props.items[`${this.props.name}Items`].map((o,k)=>
            <li key={k}><a href={o.link} target="_blank" rel="noopener">
              <span className="item-count">{k+1}</span>
              <span className="item-body">{o.title}</span>
            </a></li>)
          : 'false'
      }</ul> 
    return (
      <div className={`ListComponent ${this.props.name.toLowerCase()}`}>
        <div className="list-header">
            <h5>
              <a href={this.props.homepage} target="_blank" link="noopener">
                <span className="header-drop-cap">{this.props.name[0]}</span>
                <span className="header-title">{this.props.name}</span>
              </a>
          </h5>
        </div>
        { isCurrentlyFetching
          ? ListItems 
          : <ul className="FeedsList loading"><li><ScaleLoader color="#545454" /></li></ul>
        }
      </div>
    );
  }
}

export default  ListComponent;