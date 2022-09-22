import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline/index.js";

const navData = [
  {
    name: "Premium",
    href: "/premium",
  },
  {
    name: "About",
    href: "/about",
  },
];

export default function Header() {
  return (
    <Popover className="sticky bg-black z-10 top-0 backdrop-filter backdrop-blur-lg bg-opacity-30">
      <div
        className="pointer-events-none absolute inset-0 z-30"
        aria-hidden="true"
      />
      <div className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 sm:py-4 md:justify-start md:space-x-10 lg:px-8">
          <div>
            <a href="/" className="flex">
              <img
                className="h-8 w-auto sm:h-10"
                src="./assets/sus_pro.png"
                alt="Sus"
                width={32}
                height={40}
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-black p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">
              {navData.map((a) => (
                <a
                  className="text-gray-300 hover:text-red-500"
                  key={a.name}
                  href={a.href}
                >
                  {a.name}
                </a>
              ))}
            </Popover.Group>
            <div className="flex items-center md:ml-12">
              <a
                href="#joinDiscord"
                className="inline-flex justify-center rounded-2xl bg-red-600 p-4 text-base font-semibold text-white hover:bg-red-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 active:text-white/70"
              >
                Discord
              </a>
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-black shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6 sm:pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="./assets/sus_pro.png"
                    alt="Sus"
                    height={32}
                    width={32}
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-black hover:bg-red-600 p-2 text-white  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 hover:text-gray-900">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6 sm:mt-8">
                <nav>
                  <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                    {navData.map((a) => (
                      <a
                        key={a.name}
                        href={a.href}
                        className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-900"
                      >
                        <div className="ml-4 text-base font-medium text-gray-400">
                          {a.name}
                        </div>
                      </a>
                    ))}
                  </div>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="mt-6">
                <a
                  href="#joinDiscord"
                  className="inline-flex justify-center rounded-2xl bg-red-700 p-4 text-base font-semibold text-white hover:bg-red-800 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 active:text-white/70"
                >
                  Join Discord
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
