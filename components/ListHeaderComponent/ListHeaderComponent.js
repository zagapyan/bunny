import React from 'react'
import PropTypes from 'prop-types'
import styles from './ListHeaderComponent.css'

const ListHeaderComponent = ({props}) => (
  <div className="ListHeaderComponent">
    <h5>
      <a href={props.homepage} target="_blank" link="noopener">
        <span className="header-drop-cap">{props.name[0]}</span>
        <span className="header-title">{props.name}</span>
      </a>
    </h5>
  </div>
);

ListHeaderComponent.propTypes = {}

ListHeaderComponent.defaultProps = {}

export default ListHeaderComponent