import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = ( e ) => {

        setinputValue( e.target.value );

    }

    const handleSubmit = ( e ) => {

        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {

            setCategories( categories => [ inputValue, ...categories  ] );
            setinputValue('');

        }
        
    }

    return (

        <div className='container-fluid'>

            <form onSubmit = { handleSubmit }>

                <div className = "form-floating mb-3">

                    <input 
                        type = "text"
                        className = "form-control" 
                        id = "floatingInput" 
                        placeholder = "Input the category"
                        value = { inputValue }
                        onChange = { handleInputChange }
                    />
                    <label htmlFor = "floatingInput">Category</label>

                </div>    

            </form>

        </div>       

    );
    
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}