import tab1 from '../../assets/images/grid-dynamic.svg';
import tab2 from '../../assets/images/image.svg';
import tab3 from '../../assets/images/text.svg';
import tab4 from '../../assets/images/shape.svg';

export const tabMenu = [
    {   
        id: 1,
        name: 'Библиотека шаблонов',
        action: 'TEMPLATES',
        img: tab1,
    },
    {   
        id: 2,
        name: 'Картинки и фото',
        action: 'MEDIA',
        img: tab2,
    },
    {   
        id: 3,
        name: 'Добавить текст',
        action: 'TEXT',
        img: tab3,
    },
    {   
        id: 4,
        name: 'Добавить фигуру',
        action: 'FIGURE',
        img: tab4,
    },
]