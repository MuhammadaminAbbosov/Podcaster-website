import styled from "styled-components"
import Logo from "../assets/logo.svg"
import Logo1 from "../assets/logo1.svg"

export const Footer = () => {
    return (
        <FooterContainer>
            <div className="footer__main">
                <nav>
                    <a href="/">Navigation</a>
                    <a href="/">Home</a>
                    <a href="/">Articles</a>
                    <a href="/">Blog</a>
                </nav>
                <nav>
                    <a href="/">Our socials</a>
                    <a href="/">Instagram</a>
                    <a href="/">Spotify</a>
                    <a href="/">Facebook</a>
                </nav>

                <div className="logo">
                    <img className="logo1" src={Logo1} alt="" />
                    <img className="logo2" src={Logo} alt="" />
                </div>
                <nav>
                    <a href="/">Usefull links</a>
                    <a href="/">Privacy policy</a>
                    <a href="/">Terms & conditions</a>
                    <a href="/">Exchange and return policy</a>
                </nav>
                <nav>
                    <a href="/">Information</a>
                    <a href="/">About us</a>
                    <a href="/">Contact us</a>
                    <a href="/">Blogs</a>
                    <a href="/">FAQ</a>
                </nav>

            </div>
            <div className="footer__bottom">
                <p>copyright 2021 all rights reserved</p>
            </div>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    height: 465px;
    background-color: #11024B;
    display: flex;
    flex-direction: column;
    
    .footer__main {
        padding: 160px 100px 72px 108px;
        height: 432px;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 3fr 1fr 1fr;
        justify-items: center;

        nav {
            display: flex;
            flex-direction: column;
            gap: 21px;
            a {
                display: block;
                font-weight: 500;
                font-size: 18px;
                line-height: 21px;
                color: white;

                :first-child {
                    color: #3531A9;
                    font-weight: bold;
                }
            }
        }

        .logo {
            margin: 20px 80px;
            position: relative;
            .logo1 {
                position: relative;
                z-index: 1;
            }

            .logo2 {
                position: absolute;
                left: 20px;
                top: -20px;
            }
        }
    }


    .footer__bottom {
        height: 33px;
        width: 100%;
        background-color: #09002B;
        padding-top: 9px;

        p {
            font-weight: 500;
            font-size: 10px;
            line-height: 12px;
            color: #C4C4C4;
            text-align: center;
        }
    }

`