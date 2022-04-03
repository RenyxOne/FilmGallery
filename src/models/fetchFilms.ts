import {Dispatch} from "react";
import {setFilms} from "../actions/setMovies";
import {Search} from "../enums/enum";

const fetchFilms = (
  sortBy: string = 'vote_average',
  searchType: string = Search.Title,
  searchInput: { value: string } | string = {value: ''}
) => {
  const myHeader = new Headers();
  myHeader.append('Access-Control-Allow-Origin', '*');
  return (dispatcher: Dispatch<{}>) => {
    const searchInputText = typeof searchInput === 'string' ? searchInput : searchInput.value;
    const url = `https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&searchBy=${searchType}&search=${searchInputText}`;

    fetch(url, {
      mode: 'cors',
      headers: myHeader,
      method: 'GET'
    })
      .then(data => {
        data.json()
          .then(response => {
            dispatcher(setFilms(response.data));
          })
      });

  }
}

export {fetchFilms}
