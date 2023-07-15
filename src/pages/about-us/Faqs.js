import React, { useState } from 'react';

import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';

import faqs from '../../localdata/landing-page/faqs';

const Faqs = () => {
  const [selected, setSelected] = useState(null);

  const handleToggle = (id) => {
    if (selected === id) {
      return setSelected(null);
    }
    setSelected(id);
  };

  return (
    <>
      <article className="">
        <div className="container w-full mx-auto flex items-center justify-center flex-col">
          <h1 className="text-blue-700 bg-gray-200 mb-5  w-full p-4 text-center">
            Frequently Asked Questions (FAQs)
          </h1>
          <p className="text-blue-700 p-4">
            Can't find an <span className="font-semibold">answer</span>? You can
            message using our contact information.
          </p>
          <div className="faqs-container p-4">
            {faqs.map((faq) => (
              <article
                className="max-w-[550px] mb-1 hover:cursor-pointer "
                key={faq.id}
                onClick={() => handleToggle(faq.id)}
              >
                <div
                  className={
                    selected === faq.id
                      ? 'bg-blue-900 text-white flex justify-between items-center gap-3 border-2 border-blue-900 rounded-xl p-2 hover:shadow-lg'
                      : 'flex justify-between items-center gap-3 border-2 border-blue-900 rounded-xl p-2 hover:shadow-lg text-blue-900'
                  }
                >
                  <h4 className="font-semibold ">{faq.item}</h4>
                  <span>
                    {selected === faq.id ? (
                      <AiFillMinusCircle size={30} />
                    ) : (
                      <AiFillPlusCircle size={30} />
                    )}
                  </span>
                </div>
                <p className={selected === faq.id ? 'p-2 block' : 'hidden'}>
                  {faq.content}
                </p>
              </article>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};

export default Faqs;
