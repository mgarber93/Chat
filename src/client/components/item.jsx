import React from 'react';
import skeleton from '../styles/skeleton.css';

const Item = ({price, title, description}) => 
  <div className={skeleton.container}>
    <div className={skeleton.row}>
      <div className={skeleton["one-third"]}>
        <div className={skeleton.row}>
          <h2 style={{"textAlign":"left","float":"left"}}>{price}</h2>
          <h2 style={{"textAlign":"right","float":"right"}}>{title}</h2>
        </div>
        <p className="item-description">{description}</p>
      </div>
    </div>
  </div>

export default Item;