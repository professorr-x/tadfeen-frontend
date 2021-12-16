import React from 'react';
import validate from './validateInfo';
// import useForm from './useForm';
import './Form.css';
import { useState } from "react";

async function registerUser(credentials) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  };

  return fetch("http://127.0.0.1:8010/api/register/", requestOptions).then(
    (response) => response.json()
  );
}

const FormSignup = ({ submitForm }) => {
  // const { handleChange, handleSubmit, values, errors} = useForm(
  //   submitForm,
  //   validate
  // );
  
  // const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password1: "",
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };


  const [errors, setErrors] = useState({});
  // const [isSubmitting, setIsSubmitting] = useState(false);

  // let token = ''

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await registerUser(values);
    setErrors(validate(values));

    if (response.token) {
      submitForm()
    } else if (response.username.includes('A user with that username already exists.')) {
    setErrors({username : "A user with that username already exists."})
    }
  };

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password1'
            placeholder='Confirm your password'
            value={values.password1}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href='/sign-in'>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;