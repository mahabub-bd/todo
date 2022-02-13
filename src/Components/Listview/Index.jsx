/* eslint-disable react/forbid-prop-types */
import propTypes from 'prop-types';
import React from 'react';
import { Button, Input, ListGroup, ListGroupItem } from 'reactstrap';

const ListItem = ({ todo, toggleSelect, toggleCompleted }) => {
    const { id, text, time, isSelect, isComplete } = todo;
    return (
        <ListGroupItem className="d-flex align-items-center justify-content-between">
            <Input type="checkbox" id={id} checked={isSelect} onChange={() => toggleSelect(id)} />
            <div className="mx-3">
                <h4>{text}</h4>
                <p>{time.toDateString()}</p>
            </div>

            <Button
                className="ml-auto btn btn-sm"
                color={isComplete ? 'danger' : 'success'}
                onClick={() => toggleCompleted(id)}
            >
                {isComplete ? 'Completed' : 'Running'}
            </Button>
        </ListGroupItem>
    );
};
ListItem.propTypes = {
    todo: propTypes.object.isRequired,
    toggleSelect: propTypes.func.isRequired,
    toggleCompleted: propTypes.func.isRequired,
};

const ListView = ({ todos, toggleSelect, toggleCompleted }) => (
    <ListGroup>
        {todos.map((todo) => (
            <ListItem
                key={todo.id}
                todo={todo}
                toggleSelect={toggleSelect}
                toggleCompleted={toggleCompleted}
            />
        ))}
    </ListGroup>
);

ListView.propTypes = {
    todos: propTypes.array.isRequired,
    toggleSelect: propTypes.func.isRequired,
    toggleCompleted: propTypes.func.isRequired,
};
export default ListView;
