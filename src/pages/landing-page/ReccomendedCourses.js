import React from 'react';

import { coursesImage } from '../../localdata/landing-page/coursesImage';

const ReccomendedCourses = () => {
  return (
    <section className="bg-white py-8">
      <div className="custom-container p-4">
        <div className="flex flex-col items-center justify-center">
          <h3>Limited Courses</h3>
          <h1 className="mt-4">Choose the path you want to explore</h1>
          <p className="mt-4">
            <em>" Certain things begin small then grow. "</em> Even us, that is
            why we only priority these seven (7) courses:
          </p>
          <div className="my-5"></div>
          <div className="grid lg:grid-cols-4 gap-4 w-full place-items-center align-middle ">
            {coursesImage.map((image) => (
              <article
                key={image.id}
                className="h-[250px] md:w-full w-[230px] mx-auto bg-cover bg-no-repeat bg-center flex items-center justify-center rounded-2xl "
                style={{
                  backgroundImage: `url(${image.img_link})`
                }}
              >
                <h3 className="w-full text-white p-2 bg-gray-900 bg-opacity-60 text-3xl text-center">
                  {image.label}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReccomendedCourses;
