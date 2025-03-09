import styled from "styled-components";
import {theme} from "../../../style/Theme.ts";

const Skills = styled.section`
    position: relative;
`
const Skill = styled.div`
    width: 330px;
    flex-grow: 1;
    padding: 42px 20px 52px;
    
    @media ${theme.media.mobile} {
        padding: 62px 0 0;
    }
`

const IconWrapper = styled.div`
    position: relative;

    &::before {
        content: '';
        display: inline-block;
        width: 80px;
        height: 80px;
        transform: rotate(45deg) translate(-50%, -50%);
        background-color: rgba(255, 255, 255, 0.1);

        position: absolute;
        left: 50%;
        top: 50%;
        transform-origin: top left;
    }
`

const SkillTitle = styled.h3`
    margin: 70px 0 15px;
    text-transform: uppercase;
`

const SkillText = styled.p`
    text-align: center;
`

export const S = {
    Skills,
    Skill,
    IconWrapper,
    SkillTitle,
    SkillText
}
