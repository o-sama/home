import React from "react";

import Icon from "../styled-components/Icon";
import Row from "../styled-components/Row";
import Col from "../styled-components/Col";
import Card from "../styled-components/Card";
import Section from "../styled-components/Section";
import SectionHeader from "../styled-components/SectionHeader";
import Header3 from "../styled-components/Header3";
import Header4 from "../styled-components/Header4";
import UnorderedList from "../styled-components/UnorderedList";
import ListItem from "../styled-components/ListItem";
import EmphasisText from "../styled-components/EmphasisText";

import * as icons from "../icons";

const School = React.forwardRef((props, ref) => {
  return (
    <Section ref={ref}>
      <Card>
        <div
          style={{
            height: "10px",
            backgroundColor: "#562de2",
            color: "transparent"
          }}
        >
          .
        </div>
        <SectionHeader sectionColor="#562de2">Education</SectionHeader>
        <Row>
          <Col>
            <Icon
              school
              src={icons.uw}
              style={{ height: "125px", width: "125px" }}
            />
          </Col>
        </Row>
        <Header4>September 2014 - May 2020</Header4>
        <Header3>
          Courses I've{" "}
          <EmphasisText sectionColor="#562de2">Enjoyed</EmphasisText>
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
  );
});

export default School;
