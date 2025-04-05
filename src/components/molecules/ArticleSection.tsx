import Text from "../atoms/Text";

interface ArticleSectionProps {
  label: string;
  item: string;
}

export function ArticleSection({ label, item }: ArticleSectionProps) {
  return (
    <div className="mb-6">
      <Text className="text-sm text-gray-500 mb-2">{label}:</Text>
      <Text className="text-gray-700 font-medium">
        {item}
      </Text>
    </div>
  );
}

export default ArticleSection;
