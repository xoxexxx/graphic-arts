const plus = require("../../../assets/images/Plus.svg");
const social = require("../../../assets/images/Rectangle.svg");
const mail = require("../../../assets/images/mail.svg");
const print = require("../../../assets/images/print.svg");
const standart = require("../../../assets/images/standart.svg");
const marketing = require("../../../assets/images/marketing.svg");
const vkontakte = require("../../../assets/images/vkontakte.svg");
const facebook = require("../../../assets/images/facebook.svg");
const instagram = require("../../../assets/images/instagram.svg");
const youtube = require("../../../assets/images/youtube.svg");

interface ITemplate {
  id: number;
  name: string;
  active: boolean;
  value: string;
  img: string;
}
interface ITemplateOBJ {
  name: string;
  value: string;
  data: ITemplate[];
}
export const mainTemplate: ITemplate[] = [
  {
    id: 1,
    name: "setting-size",
    active: false,
    value: "Настраиваемый размер",
    img: plus,
  },
  {
    id: 2,
    name: "SOCIAL",
    active: false,
    value: "Социальные сети",
    img: social,
  },
  {
    id: 3,
    name: "BUSINESS",
    active: false,
    value: "Бизнес",
    img: mail,
  },
  {
    id: 4,
    name: "PRINT",
    active: false,
    value: "Печать",
    img: print,
  },
  {
    id: 5,
    name: "STANDART",
    active: false,
    value: "Стандартные",
    img: standart,
  },
  {
    id: 5.5,
    name: "MARKETING",
    active: false,
    value: "Маркетинг",
    img: marketing,
  },
];
export const lastDesign: ITemplate[] = [
  {
    id: 15,
    name: "design",
    active: false,
    value: "Мой дизайн",
    img: "",
  },
  {
    id: 16,
    name: "design",
    active: false,
    value: "Пост",
    img: "",
  },
  {
    id: 17,
    name: "design",
    active: false,
    value: "Инстаграм",
    img: "",
  },
  {
    id: 18,
    name: "design",
    active: false,
    value: "Название",
    img: "",
  },
];

export const socialTemplate: ITemplateOBJ = {
  name: "SOCIAL",
  value: "Социальные сети",
  data: [
    {
      id: 6,
      name: "post-instagram",
      active: false,
      value: "Пост Instagram",
      img: instagram,
    },
    {
      id: 7,
      name: "history-instagram",
      active: false,
      value: "История Instagram",
      img: instagram,
    },
    {
      id: 8,
      name: "vk-cover",
      active: false,
      value: "Обложка Вконтакте",
      img: vkontakte,
    },
    {
      id: 9,
      name: "post-vk",
      active: false,
      value: "Пост Вконтакте",
      img: vkontakte,
    },
    {
      id: 10,
      name: "history-vk",
      active: false,
      value: "История Вконтакте",
      img: vkontakte,
    },
    {
      id: 11,
      name: "album-post-vk",
      active: false,
      value: "Альбомный пост Вконтакте",
      img: vkontakte,
    },
    {
      id: 12,
      name: "cover-youtube",
      active: false,
      value: "Обложка YouTube",
      img: youtube,
    },
    {
      id: 13,
      name: "cover-facebook",
      active: false,
      value: "Обложка Facebook",
      img: facebook,
    },
    {
      id: 14,
      name: "post-facebook",
      active: false,
      value: "Пост Facebook",
      img: facebook,
    },
  ],
};

export const businessTemplate: ITemplateOBJ = {
  name: "BUSINESS",
  value: "Бизнес",
  data: [
    {
      id: 19,
      name: "BUSINESS",
      active: false,
      value: "Бизнес 1",
      img: "",
    },
    {
      id: 20,
      name: "BUSINESS",
      active: false,
      value: "Бизнес 2",
      img: "",
    },
    {
      id: 21,
      name: "BUSINESS",
      active: false,
      value: "Бизнес 3",
      img: "",
    },
    {
      id: 22,
      name: "BUSINESS",
      active: false,
      value: "Бизнес 4",
      img: "",
    },
    {
      id: 23,
      name: "BUSINESS",
      active: false,
      value: "Бизнес 5",
      img: "",
    },
  ],
};
export const printTemplate: ITemplateOBJ = {
  name: "PRINT",
  value: "Печать",
  data: [
    {
      id: 19,
      name: "PRINT",
      active: false,
      value: "Печать 1",
      img: "",
    },
    {
      id: 20,
      name: "PRINT",
      active: false,
      value: "Печать 2",
      img: "",
    },
    {
      id: 21,
      name: "PRINT",
      active: false,
      value: "Печать 3",
      img: "",
    },
    {
      id: 22,
      name: "PRINT",
      active: false,
      value: "Печать 4",
      img: "",
    },
    {
      id: 23,
      name: "PRINT",
      active: false,
      value: "Печать 5",
      img: "",
    },
  ],
};
export const standartTemplate: ITemplateOBJ = {
  name: "STANDART",
  value: "Стандартные",
  data: [
    {
      id: 19,
      name: "STANDART",
      active: false,
      value: "Стандарт 1",
      img: "",
    },
    {
      id: 20,
      name: "STANDART",
      active: false,
      value: "Стандарт 2",
      img: "",
    },
    {
      id: 21,
      name: "STANDART",
      active: false,
      value: "Стандарт 3",
      img: "",
    },
    {
      id: 22,
      name: "STANDART",
      active: false,
      value: "Стандарт 4",
      img: "",
    },
    {
      id: 23,
      name: "STANDART",
      active: false,
      value: "Стандарт 5",
      img: "",
    },
  ],
};
export const marketingTemplate: ITemplateOBJ = {
  name: "MARKETING",
  value: "Маркетинг",
  data: [
    {
      id: 19,
      name: "MARKETING",
      active: false,
      value: "Маркетинг 1",
      img: "",
    },
    {
      id: 20,
      name: "MARKETING",
      active: false,
      value: "Маркетинг 2",
      img: "",
    },
    {
      id: 21,
      name: "MARKETING",
      active: false,
      value: "Маркетинг 3",
      img: "",
    },
    {
      id: 22,
      name: "MARKETING",
      active: false,
      value: "Маркетинг 4",
      img: "",
    },
    {
      id: 23,
      name: "MARKETING",
      active: false,
      value: "Маркетинг 5",
      img: "",
    },
  ],
};
