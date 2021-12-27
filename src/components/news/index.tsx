import { Alert, Spin } from 'antd';
import React, { useEffect } from 'react';
import Button from '../button';
import { useAppSelector, useAppDispatch } from '../../hooks';
import '../../../node_modules/antd/dist/antd.css';
import './News.scss';
import NewsItemHeader from '../news-item-header';
import * as redirectActions from '../../actions/redirect';
import * as pageActions from '../../actions/page';

const News = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const error = useAppSelector((state) => state.error);
  const redirect = useAppSelector((state) => state.redirect);
  const news = useAppSelector((state) => state.news);
  const loading = useAppSelector((state) => state.loading);

  useEffect(() => {
    if (redirect) {
      dispatch(redirectActions.clearRedirect());
    }
  }, [redirect, dispatch]);

  const handleIncrementPage = (): void => {
    dispatch(pageActions.incrementPage());
  };

  const alert = error ? <Alert message={error} type="error" /> : null;
  const buttonOrSpin = loading ? (
    <Spin />
  ) : (
    <Button label="Ещё" onClick={handleIncrementPage} />
  );

  const newsData =
    news && news !== []
      ? news.map((newsItem) => {
          return (
            <li key={newsItem.title}>
              <NewsItemHeader {...newsItem} />
            </li>
          );
        })
      : null;

  return (
    <div className="main">
      {alert}
      <ul className="news">{newsData}</ul>
      {buttonOrSpin}
    </div>
  );
};

export default News;
