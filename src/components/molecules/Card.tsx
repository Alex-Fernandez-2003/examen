import { ApiAuto } from "../types/ApiAuto";
import TitleSection from "./TitleSection";
import ArticleSection from "./ArticleSection";

interface CardProps {
  auto: ApiAuto;
}

export function Card({ auto }: CardProps) {
  return (
    <div className="bg-yellow-400 rounded-xl shadow-md p-6 mb-4">
      <TitleSection title={auto.nombre}></TitleSection>
      <div className="grid grid-cols-2 items-center justify-center">
        <ArticleSection label={"Modelo"} item={auto.modelo}></ArticleSection>
        <ArticleSection label={"Color"} item={auto.color}></ArticleSection>
        <ArticleSection
          label={"Combustible"}
          item={auto.combustible}
        ></ArticleSection>
        <ArticleSection label={"Pais"} item={auto.Pais}></ArticleSection>
      </div>
    </div>
  );
}

export default Card;
