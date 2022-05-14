import React from 'react'
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Items from './Items';
import Viewers from './Viewers';
import movies from '../movies.json'
import { setMovies } from '../features/movie/movieSlice';
import { useDispatch, useSelector } from 'react-redux';

function Home() {

    const dispatch = useDispatch();
    const moviesData = useSelector(store => store.movie)

    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];

    React.useEffect(() => {

        movies.map(movie => {
            switch (movie.type) {
                case 'recommend':
                    recommends = [...recommends, { id: Math.random(), ...movie }];
                    break;
                case 'new':
                    newDisneys = [...newDisneys, { id: Math.random(), ...movie }];
                    break;
                case 'trending':
                    trending = [...trending, { id: Math.random(), ...movie }];
                    break;
                case 'original':
                    originals = [...originals, { id: Math.random(), ...movie }];
                    break;
                default:
                    console.log('film without type')
            }
        })

        dispatch(
            setMovies({
                recommend: recommends,
                new: newDisneys,
                original: originals,
                trending: trending,
            })
        );

    }, [movies])

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Items title='Recommended For You' movies={moviesData.recommend} />
            <Items title='New to Disney+' movies={moviesData.new} />
            <Items title='Originals' movies={moviesData.original} />
            <Items title='Trending' movies={moviesData.trending} />
        </Container>
    )
}

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 65px);
    overflow-x: hidden;
    display: block;
    top: 65px;
    padding: 0 calc(3.5vw + 5px);

    &:after{
        background: url('/images/home-background.png') center center / cover no-repeat fixed;
        content: '';
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`

export default Home