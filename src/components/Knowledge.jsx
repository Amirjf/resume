import React from 'react'
import LineIcon from 'react-lineicons'

function Knowledge() {
    return (
        <div className="container">
            <h5 className="side-title text-left mt-4 mb-4 text-white">Knowledge</h5>

            <div className="knowledge-list mt-4 mb-4">
                <ul>
                    <li><LineIcon name="checkmark-circle" style={{color: 'yellow'}} />Bootstrap, Materialize</li>
                    <li><LineIcon name="checkmark-circle" style={{color: 'yellow'}} />Stylus, Sass, Less</li>
                    <li><LineIcon name="checkmark-circle" style={{color: 'yellow'}} />Gulp, Webpack, Grunt</li>
                    <li><LineIcon name="checkmark-circle" style={{color: 'yellow'}} />GIT knowledge</li>
                </ul>
            </div>

            <ul class="social-media-list">
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-github" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-codepen" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-twitter" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-instagram" aria-hidden="true"></i></a>
          </li>       
        </ul>

        </div>
    )
}

export default Knowledge
