import propTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'reactstrap';
import BulkController from './Bulk-controller';
import FilterController from './Filter-controller';
import SerachPanel from './SearchPanel';
import ViewController from './View-controller';

const Controller = ({
    view,
    term,
    handleSearch,
    toggleForm,
    handleFilter,
    changeView,
    clearSelected,
    clearCompleted,
    reset,
}) => (
    <div>
        <SerachPanel term={term} handleSearch={handleSearch} toggleForm={toggleForm} />
        <Row className="my-4">
            <Col md={{ size: 4 }}>
                <FilterController handleFilter={handleFilter} />
            </Col>
            <Col md={{ size: 4 }}>
                <ViewController view={view} changeView={changeView} />
            </Col>
            <Col md={{ size: 4 }} className="d-flex">
                <div className="ml-auto">
                    <BulkController
                        clearSelected={clearSelected}
                        clearCompleted={clearCompleted}
                        reset={reset}
                    />
                </div>
            </Col>
        </Row>
    </div>
);
Controller.protoTypes = {
    term: propTypes.string.isRequired,
    handleSearch: propTypes.func.isRequired,
    toggleForm: propTypes.func.isRequired,
    handleFilter: propTypes.func.isRequired,
    view: propTypes.string.isRequired,
    changeView: propTypes.func.isRequired,
    clearSelected: propTypes.func.isRequired,
    clearCompleted: propTypes.func.isRequired,
    reset: propTypes.func.isRequired,
};
export default Controller;
