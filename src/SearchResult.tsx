import { Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface SearchResultProps {
  movies: Movie[];
}

export const SearchResult = ({ movies }: SearchResultProps) => {
  return (<>
    {movies.map((item)=>{return item.Title})}
  </>);
};