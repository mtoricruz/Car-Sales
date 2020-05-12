import React from 'react';
import { connect } from 'react-redux';

import { removeFeature } from '../actions/carActions'



const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => props.removeFeature(props.feature.id)} className="button">X</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// export default AddedFeature



const mapStateToProps = state => {
  console.log({ state });
  return {
    state
  }
}

export default connect(
  mapStateToProps,
  { removeFeature }
)(AddedFeature)
;

