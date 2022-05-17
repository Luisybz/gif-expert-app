import React from 'react'
import PropTypes from 'prop-types'
import '../index.css'

export const GifGridItem = ( { id, title, url } ) => {

    return (

        <div className='p-2 align-self-center'>

            <div className='card p-2 animate__animated animate__backInLeft'>

                <img 
                    src = { url } 
                    className = 'card-img-top'
                    alt = { id }
                />          
                <div>

                    <h5 className = 'card-title'> { title } </h5>
                    <a 
                        className = 'btn btn-secondary'
                        onClick = { () => { window.open(url, '_blank'); } } >Go gif</a>

                </div>

            </div>

        </div>

    )

}

GifGridItem.propTypes = {}