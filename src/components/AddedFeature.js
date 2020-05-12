import React from 'react';
// import { connect } from 'react-redux';

// import { addFeature } from '../actions/carActions'

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature

// const mapStateToProps = state => {
//   console.log({ state });
//   return {
//     state
//   }
// }

// export default connect(
//   mapStateToProps,
//   { addFeature }
// )(AddedFeature)
// ;

