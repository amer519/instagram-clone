import React, { useState } from 'react';
import './App.css';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState([
    {username: "Amer", 
    caption: "Yay, im working!", 
    imageUrl: "https://miro.medium.com/max/2400/1*jDIj2SKAE-Bp32owLoHDjw.png"},
    {username: "Simba", 
    caption: "I am the king", 
    imageUrl: "https://www.vets4pets.com/siteassets/species/cat/kitten/tiny-kitten-in-sunlight.jpg?w=585&scale=down"}
  ]);

  return (
    <div className="app">


      <div className="app__header">
        <img 
          className="app__headerImage"
          src="https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
          />
        </div> 

        {
          posts.map(post => (
            <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
          ))
        }

        <Post username="Amer" caption="Yay, im working!" imageUrl="https://miro.medium.com/max/2400/1*jDIj2SKAE-Bp32owLoHDjw.png" />
        <Post username="Tevin" caption="Tryna smoke hookah?!" imageUrl="https://miro.medium.com/max/2400/1*jDIj2SKAE-Bp32owLoHDjw.png" />
        <Post username="Simba" caption="I am the king" imageUrl="https://www.vets4pets.com/siteassets/species/cat/kitten/tiny-kitten-in-sunlight.jpg?w=585&scale=down" />

    </div>
  );
}

export default App;
