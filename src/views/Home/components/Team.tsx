import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

const Team: React.FC = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)'
  })

  const isMobile = useMediaQuery({
    query: '(max-width: 767px)'
  })

  return (
            <>   
                <section id="team" className="team-clean feature-section pb-0" style={{width:'100%'}}>
                    <TeamContainer className="container">
                        <div className="intro">
                            <h2 className="text-center">Team </h2>
                            <p className="text-center">Meet the $MSHLD squad</p>
                        </div>
                        <div className="row people d-flex flex-wrap flex-row justify-content-evenly align-items-center flex-grow-1">
                            <div className="col-md-4 col-lg-2 item d-flex flex-wrap flex-column justify-content-center align-items-center" data-aos="fade" data-aos-duration="1300">
                                <h3 className="name">Butler</h3>
                                <p className="title">Founder</p>
                                <p className="description">
                                    CEO and founder of moonshield
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-2 item d-flex flex-wrap flex-column justify-content-center align-items-center" data-aos="fade" data-aos-duration="1350">
                                <h3 className="name">Derka Derek</h3>
                                <p className="title">MARKETING MANAGER</p>
                                <p className="description">
                                    I am the marketing manager. I oversee the marketing campaigns for Moonshield.
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-2 item d-flex flex-wrap flex-column justify-content-center align-items-center" data-aos="fade" data-aos-duration="1350">
                                <h3 className="name">Jason (Hold4Life)</h3>
                                <p className="title">COMMUNITY MANAGER</p>
                                <p className="description">
                                    I am the community manager and the connective tissue behind the scenes at Moonshield. I have a ton of experience in 
                                    the crypto space.
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-2 item d-flex flex-wrap flex-column justify-content-center align-items-center" data-aos="fade" data-aos-duration="1350">
                                <h3 className="name">Burnie420</h3>
                                <p className="title">SOCIAL MEDIA MANAGER</p>
                                <p className="description">
                                    I am the social media manager. I oversee all social media platforms for Moonshield.
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-2 item d-flex flex-wrap flex-column justify-content-center align-items-center" data-aos="fade" data-aos-duration="1350">
                                <h3 className="name">Clayton</h3>
                                <p className="title">MEDIA RELATIONS MANAGER</p>
                                <p className="description">
                                    I am the Media Relations Manager. I reach out to form partnerships to expand the visibility of Moonshield.
                                </p>
                            </div>
                        </div>
                    </TeamContainer>
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

const TeamContainer = styled.div`
    background: linear-gradient( 0deg , rgb(0,0,0) 33%, rgba(50,50,50,0.79) 75%);padding: 3rem;
    border: 3px solid rgba(255,255,255,0.3);
    z-index: 3;
    position: relative;top: 3px;border-bottom: none;
  }
`

const DescriptionContainer = styled.div`
    background: radial-gradient(circle at 100% 50%, transparent 20%, rgba(255,255,255,.3) 21%, rgba(255,255,255,.3) 34%, transparent 35%, transparent), 
                radial-gradient(circle at 0% 50%, transparent 20%, rgba(255,255,255,.3) 21%, rgba(255,255,255,.3) 34%, transparent 35%, transparent) 0 -50px;
    background-color: var(--bg-black);
    background-size: 75px 100px;
  }
`
export default Team