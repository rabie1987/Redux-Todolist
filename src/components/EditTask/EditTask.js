import React, { useState } from "react";
import "./editTask.css";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { edittask } from "../../JS/Actions/ActionTASK";

const EditTask = ({ item }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [editInput, setEditInput] = useState(item.description);
  const dispatch = useDispatch();
  return (
    <>
      <Button
        variant="outline-secondary"
        onClick={handleShow}
        style={{ height: "32px", padding: "3px" }}
      >
        Edit
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
            style={{ width: "100%" }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              dispatch(edittask({ id: item.id, description: editInput }));
            }}
            style={{
              height: "38px",
              backgroundColor: "deeppink",
              border: "pink",
            }}
          >
            Save
          </Button>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{ height: "38px" }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditTask;
