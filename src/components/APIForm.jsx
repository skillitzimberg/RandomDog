import React from 'react';
import PropTypes from 'prop-types';

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

export default APIForm;
