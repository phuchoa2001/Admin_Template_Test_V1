import { useLocation } from 'react-router-dom';
import { useMemo } from 'react'

const DEFAULT_PAGINATION = {
  PAGE: 1,
  LIMIT: 10,
};;

export const useCustomSearchParams = () => {
  const { search } = useLocation();

  const searchParams = useMemo(() => new URLSearchParams(search), [search]);
  console.log(searchParams.get("hello"));
  return [searchParams];
};
