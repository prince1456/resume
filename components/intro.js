import React from "react";
import { Row, Col, Button, Badge, Avatar, Icon } from 'antd';
import { Typography } from 'antd';
const { Title, Paragraph, Text} = Typography;

import css from '../styles/intro.scss';

const Intro = () => {
  return (
    <section className="intro">
        <Row type="flex" justify="center" align="middle" style={{height: '80vh'}}>
            <Col span={10} >
            <Row >
                <Title style={{fontSize: 60, marginBottom: 0}}>Ali Alizada</Title>
                <h1 style={{fontSize: 30}}>Web Developer</h1>
                <Paragraph>Currently designing thoughtful experiences<br/> at<Text type="danger"> InVision</Text> to help designers,product managers  <br/>and engineers collaborate better together.</Paragraph>
                <Button style={{marginTop: 20}} type="primary" size="large">Get Start</Button>
                <div style={{marginTop: 100}}>
                  <Badge count={<Icon type="clock-circle" style={{ color: '#f5222d' }} />}><Avatar src="" shape="circle" icon="user" size="large"/></Badge> <span style={{marginLeft: 15}}>Reply time: within 1-2 working days</span>
                </div>
            </Row>
            </Col>
            <Col span={10} type="flex" justify="center" align="middle">
               <Row className={css.imageContainer}>
                <ul>
                    <li>
                        <img  src="https://www.mckinsey.com/~/media/McKinsey/Business%20Functions/Operations/Our%20Insights/The%20expanding%20role%20of%20design%20in%20creating%20an%20end%20to%20end%20customer%20experience/Expanding-role-of-design-1536x1536-400_Standard.ashx" />
                    </li>
                    <li > 
                        <img src="https://gw.alipayobjects.com/zos/rmsportal/tXlLQhLvkEelMstLyHiN.svg" />
                    </li>
                    <li>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfclD5svQpg6S4ZPzPliTilbicrxHNh_rDRiWZ-yinCbraiaY3ZQ" />
                    </li>
                    <li  >
                        <img src="https://cdn-images-1.medium.com/max/1600/1*03iVlsi-OAJTkbKhandsbQ.gif" />
                    </li>
                    <li >
                        <img src="https://miro.medium.com/max/832/1*uPL1uCtLBRSk6akPL2hNzg.jpeg" />
                    </li>
                    <li>
                        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--sItCGY2B--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn.auth0.com/blog/next.jslogo.png" />
                    </li>
                    <li>
                        <img src="https://cdn-images-1.medium.com/max/1200/1*Px9R2p5qmpOd_jMcQ13QZw.jpeg" />
                    </li>

                    <li>
                        <img src="https://cdn-images-1.medium.com/max/1600/1*mgTCaXJDYvZhwJth4Pw7uQ.png" />
                    </li>
                    <li >
                        <img src="https://cdn-images-1.medium.com/max/1600/1*03iVlsi-OAJTkbKhandsbQ.gif" />
                    </li>
                    <li>
                        <img src="https://cdn-images-1.medium.com/max/1600/1*03iVlsi-OAJTkbKhandsbQ.gif" />
                    </li>
                </ul>
               </Row>
            </Col>
        </Row>
    </section>
  );
};

export default Intro;
