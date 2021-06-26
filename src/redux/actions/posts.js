import {
  Get_Post,
  Post_Error,
  Update_like,
  Delete_Post,
  Add_post,
  AddComment,
  RemoveComment,
  Get_One_post,
} from './types';

import { client } from '../../services/client';

//get posts

export const GetPosts = () => async (dispatch) => {
  try {
    const res = await client.get('/posts');

    dispatch({
      type: Get_Post,
      payload: res.data,
    });

    // dispatch({ type: profile_clear });
  } catch (err) {
    dispatch({
      type: Post_Error,
      payload: { msg: err.message, status: err.status },
    });
  }
};

/******************************************************************/

//get  single post

export const GetOnePost = (id) => async (dispatch) => {
  console.log(id);

  try {
    const res = await client.get(`/posts/${id}`);

    dispatch({
      type: Get_One_post,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: Post_Error,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

/*****************************************************************************************/

//Add post

export const AddPost = (text, title, img_upload) => async (dispatch) => {
  const formData = new FormData();

  if (img_upload) {
    let img = img_upload.target.files[0];
    console.log(img);

    formData.append('image', img);
    console.log(formData);
  }
  // text=  JSON.stringify(text);
  console.log(text);
  formData.append('title', title);

  formData.append('text', text);

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorizarion: sessionStorage.getItem('token'),
    },
  };

  try {
    const res = await client.post('/posts', formData, config);

    dispatch({
      type: Add_post,
      payload: res.data,
    });

    //alert
  } catch (err) {
    dispatch({
      type: Post_Error,

      payload: { msg: err },
    });
  }
};

/*****************************************************************************************/

//Delete post

export const DeletePost = (postId) => async (dispatch) => {
  try {
    const res = await client.delete(`/posts/${postId}`);

    dispatch({
      type: Delete_Post,
      payload: postId,
    });

    // dispatch({ type: profile_clear });
  } catch (err) {
    dispatch({
      type: Post_Error,
      payload: { msg: err.message, status: err.status },
    });
  }
};
