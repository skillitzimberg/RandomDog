import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newImageUrl } from './../actions';
import APIForm from './APIForm';
import DogImage from './DogImage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.randomImageApiCall=this.randomImageApiCall.bind(this);
    this.handleFormSubmission=this.handleFormSubmission.bind(this);

    // console.log(props.imageUrl)
  }

  randomImageApiCall() {
    let url = 'https://dog.ceo/api/breeds/image/random';
    return fetch(url)
      .then(result => result.json())
      .then((result)=>{
        console.log('randomImageApiCall: ', result);
        return result;
        // const resultURL = result.message;
        // return resultURL;
      },
      (error) => {
        return error;
      }
      );
  }

  handleFormSubmission(){
    let result = this.randomImageApiCall();
    console.log('RESULT: ', result);
    // this.props.dispatch({type: "SET_IMAGE_URL", newUrl: 'www.learnhowtoprogram.com'})
  }

  // componentDidMount() {
  //   this.randomImageApiCall();
  // }

  render() {
    this.props.dispatch({type: "SET_IMAGE_URL", newUrl: 'www.learnhowtoprogram.com'})
    console.log("props:", this.props)
    return (
      <div>
        <h1> Hello !!!</h1>
        <h2>{this.props.imageUrl}</h2>
        <APIForm onFormSubmission = {this.handleFormSubmission}/>
        <DogImage />
      </div>
    );
  }

}

App.propTypes = {
  imageUrl: PropTypes.string
}

const mapStateToProps = state => {
  // console.log("from APP mapStateToProps: ", state)
  return {
    imageUrl: state.imageUrl
  }
}

export default connect(mapStateToProps)(App);
