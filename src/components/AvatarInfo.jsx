import React from 'react';
import logo from '../assets/images/LOGO.png';

function AvatarInfo() {
    return (
        <div className="avatar-column p-3 text-center">
            <img className="avatar" src={logo} />
            <h5 className="text-white pt-2">AmirMasoud Jafari</h5>
            <h6 className="text-faded">Front-End Developer</h6>
        </div>

    )


}

export default AvatarInfo;


