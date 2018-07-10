export default (state = {}, action) => {
  switch (action.type) {
  case 'ADD_POST':
    const { user, title, comment, timeStamp, id, voteCount } = action;
    let newState = Object.assign({}, state, {
      [id]: {
        user: user,
        title: title,
        comment: comment,
        timeStamp: timeStamp,
        id: id,
        voteCount: voteCount
      }
    });
    return newState;
  default:
    return state;
  }
};
