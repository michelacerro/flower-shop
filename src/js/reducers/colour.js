const colourReducer = (state = {colours: []}, action) => {
    switch(action.type) {
        case 'ADD_COLOUR':
            return {
                ...state,
                colours: [action.data, ...state.colours.filter(colour => colour !== action.data)]
            };
        case 'DELETE_COLOUR':
            return {
                ...state,
                colours: state.colours.filter(colour => colour !== action.data)
            };
        case 'DELETE_ALL_COLOURS':
            return {
                ...state,
                colours: []
            };
        default:
            return state;
    };
};
export default colourReducer;