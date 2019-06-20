import styled from '@emotion/styled';
import React, { SFC } from 'react';
import { addUrlClientParams } from '../../api';
import { Track as TrackModel } from '../../track.model';
import PlayerControls from './PlayerControls';
import PlayerInfo from './PlayerInfo';
import PlayerProgress from './PlayerProgress';

const Container: SFC<{}> = styled.div`
    width: 100vw;
    height: 65px;
    display: flex;
    background-color: #adacac;
    position: fixed;
    bottom: 0;
    left: 0;opacity: .95;
    box-shadow: inset 0 1px 4px -1px rgba(0,0,0,0.75);
`;

interface PlayerProps {
    track: TrackModel;
    onNext: () => void;
    onPrev: () => void;
}

interface PlayerState {
    isPlaying: boolean;
    duration: number | null;
    currentTime: number;
    loaded: boolean;
}

class Player extends React.Component<PlayerProps, PlayerState> {
    private audio!: HTMLAudioElement;

    state = {
        isPlaying: false,
        duration: null,
        currentTime: 0,
        loaded: false,
    };

    setTime = (time: number) => {
        this.audio.currentTime = time;
    };

    play = () => {
        this.setState({ isPlaying: true });
        this.audio.play();
    };

    pause = () => {
        this.setState({ isPlaying: false });
        this.audio.pause();
    };

    setVolume = (num: number) => {
        this.audio.volume = num;
    }

    volumeUp = () => {
        var increased = this.audio.volume + 0.1;
        if (increased <= 1) {
            this.setVolume(increased);
        }
    }

    volumeDown = () => {
        var decreased = this.audio.volume - 0.1;
        if (decreased >= 0) {
            this.setVolume(decreased);
        }
    }

    handleTimeUpdate = () => {
        this.setState({
            currentTime: this.audio.currentTime,
            duration: this.audio.duration
        });
    };

    handleAudioLoaded = () => {
        this.setState({
            duration: this.audio.duration,
            loaded: true,
            isPlaying: true
        });
        this.audio.play();
    };

    render() {
        if (this.props.track) {
            const {stream_url, artwork_url, title, label_name, user} = this.props.track;
            return (
                <React.Fragment>
                    <audio
                        src={addUrlClientParams(stream_url)}
                        onTimeUpdate={this.handleTimeUpdate}
                        onLoadedData={this.handleAudioLoaded}
                        onEnded={this.props.onNext}
                        ref={(n: HTMLAudioElement) => (this.audio = n)}
                    />
                    <Container>
                        { this.state.loaded && 
                            <PlayerInfo
                                duration={this.audio!.duration}
                                current={this.audio!.currentTime}
                                onVolumeUp={this.volumeUp}
                                onVolumeDown={this.volumeDown}
                                image={artwork_url || user.avatar_url }
                                title={title}
                                label_name={label_name || user.username } />
                        }
                        <PlayerControls
                            playing={this.state.isPlaying}
                            onPause={this.pause}
                            onPlay={this.play}
                            onNext={this.props.onNext}
                            onPrev={this.props.onPrev}/>
                        { this.state.loaded && 
                        <PlayerProgress 
                            handleUpdate={this.setTime}
                            duration={this.audio.duration}
                            currentTime={this.audio.currentTime}/>
                        }
                    </Container>
                </React.Fragment>
            )
        } else {
            return null;
        }
    }
}

export default Player;