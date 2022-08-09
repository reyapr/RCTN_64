import { createStore } from 'redux'

const initialState = {
    number: 0,
    title: 'Test Redux'
}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                number: state.number + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                number: state.number - 1
            }
        default:
            return state
    }
}

const store = createStore(counter)
console.log(store.getState(), `<=================== init ==================`);
store.subscribe(() => {
    console.log(store.getState(), `<=================== test ==================`);
})

store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })