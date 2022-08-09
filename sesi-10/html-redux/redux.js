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

const store = Redux.createStore(counter)

const numEle = document.getElementById('number')
const plusEle = document.getElementById('plus')
const minusEle = document.getElementById('minus')

plusEle.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' })
})

minusEle.addEventListener('click', () => {
    store.dispatch({ type: 'DECREMENT' })
})

numEle.innerHTML = store.getState().number
store.subscribe(() => {
    numEle.innerHTML = store.getState().number
})
