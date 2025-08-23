// import React from 'react';
// import { Link } from 'react-router';

// const EventsCard = ({ event }) => {
//     console.log(event);

    

//     return (

//         <div className="card card-compact w-96 bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
//             <figure>
//                 <img
//                     src={event.thumbnail}
//                     alt={event.name}
//                     className="h-56 w-full object-cover"
//                 />
//             </figure>
//             <div className="card-body">
//                 <div className="flex justify-between items-center">
//                     <span className="badge badge-primary">{event.category}</span>
//                     <span className="text-sm text-gray-500">
//                         {new Date(event.date).toLocaleDateString("en-US", {
//                             year: "numeric",
//                             month: "short",
//                             day: "numeric",
//                         })}
//                     </span>
//                 </div>

//                 <h2 className="card-title">{event.name}</h2>
//                 <p className="text-gray-600 line-clamp-2">{event.description}</p>

//                 <div className="flex justify-between items-center mt-2 text-sm">
//                     <span className="text-gray-500">{event.location}</span>
//                     <span className="font-semibold text-primary">
//                         ৳{event.entryFee}
//                     </span>
//                 </div>

//                 <div className="card-actions justify-end mt-4">
//                     <Link to={`/eventDetails/${event.id}`}   
//             className="btn btn-primary btn-sm">
                       
                  
//                         View Details
//                     </Link>
//                 </div>
//             </div>
//         </div>




//     );
// };

// export default EventsCard;




// import { Link } from "react-router";

// const EventCard = ({ event }) => {
//   return (
//     <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
//       <img
//         src={event.thumbnail}
//         alt={event.name}
//         className="w-full h-56 object-cover"
//       />
//       <div className="p-4">
//         <h2 className="text-2xl font-bold text-gray-800">{event.name}</h2>
//         <p className="text-sm text-gray-500 mt-1">{event.category}</p>
//         <p className="text-gray-600 mt-2">
//           📍 {event.location} | 📅 {event.date}
//         </p>
//         <p className="text-gray-700 font-semibold mt-2">
//           Entry Fee: {event.entryFee}৳
//         </p>
//         {/* <Link
//           to={`/event-Details/${event.id}`}
//           className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
//         >
//           View Details
//         </Link> */}
//       </div>
//     </div>
//   );
// };

// export default EventCard;



import React, { useState } from "react";
import { Link } from "react-router";
import { CalendarDays, MapPin, Ticket, Heart, ArrowRight } from "lucide-react";



export default function EventCard({ event, onBookmark }) {
  const [bookmarked, setBookmarked] = useState(false);

  const handleBookmark = () => {
    const next = !bookmarked;
    setBookmarked(next);
    onBookmark?.(event.id, next);
  };

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-white/80 dark:bg-neutral-900/80 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)] ring-1 ring-black/5 backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_18px_50px_-12px_rgba(0,0,0,0.45)]"
    >
      {/* Top media */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <img
          src={event.thumbnail}
          alt={event.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        {/* category badge */}
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <span className="badge badge-secondary bg-white/90 text-neutral-900 dark:bg-neutral-800 dark:text-white border-0 px-3 py-2 rounded-full text-xs font-semibold shadow">
            {event.category}
          </span>
        </div>
        {/* bookmark button */}
        <button
          onClick={handleBookmark}
          aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
          className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-neutral-900 dark:bg-neutral-800 dark:text-white shadow transition hover:scale-105"
        >
          <Heart className={"h-5 w-5 transition " + (bookmarked ? "fill-current" : "")} />
        </button>
      </div>

      {/* Body */}
      <div className="p-4 sm:p-5">
        <h3 className="text-lg sm:text-xl font-semibold leading-snug">{event.name}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-neutral-600 dark:text-neutral-300">
          {event.description}
        </p>

        <div className="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
          <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
            <CalendarDays className="h-4 w-4 shrink-0" />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
            <MapPin className="h-4 w-4 shrink-0" />
            <span className="truncate" title={event.location}>{event.location}</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
            <Ticket className="h-4 w-4 shrink-0" />
            <span>Entry Fee: <strong>{formatCurrency(event.entryFee)}</strong></span>
          </div>
          <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
            <span className="inline-flex items-center rounded-full border px-2 py-1 text-xs font-medium">
              ID: {event.id}
            </span>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex -space-x-2 overflow-hidden">
            {/* Decorative avatars (optional) */}
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-neutral-900" src="https://i.pravatar.cc/64?img=12" alt="" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-neutral-900" src="https://i.pravatar.cc/64?img=24" alt="" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-neutral-900" src="https://i.pravatar.cc/64?img=31" alt="" />
          </div>
          <Link
            to={`/event-Details/${event.id}`}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            View Details <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* subtle border glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5" />
    </div>
  );
}

// ---- helpers ----
function formatDate(input) {
  try {
    const d = new Date(input);
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  } catch {
    return input;
  }
}

function formatCurrency(amount) {
  try {
    return new Intl.NumberFormat(undefined, { style: "currency", currency: "BDT", maximumFractionDigits: 0 }).format(amount);
  } catch {
    return `৳${amount}`;
  }
}



