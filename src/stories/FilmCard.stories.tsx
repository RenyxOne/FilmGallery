import React from 'react';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {FilmCardDumb} from "@components/FilmCard/FilmCardDumb";

export default {
  title: 'FilmCard',
  component: FilmCardDumb,
} as ComponentMeta<typeof FilmCardDumb>

const Template: ComponentStory<typeof FilmCardDumb> = (args) => <FilmCardDumb {...args}/>;

export const defaultFilmCard = Template.bind({});
defaultFilmCard.args = {
  title: 'filmName',
  image: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
  mainGenre: 'Genre',
  releaseDate: 'release_date',
  onClick: () => {}
};
