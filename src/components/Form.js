import React from 'react'

import FormInput from './FormInput';

const Form = (props) => {
  const submitHandler = (userInput) => {
    props.onCalculate(userInput);
  };
  const resetHandler = () => {
    props.onReset();
  };
  return (
    <div>
      <FormInput onSubmit={submitHandler} onReset={resetHandler} />
    </div>
  );
};

export default Form;

