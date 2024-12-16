import React from "react";
import "./Reserved.css";

export default function Reserved({image, title, button}) {
  return (
    <section>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div>
                        <img src={image}/>
                        <p>{title}</p>
                        <button>{button}</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

