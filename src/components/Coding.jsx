import React from 'react'
import CodingSkillItem from './CodingSkillItem'

function Coding() {
    return (
        <div className="container mb-5">
            <div className="row">
            <h5 className="side-title text-left mt-4 mb-4 text-white">Coding</h5>
            <CodingSkillItem />
            <CodingSkillItem />
            <CodingSkillItem />
            </div>
        </div>
    )
}

export default Coding
