import React, { useEffect, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';

import './App.scss';
import News from '../news/index';
import NewsItem from '../news-item/index';
import * as newsActions from '../../actions/news';

function App(): JSX.Element {
  const PAGE_SIZE = 20;
  const KEYWORD = 'education';

  const dispatch = useAppDispatch();

  const page = useAppSelector((state) => state.page);

  const getNews = useCallback(
    (keyword, page, pageSize) => {
      dispatch(newsActions.fetchNews({ keyword, page, pageSize }));
    },
    [dispatch]
  );

  useEffect(() => {
    getNews(KEYWORD, page, PAGE_SIZE);
  }, [getNews, KEYWORD, page, PAGE_SIZE]);

  return (
    <div className="app">
      <Routes>
        <Route path="news" element={<News />} />
        <Route path="news/:encodedURITitle" element={<NewsItem />} />
        <Route path="/" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
