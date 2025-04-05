import Card from "../molecules/Card";
import { ApiAuto } from "../types/ApiAuto";

interface MapperProps {
  autos: ApiAuto[];
}

export function MapperProps({ autos }: MapperProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5">
      {autos.map((auto) => (
        <span key={auto.nombre}>
          <Card auto={auto}></Card>
        </span>
      ))}
    </div>
  );
}

export default MapperProps;
