import React from 'react'

// import Avatar from "@material-ui/core/Avatar";
import { db } from './firebase';
import firebase from "firebase";
import likebutton from './LikeButton.css'

class LikeButton extends React.Component {
    constructor() {
    super();
      this.state = {
        liked: false
      };
      this.handleClick = this.handleClick.bind(this);
    } 
    
    handleClick() {
      this.setState({
        liked: !this.state.liked
      });
    }
    
    render() {
      const text = this.state.liked ? 'liked' : 'haven\'t liked';
      const label = this.state.liked ? 'Unlike' : 'Like'
      return (
        <div className="customContainer">
          <button className="btn-primary" onClick={this.handleClick}>
            {label}</button>
          <p>
            you {text} this
          </p>
        </div>
      );
    }
  }
  
//   ReactDOM.render(
//     ,
//     document.getElementById('example')
//   )

    export default LikeButton



