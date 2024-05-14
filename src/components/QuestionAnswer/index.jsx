import S from "./styles.module.css"

export function QuestionAnswer(props){
    return(
        <button className={S.container}
        onClick={(event) => props.handleAnswerQuestion(event, props.questions, props.answer)}
        >
            {props.answer}
        </button>
    )
}
