import React from 'react';

const Card = ({children, src}) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            {src && <img src={src} className="card-img-top" alt="placeholder"/>}
            <div className="card-body">
                {children}
            </div>
        </div>
    );
};

export default Card;