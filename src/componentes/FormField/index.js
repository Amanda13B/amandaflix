import React from 'react';

function FormField({labelText, type, id, name, value, onChange})
{
    return(
        <div>

          <label to={id}>{labelText}</label>

          <br/>

          <input type={type} id={id} name={name} value={value} 
          onChange= {onChange}/>

        </div>
    )
}


export default FormField;