import React, { useContext } from "react";
import { Row } from "./components/Grid/Grid";
import Player from "./components/Player/Player";
import { Track } from "./components/Track/Track";
import MainLayout from "./layouts/main";
import { TracksContext } from "./TracksContext";

const MainPage = () => {
    const {
        loading,
        tracks,
        selected,
        onSelectTrack,
        onNextTrack,
        onPrevTrack
    } = useContext(TracksContext);
    return (
        <MainLayout>
            {loading ? (
                <div>Loading...</div>
            ) : (
                    <React.Fragment>
                        <Row align="center">
                            {tracks!.map(track => (
                                <Track
                                    key={track.id}
                                    title={track.title}
                                    onSelect={() => onSelectTrack!(track)}
                                    artwork_url={track.artwork_url || track.user.avatar_url}
                                    label_name={track.label_name || track.user.username}
                                />
                            ))}
                        </Row>
                        <Player
                            track={selected!}
                            onNext={onNextTrack!}
                            onPrev={onPrevTrack!}
                        />
                    </React.Fragment>
                )}
        </MainLayout>
    );
};

export default MainPage;
