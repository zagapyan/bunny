import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './NoMatchComponent.css'

class NoMatchComponent extends PureComponent {
    constructor(props) {
        super(props)
    }
    null
    render() {
        return (
            <div className="NoMatchComponent">404 Not Found</div>
        );
    }
}

NoMatchComponent.propTypes = {}

NoMatchComponent.defaultProps = {}

export default NoMatchComponent
