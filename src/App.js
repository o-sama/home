import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { isMobileOnly } from "react-device-detect";

import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Work from "./components/Work";
import School from "./components/School";
import Contact from "./components/Contact";

import Section from "./styled-components/Section";
import HeroText from "./styled-components/HeroText";
import Row from "./styled-components/Row";
import Col from "./styled-components/Col";
import Icon from "./styled-components/Icon";
import SectionHeader from "./styled-components/SectionHeader";
import Header3 from "./styled-components/Header3";
import Header4 from "./styled-components/Header4";
import EmphasisText from "./styled-components/EmphasisText";
import UnorderedList from "./styled-components/UnorderedList";
import ListItem from "./styled-components/ListItem";
import Card from "./styled-components/Card";
import MobileNav from "./styled-components/MobileNav";

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

  render = () => {
    if (isMobileOnly) {
      // Mobile browser
      return (
        <ThemeProvider
          theme={this.state.theme}
          style={{ transition: "backgroundColor 2s" }}
        >
          <GlobalStyle />
          <MobileNav>
            <Row mobileNav>
              <Col mobile>
                <Button
                  mobile
                  icon={this.state.themeButtonIcon}
                  onClick={this.handleToggleTheme}
                  style={{ position: "fixed", left: "30%", top: "5px" }}
                />
              </Col>
              <Col mobile>
                <a href="#">
                  <Icon
                    mobile
                    src={icons.upArr}
                    style={{
                      position: "fixed",
                      right: "30%",
                      top: "0",
                      padding: "0",
                      height: "35px",
                      width: "35px"
                    }}
                  />
                  <Icon
                    src={icons.upArr}
                    style={{
                      position: "fixed",
                      right: "30%",
                      top: "9px",
                      padding: "0",
                      height: "35px",
                      width: "35px"
                    }}
                  />
                </a>
              </Col>
            </Row>
          </MobileNav>
          <Section hero>
            <HeroText mobile>Osama Faqhruldin</HeroText>
          </Section>
          <Section>
            <Card mobile>
              <SectionHeader mobile>Skills</SectionHeader>
              <Header3 mobile>
                What I <EmphasisText>know</EmphasisText>
              </Header3>
              <Row mobile>{this.renderSkillInfo("highLevel", true)}</Row>
              <Header3 mobile>
                What I'm <EmphasisText>comfortable</EmphasisText> with
              </Header3>
              <Row mobile>{this.renderSkillInfo("midLevel", true)}</Row>
              <Header3 mobile>
                What I've <EmphasisText>dabbled</EmphasisText> with
              </Header3>
              <Row mobile>{this.renderSkillInfo("lowLevel", true)}</Row>
            </Card>
          </Section>
          <Section>
            <Card mobile>
              <SectionHeader mobile>Where I've been</SectionHeader>
              <Row>
                <Col>
                  <Icon
                    work="r1"
                    src={icons.tr}
                    onClick={e => this.handleSelectExp(1)}
                    mobile
                  />
                </Col>
                <Col>
                  <Icon
                    work="r1"
                    src={icons.flipp}
                    onClick={e => this.handleSelectExp(2)}
                    mobile
                  />
                </Col>
                <Col>
                  <Icon
                    work="r1"
                    src={icons.hydro}
                    onClick={e => this.handleSelectExp(3)}
                    mobile
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Icon
                    work="r2"
                    src={icons.tmmc}
                    onClick={e => this.handleSelectExp(4)}
                    mobile
                  />
                </Col>
                <Col>
                  <Icon
                    work="r2"
                    src={icons.ncr}
                    onClick={e => this.handleSelectExp(5)}
                    mobile
                  />
                </Col>
                <Col>
                  <Icon
                    work="r2"
                    src={icons.mm}
                    onClick={e => this.handleSelectExp(6)}
                    mobile
                  />
                </Col>
              </Row>
              <Header3 mobile>{this.state.expToShow[0].name}</Header3>
              <Header4 mobile>
                {this.state.expToShow[0].start} - {this.state.expToShow[0].end}
              </Header4>
              <UnorderedList>
                {this.renderExpPoints(this.state.expToShow[0].points)}
              </UnorderedList>
            </Card>
          </Section>
          <Section>
            <Card mobile>
              <SectionHeader mobile>Education</SectionHeader>
              <Row>
                <Col>
                  <Icon
                    school
                    src={icons.uw}
                    style={{ height: "125px", width: "125px" }}
                  />
                </Col>
              </Row>
              <Header4 mobile>September 2014 - May 2020</Header4>
              <Header3 mobile>
                Courses I've <EmphasisText>Enjoyed</EmphasisText>
              </Header3>
              <Row>
                <Col>
                  <UnorderedList
                    style={{
                      listStyle: "none",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingLeft: "0"
                    }}
                  >
                    <ListItem>Algorithms and Data Structures</ListItem>
                    <ListItem>Compilers</ListItem>
                    <ListItem>Computer Networks</ListItem>
                    <ListItem>Cooperative and Adaptive Algorithms</ListItem>
                    <ListItem>Databases</ListItem>
                    <ListItem>Digital Hardware Systems</ListItem>
                  </UnorderedList>
                </Col>
              </Row>
            </Card>
          </Section>
          <Section>
            <Card mobile>
              <SectionHeader mobile>Find me here</SectionHeader>
              <Row>
                <Col mobile>
                  <a
                    href="https://www.github.com/o-sama"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon src={icons.github} footerIcon mobile />
                  </a>
                </Col>
                <Col mobile>
                  <a
                    href="https://www.linkedin.com/in/OsamaFaqhruldin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon src={icons.linkedin} footerIcon mobile />
                  </a>
                </Col>
                <Col mobile>
                  <a href="mailto:onfaqhru@gmail.com">
                    <Icon src={icons.mail} footerIcon mobile />
                  </a>
                </Col>
              </Row>
            </Card>
          </Section>
        </ThemeProvider>
      );
    }

    // Non-mobile browser
    return (
      <ThemeProvider theme={this.state.theme}>
        <GlobalStyle />
        <MobileNav>
          <Row mobileNav>
            <Col mobile>
              <Button
                themeButton
                icon={this.state.themeButtonIcon}
                onClick={this.handleToggleTheme}
                style={{ position: "fixed", left: "30%", top: "5px" }}
              />
            </Col>
            <Col mobile>
              <a href="#">
                <Icon
                  mobile
                  src={icons.upArr}
                  style={{
                    position: "fixed",
                    right: "30%",
                    top: "0",
                    padding: "0",
                    height: "35px",
                    width: "35px"
                  }}
                />
                <Icon
                  src={icons.upArr}
                  style={{
                    position: "fixed",
                    right: "30%",
                    top: "9px",
                    padding: "0",
                    height: "35px",
                    width: "35px"
                  }}
                />
              </a>
            </Col>
          </Row>
        </MobileNav>

        <Hero />
        <Skills />
        <Work />
        <School />
        <Contact />
      </ThemeProvider>
    );
  };
}

export default App;
