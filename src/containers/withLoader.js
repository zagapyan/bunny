import React from 'react'

const withLoader = (testProps, props) =>
  (TrueComponent, FalseComponent) =>
    testProps ? <TrueComponent props={props}/> : <FalseComponent />;

export default withLoader;