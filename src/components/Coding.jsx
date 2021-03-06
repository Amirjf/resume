import React from 'react'
import CodingSkillItem from './CodingSkillItem'

function Coding() {
    return (
        <div className="container mb-5">
            <div className="row">
            <h5 className="side-title text-right mt-4 mb-4 text-white">Skills</h5>
            <CodingSkillItem name="REACT" percent="40"/>
            <CodingSkillItem name="JavaScript" percent="50"/>
            <CodingSkillItem name="CSS" percent="65"/>
            <CodingSkillItem name="Wordpress" percent="100"/>
            </div>
        </div>
    )
}

export default Coding
