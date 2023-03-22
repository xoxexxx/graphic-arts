const r84 = require("../../../assets/editor-templates/Rectangle84.png");
const r85 = require("../../../assets/editor-templates/Rectangle85.png");
const r86 = require("../../../assets/editor-templates/Rectangle86.png");
const r87 = require("../../../assets/editor-templates/Rectangle87.png");
const r88 = require("../../../assets/editor-templates/Rectangle88.png");

interface IMediaTemplate {
  name: string;
  url: String;
  w: number;
  h: number;
}

export const mediaTemplates: IMediaTemplate[] = [
  {
    name: "84",
    url: r84,
    w: 120,
    h: 190,
  },
  {
    name: "85",
    url: r85,
    w: 120,
    h: 190,
  },
  {
    name: "86",
    url: r86,
    w: 120,
    h: 141,
  },
  {
    name: "87",
    url: r87,
    w: 120,
    h: 142,
  },
  {
    name: "88",
    url: r88,
    w: 120,
    h: 190,
  },
];
export const mediaBtnsTemplates = [
  {
    name: "Бизнес",
  },
  {
    name: "Дети",
  },
  {
    name: "Природа",
  },
  {
    name: "Еда",
  },
  {
    name: "Медицина",
  },
  {
    name: "Животные",
  },
  {
    name: "Категория1",
  },
  {
    name: "Категория2",
  },
  {
    name: "Категория3",
  },
  {
    name: "Категория4",
  },
];
