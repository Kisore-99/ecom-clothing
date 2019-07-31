import React from 'react';

import './menu-item.style.scss';

const MenuItem=({ title ,imageUrl,size})=>(

            // <div  style={{
            //     backgroundImage: `url(${imageUrl})`
            // }}//for dynamic change of images and 2 of the images are set with  special property of size large (refer menu-item.style.scss)
               <div className={`${size} menu-item`}> 

                <div 
                    className='background-image' 
                    style={{
                    backgroundImage: `url(${imageUrl})`
                   }}
                />
                <div className='content'>
                    <h1 className='title'>
                        {title.toUpperCase()}
                    </h1>
                    <span className='subtitle'>
                        SHOP NOW
                    </span>
                </div>
            </div>
);

export default MenuItem;