// action creator
export const getFullName = (lastName)=> dispatch => {
    dispatch({
        type: 'GET_FULLNAME',
        payload: lastName
    })
}