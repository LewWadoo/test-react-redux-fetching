import { Link } from 'react-router-dom';
import React from 'react';
import './News-item-header.scss';
import { formatDate } from '../../utilities/date';

interface NewsItemHeaderProps {
  title: string;
  description: string;
  publishedAt: string;
}

function NewsItemHeader({
  title,
  description,
  publishedAt,
}: NewsItemHeaderProps): JSX.Element {
  const encodedURITitle = encodeURIComponent(title);

  return (
    <div className="news-item-header-container">
      <div className="news-item-header-title-container">
        <Link to={`../news/${encodedURITitle}`}>
          <div className="news-item-header-title">{title}</div>
        </Link>
        <p className="news-item-header-date">{formatDate(publishedAt)}</p>
      </div>
      <p className="news-item-header-description">{description}</p>
    </div>
  );
}

export default NewsItemHeader;
