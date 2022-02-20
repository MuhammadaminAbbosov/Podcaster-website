import styled from "styled-components"
import BgImg from "../assets/background.png"
import BtnIco from "../assets/btnico.svg"


export const Section1 = () => {
    return (
        <Section1Container>
            <div className="content">
                <b className="night">Night Podcast</b>
                <p className="listen">Listen to our Podcast at night after <br /> a tiring day</p>
                <button >
                    <img src={BtnIco} alt="" />
                    <div className="btn__left">
                        <p>We are now available on </p>
                        <p>Apple podcasts</p>
                    </div>
                </button>
            </div>
        </Section1Container>
    )
}

const Section1Container = styled.div`
    height: 100vh;
    background-image: url(${BgImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 67px;
    .content {
        margin-top: 172px;

        .night {
            font-weight: bold;
            font-size: 64px;
            line-height: 76px;

            color: #FFFFFF;
        }

        .listen {
            font-weight: 500;
            font-size: 36px;
            line-height: 43px;
            color: #FFFFFF;
            padding-bottom: 15px;
        }

        button {
            padding: 9px 5px 9px 12px;
            display: flex;
            align-items: center;
            gap: 4px;
            background: #3531A9;
            border-radius: 10px;
            border: none;
            cursor: pointer;

            .btn__left {
                p {
                    text-align: left;
                    color: #FFFFFF;
                    font-size: 12px;
                    line-height: 14px;

                    :first-child {
                        font-weight: 500;
                    }

                    :last-child {
                        font-weight: bold;
                        font-size: 18px;
                        line-height: 21px;
                    }
                }
            }
        }
    }
`