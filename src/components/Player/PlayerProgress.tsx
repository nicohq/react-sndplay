import styled from '@emotion/styled';
import React, { Component, SFC } from 'react';

const ProgressBody: SFC<{onClick: (e?: any) => void}> = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #858585;
    height: 4px;
    cursor: pointer;
`;

const ProgressBar: SFC<{style: any}> = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 4px;
    background-color: #0070ff;
    pointer-events: none;
`

interface ProgressProps {
    duration: number;
    currentTime: number;
    handleUpdate: (time: number) => void;
}

export default class PlayerProgeress extends Component<ProgressProps, {}> {

    handleClick = (e: React.MouseEvent<HTMLProgressElement>) => {
        const target = e.target as HTMLProgressElement;
        const { left, width } = target.getBoundingClientRect();
        const clickedLeft = e.clientX
        const relative = clickedLeft - left;
        const audioTime = (relative / width) * this.props.duration;
        this.props.handleUpdate(audioTime);
    }

    render() {
        const {duration, currentTime} = this.props;
        return (
            <ProgressBody onClick={this.handleClick} >
                <ProgressBar style={{width: `${(currentTime/duration) * 100 || 0}%`}} />
            </ProgressBody>
        )
    }
}