import React from 'react';
import { ChannelsMenu } from '../channelsMenu';
import { SessionMenu } from './SessionMenu';
import Nav from "react-bootstrap/Nav";
import "./styles.css";

function Menu() {
  return (
    <Nav data-testid="menu" className="flex-column Menu justify-content-between">
      <ChannelsMenu />
      <SessionMenu />
    </Nav>
  );
}

export { Menu };
