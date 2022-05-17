import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState( [ 'Halo' ] );

    return (

        <div className='container-fluid'>

            <div className='row justify-content-md-center'>

                <div className='col-md-auto'>

                    <h1>GifExpertApp</h1>

                </div>

                <AddCategory setCategories = { setCategories } />

                <div className='row justify-content-start'>
                    {
                        categories.map( category => 
                            <GifGrid 
                                key = { category }
                                category = { category } 
                            />
                        )
                    }
                </div>

            </div>            

        </div>

    );

}

export default GifExpertApp