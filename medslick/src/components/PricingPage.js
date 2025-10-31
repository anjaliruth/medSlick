import Navigation from "./Navigation";
import { Check } from "lucide-react";
import { Button } from "./ui/button";
export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      //   description: 'Perfect for trying out the platform',
      features: ["Access to one station", "Personalised feedback"],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pay as you go",
      price: "$xxxx",
      period: "one off",
      credits: "For 200 credits(minutes)",
      //   description: 'Ideal for medical students preparing for interviews',
      features: [
        "Access to x stations",
        "Personalised feedback",
        "Saved progress",
        "Other random things",
        "Further top-ups at £ xx/credit",
      ],
      cta: "Get Started",
      highlighted: true,
    },
    {
      name: "Subscription",
      price: "$xxxx",
      period: "per month",
      //   description: 'For residents and professionals',
      credit: "Unlimited credits",
      features: [
        "Access to x stations",
        "Personalised feedback",
        "Saved progress",
        "Other random things",
      ],
      cta: "Get Started",
      highlighted: false,
    },
  ];

  return (
    <div>
      <Navigation />

      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that's right for you.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-8 m-10 ${
                  plan.highlighted
                    ? "border-blue-600 border-2 shadow-xl rounded-2xl"
                    : "border-gray-600 border-2 rounded-2xl"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl">{plan.price}</span>
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  </div>

                  {/* <button classname={`px-4 py-2 bg-pink-600 text-white rounded hover:bg-black-700 transition`}> Get Started</button> */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
