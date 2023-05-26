import React from 'react'
import PropTypes from 'prop-types'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import { IoMdPeople, IoMdPerson } from 'react-icons/io'

import "./channelMenuItems.css";

function ChannelsMenuItem({ isChannel, children }) {
  return (
    <ListGroupItem data-testid='channels-menu-item' className='channels-menu-item'>
      <i className="channels-menu-item__icon">
        {isChannel ? <IoMdPeople /> : <IoMdPerson />}
      </i>
      <span className="channels-menu-item__text">{children}</span>
    </ListGroupItem>
  )
}

ChannelsMenuItem.propTypes = {
  isChannel: PropTypes.bool,
  children: PropTypes.any.isRequired,
}

export { ChannelsMenuItem }
