import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

const RoadMap: React.FC = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)'
  })

  const isMobile = useMediaQuery({
    query: '(max-width: 767px)'
  })

  return (
            <>   
                <section id="roadmap" className="feature-section bg-stars pb-0" style={{width:'100%'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-white">Roadmap</h2>
                                <h3 className="section-subheading text-muted">Here's what the $MSHLD Squad is working on</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="list-group timeline">
                                    <li className="list-group-item">
                                        <div className="timeline-image">
                                            <img className="rounded-circle img-fluid" data-aos="zoom-in" data-aos-duration="1400" src="assets/img/SOL-1.svg" style={{padding: '25px'}}></img>                                          
                                        </div>
                                        <div data-aos="fade" data-aos-duration="1200" data-aos-delay="400" className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4>May 7th</h4>
                                                <h4 className="subheading">dApp - Completed</h4>
                                            </div>
                                            <div className="timeline-body">
                                                <p>The Moon Shield DAPP will show the max transaction amount, total liquidity pool, total reward pool, total BNB in the liquidity pool, 
                                                    total BNB&nbsp;in Rewards Pool, and your $MSHLD balance.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item timeline-inverted">
                                        <div className="timeline-image">
                                            <img className="rounded-circle img-fluid" data-aos="zoom-in" data-aos-duration="1400" src="assets/img/mercurio.svg"></img>
                                        </div>
                                        <div data-aos="fade" data-aos-duration="1200" data-aos-delay="400" className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4>May 10th</h4>
                                                <h4 className="subheading">New website - Completed</h4>
                                            </div>
                                            <div className="timeline-body">
                                                <p>Moonshield will have its own unique website and all stats and a professional modern look!</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="timeline-image">
                                            <img className="rounded-circle img-fluid" data-aos="zoom-in" data-aos-duration="1400" src="assets/img/venus.svg" style={{padding: '35px'}}></img>                                          
                                        </div>
                                        <div data-aos="fade" data-aos-duration="1200" data-aos-delay="400" className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4>May 15th</h4>
                                                <h4 className="subheading">Solidity Audit - Completed</h4>
                                            </div>
                                            <div className="timeline-body">
                                                <p>
                                                    To prove our commitment to security and the safety of user funds, we did an audit with Solidity Finance. Solidity Finance is a smart contract 
                                                    auditing service, which protects over $700M in on-chain value across more than 150 projects.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="timeline-image">
                                            <img className="rounded-circle img-fluid" data-aos="zoom-in" data-aos-duration="1400" src="assets/img/MARTE.svg" style={{padding: '35px'}}></img>                                            
                                        </div>
                                        <div data-aos="fade" data-aos-duration="1200" data-aos-delay="400" className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4>June</h4>
                                                <h4 className="subheading">Farming Protocol</h4>
                                            </div>
                                            <div className="timeline-body">
                                                <p>MoonShield will have its own Crypto Farming protocol that burns $MSHLD!</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item timeline-inverted">
                                        <div className="timeline-image">
                                            <img className="rounded-circle img-fluid" data-aos="zoom-in" data-aos-duration="1400" src="assets/img/JUPITER.svg" style={{padding: '35px'}}></img>                                            
                                        </div>
                                        <div data-aos="fade" data-aos-duration="1200" data-aos-delay="400" className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4>July</h4>
                                                <h4 className="subheading">NFT</h4>
                                            </div>
                                            <div className="timeline-body">
                                                <p>
                                                    NFTs are a huge part of DEFI and we definitely won’t miss out on this one! &nbsp;Moon Shield will have its own unique Space NFTs!
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="timeline-image">
                                            <img className="rounded-circle img-fluid" data-aos="zoom-in" data-aos-duration="1400" src="assets/img/SATURNO.svg" style={{borderRadius: '0px ! important', padding: '5px'}}></img>
                                        </div>
                                        <div data-aos="fade" data-aos-duration="1200" data-aos-delay="400" className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4>August</h4>
                                                <h4 className="subheading">NFTs Market</h4>
                                            </div>
                                            <div className="timeline-body">
                                                <p>
                                                    Later in the year, Moon Shield will have its own NFT Marketplace, where users will be able to create, buy and sell NFTs and pay in $MSHLD.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="timeline-image">
                                            <img className="rounded-circle img-fluid" data-aos="zoom-in" data-aos-duration="1400" src="assets/img/URANO.svg" style={{padding: '35px'}}></img>
                                        </div>
                                        <div data-aos="fade" data-aos-duration="1200" data-aos-delay="400" className="timeline-panel p-lg-4 psm-0">
                                            <div className="timeline-heading">
                                                <h4>September</h4>
                                                <h4 className="subheading">Moonshield DEX</h4>
                                            </div>
                                            <div className="timeline-body">
                                                <p>Add a DEX&nbsp;to our Farming Platform</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item timeline-inverted">
                                        <div className="timeline-image">
                                            <img className="rounded-circle img-fluid" data-aos="zoom-in" data-aos-duration="1400" src="assets/img/NEPTUNO.svg" style={{borderRadius: '0px ! important', padding: '5px'}}></img>
                                        </div>
                                        <div data-aos="fade" data-aos-duration="1200" data-aos-delay="400" className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4>October</h4>
                                                <h4 className="subheading">Online shop</h4>
                                            </div>
                                            <div className="timeline-body">
                                                <p>An online Crypto payment based shop, where items are bought with $MSHLD. Even if a user doesn’t hold MSHLD- 
                                                    no problem, our code will convert their BNB into $MSHLD.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
}

const StyledLogo = styled(NavLink)`
  align-items: start;
  display: flex;
  justify-content: left;
  margin: 0;
  min-height: 44px;
  min-width: 44px;
  padding: 0;
  text-decoration: none;
`

const SectionContainer = styled.div`
    background: linear-gradient(var(--deep-purple) 50%, rgba(255,255,255,0) 0) 0 0, 
                radial-gradient(circle closest-side, var(--bg-primary) 53%, rgba(255,255,255,0) 0) 0 0, 
                radial-gradient(circle closest-side, var(--bg-primary) 50%, rgba(255,255,255,0) 0) 55px 0 var(--bg-black);
    background-size: 110px 200px;
    background-repeat: repeat-x;
  }
`

const DescriptionContainer = styled.div`
    background: radial-gradient(circle at 100% 50%, transparent 20%, rgba(255,255,255,.3) 21%, rgba(255,255,255,.3) 34%, transparent 35%, transparent), 
                radial-gradient(circle at 0% 50%, transparent 20%, rgba(255,255,255,.3) 21%, rgba(255,255,255,.3) 34%, transparent 35%, transparent) 0 -50px;
    background-color: var(--bg-black);
    background-size: 75px 100px;
  }
`
export default RoadMap