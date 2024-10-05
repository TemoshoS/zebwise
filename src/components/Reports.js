import React from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import Navbar from "react-bootstrap/Navbar";
import NavbarComponent from "./global-components/navbar";
import SidebarComponent from "./global-components/navbar";

export default function Reports() {
  return (
      <>
          <SidebarComponent style={{marginRight: 500}}/>
          <div class='container'>
              <h1>Reports</h1>
              <p>This is the Reports content.</p>
          </div>
      </>

  )
}
