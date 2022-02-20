import styled from "styled-components"
import TopImg from "../assets/Image-2.png"
import Bottom1Img from "../assets/Image.png"
import Bottom2Img from "../assets/Image-1.png"

export const Section4 = () => {
    return (
        <Section4Container>
            <div className="top">
                <b>Hear what others say</b>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. uisque <br /> ullamcorper porttitor blandit. Praesent lorem magna, fring</p>
                <img src={TopImg} alt="" />
            </div>

            <div className="bottom">
                <div className="bottom-left">
                    <b>Listen on desktop or mobile</b>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. uisque ullamcorper porttitor blandit. <br /> Praesent lorem magna, fring</p>
                </div>

                <div className="bottom-right">
                    <img src={Bottom1Img} alt="" />
                    <img className="absolute" src={Bottom2Img} alt="" />
                </div>
            </div>
        </Section4Container>
    )
}

const Section4Container = styled.div`
    padding: 111px 60px 200px 97px;
    color: white;
    .top {
        display: flex;
        flex-direction: column;
        align-items: center;

        b {
            font-size: 48px;
            line-height: 45px;
            padding-bottom: 7px;
        }
        p {
            font-size: 16px;
            line-height: 19px;
            padding-bottom: 66px;
        }

        img {
            padding-bottom: 233px;
        }
    }

    .bottom {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;

        b {
            font-size: 40px;
            line-height: 45px;
        }

        p {
            font-size: 14px;
            line-height: 19px;
        }

        .bottom-right {
            position: relative;

            .absolute {
                position: absolute;
                bottom: -100px;
                left: -100px;
            }
        }

    }
`