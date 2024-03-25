import React, {useEffect, useLayoutEffect, useState} from 'react';
import { Layout } from 'antd';
import {QuizCard} from "./QuizCard";
import {QuizQuestionCard} from "./QuizQuestionCard";
import {getQuizById, getQuizzes} from "../api";
const { Content } = Layout;

const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#282c34',
    height: '10vh',
    width:'100%',

};




function MyContent() {
    const [quizSelected, setQuizSelected] = useState(false);
    const [cardToBeShown, setCardToBeShown] = useState(null);
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        async function fetchQuizzes() {
            try {
                const response = await getQuizzes();
                setQuizzes(response);
            } catch (error) {
                console.error('Error:', error);
            }
        }
        fetchQuizzes()
    }, [quizSelected]);

    useEffect(() => {
        async function fetchQuizData() {
            if (cardToBeShown) {
                try {
                    const response = await getQuizById(cardToBeShown);
                    setQuizzes(response);
                } catch (error) {
                    console.error('Error:', error);
                }
            }
        }

        fetchQuizData();
    }, [cardToBeShown,cardToBeShown]);
    // TODO проверить токен авторизации
    return (
        <>
            <Content
                style={!quizSelected
                ? {...contentStyle,display: "grid",gridTemplateColumns: "repeat(3, 1fr)",gap: "10px"}
                : {...contentStyle,display:'flex',justifyContent:'center',alignItems:'center'}}
            >
                {!quizSelected && quizzes && quizzes.length > 0 &&
                    quizzes.map(item=> <QuizCard   id={item.id}
                                                   key={item.id}
                                                   title={item.name}
                                                   setQuizSelected={setQuizSelected}
                                                   setCardToBeShown={setCardToBeShown}
                                                   cardToBeShown={cardToBeShown}
                                                />
                )}
                {cardToBeShown && <QuizQuestionCard questions={quizzes.questions}
                                                    title={quizzes.name}
                                                    id={quizzes.id}
                                                    key={quizzes.id}
                                                    setQuizSelected={setQuizSelected}
                                                    setCardToBeShown={setCardToBeShown}/>}

            </Content>

        </>
    );
}

export default MyContent;