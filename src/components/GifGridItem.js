import React from 'react'
import PropTypes from 'prop-types'
import '../index.css'

export const GifGridItem = ( { id, title, url } ) => {

    return (

        <div className='card animate__animated animate__backInLeft'>

            <a onClick = { () => { window.open(url, '_blank'); } }>

                <img 
                    src = { url } 
                    alt = { id }
                />
 
            </a>            
            <p>{ title }</p>
            
        </div>

    )

}

GifGridItem.propTypes = {}