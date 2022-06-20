import React from 'react'
import styled from 'styled-components'
import Section from './Section'



function Home() {
  return (
    <Component>
      <Section
        title="MODEL 3"
        DESCRIPTION="Order Online for Touchless Delivery"
        LEFTBUTTON="CUSTOM ORDER"
        RIGHTBUTTON="EXISTING INVENTRY"
        BACKGROUNDIMG={"model-3.jpg"}
        />
      <Section
        title="MODEL Y"
        DESCRIPTION="Order Online for Touchless Delivery"
        LEFTBUTTON="CUSTOM ORDER"
        RIGHTBUTTON="EXISTING INVENTRY"
        BACKGROUNDIMG={"model-y.jpg"}
      />
      <Section
        title="MODEL S"
        DESCRIPTION="Order Online for Touchless Delivery"
        LEFTBUTTON="CUSTOM ORDER"
        RIGHTBUTTON="EXISTING INVENTRY"
        BACKGROUNDIMG={"model-s.jpg"}
      />
      <Section
        title="MODEL X"
        DESCRIPTION="Order Online for Touchless Delivery"
        LEFTBUTTON="CUSTOM ORDER"
        RIGHTBUTTON="EXISTING INVENTRY"
        BACKGROUNDIMG={"model-x.jpg"}
        />
      <Section
        // title="Lowest Cost Solar Panels in America"
        // DESCRIPTION="Money-back guarantee"
        title="Solar Panels"
        DESCRIPTION="Lowest Cost Solar Panels in America"
        LEFTBUTTON="Order now"
        RIGHTBUTTON="Learn more"
        BACKGROUNDIMG={"solar-panel.jpg"}
        />
      <Section
        title="Accessories"
        DESCRIPTION=""
        LEFTBUTTON="Shop now"
        RIGHTBUTTON=""
        BACKGROUNDIMG={"accessories.jpg"}
        />
    </Component>
  );
}

export default Home

const Component = styled.div`
   height:100vh;

`;