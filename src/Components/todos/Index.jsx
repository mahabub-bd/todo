/* eslint-disable no-param-reassign */
import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import shortid from 'shortid';
import Controller from '../Controller/Index';
import CreateTodoForm from '../create-todo-form';
import ListView from '../Listview/Index';
import TableView from '../Tableview';

class Todos extends React.Component {
    state = {
        todos: [
            {
                id: '10',
                text: 'text',
                time: new Date(),
                isComplete: false,
                isSelect: false,
            },
            {
                id: '11',
                text: 'text',
                time: new Date(),
                isComplete: false,
                isSelect: false,
            },
        ],

        isOpenTodoForm: false,
        searchTerm: '',
        view: 'list',
        filter: 'all',
    };

    createTodo = (todo) => {
        const { todos } = this.state;
        todo.id = shortid.generate();
        todo.time = new Date();
        todo.isComplete = false;
        todo.isSelect = false;
        this.setState({
            todos: [...todos, todo],
        });
    };

    changeView = (event) => {
        this.setState({
            view: event.target.value,
        });
    };

    handleFilter = (filter) => {
        this.setState({ filter });
    };

    handleSearch = (value) => {
        this.setState({ searchTerm: value });
    };

    clearSelected = () => {
        const { todos } = this.state;
        this.setState({ todos: todos.filter((todo) => !todo.isSelect) });
    };

    clearCompleted = () => {
        const { todos } = this.state;
        this.setState({ todos: todos.filter((todo) => !todo.isComplete) });
    };

    reset = () => {
        this.setState({
            filter: 'all',
            searchTerm: '',
            view: 'list',
            isOpenTodoForm: false,
        });
    };

    performSearch = () => {
        const { todos, searchTerm } = this.state;
        return todos.filter((todo) => todo.text.toLowerCase().includes(searchTerm.toLowerCase()));
    };

    performFilter = (todos) => {
        const { filter } = this.state;

        if (filter === 'completed') {
            return todos.filter((todo) => todo.isComplete);
        }
        if (filter === 'running') {
            return todos.filter((todo) => !todo.isComplete);
        }

        return todos;
    };

    getView = () => {
        let todos = this.performSearch();
        todos = this.performFilter(todos);
        const { view } = this.state;
        return view === 'list' ? (
            <ListView
                todos={todos}
                toggleSelect={this.toggleSelect}
                toggleCompleted={this.toggleCompleted}
            />
        ) : (
            <TableView
                todos={todos}
                toggleSelect={this.toggleSelect}
                toggleCompleted={this.toggleCompleted}
            />
        );
    };

    toggleCompleted = (todoId) => {
        const { todos } = this.state;
        const todo = todos.find((todoid) => todoid.id === todoId);
        todo.isComplete = !todo.isComplete;
        this.setState({ todos: [...todos] });
    };

    toggleForm = () => {
        const { isOpenTodoForm } = this.state;
        this.setState({
            isOpenTodoForm: !isOpenTodoForm,
        });
    };

    toggleSelect = (todoId) => {
        const { todos } = this.state;
        const todo = todos.find((todoid) => todoid.id === todoId);
        todo.isSelect = !todo.isSelect;
        this.setState({ todos: [...todos] });
    };

    render() {
        const { isOpenTodoForm, view, searchTerm } = this.state;
        console.log(this.state);

        return (
            <div>
                <h1 className="display-5 mb-4 text-center">Todo Application</h1>
                <Controller
                    view={view}
                    term={searchTerm}
                    handleSearch={this.handleSearch}
                    toggleForm={this.toggleForm}
                    handleFilter={this.handleFilter}
                    changeView={this.changeView}
                    clearSelected={this.clearSelected}
                    clearCompleted={this.clearCompleted}
                    reset={this.reset}
                />

                <div>{this.getView()}</div>
                <Modal isOpen={isOpenTodoForm} toggle={this.toggleForm}>
                    <ModalHeader toggle={this.toggleForm}>Create New Todo Item</ModalHeader>
                    <ModalBody>
                        <CreateTodoForm createTodo={this.createTodo} />
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default Todos;
