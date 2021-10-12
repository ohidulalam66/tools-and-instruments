import React from 'react';

const ToolsCard = props => {
    // console.log(props.tool)
    const {name, img, price, desc} = props.tool;
    return (
        <div className= "col-md-4 g-4">
            <div className="card h-100 p-2">
              <img src= {img} className="card-img-top img-fluid w-50 mx-auto" alt="..."/>
              <div className="card-body">
                  <h4 className="card-title">{name}</h4>
                  <h5>Price: ${price}</h5>
                  <p>{desc}.</p>
                  <button onClick= {() => props.handlerTools(props.tool)} className="btn btn-outline-primary">Add to cart</button>
              </div>
            </div>
        </div>
    );
};

export default ToolsCard;