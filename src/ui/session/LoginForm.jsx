import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import { IoMdLock, IoMdMail } from 'react-icons/io'

import './loginForm.css'

function LoginForm() {
  return (
    <form data-testid="login-form">
      <Card className='login-form'>
        <Card.Body className='p-4'>
          <p>
            Welcome. To start chatting you need to log in first in this page.
          </p>
          <small className='mb-4 d-block'>
            But do you want to know a secret? Don't tell anyone, but here's an
            email(fredderick@gmail.com) and a password(1234)
          </small>
          <InputGroup data-testid='login-input-email'>
            <InputGroup.Text id='email-icon'>
              <IoMdMail size='20px' />
            </InputGroup.Text>
            <Form.Control
              placeholder='Email address'
              aria-label='Email address'
              aria-describedby='email-icon'
              className='p-2'
              type='email'
              name='email'
              required
              data-testid="input"
            />
          </InputGroup>
          <InputGroup
            data-testid='login-input-password'
            className='mt-3'
          >
            <InputGroup.Text id='password-icon'>
              <IoMdLock size='20px' />
            </InputGroup.Text>
            <Form.Control
              placeholder='Password'
              type='password'
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
            className='mt-4'
            type='submit'
          >
            SIGN IN
          </Button>
        </Card.Body>
      </Card>
    </form>
  )
}

export { LoginForm }
