import { forwardRef, useEffect, useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import TokenList from "../TokenList";
import JiraFormModal from "../JiraFormModal";
const Home = (props, childRef) => {
  //<input ref={childRef} onChange={props.handleChange} type={"text"} />
  const [showJiraForm, setJiraForm] = useState(false);
  const [validated, setValidated] = useState(false);
  const [showList, setShowList] = useState(false);

  const handleClose = () => {
    setJiraForm(false);
    setValidated(false);
  };

  useEffect(() => {
    if (!props.desc || props.desc.trim() === "") {
      setShowList(false);
    }
  }, [props.desc]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
    if (form.checkValidity() === true) {
      setShowList(true);
      form.reset();
      handleClose();
    }
  };

  const descSubmit = (e) => {
    e.preventDefault();
    if (props.desc) {
      setShowList(true);
      handleClose();
    }
  };

  return (
    <>
      <Row className="p-3">
        <Col sm={2}>
          <Button variant="primary" onClick={() => setJiraForm(true)}>
            Generate from JIRA
          </Button>
        </Col>
        <Col className="text-center m-auto" sm={1}>
          <span>OR</span>
        </Col>
        <Col sm={3}>
          <Form.Control
            ref={childRef}
            placeholder="Desciption"
            onChange={props.handleChange}
            as="textarea"
            rows={3}
          />
        </Col>
        <Col className="text-center m-auto" sm={1}>
          <span>OR</span>
        </Col>
        <Col sm={4}>
          <input className="m-4" type="file" id="myFile" name="filename" />
        </Col>

        <div className="d-flex justify-content-center mt-3">
          <Button
            onClick={descSubmit}
            className="d-flex text-center"
            variant="success"
          >
            Submit
          </Button>
        </div>
        <JiraFormModal
          show={showJiraForm}
          handleClose={handleClose}
          validated={validated}
          handleSubmit={handleSubmit}
        />
        {showList && <TokenList />}
      </Row>
    </>
  );
};
export default forwardRef(Home);
