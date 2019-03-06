import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function APIForm(props){
  function handleSubmit(event){
    event.preventDefault();
    props.onFormSubmission();
  }

  return(
    <form onSubmit={handleSubmit}>
      <button type="submit">Click to get a dog breed !!</button>
    </form>
  );
}

APIForm.propTypes ={
  onFormSubmission: PropTypes.func
};

const mapStateToProps = state => {
  let compState = state;
  // console.log("STATE:", state)
  return {
    storeState: "compState"
  }
}

export default connect(mapStateToProps)(APIForm);
