import propTypes from 'prop-types';
import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const FilterController = ({ handleFilter }) => (
    <ButtonGroup>
        <Button onClick={() => handleFilter('all')}>All</Button>
        <Button onClick={() => handleFilter('running')}>Running</Button>
        <Button onClick={() => handleFilter('completed')}>Completed</Button>
    </ButtonGroup>
);
FilterController.propTypes = {
    handleFilter: propTypes.func.isRequired,
};
export default FilterController;
