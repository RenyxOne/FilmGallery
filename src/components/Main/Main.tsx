import React from 'react'
import {IContentProps} from "@interfaces/interfaces";
import {FilmListContainer} from "@components/FilmListContainer";

const Main = (props: IContentProps) => (
    <>
      <main className="main">
        <div className="film-area">
          <FilmListContainer
            screen={props.screen}
            setScreen={props.setScreen}
            filmsData={props.filmsData}
          />
        </div>
      </main>
    </>
  )

const MainMemo = React.memo(Main);

export {MainMemo as Main}
