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

    
    function handleChange(event){
        const{name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme, 
            [name] : value
        }))
    }
    
    return(
        <div className="main">
            <form className="meme-body">
            <input type="text" id="top-text" 
            placeholder="Insert top text"
            value={meme.topText}
            name="topText"
            onChange={handleChange}
            
            />
              <input type="text" id="bottom-text" 
              placeholder="Insert bottom text"
              value={meme.bottomText}
              name="bottomText"
              onChange={handleChange}
              
              />
          
            </form>
              
            <button className="meme-button" onClick={getMemeImage}>Get a new meme image  🖼</button>
        <div className="meme">
            <img src={meme.randomImage} className="meme-image" alt="jokes"/>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>

    
    )
}


export default Form;