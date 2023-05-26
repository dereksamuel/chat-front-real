import React from 'react';
import { IoMdArrowDropdown } from "react-icons/io"

function SessionMenu() {
  return (
    <li data-testid="session-menu" className="d-flex justify-content-between align-items-center p-3 session-menu">
      <figure className="d-flex align-items-center m-0 session-menu-container">
        <img className="session-menu-container__image mr-3" src="https://img.freepik.com/fotos-premium/lindo-bebe-oso-panda-grandes-ojos-3d-renderizado-ilustracion-dibujos-animados_691560-4917.jpg" />
        <figcaption className='m-0'>Derek Paul</figcaption>
      </figure>
      <IoMdArrowDropdown />
    </li>
  );
}

export { SessionMenu };
