// import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {S} from './Slider_Styles.ts';
import './../../style/slider.css'
import {ReactNode} from "react";

type SlidePropsType = {
    text: ReactNode,
    userName: string,
}

const Slide = (props: SlidePropsType) => {
    return (
        <S.Slide>
            <S.Text>{props.text}</S.Text>
            <S.Name>{props.userName}</S.Name>
        </S.Slide>
    )
}

const items = [
    <Slide userName={'Plants'}
           text={<a href="https://rolling-scopes-school.github.io/sergei-sls-JSFEPRESCHOOL2022Q4/plants/" target="_blank" rel="noopener noreferrer">
               Landing page about plants
           </a>} />,
    <Slide userName={'Shelter'}
           text={<a href="https://rolling-scopes-school.github.io/sergei-sls-JSFE2023Q1/shelter/index.html" target="_blank" rel="noopener noreferrer">
               Website for a shelter
               </a>} />,
    <Slide userName={'Widget'}
           text={<a href="https://rolling-scopes-school.github.io/sergei-sls-JSFEPRESCHOOL2022Q4/momentum/" target="_blank" rel="noopener noreferrer">
               Momentum widget
           </a>} />
];

export const Slider = () => (
        <AliceCarousel
            mouseTracking
            items={items}
        />
);
