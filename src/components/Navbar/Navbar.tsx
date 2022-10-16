import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../../public/icons/logo.svg";

const Navbar = () => {

  return (
    <nav>
      <div className="navbar">
        <Link className="navbar-logo" to="/">
          <img className="navbar-logo" src={logo} alt="" />
        </Link>
        <Link className="navbar-item" to="/">Главная</Link>
        <Link className="navbar-item" to="/about">О себе</Link>
        <Link className="navbar-item" to="/task1">Задание 1</Link>
        <Link className="navbar-item" to="/task2">Задание 2</Link>
        <Link className="navbar-item" to="/task3">Задание 3</Link>
        <Link className="navbar-item" to="/task4">Задание 4</Link>
        <Link className="navbar-item" to="/task5">Задание 5</Link>
        <Link className="navbar-item" to="/task6">Задание 6</Link>
      </div>
    </nav>
  )
}

export default Navbar;