import React from "react";
import memeData from "./memeData.js";

function Form(){
const [memeImage, setMemeImage] = React.useState("")


       
    function getMemeImage() {
        const memesArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }   
    return(
        <div className="main">
            <form className="meme-body">
            <input type="text" id="top-text" placeholder="Insert top text" />
              <input type="text" id="bottom-text" placeholder="Insert bottom text" />
          
            </form>
              
            <button className="meme-button" onClick={getMemeImage}>Get a new meme image  🖼</button>

            <img src={memeImage} className="meme-image" alt="jokes"/>

        </div>

    
    )
}


export default Form;