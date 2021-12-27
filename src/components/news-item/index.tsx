import { Alert, Spin } from 'antd';
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as newsActions from '../../actions/news';
import Button from '../button';
import { formatDate } from '../../utilities/date';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { Article } from '../../reducers/news';
import './News-item.scss';

const NewsItem = (): JSX.Element => {
  const redirect = useAppSelector((state) => state.redirect);

  const { encodedURITitle } = useParams();
  const navigate = useNavigate();

  const findArticle = (article: Article) => {
    return encodedURITitle === article.title;
  };

  useEffect(() => {
    if (redirect) {
      navigate('/news');
    }
  }, [redirect, navigate]);

  const articles = useAppSelector((state) => state.news);
  const loading = useAppSelector((state) => state.loading);

  const article: Article | undefined = articles
    ? articles.find(findArticle)
    : undefined;

  const dispatch = useAppDispatch();

  const articleData = article ? (
    <div className="news-item">
      <div className="news-item-container">
        <h1 className="news-item-title">
          <a href={article.url}>{article.title}</a>
        </h1>
        <p className="news-item-date">{formatDate(article.publishedAt)}</p>
        <p className="news-item-content">{article.content}</p>
      </div>
      <Button
        label="Удалить"
        onClick={async () => {
          dispatch(newsActions.deleteNewsItem(article.title));
        }}
        isAlarm={true}
      />
    </div>
  ) : null;

  const notFoundData = loading ? (
    <Spin />
  ) : (
    <Alert message="Article not found" />
  );

  const returnData = articleData ? articleData : notFoundData;

  return returnData;
};

export default NewsItem;
