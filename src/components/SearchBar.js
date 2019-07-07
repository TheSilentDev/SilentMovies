import React from "react";

import { Navbar, Form, FormControl } from "react-bootstrap";

export default function SearchBar(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Silent Movies</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        style={{ justifyContent: "center" }}
      >
        <Form inline>
          <FormControl
            type="text"
            onSubmit={e => e.preventDefault()}
            value={props.search}
            onChange={props.handleChange}
            placeholder="Search"
            className="mr-sm-2"
          />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
