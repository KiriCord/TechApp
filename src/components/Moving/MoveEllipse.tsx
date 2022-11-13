import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

const Pi = Math.PI;

const MoveEllipse = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);


    return (
        <div>
            <Box display="flex" alignItems="center" justifyContent="center">
                <div style={{ height: 50, width: 50, backgroundColor: "#512555" }}></div>
            </Box>
        </div>

    );
}

export default MoveEllipse;