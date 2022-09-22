import {
  CurrencyPoundIcon,
  BellAlertIcon,
} from "@heroicons/react/24/outline/index.js";

const features = [
  {
    name: "Sus Coins",
    description: "Built in currency system omg!",
    icon: CurrencyPoundIcon,
  },
  {
    name: "Very SUS",
    description: "Endless sus you have there.",
    icon: BellAlertIcon,
  },
];

export default function PrimaryFeatures() {
  return (
    <div className="overflow-hidden">
      <div className="relative mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-900 to-red-500">
              Feels sus man.
            </h2>
          </div>
          <dl className="mt-10 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:space-y-0 lg:col-span-2 lg:mt-0">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-red-600 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-lg font-medium leading-6 text-gray-400">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
