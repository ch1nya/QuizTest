import {Alert, Button, Card} from "antd";
import {useEffect, useState} from "react";
import {sendAnswers} from "../api";

export const QuizQuestionCard = (props) => {
    const {questions} = props
    const [rightAnswers, setRightAnswers] = useState(0);
    const [answersToSend, setAnswersToSend] = useState([]);
    const [showError, setShowError] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    // const indexHandler = () =>{
    //     console.log(answersToSend)
    //     if (currentQuestionIndex < props.questions.length - 1) {
    //         setCurrentQuestionIndex((prev) => prev + 1);
    //     } else {
    //         sendAnswers(answersToSend,props.setCardToBeShown) //TODO replace with ID
    //         props.setQuizSelected(false)
    //         props.setCardToBeShown(null)
    //
    //     }
    // }
    //
    // const handleAnswerClick = (answer) => {
    //     setAnswersToSend((prev) => [...prev, answer]);
    //     console.log(answer,'ans')
    //     indexHandler()
    // };
    // useEffect(() => {
    // }, [answersToSend]);
    const handleAnswerClick = (answer) => {
        if (answer.toLowerCase().includes('correct')) {
            setRightAnswers(prev => prev + 1);
        } else {
            setShowError(true);
        }
        const updatedAnswers = [...answersToSend, answer];
        setAnswersToSend(updatedAnswers);
        indexHandler(updatedAnswers);
    };

    const indexHandler = (updatedAnswers) => {
        if (currentQuestionIndex < props.questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            sendAnswers(updatedAnswers, props.id);
            props.setQuizSelected(false);
            props.setCardToBeShown(null);
        }
    };



    return (
        <>
            <Card
                    key={props.id}
                    title={props.title}
                    bordered={false}
                    style={{
                        minWidth: "fit-content",
                        minHeight: 'fit-content',
                        width: "60%",
                        height: '40%',
                        margin: 'auto',
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <h6>Количество верных ответов:{rightAnswers}</h6>
                {showError && (
                    <Alert
                        message="The answer is not correct"
                        type="error"
                        showIcon
                    />
                )}
                {questions &&
                    questions.length > 0 &&
                    questions[currentQuestionIndex] && (
                        <>
                            <h2>
                                {questions[currentQuestionIndex].question}
                            </h2>
                            {questions[currentQuestionIndex].answers.map(
                                (answer, index) => (
                                    <Button
                                        onClick={() =>
                                            handleAnswerClick(answer)
                                        }
                                        style={{ margin: "1rem" }}
                                        key={index}
                                    >
                                        {answer.split(" - ")[0]}
                                    </Button>
                                )
                            )}
                        </>
                    )}
                </Card>
                </>
    )
}