import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function Signup() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Имя</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Имя"
            defaultValue="Вася"
          />
          <Form.Control.Feedback type="invalid">Введите имя</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Фамилия</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Фамилия"
            defaultValue="Васин"
          />
          <Form.Control.Feedback type="invalid">Введите фамилию</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Учебная группа</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Учебная группа"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Введите учебную группу
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label={
            <span>
                Прочитал и согласен с 
                 <a href="rules" target="_blank" rel="noopener noreferrer">
                     правилами
                </a> репбазы
            </span>
        }
          feedback="Вы должны прочитать правила репбазы"
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Зарегистрироваться</Button>
    </Form>
  );
}

export default Signup;