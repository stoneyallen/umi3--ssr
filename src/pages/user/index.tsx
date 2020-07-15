import React from 'react'

function User() {
    const { href, pathname } = window.location;
    const env = process.env.__IS_SERVER ? 'server' : 'browser';
    return (
        <div>
            user{pathname}{env}
        </div>
    )
}

export default User
