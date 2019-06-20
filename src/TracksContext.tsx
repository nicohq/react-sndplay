import React from 'react';
import { getTracks as apiGetTracks } from './api';
import { Track } from './track.model';

interface TracksState {
    tracks: Track[];
    selected: Track | null;
    error: null | Error;
    loading: boolean;
    onSelectTrack: (track: Track) => void
    onNextTrack: () => void
    onPrevTrack: () => void
}

let TracksContext: React.Context<Partial<TracksState>>;
const {Provider, Consumer} = TracksContext = React.createContext<Partial<TracksState>>({});

class TracksProvider extends React.Component<{}, TracksState> {

    componentDidMount() {
        this.setState({
            loading: true,
            error: null
        });

        apiGetTracks()
            .then(tracks => this.setState({ loading: false, tracks }))
            .catch(error => this.setState({ loading: false, error}));
    }

    handleSelectTrack = (track:Track) => {
        this.setState({selected: track})
    }

    private getNextPrevCurrIdx = () => {
        const {tracks, selected} = this.state;
        const maxIdx = tracks.length - 1;
        const currentIdx = tracks.indexOf(selected!);
        const nextIdx = currentIdx < maxIdx
            ? currentIdx + 1
            : 0;
        const prevIdx = currentIdx <= maxIdx
            ? currentIdx - 1
            : maxIdx;
        
        return {currentIdx, nextIdx, prevIdx}
    }

    handleNextTrack = () => {
        const {tracks} = this.state;
        const {nextIdx} = this.getNextPrevCurrIdx();
        this.handleSelectTrack(tracks[nextIdx as number]);
    }

    handlePrevTrack = () => {
        const {tracks} = this.state;
        const {prevIdx} = this.getNextPrevCurrIdx();
        this.handleSelectTrack(tracks[prevIdx as number]);
    }

    state = {
        tracks: [],
        selected: null,
        error: null,
        loading: false,
        onSelectTrack: this.handleSelectTrack,
        onNextTrack: this.handleNextTrack,
        onPrevTrack: this.handlePrevTrack
    }

    render() {
        return <Provider value={{
            ...this.state,
            onSelectTrack: this.handleSelectTrack
        }}>{this.props.children}</Provider>
    } 
}

export { TracksProvider, Consumer as TracksConsumer, TracksContext };

