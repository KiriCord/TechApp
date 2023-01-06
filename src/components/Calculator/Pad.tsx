import React, { FunctionComponent } from 'react';
import { Digit, Operator } from '../../Types/Types';
import Fab from '@mui/material/Fab';

interface PadProps {
    onDigitButtonClick: (digit: Digit) => void
    onPointButtonClick: () => void
    onOperatorButtonClick: (operator: Operator) => void
    onChangeSignButtonClick: () => void
    onEqualButtonClick: () => void
    onAllClearButtonClick: () => void
    onClearEntryButtonClick: () => void
    onMemoryRecallButtonClick: () => void
    onMemoryClearButtonClick: () => void
    onMemoryPlusButtonClick: () => void
    onMemoryMinusButtonClick: () => void
    onSqrt: () => void
    onSin: () => void
    onCos: () => void
    onTan: () => void
}


export const Pad: FunctionComponent<PadProps> = ({
    onDigitButtonClick,
    onPointButtonClick,
    onOperatorButtonClick,
    onChangeSignButtonClick,
    onEqualButtonClick,
    onAllClearButtonClick,
    onClearEntryButtonClick,
    onMemoryRecallButtonClick,
    onMemoryClearButtonClick,
    onMemoryPlusButtonClick,
    onMemoryMinusButtonClick,
    onSqrt,
    onSin,
    onCos,
    onTan
}) => {

    return (
        <div style={{display: "grid", gridTemplateColumns:"repeat(4, 100px)", gap:"10px", justifyContent: "center", alignItems:"center"}}> 
            <Fab size='large' style={{fontWeight: "bold"}} onClick={onAllClearButtonClick}>
                AC
            </Fab>
            <Fab size='large' style={{fontWeight: "bold"}} onClick={onClearEntryButtonClick}>
                C
            </Fab>
            <Fab size='large' style={{fontWeight: "bold"}} onClick={onSin}>
                SIN
            </Fab>
            <Fab size='large' style={{fontWeight: "bold"}} onClick={onCos}>
                COS
            </Fab>
            <Fab size='large' style={{fontWeight: "bold"}} onClick={onTan}>
                TAN
            </Fab>
            <Fab size='large' style={{fontWeight: "bold"}} onClick={onSqrt}>
                Sqrt
            </Fab>
            <Fab size='large' style={{fontWeight: "bold"}} onClick={onChangeSignButtonClick}>
                -/+
            </Fab>
            <Fab size='large'style={{fontWeight: "bold"}} onClick={() => onOperatorButtonClick('+')}>
                +
            </Fab>
            <Fab size='large' style={{fontWeight: "bold"}} onClick={() => onDigitButtonClick(7)}>
                7
            </Fab>
            <Fab size='large' style={{fontWeight: "bold"}} onClick={() => onDigitButtonClick(8)}>
                8
            </Fab>
            <Fab size='large' style={{fontWeight: "bold"}} onClick={() => onDigitButtonClick(9)}>
                9
            </Fab>
            <Fab size='large' style={{fontWeight: "bold"}} onClick={() => onOperatorButtonClick('-')}>
                -
            </Fab>
            <Fab size='large' style={{fontWeight: "bold"}} onClick={() => onDigitButtonClick(4)}>
                4
            </Fab>
            <Fab size='large' style={{fontWeight: "bold"}}onClick={() => onDigitButtonClick(5)}>
                5
            </Fab>
            <Fab size='large' style={{fontWeight: "bold"}} onClick={() => onDigitButtonClick(6)}>
                6
            </Fab>
            <Fab size='large' style={{fontWeight: "bold"}} onClick={() => onOperatorButtonClick('÷')}>
                ÷
            </Fab>
            <Fab size='large'style={{fontWeight: "bold"}}  onClick={() => onDigitButtonClick(1)}>
                1
            </Fab>
            <Fab size='large' style={{fontWeight: "bold"}} onClick={() => onDigitButtonClick(2)}>
                2
            </Fab>
            <Fab size='large' style={{fontWeight: "bold"}} onClick={() => onDigitButtonClick(3)}>
                3
            </Fab>
            <Fab size='large' style={{fontWeight: "bold"}} onClick={() => onOperatorButtonClick('×')}>
                ×
            </Fab>
            <Fab size='large' style={{fontWeight: "bold"}} onClick={onPointButtonClick}>
                .
            </Fab>
            <Fab size='large' style={{fontWeight: "bold"}} onClick={() => onDigitButtonClick(0)}>
                0
            </Fab>
            <Fab size='large' style={{fontWeight: "bold"}} onClick={onEqualButtonClick}>
                =
            </Fab>
        </div>
    )
}

export default Pad