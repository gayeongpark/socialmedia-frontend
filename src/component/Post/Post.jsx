import React from 'react';
import './Post.css';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { TiDelete } from 'react-icons/ti';
import { FaRegCommentDots } from 'react-icons/fa';
import { BiShareAlt } from 'react-icons/bi';

export default function Post({ data }) {
  return (
    <div className='Post'>
      <TiDelete className='delete' />
      <img src={data.img} alt='postImage' />
      <div className='PostReact'>
        {data.liked ? <FcLike /> : <FcLikePlaceholder />}
        <FaRegCommentDots />
        <BiShareAlt />
      </div>
      <span>{data.likes} likes</span>
      <div className='detail'>
        <div>
          <b>{data.name}</b>
        </div>
        <div className='margin'>{data.description}</div>
      </div>
    </div>
  );
}
