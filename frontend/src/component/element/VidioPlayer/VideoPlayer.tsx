'use client';

import styles from './VideoPlayer.module.scss';
import { FaPause, FaPlay } from 'react-icons/fa';
import { AiFillMuted, AiFillSetting, AiFillSound } from 'react-icons/ai';
import Button from '@/component/element/Button/Button';
import { ButtonColor, ButtonSize } from '@/component/element/Button/Button.props';
import { RiFullscreenFill } from 'react-icons/ri';
import React, { useEffect, useRef, useState } from 'react';

const VideoPlayer = () => {
	const videoRef = useRef(null);

	const [visibleControls, setVisibleControls] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isMuted, setIsMuted] = useState(true);
	const [soundValue, setSoundValue] = useState(0.2);
	const [videoTime, setVideoTime] = useState(0);
	const [currentVideoTime, setCurrentVideoTime] = useState(0);
	const [videoProgress, setVideoProgress] = useState(0);

	const videoHandle = (control) => {
		if (control === 'play') {
			videoRef.current.play();
			setIsPlaying(true);
			const vid = document.getElementById('kinoarea-video-player');
			setVideoTime(vid.duration);
		} else if (control === 'pause') {
			videoRef.current.pause();
			setIsPlaying(false);
		} else if (control === 'muted') {
			setIsMuted(true);
		} else if (control === 'unmuted') {
			setIsMuted(false);
		}
	};

	const fastForward = () => {
		videoRef.current.currentTime += 5;
	};

	const fastRevert = () => {
		videoRef.current.currentTime -= 5;
	};

	const handleUpdateCurrentVideoTime = () => {
		if (videoRef.current) {
			setCurrentVideoTime(videoRef.current.currentTime);
			setVideoProgress((videoRef.current.currentTime / videoTime) * 100);
		}
	};

	const handleUpdateVideoVolume = () => {
		if (videoRef.current) {
			setSoundValue(videoRef.current.volume);
		}
	};

	const handleDragVideoProgress = (e) => {
		console.log(e);
	};

	const handleLoadVideo = () => {
		if (videoRef) {
			videoRef.current.volume = soundValue;
		}
	};


	return (
		<div
			className={styles.video_box}
			onMouseEnter={() => setVisibleControls(true)}
			onMouseLeave={() => setVisibleControls(false)}
		>
			<video
				ref={videoRef}
				onTimeUpdate={handleUpdateCurrentVideoTime}
				onVolumeChange={(e) => handleUpdateVideoVolume()}
				onLoad={(e) => handleLoadVideo()}
				id={'kinoarea-video-player'}
				className={styles.video}
				src={'/assets/test-video/The_Joker/The_Joker_Trailer_1_1080.mp4'}
				controls={false}
				muted={isMuted}
			/>

			{visibleControls &&
				<div className={styles.controls}>
					<div className={styles.progress_bar}>
						<div style={{ width: `${videoProgress}%`, height: '100%' }}>
							<div
								className={styles.progress_circle}
								onMouseDown={(e) => handleDragVideoProgress(e)}
								// onDrag={}
							></div>
						</div>
					</div>

					<div className={styles.container_controls}>
						<div className={styles.play_video}>
							{isPlaying ?
								<Button color={ButtonColor.withoutBackground} size={ButtonSize.none}
										onClick={(e) => videoHandle('pause')}>
									<FaPause size={24} />
								</Button> :
								<Button color={ButtonColor.withoutBackground} size={ButtonSize.none}
										onClick={(e) => videoHandle('play')}>
									<FaPlay size={24} />
								</Button>
							}
							<p className={styles.timecode}>
								{Math.floor(currentVideoTime / 60) + ':' + ('0' + Math.floor(currentVideoTime % 60)).slice(-2)}
								<span>&nbsp;/&nbsp;</span>
								{Math.floor(videoTime / 60) + ':' + ('0' + Math.floor(videoTime % 60)).slice(-2)}
							</p>
							<div className={styles.sound}>
								{isMuted ?
									<Button color={ButtonColor.withoutBackground} size={ButtonSize.none}
											onClick={(e) => videoHandle('unmuted')}>
										<AiFillMuted size={24} />
									</Button>
									:
									<Button color={ButtonColor.withoutBackground} size={ButtonSize.none}
											onClick={(e) => videoHandle('muted')}>
										<AiFillSound size={24} />
									</Button>
								}

								<div className={styles.progress_bar}>
									<div style={{ width: `${Math.floor(soundValue * 100)}%`, height: '100%' }}>
										<div className={styles.progress_circle}></div>
									</div>
								</div>
							</div>
						</div>
						<div className={styles.settings}>
							<Button color={ButtonColor.withoutBackground} size={ButtonSize.none}
									onClick={(e) => fastForward()}>
								<AiFillSetting size={24} />
							</Button>
							<Button color={ButtonColor.withoutBackground} size={ButtonSize.none}
									onClick={(e) => fastRevert()}>
								<RiFullscreenFill size={24} />
							</Button>
						</div>
					</div>
				</div>
			}
		</div>
	);
};

export default VideoPlayer;