// nameReducer
export const addName = (string) => {
    return {
        type: 'ADD_NAME',
        data: string
    }
}

export const deleteName = () => {
    return {
        type: 'DELETE_NAME'
    }
}



// colourReducer
export const addColour = (string) => {
    return {
        type: 'ADD_COLOUR',
        data: string
    }
}

export const deleteColour = (string) => {
    return {
        type: 'DELETE_COLOUR',
        data: string
    }
}

export const deleteAllColours = () => {
    return {
        type: 'DELETE_ALL_COLOURS'
    }
}