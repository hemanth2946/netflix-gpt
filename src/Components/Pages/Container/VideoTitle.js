import React from 'react'

export const VideoTitle = ({ title, description }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <div>
                <button>Play</button>
                <button>More info</button>
            </div>
        </div>
    )
}
