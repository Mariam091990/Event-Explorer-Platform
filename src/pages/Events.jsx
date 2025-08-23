import React, { useState } from 'react';
import EventsCard from '../components/EventsCard';

const Events = ({eventData}) => {
    console.log(eventData);

    const [showAll, setShowAll] = useState(false);


     const visibleEventData = showAll ? eventData : eventData.slice(0, 3);

    return (
        <div>
<h1 className='text-3xl bold text-center text-blue-700'>Our Upcoming Events</h1> 
             <p className='text-md text-center mb-10'>Discover the best local events happening around you! From music 
            festivals and tech conferences to workshops and cultural programs.Our platform connects you with all upcoming events. 
            Event Explorer helps you stay updated and engaged with your community. <br /> You get to know and experience through <span className=' text-blue-700'>Event Explorer</span> about various fantastic Events. </p>

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
           
            
        </div>
    );
};

export default Events;