import React from "react";

function Form(){
    return(
        <div className="main">
            <form className="meme-body">
            <input type="text" id="top-text" placeholder="Insert top text" />
              <input type="text" id="bottom-text" placeholder="Insert bottom text" />
          
            </form>
              
            <button className="meme-button">Get a new meme image  🖼</button>

        </div>

    
    )
}


export default Form;