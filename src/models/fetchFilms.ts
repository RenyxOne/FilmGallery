import {Dispatch} from "react";
import {SetFilmsAction} from "@actions/SetFilmsAction";
import {Search, SearchByTitle, Sort} from "@enums/enum";
import {defaultResponse} from "@models/defaultResponse";

export const fetchFilms = (
  sortBy: Sort = 'vote_average',
  searchType: Search = SearchByTitle,
  searchInput: string = ''
) => {
  const myHeader = new Headers();
  myHeader.append('Access-Control-Allow-Origin', '*');
  function fetcher (dispatch: Dispatch<{}>) {
    const url = `https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&searchBy=${searchType}${searchInput ? `&search=${searchInput}`: ''}`;
    const data = fetch(url, {
      mode: 'cors',
      headers: myHeader,
      method: 'GET'
    })
      .then(data => data.json())
      .then(json => {
        dispatch(SetFilmsAction(json.data));
        localStorage.setItem('url',JSON.stringify(json.data));
      })
      .catch(error => {
        const cachedData = localStorage.getItem('url');
        dispatch(SetFilmsAction(cachedData ? JSON.parse(cachedData) : defaultResponse.data))
      });
    ;
  }
  return fetcher;
}
