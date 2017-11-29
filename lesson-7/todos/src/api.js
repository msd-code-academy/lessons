import * as config from './config/api'

export function getTodos() {
    return fetch(`${config.BACKEND_URL}/todos`)
        .then(result => {
            return result.json();
        });
}

export function addTodo(item) {
    return fetch(`${config.BACKEND_URL}/todos/${item.uuid}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
    }).then(result => {
        return result.json();
    });
}

export function updateTodo(item) {
    return fetch(`${config.BACKEND_URL}/todos/${item.uuid}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
    }).then(result => {
        return result.json();
    });
}

export function deleteTodo(uuid) {
    return fetch(`${config.BACKEND_URL}/todos/${uuid}`, {
        method: 'DELETE'
    }).then(result => {
            return result.json();
        });
}

export function getSummaryHtml() {
    return fetch(`${config.BACKEND_URL}/todoViews/summary`)
    .then(result => {
        return result.text();
    });
}