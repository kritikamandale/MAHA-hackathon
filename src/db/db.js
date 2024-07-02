import abstract from "../images/abstract.png";
import bird from "../images/bird.png";
import buddha from "../images/buddha.png";
import flower from "../images/flower.png";
import landscape from "../images/landscape.png";
import modern from "../images/modern.png";
import peacock from "../images/peacock.png";
import traditional from "../images/traditional.png";

export function getData(){
    return [
        { title: "Abstract Painting", price: 50 , Image: abstract , id:1},
        { title: "Bird Painting ", price: 25, Image: bird , id:2},
        { title: "Buddha Painting", price: 40 , Image: buddha, id:3},
        { title: "Flower Painting", price: 30 , Image: flower , id:4},
        { title: "Landscape Painting", price: 45 , Image: landscape , id:5},
        { title: "Modern Painting", price: 35 , Image: modern , id:6},
        { title: "Peacock Painting", price: 40 , Image: peacock , id:7},
        { title: "Traditional Painting", price: 35 , Image: traditional , id:8},
    ];
}