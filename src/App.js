import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Form1 from "./pages/Form1/Form1"
import Form2 from "./pages/Form2/Form2"
import Form3 from "./pages/Form3/Form3"
import Homepage from "./pages/Homepage/Homepage"
import './App.css';
import { Row, Col, Divider } from 'antd';
import { Typography, Button } from 'antd';

import { IconContext } from "react-icons";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";

import logo from './assets/logo.png';

function App() {
  const { Title, Paragraph } = Typography;

  return (
    // <div className="App">
    //   <header className="App-header">

    //   </header>
    // </div>

    <div className="wrapper">
      <div>
        <Row align='middle'>
          <Col xs={24} sm={6} md={6}>

            <Row align='middle' justify='center'>
              <Col>
                <img style={{ height: 100, width: 90 }} src={logo} alt="Logo" />
              </Col>
            </Row>

          </Col>

          <Col xs={24} sm={6} md={6}>

            <Row align='middle' justify='center'>
              <Col>
                <Title level={4} style={{ color: "#6D775C"}}>عن إدارة التجنيد</Title>
              </Col>
            </Row>

          </Col>

          <Col xs={24} sm={6} md={6}>

            <Row align='middle' justify='center'>
              <Col>
                <Title level={4} style={{ color: "#6D775C"}}>الخدمات</Title>
              </Col>
            </Row>

          </Col>

          <Col xs={24} sm={6} md={6}>

            <Row align='middle' justify='center'>
              <Col>
                <Title level={4} style={{ color: "#6D775C" }}>اتصل بنا</Title>
              </Col>
            </Row>

          </Col>
        </Row>
      </div>

      <Divider style={{ marginTop: 5, marginBottom: 20 }}></Divider>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/form1" element={<Form1 />}></Route>
          <Route path="/form2" element={<Form2 />}></Route>
          <Route path="/form3" element={<Form3 />}></Route>
        </Routes>
      </BrowserRouter>

      <Divider style={{ marginTop: 20, marginBottom: 10 }}></Divider>
      <div>
        <Row align='middle'>
          <Col xs={24} sm={8} md={8}>

            <Row align='middle' justify='center'>
              <Col>
                <Title level={5} style={{ color: "#6D775C" }}>CopyRight 2021</Title>
              </Col>
            </Row>

          </Col>

          <Col xs={24} sm={8} md={8}>

            <Row align='middle' justify='center'>
              <Col>
                <img style={{ height: 100, width: 90 }} src={logo} alt="Logo" />
              </Col>
            </Row>

          </Col>

          <Col xs={24} sm={8} md={8}>

            <Row align='middle' justify='center'>
              <Col>
                <IconContext.Provider value={{ color: "#6D775C", size: 30 }}>
                  <span style={{ margin: 5 }}>
                    <FaTwitter />
                  </span>
                </IconContext.Provider>

                <IconContext.Provider value={{ color: "#6D775C", size: 30 }}>
                  <span style={{ margin: 5 }}>
                    <FaFacebookSquare />
                  </span>
                </IconContext.Provider>

                <IconContext.Provider value={{ color: "#6D775C", size: 30 }}>
                  <span style={{ margin: 5 }}>
                    <FaInstagram />
                  </span>
                </IconContext.Provider>
              </Col>
            </Row>

          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
