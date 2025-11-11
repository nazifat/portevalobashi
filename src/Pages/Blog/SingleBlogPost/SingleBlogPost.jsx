import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleBlogPost = () => {
    const {id} = useParams();
    const [blog, setBlog]= useState(null);
    const [loading, setLoading]= useState(true);
    return (
        <div>
            
        </div>
    );
};

export default SingleBlogPost;