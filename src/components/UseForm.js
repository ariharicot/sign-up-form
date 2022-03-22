import React, {useEffect, useState} from 'react'
import validation from './Validation';

const useForm = (submitForm) => {
const [values, setValues] = useState({
    name: "",
    email: "",
    passaword: "",
});

const [errors, setErrors] = useState({});
const [dataIsCorrect, setDataIsCorrect] = useState(false);

{/* set the values for each input field and then assigned the value based on their names*/ }
const handleChange = (event) => {
    setValues({
        ...values,
        [event.target.name]: event.target.value,
    });
};
const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    setDataIsCorrect(true);
};

useEffect(() => {
    if (Object.keys(errors).lenght === 0 && dataIsCorrect) {
        submitForm(true)}

}, [errors]);

    return {handleChange, handleFormSubmit, errors, values}
}

export default useForm;