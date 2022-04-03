import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchFilms} from "@models/fetchFilms";
import {ErrorBoundary} from '@components/ErrorBoundary'
import {Header} from "@components/Header";
import {Main} from "@components/Main/Main";
import {Footer} from "@components/Footer";
import {State} from "@reducers/rootReducer";
import {Screen} from "@enums/enum";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchFilms());
    }, []);
    const searchType = useSelector((state: State) => state.searchMode);
    const films = useSelector((state: State) => state.filmsData)
    const sortBy = useSelector((state: State) => state.sortMode)
    const [screen, setScreen] = useState(Screen.FilmsList);

    return (
      <div className='wrapper'>
        <Header sortMode={sortBy} filmsData={films} searchType={searchType}/>
        <ErrorBoundary>
          <Main
            screen={screen}
            setScreen={setScreen}
            filmsData={films}
          />
        </ErrorBoundary>
        <Footer />
      </div>
    );
};

export { App };

