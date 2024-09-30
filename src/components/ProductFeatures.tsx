import { ArrowRight, LucideIcon } from "lucide-react";

interface ProductFeaturesProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export const ProductFeatures = ({
  Icon,
  title,
  description,
}: ProductFeaturesProps) => {
  return (
    <div className="px-20 lg:px-10 py-5 sm:pb-7 space-y-2">
      <div>
        <Icon className="size-6" />
      </div>
      <h1 className="font-bold text-[16px]">{title}</h1>
      <p>{description}</p>
      <button className="flex flex-row items-center justify-center text-sm gap-x-1">
        Learn More <ArrowRight className="size-4" />
      </button>
    </div>
  );
};
