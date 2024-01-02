import { Button, Form, Modal, Row, Col, InputGroup } from "react-bootstrap";

const JiraFormModal = ({ show, handleClose, handleSubmit, validated }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add JIRA Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Jira Server</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Jira Server"
                defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>JIRA Access Token</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="JIRA Access Token"
                defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Row className="pt-3 pb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>JIRA User Story</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Jira User Story"
                  defaultValue=""
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default JiraFormModal;
