import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "./header.css";
import { FaAtlassian, FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { logoutAction } from "../redux/actions/authActions";

class Header extends Component {
  state = {
    isOpen: false,
  };
  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  onlogoutClick = () => {
    localStorage.removeItem("id");
    this.props.logoutAction();
    toast.succes("Logout Succes", {
      position: "center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseonHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  render() {
    return (
      <div>
        <Navbar className="bg-light px-5 shadow " light expand="md">
          <NavbarBrand href="/">
            <span className="header-brand" style={{ color: "F#000000" }}>
              <FaAtlassian /> Venue
            </span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {this.props.dataUser.islogin ? (
                <>
                  {this.props.dataUser.role === "admin" ? null : (
                    <>
                      <Link to="/history">
                        <NavItem className="py-2 mx-2">History</NavItem>
                      </Link>
                      <NavItem className="py-2 mx-2">
                        <Link to="/cart">
                          <FaOpencart
                            style={{ fontSize: "25px", color: "black" }}
                          />
                        </Link>
                        {this.props.dataUser.cart.length ? (
                          <Badge
                            style={{
                              position: "relative",
                              bottom: 10,
                              right: 5,
                              backgroundColor: "#fbab7e",
                            }}
                            className="px-1 rounded-circle text-center"
                          >
                            {this.props.dataUser.cart.length}
                          </Badge>
                        ) : null}
                      </NavItem>
                    </>
                  )}
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav>
                      {this.props.dataUser.email}
                    </DropdownToggle>
                    <DropdownMenu right>
                      {this.props.dataUser.role === "admin" ? (
                        <Link to="/manageProd" className="normal-link">
                          <DropdownItem>Manage Product</DropdownItem>
                        </Link>
                      ) : null}
                      {this.props.dataUser.role === "admin" ? (
                        <Link to="/history" className="normal-link">
                          <DropdownItem>History</DropdownItem>
                        </Link>
                      ) : null}

                      <DropdownItem onClick={this.onlogoutClick}>
                        LogOut
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </>
              ) : (
                <>
                  <NavItem className="mx-2">
                    <Link to="/login">
                      <button className=" bg-tombol rounded px-4 py-2 font-weight-bold">
                        Login
                      </button>
                    </Link>
                  </NavItem>
                  <NavItem className="mx-2">
                    <Link to="/register">
                      <button className="header-login rounded px-4 py-2 font-weight-bold">
                        Sign Up
                      </button>
                    </Link>
                  </NavItem>
                </>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const MaptstatetoProps = (state) => {
  return {
    dataUser: state.Auth,
  };
};

export default connect(MaptstatetoProps)(Header);
