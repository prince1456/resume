import Link from 'next/link'
import { Row, Col, Divider, Typography, Button } from 'antd';
import css from '../styles/header.scss'
const {Text} = Typography

const Header = () => (
  <Row  className={css.headerNav} type="flex" justify="center" align="middle" >
    <Col style={{fontSize: 20}}span={4}>Ali<Text type="danger">ALizada</Text></Col>
    <Col span={12}>
      <ul>
        <li>Intro</li>
        <li>works</li>
        <li>Subscribes</li>
      </ul>
    </Col>
    <Col span={4}>
      <Button type="primary" size="large">contact</Button>
    </Col>
    <Divider/>
  </Row>
)

export default Header