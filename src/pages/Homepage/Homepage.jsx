import React from 'react';
import {
  Link
} from "react-router-dom";
import { Row, Col, Divider } from 'antd';
import firstSectionImage from './firstSectionImage.png';
import { Typography, Button } from 'antd';
import { FaUser, FaUsers, FaUserGraduate } from "react-icons/fa"
import { MdMilitaryTech } from "react-icons/md";
import { IconContext } from "react-icons";
import EmbedVideo from "./EmbedVideo";

export default function Homepage() {
  const { Title, Paragraph } = Typography;

  return (
    <div>
      <section>
        <Row>

          <Col xs={24} sm={24} md={12}>
            <div style={{ padding: 50 }}>
              <Row>
                <Col>
                  <Title> عن إدارة التجنيد والاحتياط </Title>
                </Col>
              </Row>
              <br />
              <br />
              <Row>
                <Col>
                  <Paragraph style={{ fontSize: "20px", textAlign: "justify" }}>
                    أنشئت إدارة التجنيد والاحتياط بناءاً على قرار رئيس الأركان العامة رقم (52) لسنة 2013 م والقاضي بضم كل من ادارة التدريب العسكري العام سابقاً والإدارة العامه للاحتياط والاستدعاء سابقاً .وبهذا القرار تكون إدارة التجنيد المخولة قانوناً بقبول المتطوعين للخدمة بالجيش الليبي ومن ثم إستقبال من تنطبق عليهم شروط الإنضمام إلى الإحتياط بعد إنهاء الخدمة الفعلية لهم كأفراد إحتياط بالجيش الليبي .
                  </Paragraph>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Button style={{ backgroundColor: "#C2B78E", color: "white" }} shape="round" size="large">
                    اقرأ المزيد
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
          {/* <Col xs={24} sm={24} md={12}>
            <div style={{ padding: 50 }} >
              <Row justify="center">
                <Col>
                  <Title> عن إدارة التجنيد والاحتياط </Title>
                  <br />
                  <Paragraph style={{ fontSize: "20px" }}>
                    أنشئت إدارة التجنيد والاحتياط بناءاً على قرار رئيس الأركان العامة رقم (52) لسنة 2013 م والقاضي بضم كل من ادارة التدريب العسكري العام سابقاً والإدارة العامه للاحتياط والاستدعاء سابقاً .وبهذا القرار تكون إدارة التجنيد المخولة قانوناً بقبول المتطوعين للخدمة بالجيش الليبي ومن ثم إستقبال من تنطبق عليهم شروط الإنضمام إلى الإحتياط بعد إنهاء الخدمة الفعلية لهم كأفراد إحتياط بالجيش الليبي .
                  </Paragraph>
                  <br />
                  <Button style={{ backgroundColor: "#C2B78E", color: "white" }} shape="round" size="large">
                    اقرأ المزيد
                  </Button>
                </Col>
              </Row>
            </div>
          </Col> */}
          <Col xs={24} sm={24} md={12}>
            <div style={{ height: 450, padding: 50 }}>
              <img style={{ height: "100%", width: "100%", borderRadius: "2%" }} src={firstSectionImage} alt="firstSectionImage" />
            </div>
          </Col>
        </Row>
      </section>

      <Divider style={{ marginTop: 30, marginBottom: 30 }}></Divider>

      <section>
        <Row gutter={[8, 24]}>
          <Col xs={24} sm={24} md={8}>
            <div style={{ padding: 50 }}>
              <Row justify="center">
                <Col>
                  <IconContext.Provider value={{ color: "#6D775C", size: 60 }}>
                    <FaUser />
                  </IconContext.Provider>
                </Col>
              </Row>
              <br />
              <br />
              <Row justify="center">
                <Col>
                  <Title style={{ textAlign: "center" }} level={2}>التسجيل للتجنيد</Title>
                </Col>
              </Row>
              <br />
              <Row justify="center">
                <Col>
                  <Paragraph style={{ fontSize: "20px", textAlign: "center", color: "#6D775C" }}>
                    وصف الخدمة وصف الخدمة وصف الخدمة وصف الخدمة وصف الخدمة وصف الخدمة وصف الخدمة وصف الخدمة وصف الخدمة وصف الخدمة وصف الخدمة وصف الخدمة
                  </Paragraph>
                </Col>
              </Row>

              <Row justify="center">
                <Col>
                  <Link to={"/form1"}>
                    <Button style={{ backgroundColor: "#C2B78E", color: "white" }} shape="round" size="large">
                      دخول
                    </Button>
                  </Link>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={24} sm={24} md={8}>
            <div style={{ padding: 50 }}>
              <Row justify="center">
                <Col>
                  <IconContext.Provider value={{ color: "#6D775C", size: 60 }}>
                    <FaUsers />
                  </IconContext.Provider>
                </Col>
              </Row>
              <br />
              <br />
              <Row justify="center">
                <Col>
                  <Title style={{ textAlign: "center" }} level={2}>التسجيل في الاحتياط</Title>
                </Col>
              </Row>
              <br />
              <Row justify="center">
                <Col>
                  <Paragraph style={{ fontSize: "20px", textAlign: "center", color: "#6D775C" }}>
                    وصف الخدمة وصف الخدمة وصف الخدمة وصف الخدمة وصف الخدمة وصف الخدمة وصف الخدمة وصف الخدمة وصف الخدمة وصف الخدمة وصف الخدمة وصف الخدمة
                  </Paragraph>
                </Col>
              </Row>

              <Row justify="center">
                <Col>
                  <Link to={"/form2"}>
                    <Button style={{ backgroundColor: "#C2B78E", color: "white" }} shape="round" size="large">
                      دخول
                    </Button>
                  </Link>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={24} sm={24} md={8}>
            <div style={{ padding: 50 }}>
              <Row justify="center">
                <Col>
                  <IconContext.Provider value={{ color: "#6D775C", size: 60 }}>
                    <FaUserGraduate />
                  </IconContext.Provider>
                </Col>
              </Row>
              <br />
              <br />
              <Row justify="center">
                <Col>
                  <Title style={{ textAlign: "center" }} level={2}>التسجيل في الثانويات</Title>
                </Col>
              </Row>
              <br />
              <Row justify="center">
                <Col>
                  <Paragraph style={{ fontSize: "20px", textAlign: "center", color: "#6D775C" }}>
                    وصف الخدمة وصف الخدمة وصف الخدمة وصف الخدمة وصف الخدمة وصف الخدمة وصف الخدمة وصف الخدمة وصف الخدمة وصف الخدمة وصف الخدمة وصف الخدمة
                  </Paragraph>
                </Col>
              </Row>

              <Row justify="center">
                <Col>
                  <Link to={"/form3"}>
                    <Button style={{ backgroundColor: "#C2B78E", color: "white" }} shape="round" size="large">
                      دخول
                    </Button>
                  </Link>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </section>

      <Divider style={{ marginTop: 30, marginBottom: 30 }}></Divider>

      <section>
        <Row>
          <Col xs={24} sm={24} md={24}>
            <div style={{ padding: "50px 20px 50px 20px" }} >
              <Row justify="center">
                <Col xs={24} sm={24} md={20}>
                  <EmbedVideo embedId="oC7HQ29XB1k" />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </section>

      <Divider style={{ marginTop: 30, marginBottom: 30 }}></Divider>

      <section>
        <Row>
          <Col xs={24} sm={24} md={10}>
            <div style={{ height: 770, padding: 50 }}>
              <img style={{ height: "100%", width: "100%", borderRadius: "2%" }} src={firstSectionImage} alt="firstSectionImage" />
            </div>
          </Col>
          <Col xs={24} sm={24} md={14}>
            <div style={{ padding: 50 }} >
              <Row justify="center">
                <Col>
                  <Title>اجراء الترشح للتجنيد</Title>
                  <br />
                  <Paragraph style={{ fontSize: "20px", maxWidth: 500 }}>
                    نص تمهيدي نص تمهيدي نص تمهيدي نص تمهيدي نص تمهيدي نص تمهيدي نص تمهيدي نص تمهيدي نص تمهيدي نص تمهيدي
                  </Paragraph>
                  <br />
                  <Row justify="space-between">
                    <Col xs={24} sm={4} md={4}>
                      <IconContext.Provider value={{ color: "#6D775C", size: 60 }}>
                        <MdMilitaryTech />
                      </IconContext.Provider>
                    </Col>
                    <Col xs={24} sm={20} md={20}>
                      <Row justify="space-between">
                        <Col xs={24} sm={24} md={24}>
                          <Title level={2}>
                            المرحلة 1
                          </Title>
                        </Col>
                        <Col xs={24} sm={24} md={24}>
                          <Paragraph style={{ fontSize: "20px", color: "#6D775C", maxWidth: 500 }}>
                            نص المرحلة نص المرحلة نص المرحلة نص المرحلة نص المرحلة نص المرحلة نص المرحلة نص المرحلة
                          </Paragraph>
                        </Col>
                      </Row>

                    </Col>
                  </Row>
                  <br />
                  <Row justify="space-between">
                    <Col xs={24} sm={4} md={4}>
                      <IconContext.Provider value={{ color: "#6D775C", size: 60 }}>
                        <MdMilitaryTech />
                      </IconContext.Provider>
                    </Col>
                    <Col xs={24} sm={20} md={20}>
                      <Row justify="space-between">
                        <Col xs={24} sm={24} md={24}>
                          <Title level={2}>
                            المرحلة 2
                          </Title>
                        </Col>
                        <Col xs={24} sm={24} md={24}>
                          <Paragraph style={{ fontSize: "20px", color: "#6D775C", maxWidth: 500 }}>
                            نص المرحلة نص المرحلة نص المرحلة نص المرحلة نص المرحلة نص المرحلة نص المرحلة نص المرحلة
                          </Paragraph>
                        </Col>
                      </Row>

                    </Col>
                  </Row>
                  <br />
                  <Row justify="space-between">
                    <Col xs={24} sm={4} md={4}>
                      <IconContext.Provider value={{ color: "#6D775C", size: 60 }}>
                        <MdMilitaryTech />
                      </IconContext.Provider>
                    </Col>
                    <Col xs={24} sm={20} md={20}>
                      <Row justify="space-between">
                        <Col xs={24} sm={24} md={24}>
                          <Title level={2}>
                            المرحلة 3
                          </Title>
                        </Col>
                        <Col xs={24} sm={24} md={24}>
                          <Paragraph style={{ fontSize: "20px", color: "#6D775C", maxWidth: 500 }}>
                            نص المرحلة نص المرحلة نص المرحلة نص المرحلة نص المرحلة نص المرحلة نص المرحلة نص المرحلة
                          </Paragraph>
                        </Col>
                      </Row>

                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </section>
    </div >
  )
}
