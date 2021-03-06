import React from 'react'

export default function CodingSkillItem(props) {

    const {name , percent} = props;

    return (
<div className="coding-skills p-30-15 mt-3">
                <div className="skill-item">
                    <div className="skill-item-heading d-flex text-white justify-content-between text-left">
                        <h5>{name}</h5>
                    </div>
                    <div className="skill-progress">
                        <div className="line-progress">
                            <svg viewBox="0 0 100 1.72" preserveAspectRatio="none" style={{width: "100%", height: "100%"}}>
                                <path d="M 0,0.86 L 100,0.86" stroke="#eee" stroke-width="1.72" fill-opacity="0"></path>
                                <path d="M 0,0.86 L 100,0.86" stroke="yellow" stroke-width="1.72" fill-opacity="0" style={{ "stroke-dasharray": `${percent},100`, "stroke-dashoffset": 0 }}></path>
                            </svg>
                            <div className="line-progress-percent text-white position-absolute">{`${percent}%`}</div>
                        </div>
                    </div>


                </div>
            </div>
    )
}
