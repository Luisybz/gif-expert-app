import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = [ 'One Punch', 'Marvel', 'Halo' ];

    const [categories, setCategories] = useState( [ 'Halo' ] );

    // const handleApp = () => {
    //     setcategories( [ ...categories, 'add' ] );
    // }

  return (

    <>
        <h1>GifExpertApp</h1>
        <AddCategory setCategories = { setCategories } />
        <hr></hr>

        <ol>
            { 

                categories.map( category => 
                    <GifGrid 
                        key = { category }
                        category = { category } 
                    />
                )

            }
        </ol>
    </>

  );

}

export default GifExpertApp