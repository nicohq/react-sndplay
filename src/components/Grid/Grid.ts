import styled from '@emotion/styled';
import { SFC } from 'react';

const GRID_SPACING = 12;
type ColProps = {
    variant?: 1 | 2 | 3 | 4 | 5 | 6,
    align?: 'left' | 'center' | 'right' | 'justify';
}

type GridProps = {
    align?: 'left' | 'center' | 'right' | 'justify';
}

enum AlignMap {
    left = 'normal',
    center = 'center',
    right = 'flex-end',
    justify = 'space-between' 
}

const Row: SFC<GridProps> = styled.div`
    display: flex;
    margin: 0 -${GRID_SPACING}px;
    flex-wrap: wrap;
    width: calc(100% + ${GRID_SPACING * 2}px);
    justify-content: ${props => props.align ? AlignMap[props.align] : AlignMap.left};
`;

const Col: SFC<ColProps> = styled('div')(
    {
        'padding': GRID_SPACING,
        'display': 'flex'
    },
    props => ({
        'flexGrow': props.variant ? 0 : 1,
        'flexBasis': props.variant ? `${Math.round((100 / props.variant) * 100) / 100}%` : 0,
        'maxWidth': props.variant ? `${Math.round((100 / props.variant) * 100) / 100}%` : '100%',
        'justifyContent': props.align ? AlignMap[props.align] : AlignMap.left
    })
);

export { Row, Col };

