import styled from "styled-components"
import Bgimg from "../assets/sc3-bg.png"
export const Section3 = () => {
    return (
        <Section3Container>
            <div className="left">
                <b>Listen from one of <br /> the best singers</b>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> uisque ullamcorper porttitor blandit. Praesent lorem <br /> magna, fring</p>
                <a href="/">Talk to us</a>
            </div>

            <img src={ Bgimg } alt="" />
        </Section3Container>
    )
}

const Section3Container = styled.div`
    height: 680px;
    width: 100%;
    background-color: #11024B;
    padding-left: 97px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;

    .left {
        b {
            display: block;
            font-size: 48px;
            line-height: 45px;
            padding-bottom: 11px;
        }

        p {
            font-size: 16px;
            line-height: 19px;
            padding-bottom: 22px;
        }
        
        a {
            display: inline-block;
            padding: 11px 35px;
            background: #3531A9;
            border-radius: 5px;
            color: white;

            font-size: 18px;
            line-height: 21px;
        }
    }
`