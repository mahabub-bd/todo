import propTypes from 'prop-types';
import React from 'react';
import { Input, Label } from 'reactstrap';

const ViewController = ({ view, changeView }) => (
    <div className="d-flex justify-content-around">
        <Input
            type="radio"
            name="view"
            value="list"
            id="list-view"
            onChange={changeView}
            className="d-inline-block"
            checked={view === 'list'}
        />
        <Label className="ms-2" id="list-view">
            List
        </Label>

        <Input
            type="radio"
            name="view"
            value="table"
            id="table-view"
            onChange={changeView}
            className="d-inline-block"
            checked={view === 'table'}
        />
        <Label className="ms-2" id="table-view">
            Table View
        </Label>
    </div>
);

ViewController.propTypes = {
    view: propTypes.string.isRequired,
    changeView: propTypes.func.isRequired,
};
export default ViewController;
