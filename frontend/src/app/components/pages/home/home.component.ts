import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RatingModule } from 'ng-starrating';
import { CommonModule, NgFor } from '@angular/common';
import { SearchComponent } from '../../partials/search/search.component';
import { TagsComponent } from "../../partials/tags/tags.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, RouterModule, CommonModule, SearchComponent, TagsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  foods:Food[] = [];
  constructor(private foodService:FoodService, activitedRoute:ActivatedRoute){
    activitedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
        this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      
      else if(params.tag)
      this.foods = this.foodService.getAllFoodsByTag(params.tag);
      
      else
      this.foods = foodService.getAll();
    })
    
  }

  ngOnInit():void{
  }

}
