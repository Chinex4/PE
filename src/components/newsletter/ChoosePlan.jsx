import React from 'react';

const plans = [
  {
    name: 'Monthly',
    price: 3500,
    description:
      'Stay flexible with month-to-month access to all premium content, insights, and tools.',
    tier: 'monthly',
    link: 'https://selar.com/63p800',
  },
  {
    name: '3 Months',
    price: 9000,
    description:
      'Commit for half a year and save. Includes all premium content + bonus resources.',
    tier: '3months',
    link: 'https://selar.com/40mz35',
  },
  {
    name: '1 year',
    price: 37000,
    description:
      'Best value for deep thinkers. Full access, all updates, and exclusive yearly-only perks.',
    tier: '1year',
    link: 'https://selar.com/996w1e', // Replace with the correct Selar link
  },
];

const ChoosePlan = () => {
  return (
    <section id="plans" className="text-[#F5E9DC] py-16 px-6 md:px-16">
      <h2 className="text-center text-3xl font-bold mb-12">Choose Your Plan</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="rounded-xl p-6 border border-gray-700 flex flex-col items-center transition-all duration-300 bg-zinc-800"
          >
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-2xl font-bold mb-4">
              ₦{plan.price.toLocaleString()}
            </p>
            <p className="text-sm text-center mb-6">{plan.description}</p>
            <a
              href={plan.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-[#F5E9DC]"
            >
              Subscribe
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChoosePlan;
