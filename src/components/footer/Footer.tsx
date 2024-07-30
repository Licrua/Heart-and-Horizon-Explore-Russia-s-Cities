import {
  Container,
  Row,
  Col,
  Navbar,
  Form as BootstrapForm,
  Button,
} from 'react-bootstrap';
import vkIcon from '@images/footerFavicons/icons8-vk-circled.svg';
import discordIcon from '@images/footerFavicons/icons8-discord.svg';
import gmailIcon from '@images/footerFavicons/icons8-gmail.svg';
import telegramIcon from '@images/footerFavicons/icons8-telegram-app.svg';
import { Formik, Field, Form } from 'formik';
import validationSchema from '@utils/YupValidationFooter';
import Filter from 'bad-words';

// const cleanText = filter.clean(text);

function Footer() {
  const filter = new Filter();

  type formikValues = {
    email: string;
    name: string;
  };

  return (
    <footer className="bg-light border border-2 p-2 d-flex justify-content-center">
      <Container fluid>
        <Row>
          <Col className=" d-flex w-100 justify-content-center" md={4}>
            <p>© 2024 Copyright: RussianCulturalLife.</p>
          </Col>
        </Row>
        <Row>
          <Navbar
            bg="light"
            expand="lg"
            className="d-flex justify-content-center"
          >
            <Navbar.Brand href="#vk">
              <img
                src={vkIcon}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="vkLogo"
              />
            </Navbar.Brand>
            <Navbar.Brand href="#discord">
              <img
                src={discordIcon}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="discordLogo"
              />
            </Navbar.Brand>
            <Navbar.Brand href="#gmail">
              <img
                src={gmailIcon}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="gmailLogo"
              />
            </Navbar.Brand>
            <Navbar.Brand href="#telegram">
              <img
                src={telegramIcon}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="telegramLogo"
              />
            </Navbar.Brand>
          </Navbar>
        </Row>
        <Row>
          <Col md={4} className=" w-100">
            <Formik
              validationSchema={validationSchema}
              onSubmit={(values: formikValues, { setSubmitting }) => {
                setTimeout(() => {
                  console.log('values', values);
                  alert(
                    JSON.stringify(
                      filter.clean(`${values.email}, ${values.name}`),
                      null,
                      2
                    )
                  );
                  setSubmitting(false);
                }, 400);
              }}
              initialValues={{ email: '', name: '' }}
            >
              {({ isSubmitting }) => (
                <BootstrapForm className="text-center" as={Form}>
                  <p>
                    <strong>Подпишитесь, для получения рассылки!</strong>
                  </p>
                  <BootstrapForm.Label
                    style={{ marginRight: '10px' }}
                    htmlFor="email"
                  >
                    <BootstrapForm.Control
                      placeholder="Почта"
                      as={Field}
                      name="email"
                      type="email"
                    />
                  </BootstrapForm.Label>
                  <BootstrapForm.Label htmlFor="name">
                    <BootstrapForm.Control
                      className="mr-3"
                      placeholder="Имя"
                      as={Field}
                      name="name"
                      type="text"
                    />
                  </BootstrapForm.Label>
                  <Button
                    className="m-3"
                    variant="primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Подписаться
                  </Button>{' '}
                </BootstrapForm>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
