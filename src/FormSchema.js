import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup.string()
        .required('Name must be at least 2 characters'),
    size: yup.string()
        .required('Enjoy'),
    topping1: yup.string()
        .required('Enjoy'),
    topping2: yup.string()
        .required('Enjoy'),
    topping3: yup.string()
        .required('Enjoy'),
    topping4: yup.string()
        .required('Enjoy'),
    special_instructions: yup.string()
        .required('Enjoy'),
})

export default formSchema