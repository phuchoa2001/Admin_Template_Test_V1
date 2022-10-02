import { useLocation } from 'react-router-dom';
import { useMemo } from 'react'

const DEFAULT_PAGINATION = {
  PAGE: 1,
  LIMIT: 10,
};;

export const useCustomSearchParams = () => {
  const { search } = useLocation();
  const searchParams = useMemo(() => new URLSearchParams(search), [search]);
  const queryArr = [];
  const setQuery = (object) => {
    const objectRouter = {};
    for (const property in object) {
      objectRouter[property] = object[property];
    }
    console.log("objectRouter" , objectRouter);
  }
  searchParams.forEach((el, i) => {
    queryArr.push({ [i]: el })
  });
  return [{
    ...queryArr,
    page: queryArr.page || DEFAULT_PAGINATION.PAGE,
    page_size: queryArr.page || DEFAULT_PAGINATION.LIMIT
  }, setQuery];
};
