

const inittialState = {
    name: ''
}

const Reducer = (state = inittialState, action) => {

    console.log(action)
    if (action.type === "CHANGE_NAME") {

        return {
            ...state,
            name: action.payload

        }

    }
    return state;
}
export default Reducer