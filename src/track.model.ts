export interface Track {
    comment_count: number;
    downloadable: boolean;
    release?: string | null;
    created_at: string;
    description?: string | null;
    original_content_size: number;
    title: string;
    track_type?: string | null;
    duration: number;
    video_url?: string | null;
    original_format: string;
    artwork_url?: string | null;
    streamable: boolean;
    tag_list: string;
    release_month?: number | null;
    genre?: string | null;
    release_day?: number | null;
    id: number;
    state: string;
    reposts_count: number;
    last_modified: string;
    label_name?: string | null;
    commentable: boolean;
    bpm?: null;
    policy: string;
    favoritings_count: number;
    kind: string;
    purchase_url?: string | null;
    release_year?: number | null;
    key_signature?: string | null;
    isrc?: string | null;
    sharing: string;
    uri: string;
    attachments_uri: string;
    download_count: number;
    likes_count: number;
    license: string;
    purchase_title?: string | null;
    user_id: number;
    embeddable_by: string;
    monetization_model: string;
    waveform_url: string;
    permalink: string;
    permalink_url: string;
    user: Uploader;
    label_id?: null;
    stream_url: string;
    playback_count: number;
    download_url?: string | null;
}
export interface Uploader {
    id: number;
    kind: string;
    permalink: string;
    username: string;
    last_modified: string;
    uri: string;
    permalink_url: string;
    avatar_url: string;
}