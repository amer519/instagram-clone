import React, { useState, useEffect } from 'react';
import './Chat.css';
import Avatar from "@material-ui/core/Avatar";
import { db } from './firebase';
import firebase from "firebase";
import LikeButton from './LikeButton'

function Chat({user, username }) {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    //likes
    // const [likes, setLikes] = useState(0);
    const postId = 'w0LGb1B5oGoPCVA0s2MZ'

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
            username: username,
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

   

    


    
    

    return (
        <div className="post">
            <div className='post__header'>
            <div className='chat__header'>
            <h3>Chat</h3>
            </div>
        </div>
        
            
            
        
            

            <div className='post__comments'>

                {comments.map((comment) => (
                    <p>
                        <strong>{comment.username}</strong> {comment.text}
                    </p>
                ))}
            </div>

            {username && (
                <form className='post__commentBox'>
                <input
                    className='post__input'
                    type='text'
                    placeholder='Message...'
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    />
                <button 
                    className='post__button'
                    disabled={!comment}
                    type='submit'
                    onClick={postComment}
                    >
                    Send
                    </button>
            </form>
            )}
            
            


            

            
        </div>
    )
}

export default Chat
