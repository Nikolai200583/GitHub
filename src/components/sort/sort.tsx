import React, { useState } from 'react';

import * as Styled from './styles';

interface SortProps {
  onSort: (order: 'desc' | 'asc') => void;
}

export const Sort: React.FC<SortProps> = ({ onSort }) => {
  const [order, setOrder] = useState<'desc' | 'asc'>('desc');

  const handleSort = () => {
    const newOrder = order === 'desc' ? 'asc' : 'desc';
    setOrder(newOrder);
    onSort(newOrder);
  };

  return (
    <Styled.Button onClick={handleSort}>
      {order === 'desc' ? 'больше репо' : 'меньше репо'}
    </Styled.Button>
  );
};
