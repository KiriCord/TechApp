import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Современные компьютерные технологии
          </Typography>
          <nav>
            <Button component={Link} to="/">
              Главная
            </Button>
            <Button component={Link} to="/about">
              О себе
            </Button>
            <Button component={Link} to="/slider">
              Слайдер-карусель
            </Button>
            <Button component={Link} to="/calc">
              Калькулятор
            </Button>
            <Button component={Link} to="/market">
              Корзина
            </Button>
            <Button component={Link} to="/quiz">
              Тест
            </Button>
            <Button component={Link} to="/ellipse">
              Эллипс
            </Button>
            <Button component={Link} to="/calendar">
              Календарь
            </Button>
          </nav>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar;