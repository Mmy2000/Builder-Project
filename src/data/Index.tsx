import {ICategory, IFormInput, IProduct} from '../interfaces'
import { v4 as uuidv4 } from "uuid";

export const productList: IProduct[] = [
  {
    id: uuidv4(),
    title: "2022 Genesis GV70",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos excepturi.",
    price: "500,000",
    category: {
      name: "cars",
      imageURL:
        "https://cdn.ferrari.com/cms/network/media/img/resize/5dd552852cdb32285a785d2e-line-up-ferrari-sf90-stradale?width=800&height=600",
    },
    imageURL:
      "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Tata-Nexon-EV-210920231305.jpeg&w=872&h=578&q=75&c=1",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
  },
  {
    id: uuidv4(),
    title: "2010 Genesis GV10",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos excepturi.",
    price: "500,000",
    category: {
      name: "cars",
      imageURL:
        "https://cdn.ferrari.com/cms/network/media/img/resize/5dd552852cdb32285a785d2e-line-up-ferrari-sf90-stradale?width=800&height=600",
    },
    imageURL:
      "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
  },
  {
    id: uuidv4(),
    title: "2072 Genesis GX70",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis temporibus et necessitatibus corrupti sit possimus quam cumque quos est vel? Iste dolore hic sed sequi quos, illo vitae dolor enim maiores architecto laudantium ipsa tempora veritatis adipisci repellendus explicabo, minima assumenda accusantium perferendis eligendi velit reiciendis voluptas nulla illum! Pariatur.",
    price: "500,000",
    category: {
      name: "cars",
      imageURL:
        "https://cdn.ferrari.com/cms/network/media/img/resize/5dd552852cdb32285a785d2e-line-up-ferrari-sf90-stradale?width=800&height=600",
    },
    imageURL:
      "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Tata-Nexon-EV-210920231305.jpeg&w=872&h=578&q=75&c=1",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
  },
  {
    id: uuidv4(),
    title: "2022 BMW X6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos excepturi.",
    price: "500,000",
    category: {
      name: "cars",
      imageURL:
        "https://cdn.ferrari.com/cms/network/media/img/resize/5dd552852cdb32285a785d2e-line-up-ferrari-sf90-stradale?width=800&height=600",
    },
    imageURL:
      "https://www.pngitem.com/pimgs/m/37-376520_png-blue-car-car-transparent-png.png",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
  },
  {
    id: uuidv4(),
    title: "2022 Borsh GV70",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos excepturi.",
    price: "500,000",
    category: {
      name: "cars",
      imageURL:
        "https://cdn.ferrari.com/cms/network/media/img/resize/5dd552852cdb32285a785d2e-line-up-ferrari-sf90-stradale?width=800&height=600",
    },
    imageURL:
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/156405/xuv-3xo-exterior-right-front-three-quarter-33.jpeg?isig=0&q=80",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
  },
  {
    id: uuidv4(),
    title: "2022 Genesis GV70",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis temporibus et necessitatibus corrupti sit possimus quam cumque quos est vel? Iste dolore hic sed sequi quos, illo vitae dolor enim maiores architecto laudantium ipsa tempora veritatis adipisci repellendus explicabo, minima assumenda accusantium perferendis eligendi velit reiciendis voluptas nulla illum! Pariatur.",
    price: "500,000",
    category: {
      name: "cars",
      imageURL:
        "https://cdn.ferrari.com/cms/network/media/img/resize/5dd552852cdb32285a785d2e-line-up-ferrari-sf90-stradale?width=800&height=600",
    },
    imageURL:
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-71.jpeg?isig=0&q=80",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
  },
  {
    id: uuidv4(),
    title: "2022 Genesis GV70",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos excepturi.",
    price: "500,000",
    category: {
      name: "cars",
      imageURL:
        "https://cdn.ferrari.com/cms/network/media/img/resize/5dd552852cdb32285a785d2e-line-up-ferrari-sf90-stradale?width=800&height=600",
    },
    imageURL:
      "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Tata-Nexon-EV-210920231305.jpeg&w=872&h=578&q=75&c=1",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
  },
  {
    id: uuidv4(),
    title: "2010 Genesis GV10",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos excepturi.",
    price: "500,000",
    category: {
      name: "cars",
      imageURL:
        "https://cdn.ferrari.com/cms/network/media/img/resize/5dd552852cdb32285a785d2e-line-up-ferrari-sf90-stradale?width=800&height=600",
    },
    imageURL:
      "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
  },
  {
    id: uuidv4(),
    title: "2072 Genesis GX70",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis temporibus et necessitatibus corrupti sit possimus quam cumque quos est vel? Iste dolore hic sed sequi quos, illo vitae dolor enim maiores architecto laudantium ipsa tempora veritatis adipisci repellendus explicabo, minima assumenda accusantium perferendis eligendi velit reiciendis voluptas nulla illum! Pariatur.",
    price: "500,000",
    category: {
      name: "cars",
      imageURL:
        "https://cdn.ferrari.com/cms/network/media/img/resize/5dd552852cdb32285a785d2e-line-up-ferrari-sf90-stradale?width=800&height=600",
    },
    imageURL:
      "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Tata-Nexon-EV-210920231305.jpeg&w=872&h=578&q=75&c=1",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
  },
  {
    id: uuidv4(),
    title: "2022 BMW X6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos excepturi.",
    price: "500,000",
    category: {
      name: "cars",
      imageURL:
        "https://cdn.ferrari.com/cms/network/media/img/resize/5dd552852cdb32285a785d2e-line-up-ferrari-sf90-stradale?width=800&height=600",
    },
    imageURL:
      "https://www.pngitem.com/pimgs/m/37-376520_png-blue-car-car-transparent-png.png",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
  },
  {
    id: uuidv4(),
    title: "2022 Borsh GV70",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos excepturi.",
    price: "500,000",
    category: {
      name: "cars",
      imageURL:
        "https://cdn.ferrari.com/cms/network/media/img/resize/5dd552852cdb32285a785d2e-line-up-ferrari-sf90-stradale?width=800&height=600",
    },
    imageURL:
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/156405/xuv-3xo-exterior-right-front-three-quarter-33.jpeg?isig=0&q=80",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
  },
  {
    id: uuidv4(),
    title: "2022 Genesis GV70",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis temporibus et necessitatibus corrupti sit possimus quam cumque quos est vel? Iste dolore hic sed sequi quos, illo vitae dolor enim maiores architecto laudantium ipsa tempora veritatis adipisci repellendus explicabo, minima assumenda accusantium perferendis eligendi velit reiciendis voluptas nulla illum! Pariatur.",
    price: "500,000",
    category: {
      name: "cars",
      imageURL:
        "https://cdn.ferrari.com/cms/network/media/img/resize/5dd552852cdb32285a785d2e-line-up-ferrari-sf90-stradale?width=800&height=600",
    },
    imageURL:
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-71.jpeg?isig=0&q=80",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
  },
];

export const formInputList:IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Name",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Product Description",
    type: "text",
  },

  {
    id: "image",
    name: "imageURL",
    label: "Product Image",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "text",
  },
];

export const colors: string[] = [
  "#40E0D0",
  "#FFBF00",
  "#DFFF00",
  "#DE3163",
  "#000000",
  "#6495ED",
  "#CCCCFF",
  "#9FE2BF",
];

export const categories: ICategory[] = [
  {
    id: uuidv4(),
    imageURL:
      "https://cdn.ferrari.com/cms/network/media/img/resize/5dd552852cdb32285a785d2e-line-up-ferrari-sf90-stradale?width=800&height=600",
    name: "cars",
  },
  {
    id: uuidv4(),
    imageURL:
      "https://t3.ftcdn.net/jpg/01/56/55/24/360_F_156552441_xlhQ0Nr4kV1xrxzngI6IjpJ7aeZJQMfD.jpg",
    name: "PC Desktop",
  },
  {
    id: uuidv4(),
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0sUC5TXixWwZpwieDqjB52j-StydNQ2OtgQ&s",
    name: "T-Shirt",
  },
];