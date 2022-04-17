import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchFilms} from "@models/fetchFilms";
import {ErrorBoundary} from '@components/ErrorBoundary'
import {Header} from "@components/Header";
import {Main} from "@components/Main/Main";
import {Footer} from "@components/Footer";
import {State} from "@reducers/rootReducer";
import {ScreenFilmList} from "@enums/enum";
import {SearchForm} from "@components/SearchForm";
import {MovieDetails} from "@components/MovieDetails";
import {SortResults} from "@components/SortResults";
import {LeftRight} from "@components/LeftRight/LeftRight";

export const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchFilms());
    }, []);
    const searchMode = useSelector((state: State) => state.searchMode);
    const films = useSelector((state: State) => state.filmsData)
    const sortMode = useSelector((state: State) => state.sortMode)

    const screenNew = useSelector((state: State) => state.screen)

    return (
      <div className='wrapper'>
        <Header>
            {
              screenNew === ScreenFilmList ?
                <SearchForm sortMode={sortMode} searchMode={searchMode} movieList={films.films}/> : <MovieDetails/>
            }
            <LeftRight
              left={`${films.films.length} films found`}
              right={<SortResults filmList={films.films} />}
            />
        </Header>
        <ErrorBoundary>
          <Main filmsData={films}/>
        </ErrorBoundary>
        <Footer />
      </div>
    );
};

