import React from 'react';
import { useLoaderData } from 'react-router';
import Events from './Events';


const Home = () => {

    const eventData =useLoaderData();
    console.log(eventData);
    return (
        <div>
            <Events eventData={eventData}></Events>
        </div>
    );
};

export default Home;