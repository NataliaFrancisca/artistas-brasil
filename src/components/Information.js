import React from "react";

const Information = ({state}) => {
    console.log(state)
    return(
        <h1>{state.name}</h1>
    )
}

export default Information;