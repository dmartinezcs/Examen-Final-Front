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

export const getCharactersByGender = async(gender: string): Promise<ResultCharactersT> => {
    const response = await api.get(`/character/?gender=${ gender }`);
    return response.data;
};

export const getCharactersByStatus = async(status: string): Promise<ResultCharactersT> => {
    const response = await api.get(`/character/?status=${ status }`);
    return response.data;
};

export const getCharactersByNames = async(name: string): Promise<ResultCharactersT> => {
    const response = await api.get(`/character/?name=${ name }`);
    return response.data;
};

export const getFilteredCharacters = async (filters: { gender?: string; status?: string; name?: string }): Promise<ResultCharactersT> => {
    const { gender, status, name } = filters;
    let url = `https://rickandmortyapi.com/api/character/?`;
    if (name) url += `name=${name}&`;
    if (gender) url += `gender=${gender}&`;
    if (status) url += `status=${status}`;
    
    const response = await api.get(url);
    return response.data;
};