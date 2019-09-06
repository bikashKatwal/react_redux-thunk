import _ from 'lodash';
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUser = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    const userIds = _.uniq(_.map(getState().posts,'userId'));
    userIds.forEach(id => dispatch(fetchUser(id)));
};


export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({type: 'FETCH_POSTS', payload: response.data});
};

export const fetchUser = (userId) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${userId}`);
    dispatch({type: 'FETCH_USER', payload: response.data});
};

