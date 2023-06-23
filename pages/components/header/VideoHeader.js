import React from 'react'
import "./videoHeader.css"

function VideoHeader() {
  return (
    <div className='VideoHeader'>
        <div className='menu'>
            <nav>
                <a href='#'><b>Following</b></a>
                <a href='#'><b>For You</b></a>
            </nav>
        </div>
    </div>
  )
}

export default VideoHeader;