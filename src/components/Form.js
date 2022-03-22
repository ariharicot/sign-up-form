import React, {useState} from 'react';
import SignUpForm from './SignUpForm';
import SignUpFormSucces from './SignUpFormSucces';



const Form = () => {

    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const submitForm = () => {
        setFormIsSubmitted(true);
    }
    return <div>
            {!formIsSubmitted ?( <SignUpForm submitForm={submitForm}/>) : (<SignUpFormSucces />)}
        </div>
}

export default Form