import propTypes from 'prop-types';
import React from 'react';
import { Button, Input } from 'reactstrap';

const SerachPanel = ({ term, handleSearch, toggleForm }) => (
    <div className="d-flex align-items-center mb-4">
        <Input
            placeholder="Enter Search Term"
            className="me-4"
            value={term}
            onChange={(event) => handleSearch(event.target.value)}
        />
        <Button color="success" className="ml-auto btn btn-sm" onClick={toggleForm}>
            New
        </Button>
    </div>
);

SerachPanel.protoTypes = {
    term: propTypes.string.isRequired,
    handleSearch: propTypes.func.isRequired,
    toggleForm: propTypes.func.isRequired,
};
export default SerachPanel;
