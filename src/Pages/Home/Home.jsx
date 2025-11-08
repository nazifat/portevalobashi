import React from 'react';
import Banner from './Banner/Banner';
import HomeBlog from './HomeBlog/HomeBlog';
import CourseSection from './CourseSection/CourseSection';
import BookQuotes from './BookQuotes/BookQuotes';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeBlog></HomeBlog>
            <CourseSection></CourseSection>
            <BookQuotes></BookQuotes>

        </div>
    );
};

export default Home;