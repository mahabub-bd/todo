/* eslint-disable react/forbid-prop-types */

import propTypes from 'prop-types';
import React from 'react';
import { Button, Input, Table } from 'reactstrap';

const RowItem = ({ todo, toggleSelect, toggleCompleted }) => {
    const { id, text, time, isSelect, isComplete } = todo;
    return (
        <tr>
            <th scope="row">
                <Input
                    type="checkbox"
                    id={id}
                    checked={isSelect}
                    onChange={() => toggleSelect(id)}
                />
            </th>
            <th className="mx-3">
                <p>{time.toDateString()}</p>
            </th>
            <th>
                <h4>{text}</h4>
            </th>
            <th>
                <Button
                    className="ml-auto btn btn-sm"
                    color={isComplete ? 'danger' : 'success'}
                    onClick={() => toggleCompleted(id)}
                >
                    {isComplete ? 'Completed' : 'Running'}
                </Button>
            </th>
        </tr>
    );
};
RowItem.propTypes = {
    todo: propTypes.object.isRequired,
    toggleSelect: propTypes.func.isRequired,
    toggleCompleted: propTypes.func.isRequired,
};

const TableView = ({ todos, toggleSelect, toggleCompleted }) => (
    <Table>
        <thead>
            <tr>
                <th>#</th>
                <th>Time</th>
                <th>Todo</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {todos.map((todo) => (
                <RowItem
                    key={todo.id}
                    todo={todo}
                    toggleSelect={toggleSelect}
                    toggleCompleted={toggleCompleted}
                />
            ))}
        </tbody>
    </Table>
);

export default TableView;
