import React from "react";

export default function kort( { image, name }){
    return(
        <div key={kort.name}>
            <img src={ image } alt=""/>
        </div>
    )
}