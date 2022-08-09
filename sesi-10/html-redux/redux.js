const initialState = {
    number: 0,
    title: 'Test Redux'
}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                number: state.number + action.num
            }
        case 'DECREMENT':
            return {
                ...state,
                number: state.number - action.num
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
    store.dispatch({ type: 'INCREMENT', num: 1 })
})

minusEle.addEventListener('click', () => {
    store.dispatch({ type: 'DECREMENT', num: 2 })
})

numEle.innerHTML = store.getState().number
store.subscribe(() => {
    numEle.innerHTML = store.getState().number
})
