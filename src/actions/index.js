import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=pizzaandbeer';

export function addItem(item){
    const request = axios.post(BASE_URL + '/todos' + API_KEY, item);

    return {
        type: types.ADD_ITEM,
        payload: request
    }
}

export function getItems(){
    const request = axios.get(BASE_URL + '/todos' + API_KEY);

    return {
        type: types.GET_ITEMS,
        payload: request
    }
}

export function getSingleItem(id){
    const request = axios.get(BASE_URL + '/todos/' + id + API_KEY);

    return {
        type: types.GET_SINGLE_ITEM,
        payload: request
    }
}

export function deleteItem(id){
    const request = axios.delete(BASE_URL + '/todos/' + id + API_KEY);

    return {
        type: types.DELETE_ITEM,
        payload: request
    }
}

export function toggleItem(id){
    const request = axios.put(BASE_URL + '/todos/' + id + API_KEY);

    return {
        type: types.TOGGLE_ITEM,
        payload: request
    }
}

/*

axios.delete('http://api.reactprototypes.com/todos/[id#]?key=pizzaandbeer');

axios.put('http://api.reactprototypes.com/todos/[id#]?key=pizzaandbeer');
put will toggle item

display item and details nicely - format the times when it was completed

create button to toggle items compeleteness

delete button should redirect back to home page like add button does

*/
