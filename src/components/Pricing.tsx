import { twMerge } from "tailwind-merge";
import { Check } from "lucide-react";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-20 bg-white">
      <div className="flex justify-center items-center flex-col">
        <div className="tag">Affordable Pricing</div>
        <h1 className="section-title">Pricing</h1>
        <p className="section-description">
          Free forever. Upgrade for unlimited tasks, better security and
          exclusive features
        </p>
        <div className="flex flex-col md:flex-row gap-7 justify-end mt-6 lg:items-end">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features,
            }) => (
              <div
                className={twMerge(
                  "card",
                  inverse && "bg-black border-black text-white"
                )}
              >
                <div className="flex justify-between items-center">
                  <h3
                    className={twMerge(
                      "font-bold text-sm text-black/50",
                      inverse && "text-white/50"
                    )}
                  >
                    {title}
                  </h3>
                  {popular && (
                    <div className="border border-slate-600 text-sm px-2 py-1 rounded-lg bg-[linear-gradient(30deg,_pink,_skyblue,_yellow)] text-transparent bg-clip-text font-semibold">
                      Most Popular
                    </div>
                  )}
                </div>
                <div className="mt-[30px] mb-4">
                  <span className="font-bold text-4xl">${monthlyPrice}</span>
                  <span className="text-sm text-slate-500">/monthly</span>
                </div>
                <button
                  className={twMerge(
                    "btn w-full my-4",
                    inverse && "bg-white text-black"
                  )}
                >
                  {buttonText}
                </button>
                <div className="space-y-3">
                  {features.map((items, index) => (
                    <li
                      key={index}
                      className="list-none flex items-center justify-start space-x-2"
                    >
                      <Check className="size-4" />
                      <span>{items}</span>
                    </li>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
