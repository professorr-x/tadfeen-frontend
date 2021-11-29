import React, { useState } from 'react';
import './Form.css';
import FormSignup from './SignUpForm';
// import FormSuccess from './FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        {/* <span className='close-btn'>×</span>
        <div className='form-content-left'>
        Tad<span>Feen.</span>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div> */}
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
        //   <FormSuccess />
        <h1>Hello</h1>
        )}
      </div>
    </>
  );
};

export default Form;