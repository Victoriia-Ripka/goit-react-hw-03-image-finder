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

export const LoaderBkgrnd = styled.div`
  /* width: {screen.width}; */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ImgModal = styled.img`
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(1);
  width: 50%;
  min-height: 50%;
  padding: 40px;
  background-color: #FFFFFF;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
