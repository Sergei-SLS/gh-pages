// import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {S} from './Slider_Styles.ts';
import './../../style/slider.css'

type SlidePropsType = {
    text: string,
    userName: string,
}

const Slide = (props: SlidePropsType) => {
    return (
        <S.Slide>
            <S.Text>{props.text}</S.Text>
            <S.Name>@{props.userName}</S.Name>
        </S.Slide>
    )
}

const items = [
    <Slide userName={'ivan ivanov'}
           text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing'} />,
    <Slide userName={'piter petrov'}
           text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt  utlabore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing'} />,
    <Slide userName={'igor igorev'}
           text={'Lorem ipsum dolor sit amet'} />
];

export const Slider = () => (
        <AliceCarousel
            mouseTracking
            items={items}
        />
);
