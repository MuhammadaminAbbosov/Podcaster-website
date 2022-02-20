import styled from "styled-components"

export const Card = (props) => {
    return (
        <CardContainer>
            <img src={props.ico} alt="" />
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <b>{props.money}</b>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    padding: 34px 17px;
    background: linear-gradient(180deg, #3531A9 0%, #4303A4 100%);
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 275px;
    height: 340px;
    color: white; 
    h3 {
        text-align: center;
        font-size: 30px;
        line-height: 36px;
    }

    p {
        text-align: center;
        font-size: 16px;
        line-height: 19px;
        padding-bottom: 24px;
    }

    b {
        font-size: 36px;
        line-height: 43px;
    }
`