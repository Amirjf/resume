import React from 'react'

function ServiceItem({title , description}) {
    return (
        <div className="col-md-4">
        <div className="service-box">
          <div className="service-inner">
            <h5 className="mb-4">{title}</h5>
            <p>{description}</p>
          </div>
        </div>
      </div>
    )

}

export default ServiceItem;