import Text from "../atoms/Text";

interface TitleSectionProps {
  title: string;
}

export function TitleSection({ title }: TitleSectionProps) {
  return (
    <div className="flex justify-between items-start mb-4">
      <Text className="text-xl font-semibold text-gray-800">
        {title}
      </Text>
    </div>
  );
}

export default TitleSection;
