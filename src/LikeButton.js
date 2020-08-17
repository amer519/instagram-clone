import React from 'react'

// import Avatar from "@material-ui/core/Avatar";
import { db } from './firebase';
import firebase from "firebase";
import likebutton from './LikeButton.css'

class LikeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 0};
      this.buttonClicked = this.buttonClicked.bind(this);
    }
    
    buttonClicked(event) {
      this.setState({value: this.state.value+1});
    }
    
    render() {
      return (
          <div>
          <div>{this.state.value}</div>
          <button onClick={this.buttonClicked}><i class='fa fa-heart'></i></button>
        </div>
      );
    }
  }
  


    export default LikeButton



