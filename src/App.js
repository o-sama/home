import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { isMobileOnly } from "react-device-detect";

import Section from "./components/Section";
import HeroText from "./components/HeroText";
import Row from "./components/Row";
import Col from "./components/Col";
import Icon from "./components/Icon";
import SectionHeader from "./components/SectionHeader";
import Header3 from "./components/Header3";
import Header4 from "./components/Header4";
import EmphasisText from "./components/EmphasisText";
import UnorderedList from "./components/UnorderedList";
import ListItem from "./components/ListItem";
import Card from "./components/Card";
import MobileNav from "./components/MobileNav";

import LightTheme from "./theme/light";
import DarkTheme from "./theme/dark";

// Import static data
import * as icons from "./icons";
import skillInfo from "./skillInfo";
import workInfo from "./workInfo";
import Button from "./components/Button";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato');
  *{
    font-family: 'Lato', sans-serif;
    font-weight: 400;
  }

`;

class App extends React.Component {
  state = {
    theme: LightTheme,
    themeButtonIcon: icons.sun,
    expToShow: workInfo.workList.filter(e => e.id === 1)
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
      return (
        <ThemeProvider theme={this.state.theme}>
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
            <SectionHeader mobile>Skills</SectionHeader>
            <Card mobile>
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
            <SectionHeader mobile>Where I've been</SectionHeader>
            <Card mobile>
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
            <SectionHeader mobile>Education</SectionHeader>
            <Card mobile>
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
              <Header3 mobile>Courses I've Enjoyed</Header3>
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
            <SectionHeader mobile>Find me here</SectionHeader>
            <Card mobile>
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

    return (
      <ThemeProvider theme={this.state.theme}>
        <GlobalStyle />
        <a href="#">
          <Icon navTop src={icons.upArr} style={{ top: "45%" }} />
          <Icon navTop src={icons.upArr} style={{ top: "46%" }} />
        </a>
        <Button
          themeButton
          icon={this.state.themeButtonIcon}
          onClick={this.handleToggleTheme}
        />

        <Section hero>
          <HeroText>Osama Faqhruldin</HeroText>
        </Section>
        <Section>
          <SectionHeader>Skills</SectionHeader>
          <Card>
            <Header3>
              What I <EmphasisText>know</EmphasisText>
            </Header3>
            <Row>{this.renderSkillInfo("highLevel")}</Row>
            <Header3>
              What I'm <EmphasisText>comfortable</EmphasisText> with
            </Header3>
            <Row>{this.renderSkillInfo("midLevel")}</Row>
            <Header3>
              What I've <EmphasisText>dabbled</EmphasisText> with
            </Header3>
            <Row>{this.renderSkillInfo("lowLevel")}</Row>
          </Card>
        </Section>
        <Section>
          <SectionHeader>Where I've been</SectionHeader>
          <Card>
            <Row>
              <Col>
                <Icon
                  work="r1"
                  src={icons.tr}
                  onClick={e => this.handleSelectExp(1)}
                />
              </Col>
              <Col>
                <Icon
                  work="r1"
                  src={icons.flipp}
                  onClick={e => this.handleSelectExp(2)}
                />
              </Col>
              <Col>
                <Icon
                  work="r1"
                  src={icons.hydro}
                  onClick={e => this.handleSelectExp(3)}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Icon
                  work="r2"
                  src={icons.tmmc}
                  onClick={e => this.handleSelectExp(4)}
                />
              </Col>
              <Col>
                <Icon
                  work="r2"
                  src={icons.ncr}
                  onClick={e => this.handleSelectExp(5)}
                />
              </Col>
              <Col>
                <Icon
                  work="r2"
                  src={icons.mm}
                  onClick={e => this.handleSelectExp(6)}
                />
              </Col>
            </Row>
            <Header3>{this.state.expToShow[0].name}</Header3>
            <Header4>
              {this.state.expToShow[0].start} - {this.state.expToShow[0].end}
            </Header4>
            <UnorderedList>
              {this.renderExpPoints(this.state.expToShow[0].points)}
            </UnorderedList>
          </Card>
        </Section>
        <Section>
          <SectionHeader>Education</SectionHeader>
          <Card>
            <Row>
              <Col>
                <Icon school src={icons.uw} />
              </Col>
            </Row>
            <Header4>September 2014 - May 2020</Header4>
            <Header3>Courses I've Enjoyed</Header3>
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
          <SectionHeader>Find me here</SectionHeader>
          <Card>
            <Row>
              <Col>
                <a
                  href="https://www.github.com/o-sama"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon src={icons.github} footerIcon />
                </a>
              </Col>
              <Col>
                <a
                  href="https://www.linkedin.com/in/OsamaFaqhruldin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon src={icons.linkedin} footerIcon />
                </a>
              </Col>
              <Col>
                <a href="mailto:onfaqhru@gmail.com">
                  <Icon src={icons.mail} footerIcon />
                </a>
              </Col>
            </Row>
          </Card>
        </Section>
      </ThemeProvider>
    );
  };
}

export default App;
