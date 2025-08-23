import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCardInfo from './NewsDetailsCardInfo';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventDetails from '../pages/EventDetails';

const EventsDetailsCard = () => {

    const eventData = useLoaderData();
    console.log(eventData);

    const { id } = useParams();
    console.log(id);

    const [event, setEvent] = useState({});


    useEffect(() => {

        const eventDetail = eventData.find((singleEvent) => singleEvent.id == id);

        setEvent(eventDetail);



    }, [eventData, id]);


    return (
        <div>
            <header><Navbar></Navbar></header>
            <div className='container mx-auto '>
                <banner className='w-[60%]'>
                    <NewsDetailsCardInfo event={event}></NewsDetailsCardInfo>
                </banner>

                <main className='w-full'>
                <EventDetails></EventDetails>
                </main>

            </div>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default EventsDetailsCard;