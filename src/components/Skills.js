import React from "react";

import Icon from "../styled-components/Icon";
import Row from "../styled-components/Row";
import Col from "../styled-components/Col";
import Card from "../styled-components/Card";
import Section from "../styled-components/Section";
import SectionHeader from "../styled-components/SectionHeader";
import Header3 from "../styled-components/Header3";
import EmphasisText from "../styled-components/EmphasisText";

import * as icons from "../icons";
import skillInfo from "../skillInfo";

class Skills extends React.Component {
  renderSkillInfo = level => {
    return skillInfo[level].map(e => {
      return (
        <Col>
          <Icon src={e.src} />
          <br />
          {e.name}
        </Col>
      );
    });
  };

  render = () => {
    return (
      <Section>
        <Card>
          <SectionHeader>Skills</SectionHeader>
          <Header3>
            What I <EmphasisText>know</EmphasisText>
          </Header3>
          <Row>{this.renderSkillInfo("highLevel", true)}</Row>
          <Header3>
            What I'm <EmphasisText>comfortable</EmphasisText> with
          </Header3>
          <Row>{this.renderSkillInfo("midLevel", true)}</Row>
          <Header3>
            What I've <EmphasisText>dabbled</EmphasisText> with
          </Header3>
          <Row>{this.renderSkillInfo("lowLevel", true)}</Row>
        </Card>
      </Section>
    );
  };
}

export default Skills;
