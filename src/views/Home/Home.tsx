import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import Page from '../../components/Page'
import AccountButton from '../../components/TopBar/components/AccountButton'
import TopBar from '../../components/TopBar'
import Header from './components/Header'
import HeroHowTo from './components/Hero'
import Community from './components/Community'
import LiquidityPool from './components/LiquidityPool'
import EarnBNB from './components/EarnBNB'
import AntiDump from './components/AntiDump'
import Reflection from './components/Reflection'
import MidPanelInfo from '../../components/MidPanel/MidPanelInfo'
import RoadMap from './components/RoadMap'
import Team from './components/Team'
import Footer from '../../components/Footer'

const StyledContainer = styled.div`
  text-align: center;
  box-sizing: border-box;
  margin: auto;
  max-width: 400px;
  width: 100%;
  padding: 30px;
  padding-bottom: 40px;
  position: relative;
  border: 1px solid #ffc107;
  border-radius: 20px;
  font-family: 'Nunito';
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 10%), 0 6px 20px 0 rgb(0 0 0 / 19%);
`

const StyledIcon = styled.img`
  width: 100px;
`

const StyledDescription = styled.div`
  border: 1px solid #ffc107;
  margin-top: 15px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 10%), 0 6px 20px 0 rgb(0 0 0 / 19%);
`

const StyledStatus = styled.div`
  color: #ffc107;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 20px;
`

const StyledAccountButton = styled.div`
  margin-top: 20px;
  align-items: center;
  width: auto;
  @media (max-width: 767px) {
    justify-content: center;
    width: auto;
  }
`

const Home: React.FC = () => {
  return (
          <>
          <div style={{marginTop:'-1150px'}}>
              <Page>
                <Header />
                <HeroHowTo />
                <Community />
                <LiquidityPool />
                <EarnBNB />
                <AntiDump />
                <Reflection />
                <MidPanelInfo />
                <Team />
                <RoadMap />
                <Footer />
                <TopBar />
              </Page>
            </div>
          </>
  )
}

export default Home
