/* eslint-disable react/jsx-pascal-case */
import * as Styled from './styles';
interface Props {
  setSearch: (str: string) => void;
  search: string;
}
export const InputSearch: React.FC<Props> = ({ search, setSearch }) => {
  return (
    
    <Styled.inputSearchContainer>
      
      <Styled.inputSearch
        type="text"
        placeholder="Поиск пользователя по логину"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Styled.inputSearchContainer>
  );
};
