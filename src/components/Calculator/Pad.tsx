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
            <button onClick={onMemoryRecallButtonClick}>
                MR
            </button>
            <button onClick={onMemoryClearButtonClick}>
                MC
            </button>
            <button onClick={onMemoryPlusButtonClick}>
                M+
            </button>
            <button onClick={onMemoryMinusButtonClick}>
                M-
            </button>
            <button onClick={onAllClearButtonClick}>
                AC
            </button>
            <button onClick={onClearEntryButtonClick}>
                C
            </button>
            <button onClick={() => onDigitButtonClick(7)}>
                7
            </button>
            <button onClick={() => onDigitButtonClick(8)}>
                8
            </button>
            <button onClick={() => onDigitButtonClick(9)}>
                9
            </button>
            <button onClick={() => onDigitButtonClick(4)}>
                4
            </button>
            <button onClick={() => onDigitButtonClick(5)}>
                5
            </button>
            <button onClick={() => onDigitButtonClick(6)}>
                6
            </button>
            <button onClick={() => onDigitButtonClick(1)}>
                1
            </button>
            <button onClick={() => onDigitButtonClick(2)}>
                2
            </button>
            <button onClick={() => onDigitButtonClick(3)}>
                3
            </button>
            <button onClick={() => onOperatorButtonClick('+')}>
                +
            </button>
            <button onClick={() => onDigitButtonClick(0)}>
                0
            </button>
            <button onClick={() => onOperatorButtonClick('×')}>
                ×
            </button>
            <button onClick={() => onOperatorButtonClick('-')}>
                -
            </button>
            <button onClick={onPointButtonClick}>
                .
            </button>
            <button onClick={() => onOperatorButtonClick('÷')}>
                ÷
            </button>
            <button onClick={onChangeSignButtonClick}>
                -/+
            </button>
            <button onClick={onEqualButtonClick}>
                =
            </button>
        </div>
    )
}

export default Pad