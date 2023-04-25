import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
`;

export const WrapperHeader = styled.header`
  display: flex;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid #ececec;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  > nav {
    display: flex;
  }
`;

export const WrapperLinkActive = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 700;
  &.active {
    color: #b00b05;
  }
`;

export const WrapperLoading = styled.div`
  width: 1280;
  margin: 0 auto;
  display: flex;
  font-size: 20px;
  font-weight: 500;
`;