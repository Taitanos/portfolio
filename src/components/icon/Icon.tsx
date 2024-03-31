import React from 'react';
import iconsSprite from '../../accets/images/icons-sprite.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = (props:IconPropsType) => {
    return (
        <svg width={props.width || "48px"} height={props.height || "48px"} viewBox={props.viewBox || "0 0 48 48"} xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};