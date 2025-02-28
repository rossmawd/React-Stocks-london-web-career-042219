import React from 'react'

const Stock = (props) => (
  <div>

    <div onClick={(event) => props.buyStock(event, props.stock, props.sell)} className="card">
      <div className="card-body">
        <h5 className="card-title">
            {props.stock.name}
          </h5>
        <p className="card-text">
            {`$${props.stock.price}`}
          </p>
      </div>
    </div>


  </div>
);

export default Stock
