import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

const Community: React.FC = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)'
  })

  const isMobile = useMediaQuery({
    query: '(max-width: 767px)'
  })

  const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  margin-left: 0px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
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

const StyledLogoWrapper = styled.div`
  padding-left: 25%;
  @media (max-width: 400px) {
    width: auto;
  }
`

  return (
            <>    
                <section id="features" className="bg-primary feature-section bg-stars" style={{width:'100%'}}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-lg-2">
                                <div className="p-5">
                                    <img data-aos="fade" data-aos-duration="1250" className="img-fluid feature-img" src="assets/img/community-2.svg"></img>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-1 feature-body carbon-bg-gray" data-aos="slide-left" data-aos-duration="800">
                                <div className="p-5">
                                    <h2 className="display-4 tx-bg-fx tx-bg-no-fx border-dot">Fair Launch &amp; Community Built</h2>
                                    <p className="tx-bg-fx">
                                        Moonshield is a community driven, fair-launched token with no pre-sale. The development team added 90% of the 
                                        token supply to the LP on Pancake Swap and participated in the fair-launch with everyone else. The Dev team 
                                        received no special perks. They are equal to all other investors in $MSHLD and renounced their ownership.&nbsp; 
                                        Moonshield is 100% rug proof, the smart contract has been audited twice by TechRate &amp; Solidity Finance. More 
                                        importantly, we have a very strong and supportive community! Our community helps to promote Moonshield and 
                                        increase awareness to new investors about our passive income generating model.
                                    </p>
                                </div>
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

export default Community