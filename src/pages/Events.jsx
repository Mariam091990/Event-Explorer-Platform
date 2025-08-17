import React, { useState } from 'react';
import EventsCard from '../components/EventsCard';

const Events = ({eventData}) => {
    console.log(eventData);

    const [showAll, setShowAll] = useState(false);


     const visibleEventData = showAll ? eventData : eventData.slice(0, 3);

    return (
        <div>
<h1 className='text-3xl bold text-center'>Our Best Doctors</h1> 
             <p className='text-sm text-center mb-10'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>

<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
{

visibleEventData.map((event)=><EventsCard key ={event.id} event={event}></EventsCard>   )


}

</div>



{eventData.length > 3 && (
        <div className="col-span-full text-center m-4">
          <button onClick={() => setShowAll(!showAll)} className="btn btn-primary">{showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
           
            {/* events card showw korbe
            <EventsCard></EventsCard> */}
        </div>
    );
};

export default Events;