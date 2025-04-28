import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.ts";
import {S} from "./Skills_Styles.ts"
import { Fade } from "react-awesome-reveal";

const skillData = [
    {
        iconId: 'code',
        title: 'html5',
        description: 'Proficient in semantic HTML5 markup. Creation of responsive and mobile-friendly layouts. Optimization of HTML for SEO and performance.'
    },
    {
        iconId: 'css',
        title: 'css3',
        description: 'Skilled in writing clean, modular, and responsive CSS3 code, creating mobile-first layouts using Flexbox and Grid systems, and ensuring cross-browser compatibility with best practices.'
    },
    {
        iconId: 'react',
        title: 'React',
        description: 'Skilled in developing scalable and responsive single-page applications using React, with expertise in component-driven architecture, React Hooks, state management (Redux Toolkit), and REST API integration.'
    },
    {
        iconId: 'typescript',
        title: 'typescript',
        description: 'Proficient in building type-safe web applications with TypeScript, including typing complex data structures, creating reusable and maintainable code, and integrating TypeScript into React projects for enhanced scalability and reliability.'
    },
    {
        iconId: 'style',
        title: 'styled components',
        description: 'Experienced in using Styled Components to create modular, scalable, and theme-based styling solutions for React applications, including dynamic styling based on props and responsive designs.'
    },
    {
        iconId: 'figma',
        title: 'WEB DESIgN',
        description: 'Proficient in using Figma to translate UI/UX designs into responsive web layouts, including extracting assets, inspecting design properties, and collaborating efficiently with designers in real-time projects.'
    },
]

export const Skills: React.FC = () => {
    return (
        <S.Skills id={'skills'}>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Fade  cascade={true} damping={0.2}>
                        {skillData.map((s, index)=> {
                            return <Skill iconId={s.iconId} key={index}
                                          title={s.title}
                                          description={s.description}/>
                        })}
                    </Fade>

                </FlexWrapper>
            </Container>

        </S.Skills>
    );
};