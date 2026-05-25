import axios from "axios";
import { ResultCharactersT,CharacterT } from "@/types/types";

const api = axios.create({
    baseURL: "https://rickandmortyapi.com/api"
});

export const getCharacters = async (): Promise<ResultCharactersT> => {
  const res = await api.get("/character");
  return res.data;
};

export const getCharacterById = async (id: number) => {
    const response = await api.get<CharacterT>(`/character/${id}`);
    return response.data;
};
