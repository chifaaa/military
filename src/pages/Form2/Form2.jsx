import { Row, Col, Input, Form, Button, DatePicker, Select, InputNumber } from "antd";
import {
  Link
} from "react-router-dom";
import { IconContext } from "react-icons";
import { BiArrowBack } from "react-icons/bi";
import logoForm from "../../../src/assets/logo.png";

function Form1() {

  const { Option } = Select;
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  const countries = [
    "آروبا",
    "أذربيجان",
    " أرمينيا",
    " أستراليا",
    "أفغانستان",
    "ألبانيا",
    "ألمانيا",
    "أنتيغوا وباربودا	",
    "أندورا	",
    " أنغولا	",
    "أوروغواي",
    "أوزبكستان",
    " أوغندا	",
    "أوكرانيا",
    "أيرلندا",
    "أيسلندا",
    "إثيوبيا",
    "إريتريا",
    "إسبانيا",
    "إستونيا",
    "إكوادور",
    "إندونيسيا",
    "إيران",
    "إيطاليا",
    "الأرجنتين",
    "الأردن",
    "الإمارات العربية المتحدة	",
    "البحرين",
    "البرازيل",
    "البرتغال",
    "البهاما",
    "البوسنه والهرسك",
    "الجزائر",
    "الجزر الصغيرة البعيدة عن الولايات المتحدة",
    "(الجزر العذراء( الولايات المتحدة",
    "الجزر العذراء البريطانية	",
    "الدنمارك",
    "السلفادور",
    "السنغال",
    "السودان",
    "السويد",
    "الصحراء الغربية",
    "الصومال",
    "الصين",
    "العراق",
    "الفلبين",
    "القطب الجنوبي",
    "الكاميرون",
    "الكونغو",
    "الكويت",
    "المجر",
    "المغرب",
    " المقاطعات الجنوبية الفرنسي",
    " المقاطعات الهندية البريطانية",
    "المكسيك",
    "المملكة العربية السعودية",
    "النرويج",
    "النمسا",
    "النيجر",
    "الهند",
    "الولايات المتحدة",
    "اليابان",
    "اليمن",
    "اليونان",
    "بابوا غينيا الجديدة",
    "باراجواي",
    "باكستان",
    "بالاو",
    "بتكايرن",
    "بربادوس",
    "برمودا",
    "بروناي دار السلام",
    " (بريطانيا العظمى( المملكة المتحدة",
    "بلجيكا",
    "بلغاريا",
    "بليز",
    "بنجلاديش",
    "بنما",
    "بنين",
    "بوتان",
    "بوتسوانا",
    "بوركينا فاسو	",
    "بوروندي",
    "بولندا",
    "بوليفيا",
    "بولينيزيا",
    "(بويرتوريكو( الولايات المتحدة",
    "بيرو",
    "بيلاروسيا",
    "تايلاند",
    "تايوان",
    "تركمنستان",
    "تركيا",
    "ترينيداد وتوباغو	",
    "تشاد",
    "تشيلي",
    "تنزانيا",
    "توجو",
    "توفالو",
    "توكيلو",
    "تونس",
    "تونغا",
    "تيمور الشرقية	",
    "جامايكا",
    "جبل طارق	",
    " جرين لاند",
    " جزر الأنتيل الهولندي",
    " جزر الترك وغايكوس	",
    " جزر القمر	",
    "جزر الكايمن",
    " جزر الملديف",
    " جزر سولومون",
    " جزر فاروي",
    " (جزر فوكلاند(مالفينس",
    " جزر فيجي",
    "جزر كوك",
    "جزر كيب فيرد",
    "جزر مارشال",
    " جزر ماريانا الشمالية	",
    " جزر والس وفوتونا	",
    " جزيرة الكريسماس	",
    "   جزيرة بوفيه	",
    " (جزيرة كوكوس( كيلنج	",
    "جزيرة نورفوك	",
    "  جزيرة هيرد وماكدونالد	",
    "  جمهورية أفريقيا الوسطى	",
    "جمهورية التشيك	",
    "  جمهورية الدومينيك",
    "جمهورية الكنغو الديموقراطية	",
    " جمهورية مقدونيا اليوغوسلاف سابقاً	",
    "  جنوب إفريقيا	",
    "(جوام( الولايات المتحدة	",
    "جورجيا",
    " جورجيا الجنوبية وجزر ساندويتش الجنوبية	",
    " جيبوتي	",
    " دولة الفاتيكان	",
    "  دومينيكا	",
    "   رواندا	",
    "  روسيا الاتحادية	",
    " رومانيا	",
    "روينيون",
    "زامبيا",
    "زيمبابوي",
    "ساحل العاج",
    "  ساموا	",
    "   ساموا الأمريكية",
    "سانت بيير وميكولون	",
    "سانت تومي وبرنشيبيه	",
    " سانت فنسنت وغرنادين	",
    "  سانت كتس نيفيس أنغيلا	",
    "    سانت كيتس ونيفس	",
    " سانت لوسيا	",
    " سانت مارينو	",
    "   سانت هيلينا	",
    "سريلانكا",
    " سفالبارد وجان مايان	",
    "سلوفاكيا",
    "سلوفينيا",
    "سنغافورة",
    "سوازيلند",
    "سوريا",
    "سورينام",
    "سويسرا",
    "سيراليون",
    "سيشل",
    "طاجاكستان",
    "عمان",
    "غابون",
    "غامبيا",
    "غانا",
    "غرينادا",
    "غواتيمالا",
    "غوادلوب",
    "غويانا",
    "غويانا",
    "غينيا",
    "   غينيا الاستوائية	",
    " غينيا بيساو	",
    "فانواتو",
    "فرنسا",
    "فنزويلا",
    "فنلندا",
    "فيتنام",
    "قبرص",
    "قطر",
    "قيرغيزستان",
    "كازاخستان",
    "  كاليدونيا الجديدة	",
    "كرواتيا",
    "كمبوديا",
    "كندا",
    "كوبا",
    "    كوريا الجنوبية",
    "   كوريا، شمال	",
    "كوستاريكا",
    "كولومبيا",
    "كيريباتي",
    "كينيا",
    "لاتفيا",
    "لاوس",
    "لبنان",
    "لوكسمبورج",
    "ليبيا",
    "ليبيريا",
    "ليتوانيا",
    "ليسوتو",
    "ليشتنشتاين",
    "مارتينيك",
    "ماكاو",
    "مالطة",
    "مالي",
    "ماليزيا",
    "مايوت",
    "مدغشقر",
    "مصر",
    "ملاوي",
    "منغوليا",
    "موريتانيا",
    "موريشيوس",
    "موزامبيق",
    "مولدافيا",
    "موناكو",
    "مونتسرات",
    "ميانمار",
    "ميكرونيزيا",
    "ناميبيا",
    "نورو",
    "نيبال",
    "نيجيريا",
    "نيكاراجوا",
    "نيوزيلندا",
    "نيوي",
    "هايتي",
    "هندوراس",
    "هولندا	",
    "هونج كونج ",
    "يوغوسلافيا",
  ];
  return (
    <div>
      <Link to={"/"}>
        <IconContext.Provider value={{ color: "#6D775C", size: 40 }}>
          <span className="th" style={{
            position: "fixed",
            zIndex: 10000,
            bottom: 0,
            left: 0,
            padding: 10
          }}>
            <BiArrowBack />
          </span>
        </IconContext.Provider>
      </Link>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row justify="space-around" align="middle" style={{ marginTop: "20px" }}>
          <Col
            style={{
              textAlign: "center",
            }}
            xs={24} sm={24} md={12}
          >
            <strong style={{ fontSize: "18px", paddingRight: "0px" }}>
              الجيش الليبي
            </strong>
            <br />
            <strong style={{ fontSize: "18px", paddingRight: "0px" }}>
              وزارة الدفاع
            </strong>
            <br />
            <strong style={{ fontSize: "18px", paddingRight: "0px" }}>
              رئاسة الاركان العامة{" "}
            </strong>
            <br />
            <strong>................................................</strong>
          </Col>

          <Col
            style={{
              textAlign: "center",
            }}
            xs={24} sm={24} md={12}
          >
            <img src={logoForm} width="20%" height="90%" />
          </Col>
        </Row>
        <br />
        <Row justify="center">
          <Col>
            <strong style={{ fontSize: "24px", paddingRight: "0px" }}>
              الراغبين في اإلنضمام للاحتياط
            </strong>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <Row>
          <Col span={3} xs={2} sm={2} md={3} ></Col>
          <Col
            style={{
              textAlign: "start",
              backgroundColor: "#d0cc95",
              height: "45px",
              borderRadius: "6px",
              paddingTop: "8px",
            }}
            span={15}
            xs={20} sm={20} md={15}
          >
            <strong style={{ fontSize: "18px", paddingRight: "30px" }}>
              معلومات شخصية
            </strong>
          </Col>
          <Col span={6} xs={2} sm={2} md={6}></Col>
        </Row>
        <br />
        <Row>
          <Col span={4} xs={2} sm={2} md={4}></Col>
          <Col style={{ textAlign: "start" }} span={3} xs={8} sm={8} md={3}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              الأسم الرباعي :
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={9} xs={10} sm={10} md={9}>
            <Form.Item
              width="100%"
              name="name"
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} xs={4} sm={4} md={8}></Col>
        </Row>
        <Row>
          <Col span={4} xs={2} sm={2} md={4}></Col>
          <Col style={{ textAlign: "start" }} span={3} xs={8} sm={8} md={3}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              إسم الأم الثلاثي :
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={9} xs={10} sm={10} md={9}>
            <Form.Item
              width="100%"
              name="motherName"
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} xs={4} sm={4} md={8}></Col>
        </Row>

        <Row>
          <Col span={4} xs={2} sm={2} md={4}></Col>
          <Col style={{ textAlign: "start" }} span={3} xs={8} sm={8} md={3}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              جنسية الأم :
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={9} xs={10} sm={10} md={9}>
            <Form.Item
              name="motherNationality"
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <Select allowClear>
                {countries &&
                  countries.map((item) => (
                    <Option key={item} value={item}>
                      {item}
                    </Option>
                  ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={8} xs={4} sm={4} md={8}></Col>
        </Row>
        <Row>
          <Col span={4} xs={2} sm={2} md={4}></Col>
          <Col style={{ textAlign: "start" }} span={3} xs={8} sm={8} md={3}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              العائلة :
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={9} xs={10} sm={10} md={9}>
            <Form.Item
              width="100%"
              name="family"
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} xs={4} sm={4} md={8}></Col>
        </Row>

        <Row>
          <Col span={4} xs={2} sm={2} md={4}></Col>
          <Col style={{ textAlign: "start" }} span={3} xs={4} sm={4} md={3}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              الميلاد :
            </span>
          </Col>
          <Col span={1} xs={4} sm={4} md={1}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              المكان :
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={3} xs={10} sm={10} md={3}>
            <Form.Item
              name="brithdayPlace"
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <Select allowClear>
                {countries &&
                  countries.map((item) => (
                    <Option key={item} value={item}>
                      {item}
                    </Option>
                  ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={1} xs={6} sm={6} md={1}></Col>
          <Col span={1} xs={4} sm={4} md={1}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              التاريخ :
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={3} xs={10} sm={10} md={3}>
            <Form.Item
              width="100%"
              name="bithdayDate "
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <DatePicker
                placeholder=""
                style={{ width: "100%" }}
                onChange={onChange}
              />
            </Form.Item>
          </Col>

          <Col span={8} xs={8} sm={8} md={8}></Col>
        </Row>

        <Row>
          <Col span={4} xs={2} sm={2} md={4}></Col>
          <Col style={{ textAlign: "start" }} span={3} xs={8} sm={8} md={3}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              الجنسية :
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={9} xs={10} sm={10} md={9}>
            <Form.Item
              name="nationality"
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <Select allowClear>
                {countries &&
                  countries.map((item) => (
                    <Option key={item} value={item}>
                      {item}
                    </Option>
                  ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={8} xs={4} sm={4} md={8}></Col>
        </Row>

        <Row>
          <Col span={4} span={4} xs={2} sm={2} md={4}></Col>
          <Col style={{ textAlign: "start" }} span={3} span={4} xs={8} sm={8} md={3}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              الحالة الاجتماعية:
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={9} xs={10} sm={10} md={9}>
            <Form.Item
              name="state"
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <Select allowClear>

                <Option value="متزوج أو متزوجة "  >متزوج أو متزوجة    </Option>
                <Option value="أعزب أو عزباء">أعزب أو عزباء </Option>
                <Option value="مطلق أو مطلقة">مطلق أو مطلقة</Option>
                <Option value=" أرمل أو أرملة"> أرمل أو أرملة</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8} xs={4} sm={4} md={8}></Col>
        </Row>

        <Row>
          <Col span={4} xs={2} sm={2} md={4}></Col>
          <Col style={{ textAlign: "start" }} span={3} xs={8} sm={8} md={3} >
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              عدد الزوجات :
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={9} xs={10} sm={10} md={9}>
            <Form.Item
              width="100%"
              name="numberOfWife"
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <InputNumber min={0} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={8} xs={4} sm={4} md={8}></Col>
        </Row>

        <Row>
          <Col span={4} xs={2} sm={2} md={4}></Col>
          <Col style={{ textAlign: "start" }} span={3} xs={5} sm={5} md={3}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              عدد الأبناء:
            </span>
          </Col>
          <Col span={1} xs={3} sm={3} md={1}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              ذكور:
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={3} xs={10} sm={10} md={3}>
            <Form.Item
              width="100%"
              name="numberOfSon"
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <InputNumber min={0} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={1} xs={7} sm={7} md={1}></Col>
          <Col span={1} xs={3} sm={3} md={1}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              إناث :
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={3} xs={10} sm={10} md={3}>
            <Form.Item
              width="100%"
              name="numberOfDaughter "
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <InputNumber min={0} style={{ width: "100%" }} />
            </Form.Item>
          </Col>

          <Col span={8} xs={4} sm={4} md={8}></Col>
        </Row>

        <Row>
          <Col span={4} xs={2} sm={2} md={4}></Col>
          <Col style={{ textAlign: "start" }} span={3} xs={8} sm={8} md={3}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              الرقم الوطني :
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={9} xs={10} sm={10} md={9}>
            <Form.Item
              width="100%"
              name="nationalNumber"
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <InputNumber min={0} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={8} xs={4} sm={4} md={8}></Col>
        </Row>
        <Row>
          <Col span={4} xs={2} sm={2} md={4}></Col>
          <Col style={{ textAlign: "start" }} span={3} xs={8} sm={8} md={3}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              رقم كتيب العائلة:
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={9} xs={10} sm={10} md={9}>
            <Form.Item
              width="100%"
              name="familyNumber"
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <InputNumber min={0} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={8} xs={4} sm={4} md={8}></Col>
        </Row>

        <Row>
          <Col span={4} xs={2} sm={2} md={4}></Col>
          <Col style={{ textAlign: "start" }} span={3} xs={8} sm={8} md={3}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              رقم القيد :
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={9} xs={10} sm={10} md={9}>
            <Form.Item
              width="100%"
              name="registrationNumber"
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <InputNumber min={0} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={8} xs={4} sm={4} md={8}></Col>
        </Row>
        <Row>
          <Col span={4} xs={2} sm={2} md={4} ></Col>
          <Col style={{ textAlign: "start" }} span={3} xs={8} sm={8} md={3}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              مكان صدوره :
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={9} xs={10} sm={10} md={9}>
            <Form.Item
              name="rgsiterPlace"
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <Select allowClear>
                {countries &&
                  countries.map((item) => (
                    <Option key={item} value={item}>
                      {item}
                    </Option>
                  ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={8} xs={4} sm={4} md={8}></Col>
        </Row>

        <Row>
          <Col span={4} xs={2} sm={2} md={4}></Col>
          <Col style={{ textAlign: "start" }} span={3} xs={8} sm={8} md={3}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              رقم ورقة العائلة :
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={9} xs={10} sm={10} md={9}>
            <Form.Item
              width="100%"
              name="numberOfFamily"
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <InputNumber min={0} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={8} xs={4} sm={4} md={8}></Col>
        </Row>

        <Row>
          <Col span={4} xs={2} sm={2} md={4} ></Col>
          <Col style={{ textAlign: "start" }} span={3} xs={8} sm={8} md={3}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              رقم البطاقة الشخصية :
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={9} xs={10} sm={10} md={9}>
            <Form.Item
              width="100%"
              name="CIN"
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <InputNumber min={0} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={8} xs={4} sm={4} md={8}></Col>
        </Row>

        <Row>
          <Col span={4} xs={2} sm={2} md={4}></Col>
          <Col style={{ textAlign: "start" }} span={3} xs={8} sm={8} md={3}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              تاريخ صدورها :
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={9} xs={10} sm={10} md={9}>
            <Form.Item
              width="100%"
              name="cinDate"
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <DatePicker
                placeholder=""
                style={{ width: "100%" }}
                onChange={onChange}
              />
            </Form.Item>
          </Col>
          <Col span={8} xs={4} sm={4} md={8}></Col>
        </Row>

        <Row>
          <Col span={4} xs={2} sm={2} md={4}></Col>
          <Col style={{ textAlign: "start" }} span={3} xs={8} sm={8} md={3}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              مكان صدورها :
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={9} xs={10} sm={10} md={9}>
            <Form.Item
              name="cinPlace"
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <Select allowClear>
                {countries &&
                  countries.map((item) => (
                    <Option key={item} value={item}>
                      {item}
                    </Option>
                  ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={8} xs={4} sm={4} md={8}></Col>
        </Row>
        <Row>
          <Col span={4} xs={2} sm={2} md={4}></Col>
          <Col style={{ textAlign: "start" }} span={3} xs={8} sm={8} md={3}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              رقم جواز السفر :
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={9} xs={10} sm={10} md={9}>
            <Form.Item
              width="100%"
              name="passportNumber"
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <InputNumber min={0} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={8} xs={4} sm={4} md={8}></Col>
        </Row>
        <Row>
          <Col span={4} xs={2} sm={2} md={4}></Col>
          <Col style={{ textAlign: "start" }} span={3} xs={8} sm={8} md={3}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              تاريخ صدوره :
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={9} xs={10} sm={10} md={9}>
            <Form.Item
              width="100%"
              name="passportDate"
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <DatePicker
                placeholder=""
                style={{ width: "100%" }}
                onChange={onChange}
              />
            </Form.Item>
          </Col>
          <Col span={8} xs={4} sm={4} md={8}></Col>
        </Row>

        <Row>
          <Col span={4} xs={2} sm={2} md={4}></Col>
          <Col style={{ textAlign: "start" }} span={3} xs={8} sm={8} md={3}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              مكان صدوره :
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={9} xs={10} sm={10} md={9}>
            <Form.Item
              name="passportPlace"
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <Select allowClear>
                {countries &&
                  countries.map((item) => (
                    <Option key={item} value={item}>
                      {item}
                    </Option>
                  ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={8} xs={4} sm={4} md={8}></Col>
        </Row>

        <br></br>
        <Row>
          <Col span={3} xs={2} sm={2} md={3}></Col>
          <Col
            style={{
              textAlign: "start",
              backgroundColor: "#d0cc95",
              height: "45px",
              borderRadius: "6px",
              paddingTop: "8px",
            }}
            span={15} xs={20} sm={20} md={15}
          >
            <strong style={{ fontSize: "18px", paddingRight: "30px" }}>
              معلومات المستوى الدراسي
            </strong>
          </Col>
          <Col span={6} xs={2} sm={2} md={6}></Col>
        </Row>

        <br />
        <Row>
          <Col span={4} xs={2} sm={2} md={4}></Col>
          <Col style={{ textAlign: "start" }} span={3} xs={8} sm={8} md={3}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              المستوى الدراسي :
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={9} xs={10} sm={10} md={9}>
            <Form.Item
              name="educatinLevel"
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <Select allowClear>

                <Option value=" ابتدائي"> ابتدائي</Option>
                <Option value=" ثانوي"> ثانوي</Option>
                <Option value=" عالى"> عالى</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8} xs={4} sm={4} md={8}></Col>
        </Row>

        <Row>
          <Col span={4} xs={2} sm={2} md={4}></Col>
          <Col style={{ textAlign: "start" }} span={3} xs={8} sm={8} md={3}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              التخصص :
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={9} xs={10} sm={10} md={9}>
            <Form.Item
              width="100%"
              name="speciality"
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} xs={4} sm={4} md={8}></Col>
        </Row>

        <Row>
          <Col span={4} xs={2} sm={2} md={4}></Col>
          <Col style={{ textAlign: "start" }} span={3} xs={8} sm={8} md={3}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              نسبة النجاح :
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={9} xs={10} sm={10} md={9}>
            <Form.Item
              width="100%"
              name="percentage"
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <InputNumber min={0} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={8} xs={4} sm={4} md={8}></Col>
        </Row>

        <Row>
          <Col span={4} xs={2} sm={2} md={4}></Col>
          <Col style={{ textAlign: "start" }} span={3} xs={8} sm={8} md={3}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              رقم الجلوس :
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={9} xs={10} sm={10} md={9}>
            <Form.Item
              width="100%"
              name="ID"
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <InputNumber min={0} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={8} xs={4} sm={4} md={8}></Col>
        </Row>

        <Row>
          <Col span={4} xs={2} sm={2} md={4}></Col>
          <Col style={{ textAlign: "start" }} span={3} xs={8} sm={8} md={3}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              تاريخ الحصول عليه:
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={9} xs={10} sm={10} md={9}>
            <Form.Item
              width="100%"
              name="graduationDate"
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <DatePicker
                placeholder=""
                style={{ width: "100%" }}
                onChange={onChange}
              />
            </Form.Item>
          </Col>
          <Col span={8} xs={4} sm={4} md={8}></Col>
        </Row>

        <Row>
          <Col span={4} xs={2} sm={2} md={4}></Col>
          <Col style={{ textAlign: "start" }} span={3} xs={8} sm={8} md={3}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              المدرسة :
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={9} xs={10} sm={10} md={9}>
            <Form.Item
              width="100%"
              name="college"
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} xs={4} sm={4} md={8}></Col>
        </Row>

        <Row>
          <Col span={4} xs={2} sm={2} md={4}></Col>
          <Col style={{ textAlign: "start" }} span={3} xs={8} sm={8} md={3}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              عنوانها :
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={9} xs={10} sm={10} md={9}>
            <Form.Item
              width="100%"
              name="address"
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} xs={4} sm={4} md={8}></Col>
        </Row>

        <br></br>
        <Row>
          <Col span={3} xs={2} sm={2} md={3}></Col>
          <Col
            style={{
              textAlign: "start",
              backgroundColor: "#d0cc95",
              height: "45px",
              borderRadius: "6px",
              paddingTop: "8px",
            }}
            span={15}
            xs={20} sm={20} md={15}
          >
            <strong style={{ fontSize: "18px", paddingRight: "30px" }}>
              معلومات الاقامة
            </strong>
          </Col>
          <Col span={6} xs={2} sm={2} md={6}></Col>
        </Row>
        <br />
        <Row>
          <Col span={4} xs={2} sm={2} md={4}></Col>
          <Col style={{ textAlign: "start" }} span={3} xs={8} sm={8} md={3}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              عنوان السكن الحالي :
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={9} xs={10} sm={10} md={9}>
            <Form.Item
              width="100%"
              name="residenceAddress"
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} xs={4} sm={4} md={8}></Col>
        </Row>

        <Row>
          <Col span={4} xs={2} sm={2} md={4}></Col>
          <Col style={{ textAlign: "start" }} span={3} xs={8} sm={8} md={3}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              أقرب نقطة دالة :
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={9} xs={10} sm={10} md={9}>
            <Form.Item
              width="100%"
              name="place"
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} xs={4} sm={4} md={8}></Col>
        </Row>

        <Row>
          <Col span={4} xs={2} sm={2} md={4}></Col>
          <Col style={{ textAlign: "start" }} span={3} xs={8} sm={8} md={3}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              عنوان السكن الأصلي :
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={9} xs={10} sm={10} md={9}>
            <Form.Item
              width="100%"
              name="pincipalAddress"
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} xs={4} sm={4} md={8}></Col>
        </Row>

        <Row>
          <Col span={4} xs={2} sm={2} md={4}></Col>
          <Col style={{ textAlign: "start" }} span={3} xs={8} sm={8} md={3}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              المدينة :
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={9} xs={10} sm={10} md={9}>
            <Form.Item
              width="100%"
              name="city"
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} xs={4} sm={4} md={8}></Col>
        </Row>

        <br></br>
        <Row>
          <Col span={3} xs={2} sm={2} md={3}></Col>
          <Col
            style={{
              textAlign: "start",
              backgroundColor: "#d0cc95",
              height: "45px",
              borderRadius: "6px",
              paddingTop: "8px",
            }}
            span={15}
            xs={20} sm={20} md={15}
          >
            <strong style={{ fontSize: "18px", paddingRight: "30px" }}>
              معلومات أخرى
            </strong>
          </Col>
          <Col span={6} xs={2} sm={2} md={6}></Col>
        </Row>
        <br />
        <Row>
          <Col span={4} xs={2} sm={2} md={4}></Col>
          <Col style={{ textAlign: "start" }} span={3} xs={8} sm={8} md={3}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              مكان عمل ولي الأمر :
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={9} xs={10} sm={10} md={9}>
            <Form.Item
              width="100%"
              name="parentPlace"
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} xs={4} sm={4} md={8}></Col>
        </Row>

        <Row>
          <Col span={4} xs={2} sm={2} md={4}></Col>
          <Col style={{ textAlign: "start" }} span={3} xs={8} sm={8} md={3}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              وظيفة ولي الأمر :
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={9} xs={10} sm={10} md={9}>
            <Form.Item
              width="100%"
              name="parentJob"
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} xs={4} sm={4} md={8}></Col>
        </Row>

        <Row>
          <Col span={4} xs={2} sm={2} md={4}></Col>
          <Col style={{ textAlign: "start" }} span={3} xs={8} sm={8} md={3}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              رقم الهاتف :
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={9} xs={10} sm={10} md={9}>
            <Form.Item
              width="100%"
              name="phoneNumber"
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} xs={4} sm={4} md={8}></Col>
        </Row>

        <Row>
          <Col span={4} xs={2} sm={2} md={4}></Col>
          <Col style={{ textAlign: "start" }} span={3} xs={8} sm={8} md={3}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              رقم هاتف ولي الامر :
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={9} xs={10} sm={10} md={9}>
            <Form.Item
              width="100%"
              name="parentPhoneNumber"
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} xs={4} sm={4} md={8}></Col>
        </Row>

        <Row>
          <Col span={4} xs={2} sm={2} md={4}></Col>
          <Col style={{ textAlign: "start" }} span={3} xs={8} sm={8} md={3}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              البريد الإلكتروني :
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={9} xs={10} sm={10} md={9}>
            <Form.Item
              width="100%"
              name="email"
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} xs={4} sm={4} md={8}></Col>
        </Row>

        <br></br>
        <Row>
          <Col span={3} xs={2} sm={2} md={3}></Col>
          <Col
            style={{
              textAlign: "start",
              backgroundColor: "#d0cc95",
              height: "45px",
              borderRadius: "6px",
              paddingTop: "8px",
            }}
            span={15}
            xs={20} sm={20} md={15}
          >
            <strong style={{ fontSize: "18px", paddingRight: "30px" }}>
              معلومات دراسية
            </strong>
          </Col>
          <Col span={6} xs={2} sm={2} md={6}></Col>
        </Row>
        <br />
        <Row>
          <Col span={4} xs={2} sm={2} md={4}></Col>
          <Col style={{ textAlign: "start" }} span={3} xs={8} sm={8} md={3}>
            <span style={{ fontSize: "18px", paddingRight: "0px" }}>
              الثانوية التي يرغب الطالب الالتحاق بها :
            </span>
          </Col>
          <Col style={{ border: "1px solid lighgray" }} span={9} xs={10} sm={10} md={9}>
            <Form.Item
              width="100%"
              name="desiredCollege"
              rules={[{ required: true, message: "هذه الخانة مطلوبه!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} xs={4} sm={4} md={8}></Col>
        </Row>

        <br />
        <br />

        <Form.Item>
          <Row>
            <Col span={18} style={{ textAlign: "end" }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  borderRadius: "4px",
                  border: "1px solid #d0cc95",
                  backgroundColor: "#d0cc95",
                  width: "130px",
                  fontSize: "18px",
                  height: "40px",
                }}
              >
                <strong>تسجيل</strong>
              </Button>
            </Col>
            <Col span={6} style={{ textAlign: "end" }}></Col>
          </Row>
        </Form.Item>
      </Form>

      <br />
      <br />
      <br />
    </div>
  );
}

export default Form1;
