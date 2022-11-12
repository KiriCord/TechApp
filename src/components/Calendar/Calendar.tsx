import { Box, TextField, Typography } from "@mui/material";
import { height } from "@mui/system";
import React, { useState } from "react";

const colorList = ["Белый", "Чёрный", "Зелёный", "Красный", "Жёлтый"] as const;
const animalList = ["Обезьяна", "Курица", "Собака", "Свинья", "Крыса", "Бык", "Тигр", "Заяц", "Дракон", "Змея", "Лошадь", "Овца"] as const;

type AnimalColor = typeof colorList[number];
type AnimalType = typeof animalList[number];
type AnimalMap = Record<AnimalType, string>;
type HEXColor = `#${string}`;

const ColorToHEX: Record<AnimalColor, HEXColor> = {
    "Зелёный": "#00A80F",
    "Красный": "#FF0000",
    "Жёлтый": "#FFD700",
    "Белый": "#FFFFFF",
    "Чёрный": "#000000",
}

const AnimalToImg: AnimalMap = {
    "Крыса": "https://upload.wikimedia.org/wikipedia/commons/1/15/WildRat.jpg",
    "Бык": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Cow_female_black_white.jpg/939px-Cow_female_black_white.jpg",
    "Тигр": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/P.t.altaica_Tomak_Male.jpg/997px-P.t.altaica_Tomak_Male.jpg",
    "Заяц": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Arctic_hare.jpg",
    "Дракон": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Smaug_par_David_Demaret.jpg/1118px-Smaug_par_David_Demaret.jpg",
    "Змея": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Atheris_hispida.jpg",
    "Лошадь": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Pernod_Al_Ariba_0046b.jpg",
    "Овца": "https://upload.wikimedia.org/wikipedia/commons/e/e7/Ovis_orientalis_aries_%27Skudde%27_%28aka%29.jpg",
    "Обезьяна": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Macaca-fascicularis_flk18447014.jpg/1083px-Macaca-fascicularis_flk18447014.jpg",
    "Курица": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Kura_domowa_DSC08721.JPG",
    "Собака": "https://upload.wikimedia.org/wikipedia/commons/c/c0/Fm_shiba_inu_puppy.jpg",
    "Свинья": "https://upload.wikimedia.org/wikipedia/commons/4/48/Vietnamese_Pot_Bellied_Pig.jpg"
}

type AnimalWithColorProps = {
    color: AnimalColor;
    animal: AnimalType;
}

const AnimalWithColor = ({ animal, color }: AnimalWithColorProps) => (
    <div style={{ border: "2px solid black" }}>
        <img style={{ height: 300, width: "100%" }} src={AnimalToImg[animal]} alt="" />
        <div style={{ backgroundColor: ColorToHEX[color], height: 50, width: "100%" }}></div>
    </div >
)


const Calendar = () => {
    const [year, setYear] = useState(1984);

    const colorIndex = Math.floor((year % 10) / 2);
    const animalIndex = year % 12;

    const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setYear(Number(e.target.value));
    }

    return (
        <div>
            <AnimalWithColor animal={animalList[animalIndex]} color={colorList[colorIndex]} />
            <Box display="flex" alignItems="center" justifyContent="center" sx={{ margin: "15px" }}>
                <TextField label="Год" inputProps={{ min: "0" }} value={year} type="number" onChange={handleYearChange}></TextField>
            </Box>
        </div>

    );
}

export default Calendar;