const nameReducer = (state = '', action) => {
    switch(action.type) {
        case 'ADD_NAME':
            return {
                state: action.data
            };
        case 'DELETE_NAME':
            return {
                state: ''
            };
        default:
            return state;
    };
};
export default nameReducer;