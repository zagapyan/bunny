import React from 'react'
import PropTypes from 'prop-types'
import { ScaleLoader } from 'react-spinners'
import styles from './LoadingListComponent.css'

const LoadingListComponent = ({}) => (
  <ul className="LoadingListComponent loading">
    <li>
      <ScaleLoader color="#545454" />
    </li>
  </ul>
);

LoadingListComponent.propTypes = {}

LoadingListComponent.defaultProps = {}

export default LoadingListComponent
