import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newImageUrl } from './../actions';
import APIForm from './APIForm';
import DogImage from './DogImage';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      imageURL: ''
    };
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    this.randomImageApiCall = this.randomImageApiCall.bind(this);
  }

  randomImageApiCall() {
    let url = 'https://dog.ceo/api/breeds/image/random';
    fetch(url)
      .then(result => result.json())
      .then((result)=>{console.log(result);
      },
      (error) => {
        console.log(error);
      }
      );
  }

  handleFormSubmission(){
    this.randomImageApiCall();
  }

  componentDidMount() {
    console.log("mounted");
    this.randomImageApiCall();
  }

  render(){
    return (
      <div>
        <h1> Hello !!!</h1>
        <APIForm onFormSubmission = {this.handleFormSubmission}/>
        <DogImage />
      </div>
    );
  }
}

App.propTypes = {
  url: PropTypes.string
}

const mapStateToProps = state => {
  const url = state.imageURL;
}

export default connect(mapStateToProps)(App);
