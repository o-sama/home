import React, { useRef } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Work from "./components/Work";
import School from "./components/School";
import Contact from "./components/Contact";

import Section from "./styled-components/Section";
import Row from "./styled-components/Row";
import Col from "./styled-components/Col";
import Icon from "./styled-components/Icon";
import ListItem from "./styled-components/ListItem";
import Nav from "./styled-components/Nav";

import LightTheme from "./theme/light";
import DarkTheme from "./theme/dark";

// Import static data
import * as icons from "./icons";
import skillInfo from "./skillInfo";
import workInfo from "./workInfo";
import Button from "./styled-components/Button";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato');
  *{
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 16px;
    transition: background 0.5s, color 0.25s;
  }

  body{background: ${props => props.theme.backgroundColor}}
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.refSkills = React.createRef();
    this.refWork = React.createRef();
    this.refSchool = React.createRef();
    this.refContact = React.createRef();
    this.scrollToContent = this.scrollToContent.bind(this);
  }

  state = {
    theme: LightTheme,
    themeButtonIcon: icons.sun
  };

  handleToggleTheme = () => {
    this.setState({
      theme: this.state.theme.id === "light" ? DarkTheme : LightTheme,
      themeButtonIcon: this.state.theme.id === "light" ? icons.moon : icons.sun
    });
  };

  handleSelectExp = num => {
    this.setState({
      expToShow: workInfo.workList.filter(e => e.id === num)
    });
    console.log(this.state.expToShow);
  };

  renderSkillInfo = (level, isMobile) => {
    return skillInfo[level].map(e => {
      return (
        <Col mobile={isMobile}>
          <Icon src={e.src} mobile={isMobile} />
          <br />
          {e.name}
        </Col>
      );
    });
  };

  renderExpPoints = inArray => {
    return inArray.map(e => {
      return <ListItem>{e}</ListItem>;
    });
  };

  scrollToContent = ref => {
    console.log(ref);
    return ref.current.scrollIntoView({ behaviour: "smooth" });
  };

  render = () => {
    return (
      <ThemeProvider theme={this.state.theme}>
        <GlobalStyle />
        <Hero />
        <Section nav>
          <Nav>
            <Row>
              <Col>
                <Button
                  themeButton
                  icon={this.state.themeButtonIcon}
                  onClick={this.handleToggleTheme}
                />
              </Col>
              <Col>
                <Button
                  sectionColor="#00bc7f"
                  onClick={() => this.scrollToContent(this.refSkills)}
                >
                  Skills
                </Button>
              </Col>
              <Col>
                <Button
                  sectionColor="#1563ff"
                  onClick={() => this.scrollToContent(this.refWork)}
                >
                  Experience
                </Button>
              </Col>
              <Col>
                <Button
                  sectionColor="#562de2"
                  onClick={() => this.scrollToContent(this.refSchool)}
                >
                  Education
                </Button>
              </Col>
              <Col>
                <Button
                  sectionColor="#ca2171"
                  onClick={() => this.scrollToContent(this.refContact)}
                >
                  Get in Touch
                </Button>
              </Col>
            </Row>
          </Nav>
        </Section>
        <Skills ref={this.refSkills} />
        <Work ref={this.refWork} />
        <School ref={this.refSchool} />
        <Contact ref={this.refContact} />
      </ThemeProvider>
    );
  };
}

export default App;
