import React from 'react'


export default function Pizza(props) {
    
    const { submit, change, values, disabled, } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    
    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        console.log(evt.target)
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }
    
    return (
        
        <div>

            <form onSubmit={onSubmit}>
            <label>Name       
              <input name='name' type='text' onChange={onChange} value={values.name} placeholder='Name'/>
            </label>
            <label>
                Size 
                <select name='size' value={values.size} onChange={onChange}>
                        <option value=''>Size</option>
                        <option value='Small'>Small</option>
                        <option value='Medium'>Medium</option>
                        <option value='Large'>Large</option>
                    </select> 
            </label>
            <div>
                <label>Pepperoni
                    <input name='topping1' type='checkbox' onChange={onChange} value={values.topping1} />
                </label>
                <label>Pineapple
                    <input name='topping2' type='checkbox' onChange={onChange} value={values.topping2} />
                </label>
                <label>Ham
                    <input name='topping3' type='checkbox' onChange={onChange} value={values.topping3} />
                </label>
                <label>Bacon
                    <input name='topping4' type='checkbox' onChange={onChange} value={values.topping4} />
                </label>
            </div>
            <label>Special Instructions
              <input name='special_instructions' type='text' onChange={onChange} value={values.special_instructions} placeholder='Special Instructions'/>
            </label>
            <button disabled={disabled}>Add to Order</button>
            </form> 
        
        </div>
    )    
}