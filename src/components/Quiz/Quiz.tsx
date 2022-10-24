import { FC, useState } from "react";
import { AllQuestions } from "./AllQuestions";
import { FunProps, Quest, ResultProps, StepProps } from "../../Types/Types";
import { LinearProgress } from "@mui/material";

const Result: FC<ResultProps> = ({ correctVar }) => {
    return (
        <div>
            <h1 className="text-center">Результат</h1>
            <p className="text-center">Вы правильно ответили на {correctVar} из {AllQuestions.length}</p>
            <p className="text-center">Ваша оценка: {Math.round((correctVar / AllQuestions.length) * 5)}</p>
        </div>
    );
}

const Test: FC<Quest & FunProps & StepProps> = ({ title, variants, onClickVar, step }) => {
    const percentage = Math.round(step / AllQuestions.length * 100);
    return (
        <>
            <div style={{ padding: "20px" }}>
                <LinearProgress variant="determinate" value={percentage} />
            </div>
            <h1 className="text-format">{title}</h1>
            <ul className="text-format ul-block">
                {variants.map((text, index) => (<li className="text-center li-block" onClick={() => onClickVar(index)} key={text}>{text}</li>))}
            </ul>
        </>
    );
}

const Quiz = () => {
    const [step, setStep] = useState(0);
    const [correct, setCorrect] = useState(0);
    const question = AllQuestions[step];

    const onClickVar = (index: number) => {
        setStep(step + 1);
        if (index === question.correctVariant) {
            setCorrect(correct + 1);
        }
    }

    return (
        <div>
            {step !== AllQuestions.length ? <Test step={step} {...question} onClickVar={onClickVar} /> : <Result correctVar={correct} />}
        </div>
    )
}

export default Quiz;