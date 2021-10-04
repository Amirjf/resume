import React from 'react';

function AvatarInfo() {
    return (
        <div className="avatar-column p-3 text-center">
            <span class="position-absolute translate-middle p-2 bg-danger border border-light rounded-circle">
                <span class="visually-hidden">New alerts</span>
            </span>
            <img className="avatar rounded-circle" src="https://avatars.githubusercontent.com/u/54482073?v=4" />
            <h5 className="text-white pt-2">AmirMasoud Jafari</h5>
            <h6 className="text-faded">Front-End Developer</h6>
        </div>

    )


}

export default AvatarInfo;


