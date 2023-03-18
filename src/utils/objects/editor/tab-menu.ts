const tabTemplate = require("../../../assets/images/grid-dynamic.svg");
const tabMedia = require("../../../assets/images/image.svg");
const tabText = require("../../../assets/images/text.svg");
const tabFigure = require("../../../assets/images/shape.svg");

interface ITabMenu {
  id: number;
  name: string;
  action: string;
  img: string;
}

export const tabMenu: ITabMenu[] = [
  {
    id: 1,
    name: "Библиотека шаблонов",
    action: "TEMPLATES",
    img: tabTemplate,
  },
  {
    id: 2,
    name: "Картинки и фото",
    action: "MEDIA",
    img: tabMedia,
  },
  {
    id: 3,
    name: "Добавить текст",
    action: "TEXT",
    img: tabText,
  },
  {
    id: 4,
    name: "Добавить фигуру",
    action: "FIGURE",
    img: tabFigure,
  },
];
