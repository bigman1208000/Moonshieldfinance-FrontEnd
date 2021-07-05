import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

const AntiDump: React.FC = () => {

  return (
            <>   
                <SectionPanel className="bg-primary feature-section bg-stars">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-lg-1">
                                <div className="p-5">
                                    <img data-aos="fade" data-aos-duration="1250" className="img-fluid feature-img" src="assets/img/no-whales-1.svg"></img>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-2 feature-body carbon-bg-gray" data-aos="slide-right" data-aos-duration="800">
                                <div className="p-5">
                                    <h2 className="display-4 tx-bg-fx tx-bg-no-fx border-dot">Anti PUMP, DUMP &amp; EXIT Whales</h2>
                                    <p className="tx-bg-fx">
                                        Buys or sells of more than&nbsp;0.05% of the total supply will be rejected. Whales who make a 
                                        transfer (between 2 wallets) that is larger than 0.05% of the total supply will be charged 2 BNB.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionPanel>
            </>
        );
}


const SectionPanel = styled.div`
    border-bottom: 5px solid #fff;
    border-top: 5px solid rgba(255,255,255,0.2);
    width: 100%;
  }
`

export default AntiDump