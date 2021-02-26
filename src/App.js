import React, {useState, useEffect} from "react";
import Pizza from './pizza';
import formSchema from './FormSchema'
import * as yup from 'yup';
import { Route, Link, Switch } from 'react-router-dom'
import axios from 'axios'

const App = () => {
  
  const pizzas = []
  
  const initialValues = {
    name: '',
    size: '',
    topping1: false,
    topping2: false,
    topping3: false,
    topping4: false,
    special_instructions:'',
  }

  const initialErrors = {
    name: '',
    size: null,
    topping1: null,
    topping2: null,
    topping3: null,
    topping4: null,
    special_instructions: null,
  }
  
  const initialDisabled = true
  
      
  const [pie, setPie] = useState(pizzas)
  const [values, setValues] = useState(initialValues)
  const [formE, setFormE] = useState(initialErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  
  const change = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormE({...formE, [name]: ''})
      })
      .catch(err => {
        setFormE({...formE, [name]: err.errors[0]})
      })
    setValues({
      ...values,
      [name]: value 
    })
  }
  
  const submit = evt => {
    const newPie = {
      name: values.name,
      size: values.size,
      topping1: values.topping1,
      topping2: values.topping2,
      topping3: values.topping3,
      topping4: values.topping4,
      special_instructions: values.special_instructions,
    }
    setPie(pie.concat(newPie))
    setValues(initialValues)
  }
  console.log(pizzas)

  useEffect(() => {
    formSchema.isValid(values).then(valid => setDisabled(!valid))
  }, [values])
  
  return (
      
    <div className="App">
      <h1> Lambda Eats </h1>
      <nav>
        <Link to= '/'>
          <div className="home-button">Home</div>
        </Link>
      
      </nav>
      <Switch>
        <Route path='/pizza'>
          <Pizza submit = {submit} change = {change} values = {values} />
          {pie.map((pie, idx) => {
            return (
              <div key={idx}>
                <h2>Thank For Ordering!</h2>
                <h3>Name: {pie.name}</h3>
                <p>Size: {pie.size}</p>
                {pie.topping1 ? <p>Pepperoni</p> : null}
                {pie.topping2 ? <p>Pineapple</p> : null}
                {pie.topping3 ? <p>Ham</p> : null}
                {pie.topping4 ? <p>Bacon</p> : null}
                <p>Special instructions: {pie.special_instructions}</p>
              </div>  
            )
          })
          }
        </Route>
        <Route exact path='/'>
          <div>
            <Link to= '/pizza'>
              <div>Pizza</div>
            </Link>
          </div>
        </Route>
      </Switch>
      
    </div> 
  )
};
  


export default App;
