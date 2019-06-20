import styled from '@emotion/styled';
import React, { SFC } from 'react';

const Layout: SFC<{}> = styled.section`
    max-width: 1240px;
    margin: 0 auto;
    padding: 50px 0 80px 0;
    overflow-y: hidden;
`;

const Wrapper: SFC<{}>  = styled.main`
    background-color: #dedfe0;
    min-height: 100vh;
`;

const Wrapped: SFC<{}> = ({children}) => 
    <Wrapper>
        <Layout>{children}</Layout>
    </Wrapper>

export default Wrapped;