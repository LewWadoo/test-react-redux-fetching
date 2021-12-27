import { format } from 'date-fns';

export const formatDate = (date: string): string => {
  try {
    const dateObject = new Date(date);
    return format(dateObject, 'MMMM d, yyyy');
  } catch (error) {
    return '';
  }
};
