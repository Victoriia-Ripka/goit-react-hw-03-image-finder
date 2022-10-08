import { Btn } from './styles.styled';

export const Button = ({ loadMore }) => {
  return (
    <Btn type="button" onClick={loadMore}>
      Load more
    </Btn>
  );
};
