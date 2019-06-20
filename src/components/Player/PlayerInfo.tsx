import styled from '@emotion/styled';
import React, { Fragment, SFC } from 'react';
import { formatSeconds } from '../../common';
import IcoButton from '../Button/IcoButton';
import { Add, Remove, Volume } from '../Icons/Icons';
import { TrackLabel, TrackTitle } from '../Track/Track';

const TrackInfoBlock: SFC<{}> = styled.div`
    max-width: 235px;
`;

const TrackCover: SFC<{}> = styled.div`
    width: 65px;
    height: 65px;
`;

const Info: SFC<{}> = styled.div`
    width: 300px;
    height: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    z-index: 0;
`;

const InfoEnd: SFC<{}> = styled(Info)`
    right: 0;
    justify-content: flex-end;
    margin: 0 20px;
`;

const Duration:SFC<{}> = styled.div`
    font-size: 14px;
    width: 150px;
    text-align: right;
`;

const VolumeBlock: SFC<{}> = styled.div`
    display: flex;
`

interface InfoProps {
    onVolumeUp: () => void;
    onVolumeDown: () => void;
    duration: number;
    current: number;
    image: string;
    title: string;
    label_name: string;
}

const TrackInfoSection: SFC<InfoProps> = ({image, title, label_name, duration, current, onVolumeUp, onVolumeDown}) => {
    return (
        <Fragment>
            <Info>
                <TrackCover>
                    <img src={image} width="100%" height="auto" alt="" />
                </TrackCover>
                <TrackInfoBlock>
                    <TrackTitle title={title}>{title}</TrackTitle>
                    <TrackLabel>{label_name}</TrackLabel>
                </TrackInfoBlock>
            </Info>
            <InfoEnd>
                <VolumeBlock>
                    <IcoButton onClick={onVolumeDown}>
                        <Remove size={16}/>
                    </IcoButton>
                    <Volume size={32}/>
                    <IcoButton onClick={onVolumeUp}>
                        <Add size={16}/>
                    </IcoButton>
                </VolumeBlock>
                <Duration>
                    {formatSeconds(duration)} / {formatSeconds(current)}
                </Duration>
            </InfoEnd>
        </Fragment>
    )
}

export default TrackInfoSection;