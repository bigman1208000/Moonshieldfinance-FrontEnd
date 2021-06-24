import React from 'react'
import { NavLink } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import HighSecure from './components/HighSecure'
import Audited from './components/Audited'
import Tokenomics from './components/Tokenomics'

const MidPanelInfo: React.FC = () => {

  return (
            <>   
                <SectionPanel className="feature-section bg-stars" style={{width:'100%',paddingLeft:'0px', paddingRight:'0px'}}>
                    <div className="container">
                        <HighSecure />
                        <Audited />
                        <Tokenomics />
                    </div>
                </SectionPanel>
            </>
        );
}


const SectionPanel = styled.div`
    /*background: #000000;*/
    /*background: -webkit-linear-gradient(to right, #000000, #434343);*/
    /*background: linear-gradient(to right, #000000, #434343);*/
    /*background-image: linear-gradient( 99.9deg, rgba(27,24,31,1) 21.2%, var(--space-cadet) 84.8% );*/
  }
`

const SectionContainer = styled.div`
    border-bottom: 5px solid #fff;
    border-top: 5px solid rgba(255,255,255,0.2);
  }
`

export default MidPanelInfo