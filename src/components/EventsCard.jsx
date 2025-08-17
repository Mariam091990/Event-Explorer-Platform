import React from 'react';
import { Link } from 'react-router';

const EventsCard = ({ event }) => {
    console.log(event);

    

    return (

        <div className="card card-compact w-96 bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure>
                <img
                    src={event.thumbnail}
                    alt={event.name}
                    className="h-56 w-full object-cover"
                />
            </figure>
            <div className="card-body">
                <div className="flex justify-between items-center">
                    <span className="badge badge-primary">{event.category}</span>
                    <span className="text-sm text-gray-500">
                        {new Date(event.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                        })}
                    </span>
                </div>

                <h2 className="card-title">{event.name}</h2>
                <p className="text-gray-600 line-clamp-2">{event.description}</p>

                <div className="flex justify-between items-center mt-2 text-sm">
                    <span className="text-gray-500">{event.location}</span>
                    <span className="font-semibold text-primary">
                        ৳{event.entryFee}
                    </span>
                </div>

                <div className="card-actions justify-end mt-4">
                    <Link to={`/eventDetails/${event.id}`}   
            className="btn btn-primary btn-sm">
                       
                  
                        View Details
                    </Link>
                </div>
            </div>
        </div>




    );
};

export default EventsCard;