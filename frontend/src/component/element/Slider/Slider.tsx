'use client';

import styles from './Slider.module.scss';
import { SliderProps, SliderType } from '@/component/element/Slider/Slider.props';
import Button from '@/component/element/Button/Button';
import { ButtonColor, ButtonSize } from '@/component/element/Button/Button.props';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import React, { useEffect, useRef, useState } from 'react';
import Loading from '@/component/element/Loading/Loading';


const Slider = ({ type, slides = [] }: SliderProps) => {

	const scrollRef = useRef(null);

	const [isLoading, setIsLoading] = useState(true);
	const [amountSlides, setAmountSlides] = useState(0);
	const [currentSlide, setCurrentSlide] = useState(0);
	const [amountElementsOnSlide, setAmountElementsOnSlide] = useState(4);
	const [widthSlideTransform, setWidthSlideTransform] = useState('0%');

	const [prevMovedBy, setPrevMovedBy] = useState(0);
	const [dragging, setDragging] = useState(false);
	const [marginScroll, setMarginScroll] = useState(0);

	useEffect(() => {
		if (slides) {
			setAmountSlides(Math.ceil(slides.length / amountElementsOnSlide));
			setCurrentSlide(1);
			setIsLoading(false);
		}
	}, [slides, amountElementsOnSlide]);

	useEffect(() => {
		if (type === SliderType.scroll) {
			setWidthSlideTransform(`-${marginScroll}px`); //TODO: не правильно работает слайдер (не все элементы показывает)
		} else if (type === SliderType.controls) {
			setWidthSlideTransform(`-${(currentSlide - 1) * 100}%`);
		}
	}, [currentSlide, marginScroll]);

	const handleNextSlide = () => {
		if (currentSlide === amountSlides) {
			setCurrentSlide(1);
		} else {
			setCurrentSlide(prevState => prevState + 1);
		}
	};

	const handlePrevSlide = () => {
		if (currentSlide === 1) {
			setCurrentSlide(amountSlides);
		} else {
			setCurrentSlide(prevState => prevState - 1);
		}
	};

	const handlePointerDown = (e) => {
		setPrevMovedBy(e.pageX);
		setDragging(true);

		if (scrollRef.current) {
			scrollRef.current.style.cursor = 'grabbing';
		}
	};

	const handlePointerUp = (e) => {
		setDragging(false);

		if (scrollRef.current) {
			scrollRef.current.style.cursor = 'default';
		}
	};

	const handlePointerMove = (e) => {
		if (dragging && scrollRef.current) {
			let maxWidthScroll = scrollRef.current.clientWidth / (amountElementsOnSlide / slides.length); // 1440
			let maxMoveBy = maxWidthScroll - scrollRef.current.clientWidth;

			if (e.pageX > prevMovedBy && marginScroll + 1 <= maxMoveBy) {
				setMarginScroll(prevState => prevState + 1);
			} else if (e.pageX < prevMovedBy && marginScroll > 0) {
				setMarginScroll(prevState => prevState - 1);
			}

			setPrevMovedBy(e.pageX);
		}
	};

	if (isLoading) {
		return (
			<Loading />
		);
	}

	return (
		<div className={styles.slider}>
			{type === SliderType.scroll ?
				<div className={styles.slider_scroll}>
					<div
						ref={scrollRef}
						style={{
							marginLeft: `${marginScroll}px`,
							width: `${amountElementsOnSlide / slides.length * 100}%`
						}}
						onPointerDown={(e) => handlePointerDown(e)}
						onPointerMove={(e) => handlePointerMove(e)}
						onPointerUp={(e) => handlePointerUp(e)}
						onPointerLeave={(e) => handlePointerUp(e)}
						onContextMenu={(e) => {
							e.preventDefault();
							e.stopPropagation();
						}}
						onDragStart={(e) => {
							e.preventDefault();
							e.stopPropagation();
							return false;
						}}
					></div>
				</div>
				:
				<></>
			}
			<div className={styles.slider_elements} style={{ transform: `translateX(${widthSlideTransform})` }}>
				{slides.map((slide, i) => {
					return (
						<div key={i} className={styles.slider_item}>
							{slide}
						</div>
					);
				})}
			</div>
			{type === SliderType.controls ?
				<div className={styles.slider_controls}>
					<Button color={ButtonColor.withoutBackground}
							size={ButtonSize.none}
							onClick={() => handlePrevSlide()}
					>
						<FaArrowLeftLong size={24} />
					</Button>
					<p>{currentSlide}<span>/</span>{amountSlides}</p>
					<Button color={ButtonColor.withoutBackground}
							size={ButtonSize.none}
							onClick={() => handleNextSlide()}
					>
						<FaArrowRightLong size={24} />
					</Button>
				</div>
				:
				<></>
			}
		</div>
	);
};

export default Slider;