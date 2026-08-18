import React from "react";

function Center() {
  return (
    <section className="px-4 md:px-8 py-10">

      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm p-6 md:p-8">

        {/* Top Header */}
        <div className="flex items-center justify-between mb-8">

          <span className="bg-black text-white text-[9px] tracking-[0.2em] px-3 py-1.5 rounded-full uppercase">
            Target Audience
          </span>

          <span className="text-[9px] tracking-[0.2em] uppercase text-gray-500">
            A Digital Banking Platform
          </span>

        </div>


        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">

          {/* Left Content */}
          <div className="flex flex-col justify-between">

            <div>

              <h1 className="text-4xl md:text-5xl font-semibold leading-[0.95] tracking-tight">
                Prospective
                <br />
                customer
                <br />
                segmentation
              </h1>

              <p className="mt-6 text-sm text-gray-500 leading-relaxed max-w-xs">
                Depending on customer satisfaction and access to banking
                products, potential target audience can be divided into
                three groups.
              </p>

            </div>

            {/* Arrow */}
            <div className="mt-10 lg:mt-24">
              <span className="text-5xl font-light">
                ↗
              </span>
            </div>

          </div>


          {/* Customer Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            {/* Card 1 */}
            <div className="relative h-[430px] rounded-2xl overflow-hidden bg-gray-200">

              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80"
                alt="Satisfied customer"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Number */}
              <span className="absolute top-3 left-3 bg-white/90 text-black text-xs w-7 h-7 rounded-full flex items-center justify-center">
                1
              </span>

              {/* Content */}
              <div className="absolute bottom-4 left-4 right-4 text-white">

                <p className="text-xs leading-relaxed mb-4">
                  Prime customers that have access to bank products
                  and are satisfied with the current product.
                </p>

                <div className="flex items-center justify-between bg-blue-600 rounded-full px-4 py-2">
                  <span className="text-xs font-medium">
                    Satisfied
                  </span>

                  <span>→</span>
                </div>

              </div>

            </div>


            {/* Card 2 */}
            <div className="relative h-[430px] rounded-2xl overflow-hidden bg-gray-200">

              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
                alt="Underserved customer"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <span className="absolute top-3 left-3 bg-white/90 text-black text-xs w-7 h-7 rounded-full flex items-center justify-center">
                2
              </span>

              <div className="absolute bottom-4 left-4 right-4 text-white">

                <p className="text-xs leading-relaxed mb-4">
                  Prime customers that have access to bank products
                  and are not satisfied with the current service.
                </p>

                <div className="flex items-center justify-between bg-blue-600 rounded-full px-4 py-2">
                  <span className="text-xs font-medium">
                    Underserved
                  </span>

                  <span>→</span>
                </div>

              </div>

            </div>


            {/* Card 3 */}
            <div className="relative h-[430px] rounded-2xl overflow-hidden bg-gray-200">

              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80"
                alt="Unbanked customer"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <span className="absolute top-3 left-3 bg-white/90 text-black text-xs w-7 h-7 rounded-full flex items-center justify-center">
                3
              </span>

              <div className="absolute bottom-4 left-4 right-4 text-white">

                <p className="text-xs leading-relaxed mb-4">
                  Customers from prime segments with no access
                  to banking products.
                </p>

                <div className="flex items-center justify-between bg-lime-400 text-black rounded-full px-4 py-2">
                  <span className="text-xs font-medium">
                    Unbanked
                  </span>

                  <span>→</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Center;