import styled from '@emotion/styled';

export const Header = styled.header`
  background-color: #1e2f97;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
`;

export const Input = styled.input`
  width: 400px;
  border-radius: 4px;
  font-size: 14px;
  padding: 5px;
`;

export const Gallery = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0;
  margin: 10px;
  /* overflow-anchor: none; */
`;

export const Image = styled.li`
  flex-basis: calc((100%-20px) / 5);
  /* overflow-anchor: auto; */
`;

export const Img = styled.img`
  width: 100%;
`;

export const Btn = styled.button`
  margin: auto;
  color: white;
  background-color: #1e2f97;
  border-color: #1e2f97;
  border-radius: 5px;
  width: 120px;
  height: 40px;
  font-size: 14px;
  &:hover,
  &:focus {
    background-color: #0583d2;
    border-color: #0583d2;
  }
`;

export const SomeComp = styled.div`
  background-color: #151515;
  width: 100%;
`;

// export const LoaderBkgrnd = styled.div`
//   /* width: {screen.width}; */
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
