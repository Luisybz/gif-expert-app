import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import PropTypes from 'prop-types'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from './helpers/getGifs';

const GifGrid = ( { category } ) => {

    const { data, loading } = useFetchGifs( category );

    return (
    
        <div className='container p-4'>

            <div className='row justify-content-center'>

                <div className='col-md-auto'>

                    <h2 className='animate__animated animate__rotateInDownLeft'> { category.toUpperCase() } </h2>

                    { loading && <p className='animate__animated animate__bounceIn'>Cargando...</p> }

                </div>

            </div>

            <div className='row justify-content-start'>
                <div className='d-flex justify-content-start flex-wrap'>

                    {
                        data.map( img => (
                                <GifGridItem
                                    key = { img.id }
                                    { ...img }
                                />
                        ))
                    }

                </div>

            </div>

        </div>

    );
  
}

GifGrid.propTypes = {}

export default GifGrid