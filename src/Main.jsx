import React from "react";
import styled from "styled-components";
import {ReactComponent as Logo} from "./assets/Logo.svg";
import {ReactComponent as EthLogo} from "./assets/Blue.svg";
import {ReactComponent as OIcon} from "./assets/Mask group.svg";
import {ReactComponent as Left} from "./assets/left.svg";
import {ReactComponent as Right} from "./assets/right.svg";

const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 50px 20px;
`
const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const LinkContent = styled.div`
  max-width: 415px;
  width: 100%;
  margin: 0 auto;
`
const UpText = styled.div`
    margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-main, #8EC300);
  /* Text/XS */
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 16px;
`
const LinksContent = styled.div`
    display: flex;
  align-items: center;
  justify-content: space-between;
`
const Link = styled.a`
  color: var(--text-main, #E5E8DF);
  /* Text/M */
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
`
const LoginContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 160px;
  margin: 0;
`
const LoginLink = styled.a`
  color: var(--accent-yellow, #E8CB3C);
  /* Text/M */
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  margin-left: 26px;
  margin: 0;
`
const MainBanner = styled.div`
    position: relative;
  height: 420px;
  margin-top: 40px;
`
const MainBannerText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 56px;
`
const MainBannerButton = styled.button`
  display: flex;
  padding: 32px 52px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex: 1 0 0;
  border-radius: 24px;
  background: var(--accent-main, #8EC300);
  width: 456px;
  height: 96px;
  color: var(--text-main, #E5E8DF);
  text-align: center;
  /* Title/M-Regular */
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin: 0 auto;
  margin-top: 44px;
`
const MainBannerDescr = styled.p`
  color: var(--text-main, #E5E8DF);
  text-align: center;
  /* Text/L */
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  margin-top: 16px;
`
const MainBannerTitle = styled.p`
  color: var(--text-main, #E5E8DF);
  /* Header/L */
  font-size: 58px;
  font-style: normal;
  font-weight: 400;
  line-height: 72px;
  margin-left: 16px;
`

const Main = () => {
    return (
        <Container>
            <Navigation>
                <Logo/>
                <LinkContent>
                    <UpText>Soon</UpText>
                    <LinksContent>
                        <Link>Vaults</Link>
                        <Link>Dashboard</Link>
                        <Link>Docs</Link>
                    </LinksContent>
                </LinkContent>
                <LoginContent>
                    <EthLogo style={{margin: 0}}/>
                    <LoginLink>Connect wallet</LoginLink>
                </LoginContent>
            </Navigation>

            <MainBanner>
                <Left style={{position: "absolute", left: 0, top:0}}/>
                <Right style={{position: "absolute", right: 0, bottom:0}}/>

                <MainBannerText>
                    <OIcon/> <MainBannerTitle>Performance fees</MainBannerTitle>
                </MainBannerText>
                <MainBannerDescr>Low-cost yield aggregator. Lower commissions, higher profits. Zap from any token.</MainBannerDescr>
                <MainBannerButton>
                    Get started
                </MainBannerButton>
            </MainBanner>
        </Container>
    )
}

export default Main;