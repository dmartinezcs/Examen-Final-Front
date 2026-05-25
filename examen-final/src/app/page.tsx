"use client";
import "./style.css";
import { useEffect, useState } from "react";
import { ResultCharactersT } from "../types/types";
import api from "@/lib/api/api";
import CharacterCard from "../app/components/CharacterCard";
import Paginador from "../app/components/Paginador";
import Filter from "./components/Filter";



const MainPage = ( ) => {


  const [resultCharacters, setResultCharacters] = useState<ResultCharactersT | null>(null);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    const fetchCharacters = () => {
        try{
            api.get(`/character?page=${page}`).then((e)=>{
                const {data} : {data: ResultCharactersT} = e;
                setResultCharacters(data);
            }).finally(()=>{
                setLoading(false);
            })
        }catch(e){
            alert(String(e));
        }
    }

    useEffect(()=>{
        fetchCharacters();
    },[page]);

    if(loading){
        return(<h1>Loading...</h1>)
    }

  return(
    <div className="app">

    <div className="Filter">
      <Filter></Filter>
    </div>
    <div className="ContainerCharacters">
            {resultCharacters && resultCharacters.results.map((e)=>(<CharacterCard key={e.id} personaje={e}/>))}
            <Paginador next={!!resultCharacters?.info.next} prev={!!resultCharacters?.info.prev} page={page} setPage={(e)=>{
                setPage(e);
            }}/>
    </div>
    </div>
  )
};


export default MainPage;