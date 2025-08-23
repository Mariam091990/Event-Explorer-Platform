



import React from "react";
import { Link } from "react-router";
import { CalendarDays, MapPin } from "lucide-react";



export default function EventCard({ event}) {




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
         
          
        </div>

        
      </div>

      
      
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





