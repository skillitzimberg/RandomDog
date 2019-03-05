import React from 'react';
import APIForm from './APIForm';
import DogImage from './DogImage';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      imageURL: ''
    };
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  handleFormSubmission(){
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

  render(){
    return (
      <div>
        <h1> Hello !!!</h1>
        <APIForm onFormSubmission = {this.handleFormSubmission}/>
        <DogImage imageURL={this.state.imageURL}/>
      </div>
    );

  }
}

export default App;
