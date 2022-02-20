import styled from "styled-components"
import { Card } from "./card"
import CardIco from "../assets/cardico.svg"

export const Cards = () => {

    const CardData = [
        {
            ico: CardIco,
            title: "Starter Plan",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. uisque ullamcorper porttitor blandit. Praesent lorem magna, fring`,
            money: "12$/mo"
        },
        {
            ico: CardIco,
            title: "Standard Plan",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. uisque ullamcorper porttitor blandit. Praesent lorem magna, fring`,
            money: "17$/mo"
        },
        {
            ico: CardIco,
            title: "Premium Plan",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. uisque ullamcorper porttitor blandit. Praesent lorem magna, fring`,
            money: "22$/mo"
        },
    ]
    return (
        <CardsContainer>
            {CardData.map((card, index) => <Card key={index} ico={card.ico} title={card.title} text={card.text} money={card.money} />)}
        </CardsContainer>
    )
}

const CardsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`