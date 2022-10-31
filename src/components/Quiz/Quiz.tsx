import { FC, useState } from "react";
import { AllQuestions } from "./AllQuestions";
import { FunProps, Quest, ResultProps, StepProps } from "../../Types/Types";
import { Box, LinearProgress, Typography, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

const Result = ({ correctVar }: ResultProps) => (
    <Box>
        <Typography sx={{ margin: "15px" }} align="center" variant="h3">Результат</Typography>
        <Typography align="center" variant="body1">Вы правильно ответили на {correctVar} из {AllQuestions.length}</Typography>
        <Typography align="center" variant="body1">Ваша оценка: {Math.round((correctVar / AllQuestions.length) * 5)}</Typography>
    </Box>
);

const Test: FC<Quest & FunProps & StepProps> = ({ title, variants, onClickVar, step }) => {
    const percentage = Math.round(step / AllQuestions.length * 100);
    return (
        <>
            <Typography align="center" variant="h6">{title}</Typography>
            <List>
                {variants.map((text, index) =>
                (<ListItem divider onClick={() => onClickVar(index)} key={text}>
                    <ListItemButton style={{ textAlign: "center" }} >
                        <ListItemText primary={text}></ListItemText>
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
            <Box style={{ padding: "20px" }}>
                <LinearProgress variant="determinate" value={percentage} />
            </Box>
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