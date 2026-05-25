import { getCharacterById } from "@/lib/api/rick";
import { CharacterT } from "@/types/";
import "./styles.css";
import Link from "next/link";


type PageProps = {
  params: Promise<{ id: number }>;
};

export default async function CharacterDetail({ params }: PageProps) {
  const { id } = await params;

  const data = await getCharacterById(id);

  if (!data) {
    return <p>No se puede encontrar el personaje</p>;
  }

  

  return (
    <div className="ContainerCharacterDetail">
            <h1>{data.name}</h1>
            <img src={data.image} alt={data.name} />
            <p>Género: {data.gender}</p>
            <p>Estado: {data.status}</p>
            <p>Especie: {data.species}</p>
            <p>ID: {data.id}</p>
            <p>Origen: {data.origin.name}</p>
            <p>Location: {data.location.name}</p>
            <Link className="Link" href={`/`}>🏠</Link>
    </div>
  );
}