import React from 'react';

const withMediaScreenDetector = (props, test) =>{
  return (TrueComponent, FalseComponent) => 
    !!props[test]
      ? <TrueComponent props={props}/>
      : <FalseComponent props={props}/>
};

export default withMediaScreenDetector;