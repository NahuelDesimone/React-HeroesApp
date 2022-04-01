import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = () => {
  const { heroeID } = useParams();

  const hero = useMemo(() => getHeroById(heroeID), [heroeID])

  //Con el useMemo memorizo el valor de hero, y solo se vuelve a llamar cuando cambia una de las dependencias
  //En este caso la dependencua seria el horeID, siempre que cambie el heroeID se vuelve a llamar

  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1); //Con el -1 le indico que vuelva a la pagina que estaba antes
  };

  if (!hero) {
    return <Navigate to="/" />;
  }

  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  const imagePath = `/assets/${id}.jpg`;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={imagePath} alt={superhero} className="img-thumbnail animate__animated animate__bounceInLeft" />
      </div>

      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b> {alter_ego}{" "}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b> {publisher}{" "}
          </li>
          <li className="list-group-item">
            <b>First Appearance: </b> {first_appearance}{" "}
          </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>

        <button className="btn btn-outline-info" onClick={handleReturn}>
          Regresar
        </button>
      </div>
    </div>
  );
};
