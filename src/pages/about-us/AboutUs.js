import React from 'react';

import AboutMaven from './AboutMaven';
import Stats from '../../components/landing-page/Stats';
import Objectives from './Objectives';
import CoreValues from './CoreValues';
import Team from './Team';
import Faqs from './Faqs';
import Contacts from './Contacts';
import SignUp from '../../components/landing-page/SignUp';
import Map from './Map';

const AboutUs = () => {
  return (
    <section>
      <article className="bg-about-header-bg bg-fixed bg-center h-[200px] w-full flex items-center justify-center">
        <div className="">
          <h1 className="text-gray-100 font-semibold text-3xl">About Us</h1>
        </div>
      </article>
      <div className="custom-container">
        <AboutMaven />
        <Stats />
        <Objectives />
        <CoreValues />
        <Team />
        <Faqs />
        <Contacts />
        <SignUp />
        <Map />
      </div>
    </section>
  );
};

export default AboutUs;
