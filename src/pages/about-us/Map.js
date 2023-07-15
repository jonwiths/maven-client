import React from 'react';

const Map = () => {
  return (
    <section>
      <div className="container mx-auto p-4 w-full">
        <div className="p-4 w-full bg-gray-900 text-white">
          <h1 className="text-center mb-4">Where can you find us?</h1>
          <p className="text-center">
            Just go to our campus and ask something you want to know.
          </p>
        </div>
        <iframe
          className="w-full"
          title="map-frame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.2075143774105!2d120.99689211528076!3d14.869670374411335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397a95aea0575d3%3A0x3ac96776e8719fff!2sPolytechnic%20University%20of%20the%20Philippines%20(PUP%20Santa%20Maria%2C%20Bulacan%20Campus)!5e0!3m2!1sen!2sph!4v1671530656697!5m2!1sen!2sph"
          height="500"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
