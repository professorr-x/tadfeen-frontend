import { useState, useEffect } from "react";

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

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password1: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  let token = ''

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await registerUser(values);

    setErrors(validate(values));

    if (response.token) {
      setIsSubmitting(true);
      token = response
    } else if (response.username.includes('A user with that username already exists.')) {
      setErrors({username : "A user with that username already exists."})
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);
  return { handleChange, handleSubmit, values, errors, token };
};

export default useForm;
