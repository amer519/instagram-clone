import React, { useState, useEffect } from 'react';
import './Post.css';
import Avatar from "@material-ui/core/Avatar";
import { db } from './firebase';
import firebase from "firebase";
import LikeButton from './LikeButton'

function Post({postId, user, username, caption, imageUrl}) {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    //likes
    // const [likes, setLikes] = useState(0);

    useEffect(() => {
        let unsubscribe;
        if (postId) {
            unsubscribe = db
            .collection('posts')
            .doc(postId)
            .collection('comments')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => {
                setComments(snapshot.docs.map((doc) => doc.data()));
            });
        }
        return () => {
            unsubscribe();
        };
    }, [postId]);

    const postComment = (event) => {
        event.preventDefault();

        db.collection('posts').doc(postId).collection('comments').add({
            text: comment,
            username: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp() 
        });
        setComment('');
    }
    // DELETING POST
    const onDelete = () => {
    db.collection("posts").doc(postId).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}

    //Liking Post

    // const onLike = () => {
    //     db.collection("posts").doc(postId);
    //     return onLike.update({
    //         let newCount = count + 1
    //         setLikes({
    //         count: newCount
    // })  
    //     })   
    // }
    // useEffect(() => {
    //     let unsubscribe;
    //     if (postId) {
    //         unsubscribe = db
    //         .collection('posts')
    //         .doc(postId)
    //         .collection('likes')
    //         .orderBy('timestamp', 'desc')
    //         .onSnapshot((snapshot) => {
    //             setLikes(snapshot.docs.map((doc) => doc.data()));
    //         });
    //     }
    //     return () => {
    //         unsubscribe();
    //     };
    // }, [postId]);

    


    
    

    return (
        <div className="post">
            <div className='post__header'>
            <Avatar 
                className='post__avatar'
                alt={username}
                src="/static/images/avatar/1.jpg"
                />
            <h3>{username}</h3>
        </div>
            <img className="post__image" src={imageUrl}
            alt=""
            />
            
        
            <h4 className='post__text'><strong>{username}</strong> {caption}</h4>

            <div className='post__comments'>

                {comments.map((comment) => (
                    <p>
                        <strong>{comment.username}</strong> {comment.text}
                    </p>
                ))}
            </div>

            {user && (
                <form className='post__commentBox'>
                <input
                    className='post__input'
                    type='text'
                    placeholder='Add comment...'
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    />
                <button 
                    className='post__button'
                    disabled={!comment}
                    type='submit'
                    onClick={postComment}
                    >
                    Post
                    </button>
            </form>
            )}

            {/* DELETE BUTTON */}
            <div className='post__delete'>
                <button onClick={() => {onDelete(postId) }}><i class="fa fa-trash"></i></button>

            {/* Like Button */}
            {/* <button onClick={() => {onLike(postId) }}>Like</button> */}
            <LikeButton postId={postId} />
            {/* <button onClick={this.addLike}>Likes: {this.state.likes} </button> */}

            


            </div>

            
        </div>
    )
}

export default Post
