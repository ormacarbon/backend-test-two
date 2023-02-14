import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'query-string';

export default function Pagination() {
  const location = useLocation();
  const navigate = useNavigate();
  function getPage() {
    const queryParams = qs.parse(location.search);
    const { page } = queryParams;
    return page ? Number(page) : undefined;
  }

  const [actualPage, setActualPage] = useState(getPage() || 1);

  useEffect(() => {
    const queryParams = qs.parse(location.search);
    navigate({
      search: qs.stringify({
        ...queryParams,
        page: actualPage,
      }),
    });
  }, [actualPage]);
  return {
    setActualPage,
    actualPage,
  };
}
