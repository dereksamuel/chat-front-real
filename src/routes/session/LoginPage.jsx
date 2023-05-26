import React from 'react';
import { LoginForm } from '../../ui/session/LoginForm';

function LoginPage() {
  return (
    <section className="login-page d-flex justify-content-center align-items-center">
      <LoginForm />
    </section>
  );
}

export { LoginPage };
