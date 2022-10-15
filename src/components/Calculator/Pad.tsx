import React, { FunctionComponent } from 'react';
import { Digit, Operator } from '../../Types/Types';

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
    onMemoryMinusButtonClick
}) => {

    return (
        <div className='buttonContainer'>
            <button className='buttonCalc' onClick={onMemoryRecallButtonClick}>
                MR
            </button>
            <button className='buttonCalc' onClick={onMemoryClearButtonClick}>
                MC
            </button>
            <button className='buttonCalc' onClick={onMemoryPlusButtonClick}>
                M+
            </button>
            <button className='buttonCalc' onClick={onMemoryMinusButtonClick}>
                M-
            </button>
            <button className='buttonCalc' onClick={onAllClearButtonClick}>
                AC
            </button>
            <button className='buttonCalc' onClick={onClearEntryButtonClick}>
                C
            </button>
            <button className='buttonCalc' onClick={() => onDigitButtonClick(7)}>
                7
            </button>
            <button className='buttonCalc' onClick={() => onDigitButtonClick(8)}>
                8
            </button>
            <button className='buttonCalc' onClick={() => onDigitButtonClick(9)}>
                9
            </button>
            <button className='buttonCalc' onClick={() => onDigitButtonClick(4)}>
                4
            </button>
            <button className='buttonCalc' onClick={() => onDigitButtonClick(5)}>
                5
            </button>
            <button className='buttonCalc' onClick={() => onDigitButtonClick(6)}>
                6
            </button>
            <button className='buttonCalc' onClick={() => onDigitButtonClick(1)}>
                1
            </button>
            <button className='buttonCalc' onClick={() => onDigitButtonClick(2)}>
                2
            </button>
            <button className='buttonCalc' onClick={() => onDigitButtonClick(3)}>
                3
            </button>
            <button className='buttonCalc' onClick={() => onOperatorButtonClick('+')}>
                +
            </button>
            <button className='buttonCalc' onClick={() => onDigitButtonClick(0)}>
                0
            </button>
            <button className='buttonCalc' onClick={() => onOperatorButtonClick('×')}>
                ×
            </button>
            <button className='buttonCalc' onClick={() => onOperatorButtonClick('-')}>
                -
            </button>
            <button className='buttonCalc' onClick={onPointButtonClick}>
                .
            </button>
            <button className='buttonCalc' onClick={() => onOperatorButtonClick('÷')}>
                ÷
            </button>
            <button className='buttonCalc' onClick={onChangeSignButtonClick}>
                -/+
            </button>
            <button className='buttonCalc' onClick={onEqualButtonClick}>
                =
            </button>
        </div>
    )
}

export default Pad