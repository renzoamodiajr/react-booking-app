import React from 'react'
import './featured.css'

const Featured = () => {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg" alt="" className='featuredImg' />
                <div className="featuredTitles">
                    <h2>Dublin</h2>
                    <h3>123 Properties</h3>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg" alt="" className='featuredImg' />
                <div className="featuredTitles">
                    <h2>Dublin</h2>
                    <h3>123 Properties</h3>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg" alt="" className='featuredImg' />
                <div className="featuredTitles">
                    <h2>Dublin</h2>
                    <h3>123 Properties</h3>
                </div>
            </div>
        </div>
    )
}

export default Featured