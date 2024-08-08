import {IProduct} from '../interfaces'
import { v4 as uuidv4 } from "uuid";

export const productList: IProduct[] = [
  {
    id: uuidv4(),
    title: "2022 Genesis GV70",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos excepturi.",
    price: "500000",
    category: {
      name: "cars",
      imageURL:
        "https://img.freepik.com/premium-photo/modern-automobile-classic-technology-wheel-traffic_665346-119.jpg",
    },
    imageURL:
      "https://img.freepik.com/premium-photo/modern-automobile-classic-technology-wheel-traffic_665346-119.jpg",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
  },
  {
    id: uuidv4(),
    title: "2010 Genesis GV10",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos excepturi.",
    price: "500000",
    category: {
      name: "cars",
      imageURL:
        "https://img.freepik.com/premium-photo/modern-automobile-classic-technology-wheel-traffic_665346-119.jpg",
    },
    imageURL:
      "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
  },
  {
    id: uuidv4(),
    title: "2072 Genesis GX70",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos excepturi.",
    price: "500000",
    category: {
      name: "cars",
      imageURL:
        "https://img.freepik.com/premium-photo/modern-automobile-classic-technology-wheel-traffic_665346-119.jpg",
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
    price: "500000",
    category: {
      name: "cars",
      imageURL:
        "https://img.freepik.com/premium-photo/modern-automobile-classic-technology-wheel-traffic_665346-119.jpg",
    },
    imageURL:
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
  },
  {
    id: uuidv4(),
    title: "2022 Borsh GV70",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos excepturi.",
    price: "500000",
    category: {
      name: "cars",
      imageURL:
        "https://img.freepik.com/premium-photo/modern-automobile-classic-technology-wheel-traffic_665346-119.jpg",
    },
    imageURL:
      "https://img.freepik.com/premium-photo/modern-automobile-classic-technology-wheel-traffic_665346-119.jpg",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
  },
  {
    id: uuidv4(),
    title: "2022 Genesis GV70",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos excepturi.",
    price: "500000",
    category: {
      name: "cars",
      imageURL:
        "https://img.freepik.com/premium-photo/modern-automobile-classic-technology-wheel-traffic_665346-119.jpg",
    },
    imageURL:
      "https://img.freepik.com/premium-photo/modern-automobile-classic-technology-wheel-traffic_665346-119.jpg",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
  },
];
