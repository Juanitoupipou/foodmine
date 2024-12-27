import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-food-page',
  imports: [NgFor, RouterLink, CommonModule],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent implements OnInit{
  food!: Food;
  constructor(activatedRoute:ActivatedRoute, foodService:FoodService){
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      this.food = foodService.getFoodById(params.id);
    })
  }

  ngOnInit(): void {
  }


}
