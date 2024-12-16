import React from "react";
import "./Reserved.css";

export default function Reserved({image, title, button}) {
  return (
    <section>
        <div className="container">
            <div className="row">
                <div className="col-md-12 cardBody">
                        <img src={image}/>
                        <p>{title}</p>
                        <button onClick={onButtonClick}>{buttonText}</button>
                </div>
            </div>
        </div>
    </section>
  )
}

