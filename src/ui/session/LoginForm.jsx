import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import { IoLogoGithub, IoMdLock, IoMdMail } from 'react-icons/io'
import PropTypes from "prop-types";

import './loginForm.css'

function LoginForm({ onSubmit, loginRef }) {
  return (
    <form data-testid="login-form" onSubmit={onSubmit} ref={loginRef}>
      <Card className='login-form'>
        <Card.Body className='p-4'>
          {/* <small className='mb-4 d-block'>
            But do you want to know a secret? Don't tell anyone, but here's an
            email(fredderick@gmail.com) and a password(1234)
          </small> */}
          <Form.Label className='mb-0'>Email:</Form.Label>
          <InputGroup data-testid='login-input-email' className='mt-1'>
            <InputGroup.Text id='email-icon'>
              <IoMdMail size='20px' />
            </InputGroup.Text>
            <Form.Control
              placeholder='example@gmail.com'
              defaultValue="dereksamuelgr@gmail.com"
              aria-label='Email address'
              aria-describedby='email-icon'
              className='p-2'
              type='email'
              name='email'
              required
              data-testid="input"
            />
          </InputGroup>
          <Form.Label className='mb-0 mt-3'>Password:</Form.Label>
          <InputGroup
            data-testid='login-input-password'
            className='mt-1 mb-2'
          >
            <InputGroup.Text id='password-icon'>
              <IoMdLock size='20px' />
            </InputGroup.Text>
            <Form.Control
              placeholder='******'
              type='password'
              defaultValue="1234"
              aria-label='Password'
              aria-describedby='password-icon'
              className='p-2'
              name='password'
              required
              data-testid="input"
            />
          </InputGroup>
          <Button
            variant='primary'
            className='mt-4 w-100'
            type='submit'
          >
            SIGN IN
          </Button>
          <hr />
          <Button
            variant='secondary'
            className='w-100 d-flex align-items-center justify-content-center gap-3'
          >
            <span>Sign up with GitHub</span>
            <IoLogoGithub size={25} />
          </Button>
        </Card.Body>
      </Card>
    </form>
  )
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  loginRef: PropTypes.any.isRequired,
};

export { LoginForm }
