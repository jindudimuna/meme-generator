import React from "react";
import memeData from "./memeData.js";

function Form(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memeData)


   
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    
    return(
        <div className="main">
            <form className="meme-body">
            <input type="text" id="top-text" placeholder="Insert top text" />
              <input type="text" id="bottom-text" placeholder="Insert bottom text" />
          
            </form>
              
            <button className="meme-button" onClick={getMemeImage}>Get a new meme image  🖼</button>

            <img src={meme.randomImage} className="meme-image" alt="jokes"/>

        </div>

    
    )
}


export default Form;