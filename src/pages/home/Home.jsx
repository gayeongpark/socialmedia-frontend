import React from 'react';
import PostSide from '../../component/PostSide/PostSide';
import ProfileSide from '../../component/ProfileSide/ProfileSide';
import RightSide from '../../component/RightSide/RightSide';
import './Home.css'

export default function Home() {
    return (
        <div className='Home'>
            <ProfileSide/>
            <PostSide/>
            <RightSide/>
        </div>
    );
}

