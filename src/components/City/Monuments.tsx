import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import React, { useState } from "react";

const Monuments = () => {
    const [city, setCity] = useState('');
    const [monument, setMonument] = useState('');
    const [sum, setSum] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleChangeCity = (event: SelectChangeEvent) => {
        setCity(event.target.value);
    }

    const handleChangeMonument = (event: SelectChangeEvent) => {
        setMonument(event.target.value);
        if (city === event.target.value) {
            setSum(sum + 1);
        }
    }

    const handleResult = () => {
        setShowResult(true);
    }

    const handleRefresh = () => {
        setCity('');
        setMonument('');
        setSum(0);
        setShowResult(false);
    }


    return (
        <>
            <Box display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel sx={{ color: "#fff" }} id="city-label">Города</InputLabel>
                    <Select
                        labelId="city-label"
                        id="city"
                        value={city}
                        label="Города"
                        onChange={handleChangeCity}
                        sx={{
                            color: "#fff",
                            ".MuiOutlinedInput-notchedOutline": { borderColor: 'white' },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: 'white' },
                        }}
                    >
                        <MenuItem value="volgograd">Волгоград</MenuItem>
                        <MenuItem value="ufa">Уфа</MenuItem>
                        <MenuItem value="new">Нью-Йорк</MenuItem>
                        <MenuItem value="ber">Берлин</MenuItem>
                        <MenuItem value="moscow">Москва</MenuItem>
                        <MenuItem value="par">Париж</MenuItem>
                        <MenuItem value="lon">Лондон</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel sx={{ color: "#fff" }} id="monument-label">памятники</InputLabel>
                    <Select
                        labelId="monument-label"
                        id="monument"
                        value={monument}
                        label="Монументы"
                        onChange={handleChangeMonument}
                        sx={{
                            color: "#fff",
                            ".MuiOutlinedInput-notchedOutline": { borderColor: 'white' },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: 'white' },
                        }}
                    >
                        <MenuItem value="ufa">Памятник Салавату Юлаеву</MenuItem>
                        <MenuItem value="volgograd">Родина-мать</MenuItem>
                        <MenuItem value="moscow">Мавзолей Ленина</MenuItem>
                        <MenuItem value="lon">Tayэp</MenuItem>
                        <MenuItem value="new">Статуя Свободы</MenuItem>
                        <MenuItem value="moscow">Покорителям космоса</MenuItem>
                        <MenuItem value="ber">Бранденбургские ворота</MenuItem>
                        <MenuItem value="par">Триумфальная Арка</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            {showResult ? <Typography className="text-center " variant="h5" gutterBottom>Количество правильных ответов: {sum}</Typography> : null}
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Button onClick={handleResult} style={{ backgroundColor: '#435b76', margin: "5px" }} variant="contained" >Результат</Button>
                <Button onClick={handleRefresh} style={{ backgroundColor: '#222d3b', margin: "5px" }} variant="contained" >Обновить</Button>
            </Box>

        </>
    );
}

export default Monuments;