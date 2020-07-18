import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ label, handleChange, ...rest }) => {
    return (
        <div className='input-group'>
            <input {...rest} onChange={handleChange} />
            <label className={`${rest.value.length ? 'floating' : null}`}>{label}</label>
        </div>
    )
}

export default FormInput;