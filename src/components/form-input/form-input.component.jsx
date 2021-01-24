import React from 'react'

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className="group">
        <input type="text" className="form-input" onChange={handleChange} {...otherProps}/>
    </div>
)

export default FormInput
