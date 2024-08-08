import { motion, useScroll } from 'framer-motion';
import {
  fetchUsers,
  addMany,
  addCity,
  selectAllItems,
  addCityTrial,
  selectEntities,
  selectAll,
  sortCities,
} from '@slices/trial';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useGetUsersQuery } from '@store/rtkQuery';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { Navbar, Nav } from 'react-bootstrap';

export function Spb() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">My Website</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Spb;
