import React from 'react';

const Loading = () => {
  return (
    <>
      <section className="rounded-section mt-32 relative z-10">
        <div className="custom-container">
          <div className=" shadow rounded-md p-4 w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
              {/* <div className="rounded-full bg-slate-300 h-10 w-10"></div> */}
              <div className="flex-1 space-y-6 py-1">
                <h4 className="text-gray-500">
                  Fetching data... Please wait...
                </h4>
                <div className="h-2 bg-slate-300 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-300 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-300 rounded"></div>
                </div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                    <div className="h-2 bg-slate-300 rounded col-span-2"></div>
                  </div>
                  <div className="h-2 bg-slate-300 rounded"></div>
                </div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-300 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-300 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Loading;
