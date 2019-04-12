import React from "react";
import { Row, Col, Button, Badge, Avatar, Icon, Typography } from "antd";
import css from "../styles/design-process.scss";

const { Title, Paragraph, Text } = Typography;

const DesignProcess = () => {
  return (
    <section className={css.designProcess}>
      <Row style={{margin: '70px 0px'}} type="flex" justify="center" align="middle">
        <Col span={10}>
          <Paragraph>How I work</Paragraph>
          <Title style={{ marginTop: "0.2em", fontSize: 50 }}>Design Process</Title>
          <Paragraph>
            Reach your business goals with excellent user experience. <br />
            Let’s start working on your awesome web or iOS app.
          </Paragraph>
        </Col>
        <Col span={10}>
          <Row type="flex" justify="center" align="middle">
            <Button style={{ marginRight: 30 }} type="primary" size="large">
              Start a Project
            </Button>
            <Button type="primary" ghost size="large">
              Learn More
            </Button>
          </Row>
        </Col>
      </Row>
      <Row type="flex" justify="center" align="middle">
        <Col span={10}>
          <Title style={{ marginTop: "0.2em", fontSize: 50 }}>Strategy</Title>
          <Paragraph>
            <Text strong>Ask first</Text>. Before jumping into designing I always make sure <br />
            that we’re asking the right questions and trying to accomplish{" "}
            <br />
            the right challenges. This stage includes market research,
            competitive
            <br />
            analyses, consulting and exploring possible solutions.
          </Paragraph>
        </Col>
        <Col span={10}>
          <Title style={{ marginTop: "0.2em", fontSize: 50 }}>Design</Title>
          <Paragraph>
            <Text strong>Problem </Text>solving. At the end of this phase you’ll have a<br/>
            pixel perfect design for your app or website. During the <br/>
            transition from wireframes into the final design I create prototypes<br/>
            simulating final end results before development.
          </Paragraph>
        </Col>
      </Row>
      <Row type="flex" justify="center" align="middle">
        <Col span={10}>
          <Title style={{ marginTop: "0.2em", fontSize: 50 }}>Development</Title>
          <Paragraph>
            <Text strong>Bringing designs to life. </Text>Since I’m a designer who can <br/>
            code too, I can easily work in close collaboration with  <br/>
            developers up until the finish line and beyond. In case <br/>
            of web projects I also do front-end development.
          </Paragraph>
        </Col>
        <Col span={10}>
          <Title style={{ marginTop: "0.2em", fontSize: 50}}>Quality assurance</Title>
          <Paragraph>
            <Text strong>Transparent process. </Text>Complete overview of my  <br/>
            design process through regular meetings. After the   <br/>
            initial design versions I’m happy to do user testing with  <br/>
            your customers to ensure the best possible solutions <br/>
            for their needs.
          </Paragraph>
        </Col>
      </Row>
    </section>
  );
};
export default DesignProcess;
