import { Dispatch } from 'redux';
import { createActionRedirect } from './redirect';
import { createActionSetLoading } from './loading';
import { setError } from './error';
import NewsService from '../services/news-service';
import { Article } from '../reducers/news';
import { IFetchNewsProps } from '../services/news-service';

const newsService = new NewsService();

type JSONType = {
  status: string;
  articles: Article[];
};

export interface IFetchNewsRequest {
  type: 'FETCH_NEWS_REQUEST';
}

export interface IFetchNewsSuccess {
  type: 'FETCH_NEWS_SUCCESS';
  news: Article[];
}

export interface IFetchNewsFail {
  type: 'FETCH_NEWS_FAIL';
}

export interface IDeleteNewsItem {
  type: 'DELETE_NEWS_ITEM';
  title: string;
}

export type ActionNews =
  | IFetchNewsSuccess
  | IFetchNewsFail
  | IDeleteNewsItem
  | IFetchNewsRequest;

export const createActionRequest = (): IFetchNewsRequest => {
  return { type: 'FETCH_NEWS_REQUEST' };
};

export const createActionAdd = (news: Article[]): IFetchNewsSuccess => {
  return { type: 'FETCH_NEWS_SUCCESS', news };
};

export const createActionFail = (): IFetchNewsFail => {
  return { type: 'FETCH_NEWS_FAIL' };
};

export const createActionDelete = (title: string): IDeleteNewsItem => {
  return { type: 'DELETE_NEWS_ITEM', title };
};

export function deleteNewsItem(title: string): (dispatch: Dispatch) => void {
  return function (dispatch: Dispatch): void {
    dispatch(createActionDelete(title));
    dispatch(createActionSetLoading());
    dispatch(createActionRedirect());
  };
}

export function fetchNews({
  keyword,
  page,
  pageSize,
}: IFetchNewsProps): (dispatch: Dispatch) => Promise<JSONType> {
  return async function (dispatch: Dispatch) {
    dispatch(createActionRequest());
    // try {
    const response = await newsService.fetchNews({ keyword, page, pageSize });
    if (response.ok) {
      const result = await response.json();
      dispatch(createActionAdd(result.articles));
      return result;
    } else {
      dispatch(createActionFail());
      setError(response.statusText);
    }
    // } catch (error) {
    //   const message = error;
    //   //(error &&
    //   //  error.response &&
    //   //  error.response.data &&
    //   //  error.response.data.message) ||
    //   //error.message ||
    //   //error.toString();
    //   // console.log(error);

    // 	dispatch(createActionFail());
    // 	setError(message);
    // }
    // return null;
  };
}
