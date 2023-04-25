import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const WrapperMovieDetails = styled.section`
  width: 1280px;
  margin: 0 auto;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const WrapperAboutMovie = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: center;
`;

export const WrapperTextAboutMovie = styled.div`
  display: flex;
  flex-direction: column;
`;
export const WrapperInformation = styled.div`
  align-items: flex-start;
  font-size: 20px;
  > p {
    font-weight: 700;
  }
`;

export const WrapperButtonBack = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  width: 100px;
  height: 30px;
  padding: 5px;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 18px;
  border-radius: 4px;
  color: #02070d;
  border-color: #007bff;
  background-color: #c7d0d9;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color: #6495ed;
  }
`;

export const WrapperLoading = styled.div`
  width: 1280;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
`;