<Modal show={show} onHide={onClose}>
    <Modal.Header closeButton>
        <Modal.Title>Modal Form Title</Modal.Title>
    </Modal.Header>

    <Modal.Body>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                {/* Example Input Field */}
                <Form.Control
                    type="text"                // e.g. "text", "number", "date"
                    placeholder="Enter something here..." // input hint
                    value={text}               // state variable
                    onChange={(e) => setText(e.target.value)} // updates state
                    autoFocus                  // optional, focuses this input first
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Another field..."
                    value={anotherValue}
                    onChange={(e) => setAnotherValue(e.target.value)}
                />
            </Form.Group>

            <div className="d-flex justify-content-end mt-3">
                <Button variant="secondary" onClick={onClose} className="me-2">
                    Cancel
                </Button>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </div>
        </Form>
    </Modal.Body>
</Modal>
