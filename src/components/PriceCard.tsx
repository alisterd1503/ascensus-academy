import { Pricing } from "@/src/types";
import { Check } from 'lucide-react';

interface Props {
  item: Pricing;
}

const PricingCard: React.FC<Props> = ({ item }) => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-md shadow-sm p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
        <span className="text-xl font-bold text-primary-700">{item.price}</span>
      </div>

      {/* Main bullet points */}
      <ul className="space-y-3 mb-4">
        {item.points.map((point, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-700">
            <Check className="h-5 w-5 flex-shrink-0 text-primary-light" />
            <span dangerouslySetInnerHTML={{ __html: point }}></span>
          </li>
        ))}
      </ul>

      {/* Secondary section (optional) */}
      {item.secondaryTitle && item.secondaryPoints && (
        <>
          <h5 className="text-lg font-semibold text-gray-900 mb-4 opacity-70">
            {item.secondaryTitle}
          </h5>
          <ul className="space-y-3 mb-4">
            {item.secondaryPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-700">
                <Check className="h-5 w-5 flex-shrink-0 text-primary-light" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default PricingCard;