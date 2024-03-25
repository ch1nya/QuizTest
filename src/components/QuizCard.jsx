import {Button, Card} from "antd";
import Meta from "antd/es/card/Meta";

export function QuizCard(props) {

    const ClickHandler=(e)=>{
        props.setCardToBeShown(props.id)
        props.setQuizSelected(true)
    }




    return (
        <><Card
            style={{
                width: "15rem",
                height: "25rem",
                border: 'solid 1px #3e95ff',
                display:'grid',
                textAlign: "center",
                margin:'3rem auto',
            }}
            cover={
                <img
                    src="https://media.istockphoto.com/id/1290210769/vector/quiz-time-neon-sign-style-text.jpg?s=612x612&w=0&k=20&c=pfeOdmUD4bYS-LZUuC0f1PDOMU2YNhngvzoUuHW20us="
                />
            }

            actions={[
                <Button
                         onClick={(e)=>ClickHandler(e)}
                         type="primary"
                         data-id={props.id}
                >Take a quiz</Button>,
            ]}
            key={props.id}
        >
            <Meta
                title={props.title}
                // description={`Количество вопросов:`}
            />
        </Card>
        </>
    )
}