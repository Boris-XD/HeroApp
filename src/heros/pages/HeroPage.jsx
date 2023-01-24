import React, { useCallback, useMemo } from "react";
import { HeroList } from "../components";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useState } from "react";

export const HeroPage = () => {
  const [show, setShow] = useState(true);
  const { heroId } = useParams();
  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  //const hero = useCallback(() => getHeroById(heroId), [heroId]);

  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1);
  };

  const onChangeImage = () => {
    setShow(!show);
  };

  if (!hero) {
    return <Navigate to="/" />;
  }

  return (
    <div className="row mt-5 animate__animated animate__fadeInUp">
      {show && (
        <div className="col-4">
          <img
            src={`/assets/heroes/${hero.id}.jpg`}
            alt={hero.superhero}
            className="img-thumbnail"
          />
        </div>
      )}
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b> {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance:</b> {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>
        <div className="d-flex space-between">
        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Return
        </button>
        <button className="btn btn-outline-info" onClick={onChangeImage}>
          {show ? "Hide Image" : "Show Image"}
        </button>
        </div>
      </div>
    </div>
  );
};
