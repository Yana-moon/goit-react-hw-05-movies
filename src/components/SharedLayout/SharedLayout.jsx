import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Wrapper, WrapperHeader, WrapperLinkActive, WrapperLoading } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Wrapper>
      <WrapperHeader>
        <nav>
          <WrapperLinkActive to="/">Home</WrapperLinkActive>
          <WrapperLinkActive to="/movies">Movies</WrapperLinkActive>
        </nav>
      </WrapperHeader>
      <Suspense fallback={<WrapperLoading>Loading page...</WrapperLoading>}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};

export default SharedLayout;