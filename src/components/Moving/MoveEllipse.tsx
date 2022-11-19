import { Box, Stack, Slider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Stage, Layer, Rect, Text, Circle, Ellipse } from 'react-konva';

const Pi = Math.PI;

const MoveEllipse = () => {
    const [RadiusX, setRadiusX] = useState<number>(50);
    const [RadiusY, setRadiusY] = useState<number>(100);
    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);
    const [t, setT] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setT(t + 0.02);
            setX(RadiusX * Math.cos(t) + 500);
            setY(RadiusY * Math.sin(t) + 300);
        }, 10);
        return () => clearInterval(interval);
    }, [RadiusX, RadiusY, t]);


    const handleChangeRadiusX = (event: Event, newValue: number | number[]) => {
        setRadiusX(newValue as number);
    };

    const handleChangeRadiusY = (event: Event, newValue: number | number[]) => {
        setRadiusY(newValue as number);
    }

    return (
        <div>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                Радиус по X:<br />
                <Slider min={10} max={250} defaultValue={RadiusX} aria-label="Radius X" value={RadiusX} onChange={handleChangeRadiusX} />
            </Stack>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                Радиус по Y:<br />
                <Slider min={10} max={250} defaultValue={RadiusY} aria-label="Radius Y" value={RadiusY} onChange={handleChangeRadiusY} />
            </Stack>

            <Box display="flex" alignItems="center" justifyContent="center">


                <Stage width={1000} height={1000}>
                    <Layer>
                        <Ellipse x={500} y={300} radiusX={RadiusX} radiusY={RadiusY} stroke="black" />
                        <Circle x={x} y={y} radius={10} fill="blue" />
                    </Layer>
                </Stage>
            </Box>

        </div>

    );
}

export default MoveEllipse;