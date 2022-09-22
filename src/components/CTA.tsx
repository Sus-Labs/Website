import { Image, Picture } from "@astrojs/image/components";

export default function CTA() {
  return (
    <div>
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg bg-gradient-to-r from-red-900 via-red-800 to-black shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                <span className="block text-3xl tracking-tight sm:text-4xl text-white">
                  Try the sus.
                </span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-black">
                The imposter will help you to eat to sleep to do work to manage
                your server to fix your memes and many other sussy stuff ngl.
              </p>
              <a
                href="#"
                className="mt-8 inline-flex items-center rounded-2xl bg-red-700 p-4 text-base font-semibold text-white hover:bg-red-800 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 active:text-white/70"
              >
                Add to Discord
              </a>
            </div>
          </div>
          <div className="aspect-w-5 aspect-h-3 -mt-6 md:aspect-w-2 md:aspect-h-1">
            <img
              className="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src="./assets/sus_pro.png"
              alt="Sus"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
