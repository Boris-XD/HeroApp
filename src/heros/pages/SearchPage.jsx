import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string'
import { useForm } from "../../hooks/useForm";
import { getHerosByName } from "../helpers"
import { useMemo } from "react";
import { HeroCard } from "../components";

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { q = ''} = queryString.parse(location.search);
    const heros =useMemo(() => getHerosByName(q), [q]);

    const showSearch = (q.length === 0);
    const showError = (q.length > 0) && heros.length === 0;
    
    const {searchText,
      onInputChange,} = useForm({
        searchText: q
    });

    
    const onSearchHero = (event) => {
      event.preventDefault();
      //if(searchText.trim().length <=2) return;    
      
      navigate(`?q=${searchText}`);
      
  }
  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
      <div className="col-5">
        <h4>Searching</h4>
        <hr />
        <form onSubmit={onSearchHero}>
          <input
            type="text"
            placeholder="Search a hero"
            className="form-control"
            name="searchText"
            value={searchText}
            autoComplete="off"
            onChange={onInputChange}
          />
          <button className="btn btn-outline-primary mt-1">Search</button>
        </form>
      </div>
      <div className="col-7">
        <h4>Results</h4>
        <hr />
        <div className="alert alert-primary animate__animated animate_fadeIn"
          style={{ display: showSearch?'': 'none'}}>
            Search a hero
        </div>
        <div className="alert alert-danger animate__animated animate_fadeOut"
          style={{ display: showError?'':'none'}}>
          No hero with <b>{q}</b>
        </div>
        {
          heros.map(hero => (
            <HeroCard key={hero.id} {...hero} />
          ))
        }
      </div>
    </div>
    </>
  );
};
