const getGenreOutput = (item: string[]) => item.length > 2 ? item.join(', ') : item.join(' & ')

export { getGenreOutput }
