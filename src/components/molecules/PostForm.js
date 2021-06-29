import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { AddPost } from '../../redux/actions/posts';
import { Link } from 'react-router-dom';

// import { useToast } from "@chakra-ui/react"
const PostForm = ({ AddPost }) => {
  const [text, setText] = useState('');
  const [title, settitle] = useState('');

  const [img_upload, Setimg_upload] = useState('');

  // const toast = useToast()

  return (
    <div class='post-form'>
      <table class='border-2 border-silver-tree m-auto w-2/3 mt-10'>
        <thead>
          <tr className="border-2 border-silver-tree">
            <th >
              {' '}
              <input
                placeholder='عنوان'
                value={title}
                onChange={(e) => settitle(e.target.value)}
                className="absolute left"

              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-2 border-silver-tree">
            <td><img src="images/pro.png" className="w-10 h-10 rounded-full"/></td>
            
          
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { AddPost })(PostForm);
