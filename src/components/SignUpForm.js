import React from 'react';
import './signupform.css';

const SignUpForm = () => {
    return (
        <div className='container'>
            <div className='first-wrapper'>
                <h2 className='title'>Créer un Compte</h2>
            
            <form className='form-wrapper'>
                <div className='name'>
                    <label className='label'>Nom et Prénom</label>
                    <input className='input' type='text'></input>
                </div>
                <div className='email'>
                    <label className='label'>Email</label>
                    <input className='input' type='email'></input>
                </div>
                <div className='password'>
                    <label className='label'>Mot de passe</label>
                    <input className='input' type='password'></input>
                </div>
            </form></div>
        </div>
    )
}

export default SignUpForm