import { Container, Paper, Typography, Divider, List, ListItemButton, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h5" variant="h5" align="center">
                        Лабораторная работа по Современным компьютерным технологиям
                    </Typography>
                    <Divider sx={{ p: 2 }} />
                    <img style={{ objectFit: "cover", height: 600, width: "100%" }} src='https://enfrasys.com/wp-content/uploads/2021/09/8.9-Actual-Banner.png' ></img>
                    <List>
                        <ListItem divider>
                            <ListItemButton style={{ textAlign: "center" }} component={Link} to="/about">
                                <ListItemText primary="О себе" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem divider>
                            <ListItemButton style={{ textAlign: "center" }} component={Link} to="/slider">
                                <ListItemText primary="Слайдер-карусель" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem divider>
                            <ListItemButton style={{ textAlign: "center" }} component={Link} to="/calc">
                                <ListItemText primary="Калькулятор" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem divider>
                            <ListItemButton style={{ textAlign: "center" }} component={Link} to="/market">
                                <ListItemText primary="Корзина" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem divider>
                            <ListItemButton style={{ textAlign: "center" }} component={Link} to="/quiz">
                                <ListItemText primary="Тесты" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Paper>
            </Container>
        </>
    );
}

export default Home;