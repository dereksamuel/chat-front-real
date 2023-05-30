import React, { useRef, useState } from 'react';

import { LoginForm } from '../../ui/session/LoginForm';
import { fetchUtility } from "../fetchUtility";
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [state, setState] = useState({
    loginRef: useRef(null)
  });
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(state.loginRef.current);
    const dataFields = {
      email: formData.get("email"),
      password: formData.get("password")
    };

    const { token, user } = await fetchUtility("auth/login", "POST", dataFields);

    localStorage.setItem("token", token);
    navigate("/");
  };

  return (
    <section className="login-page d-flex justify-content-center align-items-center">
      <LoginForm onSubmit={onSubmit} loginRef={state.loginRef} />
    </section>
  );
}

export { LoginPage };
