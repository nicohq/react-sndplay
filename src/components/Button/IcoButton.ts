import styled from '@emotion/styled';
import { SFC } from 'react';

const IcoButton: SFC<{onClick?: () => any}> = styled.button`
    outline: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 0;
`;

export default IcoButton;