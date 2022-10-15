import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  menu =[
    {name:'Burger',price:50,avb:true,caloris:1298,img:"https://st2.depositphotos.com/1692343/6719/i/450/depositphotos_67195703-stock-photo-grass-fed-bison-hamburger.jpg"},
    {name:'Pasta',price:70,avb:true,caloris:1298,img:"https://st2.depositphotos.com/1326558/7226/i/600/depositphotos_72263189-stock-photo-penne-pasta-in-tomato-sauce.jpg"},
    {name:'Pizzs',price:40,avb:true,caloris:1298,img:"https://st2.depositphotos.com/1692343/5636/i/450/depositphotos_56360353-stock-photo-hot-homemade-pepperoni-pizza.jpg"},
    {name:'Sandwich',price:50,avb:true,caloris:1298,img:"https://st.depositphotos.com/3220235/4165/i/600/depositphotos_41658829-stock-photo-long-baguette-sandwich-with-lettuce.jpg"},
    {name:'Fish',price:50,avb:true,caloris:1298,img:"https://st.depositphotos.com/1011514/1953/i/600/depositphotos_19536991-stock-photo-whole-fried-dorado.jpg"}




  ]


  constructor() { }

  ngOnInit(): void {
  }

}
