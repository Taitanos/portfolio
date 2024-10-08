import {ProjectPropsType} from '../layout/sections/projects/project/Project';
import ProjectImg from '../assets/images/project.webp';
import {SkillPropsType} from '../layout/sections/skills/skill/Skill';

const skillData: SkillPropsType[] = [
    {iconId: 'typeScript', titleId: 'Type Script'},
    {iconId: 'javaScript', titleId: 'Java Script'},
    {iconId: 'react', titleId: 'React', viewBox: '0 0 40 38'},
    {iconId: 'redux', titleId: 'Redux'},
    {iconId: 'restAPI', titleId: 'Rest API'},
    {iconId: 'git', titleId: 'Git'},
    {iconId: 'html', titleId: 'HTML'},
    {iconId: 'css', titleId: 'CSS'},
    {iconId: 'sass', titleId: 'SASS'},
    {iconId: 'bootstrap', titleId: 'Bootstrap'},
    {iconId: 'styledComponents', titleId: 'Styled Components', viewBox: '0 0 32 32'},
    {iconId: 'materialUI', titleId: 'Material UI', viewBox: '0 0 256 204'},
]

const projectData: ProjectPropsType[] = [
    {
        title:'Fast Company',
        stack: 'Технологии: TypeScript/JavaScript, React, Bootstrap',
        text:'Проект представляет собой приложение для быстрого поиска на вечер по своим интересам, в приложении можно как найти друзей так и компанию на вечер',
        src: ProjectImg,
        link: 'https://taitanos.github.io/fast-company'
    },
    {
        title:'Counter',
        stack: 'Технологии: TypeScript/JavaScript, React, CSS',
        text:'Данный проект является обычным счетсчиком и секундомером, в счетчике можно указывать начальное значение и конечное значение по достижению которого счетчик приостанавливается',
        src: ProjectImg,
        link: 'https://taitanos.github.io/counter/'
    },
    {
        title:'Social Network',
        stack: 'Технологии: JavaScript, React, Redux, RestApi, CSS',
        text:'Приложение представляет собой социальную сеть, в которой можно общаться со своими друзьями, делиться интересными постами и фотографиями',
        src: ProjectImg,
        link: 'https://github.com/Taitanos/socialnetwork-js'
    },
    {
        title:'TodoList',
        stack: 'Технологии: TypeScript/JavaScript, React, Redux, MaterialUI',
        text:'Приложение для создания заметок и задач, которое поможет упростить жизнь и не забыть о важных делах которые необходимо сделать',
        src: ProjectImg,
        link: 'https://github.com/Taitanos/todolist-ts'
    },
]

const socialItemData = [
    {iconId: 'telegram', link: 'https://t.me/Taitanos'},
    {iconId: 'vk', link: 'https://vk.com/taitanos'},
    {iconId: 'linkedIn', link: 'https://www.linkedin.com/in/nikolay-tukarev/'},
]

export const Data = {
    skillData,
    projectData,
    socialItemData,
}