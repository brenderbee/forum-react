import reducer from './../src/reducers/reducer';

describe('reducer', () => {

  let action;
  const samplePostData = {
    user: 'boogerboy',
    title: 'who is that',
    comment: 'what is up with those guys?',
    id: 10,
    voteCount: 2
  };

  test('Should return default state if no action type is recognized', () => {
    expect(reducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new post data to masterPostList', () => {
    const { user, title, comment, id, voteCount} = samplePostData;
    action = {
      type: 'ADD_POST',
      user: user,
      title: title,
      comment: comment,
      id: id,
      voteCount: voteCount
    };
    expect(reducer({}, action)).toEqual({
      [id] : {
        user: user,
        title: title,
        comment: comment,
        id: id,
        voteCount: voteCount
      }
    });
  });

  test('Should successfully increment the vote count of a given post', () => {
    const { user, title, comment, id, voteCount} = samplePostData;
    action = {
      type: 'UPVOTE',
      user: user,
      title: title,
      comment: comment,
      id: id,
      voteCount: voteCount
    };
    expect(reducer({}, action)).toEqual({
      [id] : {
        user: user,
        title: title,
        comment: comment,
        id: id,
        voteCount: 3
      }
    });
  });

});
