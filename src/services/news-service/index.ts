const BASE_URL = 'https://newsapi.org/v2/everything';
const API_KEY = 'ad2c2a818f634525b70940ac54515f09';

export interface IFetchNewsProps {
  keyword: string;
  page: number;
  pageSize: number;
}

interface INewsService {
  fetchNews: ({
    keyword,
    page,
    pageSize,
  }: IFetchNewsProps) => Promise<Response>;
}

interface NewsService extends INewsService {}

class NewsService {
  constructor() {
    this.fetchNews = async ({ keyword, page, pageSize }: IFetchNewsProps) => {
      const fullUrl = `${BASE_URL}?q=${keyword}&pageSize=${pageSize}&page=${page}`;
      const options = {
        method: 'GET',
        headers: {
          Authorization: API_KEY,
        },
      };
      return fetch(`${fullUrl}`, options);
    };
  }
}

export default NewsService;
