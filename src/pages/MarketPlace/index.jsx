import { useEffect, useState } from "react";
import { todoslosEstadios } from "../../services/funciones"



const MarketPlace = () => {

  const [stadium, setStadium] = useState(null);

  useEffect(() => {

    todoslosEstadios(setStadium);

  }, [])


  return (
    <>

      {stadium !== null ? (
        stadium.map(stadium => (
          <div key={stadium.id}>
            <a href={`/market/${stadium.id}`}>{stadium.name}</a>
            <img src={stadium.image} alt="#" />
          </div>
        ))
      ) : ("no hay datos")}
    </>
  );
}

export default MarketPlace;