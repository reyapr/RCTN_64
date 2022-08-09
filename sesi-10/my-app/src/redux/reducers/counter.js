
const initialState = {
    number: 0,
    title: 'Learn Redux'
}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                number: state.number + action.payload
            }
        case 'DECREMENT':
            return {
                ...state,
                number: state.number - action.payload
        }
        default:
            return state;
    }
}

export default counter;