/* eslint-disable react/jsx-pascal-case */
import { useState } from 'react';

import { GlobalStyle } from '../../globaleStyles';
import { useSearchUsersQuery } from '../../store/usersGitApi';
import { useDebounce } from '../../hooks/debounce';
import { InputSearch } from '../inputSearch/inputSearch';
import { UserList } from '../pagination/userList/userList';
import { Sort } from '../sort/sort';
import { Pagination } from '../pagination/pagination';

import * as Styled from './styles';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState<string>('');
  const debounced = useDebounce(search);

  const { data, isError, isLoading } = useSearchUsersQuery(
    { debounced, currentPage, sortOrder },
    {
      skip: debounced.length < 2,
    },
  );

  const totalPages = Math.ceil(data?.total_count / 30);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleSortOrderChange = (order: string) => {
    setSortOrder(order);
  };

  if (isError) {
    return <p>Что то пошло не так...</p>;
  }
  if (!isLoading && data?.items.length === 0) {
    return <p>Ничего не найдено...</p>;
  }

  return (
    <Styled.app>
      <GlobalStyle />
      <Styled.header>
        <InputSearch search={search} setSearch={setSearch} />
        <Sort onSort={handleSortOrderChange} />
      </Styled.header>
      <UserList data={data} />
      {data?.items ? (
        <Pagination
          totalPage={totalPages}
          currentPage={currentPage}
          onNextPage={handleNextPage}
          onPreviousPage={handlePreviousPage}
        />
      ) : (
        ''
      )}
    </Styled.app>
  );
};

export default App;
