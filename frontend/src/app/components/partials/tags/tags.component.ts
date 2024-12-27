import { Component, OnInit } from '@angular/core';
import { Tag } from '../../../shared/models/Tags';
import { FoodService } from '../../../services/food.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tags',
  imports: [RouterLink, CommonModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit{
  tags?:Tag[];
  constructor(foodService:FoodService){
    this.tags = foodService.getAllTags();
  }
  ngOnInit(): void {
  }

}
