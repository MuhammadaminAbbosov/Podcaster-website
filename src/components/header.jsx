import styled from "styled-components"
import Logo from "../assets/logo.svg"
import Logo1 from "../assets/logo1.svg"
import Facebook from "../assets/facebook.svg"
import Spotify from "../assets/spotify.svg"
import Instagram from "../assets/instagram.svg"

export const Header = () => {
    return (
        <HeaderContainer>
            <nav>
                <a href="/">Home</a>
                <a href="/">Articles</a>
                <a href="/">Blog</a>
            </nav>

            <div className="logo">
                <img className="logo1" src={Logo1} alt="" />
                <img className="logo2" src={Logo} alt="" />
            </div>

            <div className="social-media">
                <a href="/">
                    <img src={Instagram} alt="" />
                </a>
                <a href="/">
                    <img src={Facebook} alt="" />
                </a>
                <a href="/">
                    <img src={Spotify} alt="" />
                </a>
            </div>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    height: 90px;
    width: 100%;
    padding: 34px 284px 0 108px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        display: flex;
        align-items: center;
        gap: 117px;

        a {
            font-weight: bold;
            font-size: 18px;
            line-height: 21px;

            color: #FFFFFF;
        }

    }

    .logo {
        position: relative;

        .logo1 {
            position: relative;
            z-index: 55;
        }

        .logo2 {
            position: absolute;
            top: -20px;
            right: 15px;
        }
    }

    .social-media {
        display: flex;
        align-items: center;
        gap: 24px;

        img {
            padding: 6px;
            background-color: #4303A4;
            border-radius: 50%;
        }
    }
`