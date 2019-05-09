import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom'
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';
import './app.css';

export default class App extends Component  {

    maxId = 100;

    state = {
        items: [
            { id: 1, label: 'Learn Route', important: false, done: false },
            { id: 2, label: 'Learn Lifecycle methods', important: true, done: false },
            { id: 3, label: 'Learn Redux', important: false, done: false }
        ],
        filter: 'all',
        search: ''
    };

    createToDoItem(label) {
        return {
            id: ++this.maxId,
            label,
            important: false,
            done: false
        }
    }
    deleteItem = (id) => {
        this.setState((state) => {
            const idx = state.items.findIndex((item) => item.id === id);
            const items = [
                ...state.items.slice(0, idx),
                ...state.items.slice(idx + 1)
            ];
            return { items };
        });
    };

    addItem = (label) => {
        this.setState((state) => {
            const item = this.createToDoItem(label);
            return { items: [...state.items, item] };
        })
    };

    toggleProperty(arr, id, propName){
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        const newItem = {...oldItem,
            [propName]: !oldItem[propName]};

       return [
            ...arr.slice(0,idx),
            newItem,
            ...arr.slice(idx+1)
        ];


    }
    onToggleDone = (id) => {
        this.setState((state) => {
            const items = this.toggleProperty(state.items, id, 'done');
            return { items };
        });
    };
    onToggleImportant = (id) => {
        this.setState((state) => {
            const items = this.toggleProperty(state.items, id, 'important');
            return { items };
        });
    };

    onFilterChange = (filter) => {
        this.setState({ filter });
    };

    onSearchChange = (search) => {
        this.setState({ search });
    };
    filterItems(items, filter) {
        if (filter === 'all') {
            return items;
        } else if (filter === 'active') {
            return items.filter((item) => (!item.done));
        } else if (filter === 'done') {
            return items.filter((item) => item.done);
        }
    };

    searchItems(items, search) {
        if (search.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
        });
    }
    render () {
        const { items, filter, search } = this.state;
        const doneCount = items.filter((item) => item.done).length;
        const toDoCount = items.length - doneCount;
        const visibleItems = this.searchItems(this.filterItems(items, filter), search);
        return (
            
            <div className="todo-app">
                <AppHeader toDo={toDoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel
                        onSearchChange={this.onSearchChange}/>
                        <ItemStatusFilter
                        filter={filter}
                        onFilterChange={this.onFilterChange} />
                        
                </div>
                <TodoList
                    todos={visibleItems}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}/>
                <ItemAddForm onItemAdded = {this.addItem}/>
            </div>
           
        );
    }
};


