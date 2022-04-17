import React from 'react'
import {FilmData} from "@interfaces/interfaces";
import {FilmListContainer} from "@components/FilmListContainer";

type mainProps = {
  filmsData: {films: FilmData[]}
}

export const Main: React.FC<mainProps> = ({filmsData}) => (
    <>
      <main className="main">
        <div className="film-area">
          <FilmListContainer
            filmsData={filmsData}
          />
        </div>
      </main>
    </>
  )
