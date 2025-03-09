import React from 'react';
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {S} from "./Footer_Styles.ts"

const socialItemData = [
    {
        iconId: 'instagram',
    },
    {
        iconId: 'telegram',
    },
    {
        iconId: 'vk',
    },
    {
        iconId: 'linkedin',
    }
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Sergey</S.Name>
                <S.SocialList>

                    {socialItemData.map((s, index) => {
                        return(
                            <S.SocialItem key={index}>
                                <S.SocialLink>
                                    <Icon height={'21'} width={'21'} viewBox={'0 0 21 21'} iconId={s.iconId}/>
                                </S.SocialLink>
                            </S.SocialItem>
                        )
                    })}

                </S.SocialList>
                <S.Copyright>© 2025 Lyamin Sergey, All Rights Reserved.</S.Copyright>
            </FlexWrapper>

        </S.Footer>
    );
};