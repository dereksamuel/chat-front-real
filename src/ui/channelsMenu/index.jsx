import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { IoMdSearch } from "react-icons/io";

import { ChannelsMenuItem } from './ChannelMenuItems';
import { Header } from './Header';
import ListGroup from 'react-bootstrap/ListGroup';

import "./index.css";

function ChannelsMenu() {
  return (
    <ListGroup variant="dark" data-testid="channels-menu">
      <ListGroup.Item className="channels-menu__list--header"><Header /></ListGroup.Item>
      <ListGroup.Item className="channels-menu__list--input">
        <InputGroup data-testid="channels-menu-input-search" className="my-3">
          <InputGroup.Text id="search-icon">
            <IoMdSearch />
          </InputGroup.Text>
          <Form.Control
            placeholder="Search..."
            aria-label="Search..."
            aria-describedby="search-icon"
            className="p-2"
          />
        </InputGroup>
      </ListGroup.Item>
      <ChannelsMenuItem isChannel>PLATZI CHANNEL</ChannelsMenuItem>
      <ChannelsMenuItem isChannel>PLATZI CHANNEL</ChannelsMenuItem>
    </ListGroup>
  );
}

export { ChannelsMenu };
