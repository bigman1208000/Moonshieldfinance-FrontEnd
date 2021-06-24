import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

const Reflection: React.FC = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)'
  })

  const isMobile = useMediaQuery({
    query: '(max-width: 767px)'
  })

  return (
            <>   
                <SectionPanel className="bg-secondary feature-section carbon-bg-gray">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-lg-2">
                                <div className="p-5">
                                    <img data-aos="fade" data-aos-duration="1250" className="img-fluid feature-img" src="assets/img/money-fly-7.svg"></img>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-1 feature-body carbon-bg-light" data-aos="slide-left" data-aos-duration="800">
                                <div className="p-5">
                                    <h2 className="display-4 tx-bg-fx tx-bg-no-fx border-dot">Reflection</h2>
                                    <p className="tx-bg-fx">
                                        2% of every buy/sell or transfer transaction is redistributed to all $MSHLD holders. The burn address is also a holder, 
                                        thus each transaction helps to deflate the supply.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionPanel>
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

const SectionPanel = styled.div`
    border-bottom: 5px solid #fff;
    width: 100%;
  }
`

const DescriptionContainer = styled.div`
    background: radial-gradient(circle at 100% 50%, transparent 20%, rgba(255,255,255,.3) 21%, rgba(255,255,255,.3) 34%, transparent 35%, transparent), 
                radial-gradient(circle at 0% 50%, transparent 20%, rgba(255,255,255,.3) 21%, rgba(255,255,255,.3) 34%, transparent 35%, transparent) 0 -50px;
    background-color: var(--bg-black);
    background-size: 75px 100px;
  }
`
export default Reflection