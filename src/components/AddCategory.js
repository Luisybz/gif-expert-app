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

        <form onSubmit = { handleSubmit }>
            <input 
                type = 'text'
                value = { inputValue }
                onChange = { handleInputChange }
                placeholder = 'Ingrese la categoría a buscar'
            />                
        </form>

    );
    
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}