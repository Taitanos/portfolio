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
    {title:'Social Network', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.', src: ProjectImg},
    {title:'Fast Company', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.', src: ProjectImg},
    {title:'Counter', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.', src: ProjectImg},
    {title:'TodoList', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.', src: ProjectImg},
]

const socialItemData = [
    {iconId: 'telegram'},
    {iconId: 'vk'},
    {iconId: 'linkedIn'},
]

export const Data = {
    skillData,
    projectData,
    socialItemData,
}