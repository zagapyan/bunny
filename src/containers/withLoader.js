import React from 'react'

const withLoader = (testProps) =>
  (TrueComponent, FalseComponent) =>
    testProps ? TrueComponent : FalseComponent;



export default withLoader;