import React from 'react'

function CounterItem(props) {
    const {value , text} = props;
    return (
        <div className="col-md-3 col-sm-6">
            <div className="counter-container">
                <div className="counter-box">
                    <span className="counter">{value}</span>
                </div>
                <h4 className="text-white">{text}</h4>
            </div>
        </div>
    )
}

export default CounterItem
