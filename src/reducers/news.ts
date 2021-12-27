import { ActionNews } from '../actions/news';

export type Article = {
  title: string;
  author: string;
  description: string;
  url: string;
  publishedAt: string;
  content: string;
};

type NewsState = Article[];

const initialState: NewsState = [];

const news = (state = initialState, action: ActionNews): NewsState => {
  switch (action.type) {
    case 'FETCH_NEWS_SUCCESS': {
      const addArticles = state.concat(action.news);
      return addArticles;
    }
    case 'FETCH_NEWS_FAIL':
      return state;
    case 'DELETE_NEWS_ITEM': {
      const indexArticle = state.findIndex(
        (article: Article) => article.title === action.title
      );

      const newStateArticles = [
        ...state.slice(0, indexArticle),
        ...state.slice(indexArticle + 1),
      ];

      return newStateArticles;
    }

    default:
      return state;
  }
};

export default news;
