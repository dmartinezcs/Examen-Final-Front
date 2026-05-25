import "./styles.css";

const Paginador = ({next,prev,page,setPage}: {
    next: boolean,
    prev: boolean,
    page: number,
    setPage: (page: number) => void
}) => {

    return(

        
        <div className="PaginadorContainer">
            {prev && <div className="arrowContainer" onClick={()=>{
                setPage(page-1);
            }}><p>{"<"}</p></div>}
            {page>1 && <div className="pageContainer"><h1 onClick={()=>{
                setPage(1);
            }}>{1}</h1></div>}
            
            {page>2 && <div className="pageContainer"><h1 onClick={()=>{
                setPage(2);
            }}>{2}</h1></div>}
            {page>3 && <div className="pageContainer"><h1 onClick={()=>{
                setPage(3);
            }}>{3}</h1></div>}
            {page==41 && <div className="pageContainer"><h1 onClick={()=>{
                setPage(40);
            }}>{40}</h1></div>}
            {page==42 && <div className="pageContainer"><h1 onClick={()=>{
                setPage(41);
            }}>{41}</h1></div>}
           
            <h1>{page}</h1>
            {page==1 && <div className="pageContainer"><h1 onClick={()=>{
                setPage(2);
            }}>{2}</h1></div>}
            {page==1 && <div className="pageContainer"><h1 onClick={()=>{
                setPage(3);
            }}>{3}</h1></div>}
            {page==2 && <div className="pageContainer"><h1 onClick={()=>{
                setPage(3);
            }}>{3}</h1></div>}
            

            {page<40 && <div className="pageContainer"><h1 onClick={()=>{
                setPage(40);
            }}>{40}</h1></div>}
            {page<41 && <div className="pageContainer"><h1 onClick={()=>{
                setPage(41);
            }}>{41}</h1></div>}
            {page<42 && <div className="pageContainer"><h1 onClick={()=>{
                setPage(42);
            }}>{42}</h1></div>}
            {next && <div className="arrowContainer" onClick={()=>{
                setPage(page+1);
            }}><p>{">"}</p></div>}
        </div>
    )
}


export default Paginador;