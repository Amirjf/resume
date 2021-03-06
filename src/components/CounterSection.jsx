import React from 'react'
import CounterItem from './counters/CounterItem'

export default function CounterSection() {
    return (
        <div className="container">
        <div className="d-flex justify-content-start">
            <CounterItem value="3" text="Years Experience" />
            <CounterItem value="50 +" text="Projects Done" />
            <CounterItem value="100" text="Happy Customers" />
            <CounterItem value="+1000" text="Coffee" />
        </div>
        </div>
    )
}
