import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import PropTypes from 'prop-types'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from './helpers/getGifs';

const GifGrid = ( { category } ) => {

    const { data, loading } = useFetchGifs( category );

    return (
    
        <>
            <h2 className='animate__animated animate__rotateInDownLeft'> { category } </h2>

            { loading && <p className='animate__animated animate__bounceIn'>Cargando...</p> }

            <div className='card-grid'>
                {
                    data.map( img => (
                            <GifGridItem
                                key = { img.id }
                                { ...img }
                            />
                    ))
                }
            </div>
        </>

    );
  
}

GifGrid.propTypes = {}

export default GifGrid