import React from 'react';
import {connect, ConnectedProps} from "react-redux";
import {FilmData} from "@interfaces/interfaces";
import {Screen, Search, Sort} from "@enums/enum";
import {SearchForm} from "@components/SearchForm";
import {MovieDetails} from "@components/MovieDetails";
import {SortResultsContainer} from "@components/SortResultsContainer";
import {Logo} from "@components/Logo";
import {BackButton} from "@components/BackButton";
import './header.scss'

const mapStateToProps = (state: {
  screen: Screen;
  searchMode: Search;
  sortMode: Sort;
  currentMovie: FilmData;
}) => ({
  a: state.screen,
  searchMode: state.searchMode,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

interface IProps extends PropsFromRedux {
  a: Screen;
  sortMode: Sort;
  filmsData: {films: FilmData[]};
  searchType: Search;
}

const Header = (props: IProps) => {
  if (props.a === Screen.FilmsList) {
    return (
      <header className="header">
        <div className='header__logo'>
          <Logo/>
        </div>
        <SearchForm
          sortBy={props.sortMode}
          searchType={props.searchType}
          movieList={props.filmsData?.films}
        />
      </header>
    );
  }
  if (props.a === Screen.Film){
    return (
      <>
        <header className="header header--movieDetails">
          <div className='header__top'>
            <div className='header__logo'>
              <Logo/>
            </div>
            <div className='header__back-btn'>
              <BackButton/>
            </div>
          </div>
          <MovieDetails/>
        </header>
        <SortResultsContainer filmList={props.filmsData?.films} />
      </>
    );
  }
  return <></>
}

const connectedHeader = connector(Header);

export { connectedHeader as Header }
