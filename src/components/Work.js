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
import Sidebar from "../styled-components/Sidebar";
import CardMain from "../styled-components/CardMain";

import * as icons from "../icons";
import workInfo from "../workInfo";

export default class Work extends React.Component {
  state = {
    expToShow: workInfo.workList.filter(e => e.id === 1)
  };

  handleSelectExp = num => {
    this.setState({
      expToShow: workInfo.workList.filter(e => e.id === num)
    });
    console.log(this.state.expToShow);
  };

  renderExpPoints = inArray => {
    return inArray.map(e => {
      return <ListItem>{e}</ListItem>;
    });
  };

  render = () => {
    return (
      <Section>
        <Card>
          <div
            style={{
              height: "10px",
              backgroundColor: "#1563ff",
              color: "transparent"
            }}
          >
            .
          </div>
          <SectionHeader sectionColor="#1563ff">Where I've been</SectionHeader>
          <Sidebar>
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
          </Sidebar>
          <CardMain>
            <Header3>{this.state.expToShow[0].name}</Header3>
            <Header4>
              {this.state.expToShow[0].start} - {this.state.expToShow[0].end}
            </Header4>
            <UnorderedList>
              {this.renderExpPoints(this.state.expToShow[0].points)}
            </UnorderedList>
          </CardMain>
        </Card>
      </Section>
    );
  };
}
