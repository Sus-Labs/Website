export default function Hero() {
  return (
    <div className="bg-black pb-8 sm:pb-12 lg:pb-12">
      <div className="overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-48">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div>
            <div className="mt-20">
              <div className="mt-6 sm:max-w-xl">
                <h1 className="text-5xl font-bold tracking-tight text-gray-200 sm:text-5xl">
                  The{" "}
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-900 to-red-500">
                    imposter
                  </span>{" "}
                  welcomes you.
                </h1>
                <br />
                <h1 className="mt-6 text-4xl text-gray-500">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-900 to-red-500">
                    towards your sus journey.
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="relative -mr-40 pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12">
              <img
                className="w-full rounded-md ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                src="./assets/sus_pro.png"
                alt="Sus"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
