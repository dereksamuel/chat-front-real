import React from 'react'
import Button from 'react-bootstrap/Button'
import { IoMdAdd } from 'react-icons/io'
import "./header.css";

function Header() {
  return (
    <header
      data-testid='channels-menu-header'
      className='d-flex align-items-center justify-content-between w-100 channels-menu-header'
    >
      <h4 className='m-0'>Channels</h4>
      <Button
        className='m-0 py-0 px-2'
        variant='secondary'
        size='sm'
      >
        <IoMdAdd className='m-0' size={20} />
      </Button>
    </header>
  )
}

export { Header }
