import styled from '@emotion/styled';
import React, { SFC } from 'react';
import { Track as TrackModel } from '../../track.model';
import { Col } from '../Grid/Grid';

const TrackStyled: SFC<any> = styled.div`
    width: 100%;
    height: 100%;
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
    font-size: 0;
    border-radius: 3px;
    overflow: hidden;
    cursor: pointer;
    background-color: #f7f7f7;
`

const TrackTitle: SFC<{title?: string}> = styled.div`
    padding: 5px;
    font-size: 13px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const TrackLabel: SFC<any> = styled.div`
    font-size: 12px;
    padding: 0 5px 3px 5px;
    color: #505050;
    font-weight: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

const Track: SFC<TrackProps> = ({title, label_name, artwork_url, onSelect}) => 
    <Col align='center' variant={6}>
        <TrackStyled onClick={onSelect}>
            <img src={artwork_url} width="100%" alt=""/>
            <TrackTitle title={title}>{title}</TrackTitle>
            <TrackLabel>{label_name}</TrackLabel>
        </TrackStyled>
    </Col>;

interface TrackProps {
    onSelect: (track: TrackModel) => void,
    artwork_url: string;
    title: string;
    label_name: string
}

export { Track, TrackLabel, TrackTitle };

