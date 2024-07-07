import React from 'react';
import {S} from '../HeaderMenu_Styles'

const items = [
    {href: 'main', title: 'Главная'},
    {href: 'skills', title: 'Навыки'},
    {href: 'projects', title: 'Проекты'},
    {href: 'contact', title: 'Связаться'},
]

export const Menu: React.FC = () => {
    return (
        <ul>
            {items.map((item, index) => {
                return <S.MenuItem key={index}>
                    <S.NavLink
                        activeClass={'active'}
                        smooth={true}
                        to={item.href}
                        spy={true}
                    >
                        {item.title}
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                    </S.NavLink>
                </S.MenuItem>
            })}
        </ul>
    );
};