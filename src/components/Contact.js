import React from "react";

import Icon from "../styled-components/Icon";
import Row from "../styled-components/Row";
import Col from "../styled-components/Col";
import Card from "../styled-components/Card";
import Section from "../styled-components/Section";
import SectionHeader from "../styled-components/SectionHeader";

import * as icons from "../icons";

const Contact = React.forwardRef((props, ref) => {
  return (
    <Section ref={ref}>
      <Card>
        <div
          style={{
            height: "10px",
            backgroundColor: "#ca2171",
            color: "transparent"
          }}
        >
          .
        </div>
        <SectionHeader sectionColor="#ca2171">Find me here</SectionHeader>
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
  );
});

export default Contact;
