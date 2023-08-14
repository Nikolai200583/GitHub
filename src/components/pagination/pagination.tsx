import React from 'react'
import * as Styled from './styles'

interface PaginationProps {
  currentPage: number 
  totalPage: number 
  onNextPage: () => void
  onPreviousPage: () => void
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage, 
  totalPage,
  onNextPage,
  onPreviousPage
}) => {
  return (
    <div>
      <Styled.ButtonBox>
        <Styled.Button disabled={currentPage === 1} onClick={onPreviousPage}>
          back
        </Styled.Button>
        <span>
          {currentPage} из {totalPage}
        </span>
        <Styled.Button onClick={onNextPage}> next </Styled.Button>
      </Styled.ButtonBox>
    </div>
  )
}


