import React from "react"

function Child(props){
    return(
        <div>
            <h2>Child component</h2>
            <h3>{props.userInput}</h3>
        </div>
    )
}

export default Child