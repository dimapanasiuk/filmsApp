import React, { useState } from 'react';
import Card from '../../components/Card/Card';
import { array } from 'prop-types';
// import Skeleton from 'react-loading-skeleton';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import { showFilms, scrollToTop } from '../../utils/utils';

import Pagination from '@material-ui/lab/Pagination';

import './home.scss';

const Home = ({ films }) => {
  const [currentPage, setPage] = useState(1);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  let currentContent = showFilms(films, currentPage - 1);

  let filmsHtml = currentContent.map((i) => (
    <Card
      key={i._id}
      id={i._id}
      title={i.title}
      release={i.releaseYear}
      categories={i.categories}
      description={i.description}
      director={i.director}
      duration={i.duration}
      gross={i.gross}
      smallPoster={i.smallPoster}
      stars={i.stars}
      topRating={i.topRating}
    />
  ));

  if (currentContent.length === 0) {
    filmsHtml = (
      <SkeletonTheme color="#d4d4d4" highlightColor="#c1c1c1">
        <p style={{padding: '0 15px 10px 15px'}}>
          <Skeleton  height={300} />
        </p>
        <p style={{padding: '0 15px 10px 15px'}}>
          <Skeleton  height={300} />
        </p>
        <p style={{padding: '0 15px 10px 15px'}}>
          <Skeleton  height={300} />
        </p>
        <p style={{padding: '0 15px 10px 15px'}}>
          <Skeleton  height={300} />
        </p>
        <p style={{padding: '0 15px 10px 15px'}}>
          <Skeleton  height={300} />
        </p>
        <p style={{padding: '0 15px 10px 15px'}}>
          <Skeleton  height={300} />
        </p>
      </SkeletonTheme>
    );
  }

  scrollToTop();

  return (
    <>
      <div className="home-wrapper">{filmsHtml}</div>
      <Pagination
        className="pagination"
        count={Math.floor(films.length / 10 - 1)}
        page={currentPage}
        onChange={handleChangePage}
        shape="rounded"
      />
    </>
  );
};

Home.propTypes = {
  films: array,
};

export default Home;
