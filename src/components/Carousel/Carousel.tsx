import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";

const initialCards = [
    {
        src: 'https://cdnb.artstation.com/p/assets/images/images/052/021/645/large/vitaliy-bx-ural4320-screen01s.jpg',
        deg: 360,
    },
    {
        src: 'https://cdnb.artstation.com/p/assets/images/images/053/845/695/large/ilya-krupenkov-render5.jpg',
        deg: 435,
    },
    {
        src: 'https://cdna.artstation.com/p/assets/images/images/022/027/492/large/rhinoda-agency-kamaz-1-0005-1.jpg',
        deg: 500,
    },
    {
        src: 'https://cdnb.artstation.com/p/assets/images/images/033/705/265/large/pavel-pavaks-01.jpg',
        deg: 285,
    },
    {
        src: 'https://cdna.artstation.com/p/assets/images/images/001/725/190/large/pavel-pavaks-gaz66-02.jpg',
        deg: 220,
    },
];


const Carousel = () => {
    const [IsRotate, setIsRotate] = React.useState(false);
    const [cards, setCards] = React.useState(initialCards);

    const handleRotate = () => {
        const newCards = cards.map((card, index) => {
            return {
                ...card,
                deg: card.deg + 15
            }
        });
        setCards(newCards);
    }

    useEffect(() => {
        if (!IsRotate) {
            return;
        }

        var startInterval = setInterval(() => {
            if (IsRotate) {
                handleRotate();
            }
        }, 200);
        return () => clearInterval(startInterval);
    }, [IsRotate, cards]);

    return (
        <>
            <div className="container">
                <div className="cards_wrapper">
                    {cards.map((card, index) => (
                        <div className="angle_wrapper" style={{ transform: `rotate(${card.deg}deg)` }}>
                            <div className="card" style={{ transform: `rotate(-${card.deg}deg)` }}>
                                <img key={index} className="card_img" src={card.src} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Box sx={{ m: 2 }}>
                <Button onClick={() => { setIsRotate(true); handleRotate() }} style={{ backgroundColor: '#435b76', margin: "5px" }} variant="contained" >Запустить карусель!</Button>
                <Button onClick={() => setIsRotate(false)} style={{ backgroundColor: '#222d3b', margin: "5px" }} variant="contained" >Остановить карусель!</Button>
            </Box>
        </>
    );
}

export default Carousel;