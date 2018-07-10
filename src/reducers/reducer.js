export default (state = {}, action) => {
  switch (action.type) {
  case 'ADD_POST':
    const { user, title, comment, timeStamp, id } = action;
    let newState = Object.assign({}, state, {
      [id]: {
        user: user,
        title: title,
        comment: comment,
        timeStamp: timeStamp,
        id: id
      }
    });
    return newState;
  default:
    return state;
  }  
};
