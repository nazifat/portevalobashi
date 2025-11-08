import React from 'react';
import Banner from './Banner/Banner';
import HomeBlog from './HomeBlog/HomeBlog';
import CourseSection from './CourseSection/CourseSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeBlog></HomeBlog>
            <CourseSection></CourseSection>

        </div>
    );
};

export default Home;