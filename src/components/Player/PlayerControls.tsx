import styled from '@emotion/styled';
import React, { SFC } from 'react';
import IcoButton from '../Button/IcoButton';
import { Next, Pause, Play, Prev } from '../Icons/Icons';

const Controls: SFC<{}> = styled.div`
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 0;
    padding-top: 4px;
    display: flex;
    justify-content: center;
`;

interface ControlsProps {
    playing: boolean;
    onPause: () => void;
    onPlay: () => void;
    onNext: () => void;
    onPrev: () => void;
}

const PlayerControls: SFC<ControlsProps> = ({playing, onPlay, onPause, onNext, onPrev}) => {
    return (
        <Controls>
            <IcoButton onClick={onPrev}>
                <Prev size={30} />
            </IcoButton>
            <IcoButton onClick={playing ? onPause : onPlay}>
                {playing ? <Pause size={40} /> : <Play size={40} />}
            </IcoButton>
            <IcoButton onClick={onNext}>
                <Next size={30} />
            </IcoButton>
        </Controls>
    )
}

export default PlayerControls;