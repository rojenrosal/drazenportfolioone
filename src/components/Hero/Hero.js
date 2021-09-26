import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
      Hello, I'm Drazen <br />
      Welcome to my Portfolio
      </SectionTitle>
      <SectionText>
        I'm a Mechanical Engineer with the knack for learning different technologies and I'm currently pursuing a career with programming and Software Engineering.
      </SectionText>
      <Button onClick = {()=> window.location="https//:google.com" }> Learn More </Button>
      
    </LeftSection>

  </Section>
);

export default Hero;