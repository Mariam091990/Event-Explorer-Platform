import React from 'react';
import EventsDetailsCard from '../components/EventsDetailsCard';
import { Form} from 'react-router';




const EventDetails = () => {


 




  return (
    <div>
     


      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center mb-10 ">
            <h1 className="text-5xl font-bold">Book your seat Now!</h1>

          </div>
          <div className="card bg-base-100 w-full max-w-sm  shadow-2xl">
            <div className="card-body w-full">
              <form className="fieldset">
                <label className="label">Email</label>
                <input name="email" type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input name="password" type="password" className="input" placeholder="Password" />
                <button type='submit' className="btn btn-neutral mt-4">Book</button>
              </form>
            </div>
          </div>
        </div>
      </div>


      {/* <EventsDetailsCard></EventsDetailsCard> */}

      
    </div>
  );
};

export default EventDetails;