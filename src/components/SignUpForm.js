import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React, { useState, useEffect } from 'react';
import './signupform.css';
import UseForm from './UseForm';

const SignUpForm = ({ submitForm }) => {
    const {handleChange, handleFormSubmit, values, errors} = UseForm(
        submitForm
    );
    return (
            <div className='container'>
                <div className='first-wrapper'>
                    <h2 className='title'>Créer un Compte</h2>

                    <form className='form-wrapper'>
                        <div className='name'>
                            <label className='label'>Nom et Prénom</label>
                            <input className='input'
                                type='text'
                                name="fullname"
                                value={values.fullname}
                                onChange={handleChange}>
                            </input>

                            {errors.fullname && <p className='error'>{errors.fullname}</p>}
                        </div>
                        <div className='email'>
                            <label className='label'>Email</label>
                            <input className='input'
                                type='email'
                                name="email"
                                value={values.email}
                                onChange={handleChange}>
                            </input>
                            {errors.email && <p className='error'>{errors.email}</p>}
                        </div>
                        <div className='password'>
                            <label className='label'>Mot de passe</label>
                            <input className='input'
                                type='password'
                                name="password"
                                value={values.password}
                                onChange={handleChange}>
                            </input>
                            {errors.password && <p className='error'>{errors.password}</p>}
                        </div>
                        <div>
                            <button className='signup_button' onClick={handleFormSubmit}>S'inscrire</button>
                        </div>
                    </form>
                </div>
            </div>
        )

    }
export default SignUpForm;