import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tag';
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() { }

  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }
  
  getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
    return  this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 12 },
      { name: 'FastFood', count: 8 },
      { name: 'Pizza', count: 1 },
      { name: 'Mexican Food', count: 5 },
      { name: 'Spicy', count: 5 },
      { name: 'Asian Food', count: 2 },
      { name: 'Pasta', count: 1 },
      { name: 'SlowFood', count: 1 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 2 },
      { name: 'Soup', count: 1 },
    ];
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Pozole',
        cookTime: '30-40',
        price: 80,
        favorite: true,
        origins: ['Mexico'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food-1.jpg',
        tags: ['Mexican Food', 'Spicy'],
      },
      {
        id: 2,
        name: 'Pizza',
        price: 100,
        cookTime: '20-30',
        favorite: true,
        origins: ['Italy'],
        stars: 4.7,
        imageUrl: '/assets/images/foods/food-2.jpg',
        tags: ['FastFood', 'Pizza'],
      },
      {
        id: 3,
        name: 'Tacos de Bistec',
        price: 90,
        cookTime: '10-15',
        favorite: false,
        origins: ['Mexico'],
        stars: 3.5,
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags: ['FastFood', 'Mexican Food', 'Spicy'],
      },
      {
        id: 4,
        name: 'Carne Asada',
        price: 190,
        cookTime: '40-50',
        favorite: true,
        origins: ['Mexico'],
        stars: 3.3,
        imageUrl: '/assets/images/foods/food-4.jpg',
        tags: ['Spicy', 'Mexican Food'],
      },
      {
        id: 5,
        name: 'Caldo de Pollo',
        price: 85,
        cookTime: '20-25',
        favorite: false,
        origins: ['Mexico'],
        stars: 3.0,
        imageUrl: '/assets/images/foods/food-5.jpg',
        tags: ['Mexican Food','SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Hamburguesa',
        price: 120,
        cookTime: '20-30',
        favorite: true,
        origins: ['Usa'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-11.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 7,
        name: 'Sushi',
        price: 95,
        cookTime: '30-40',
        favorite: false,
        origins: ['Asia'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-6.jpg',
        tags: ['FastFood', 'Asian Food', 'Fry'],
      },
      {
        id: 8,
        name: 'Tacos de trompo',
        price: 85,
        cookTime: '40-50',
        favorite: true,
        origins: ['Mexico'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-7.jpg',
        tags: ['Spicy', 'Mexican Food'],
      },
      {
        id: 9,
        name: 'Pasta',
        price: 90,
        cookTime: '30-35',
        favorite: true,
        origins: ['Italy'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-8.jpg',
        tags: ['FastFood', 'Pasta'],
      },
      {
        id: 10,
        name: 'Ramen',
        price: 90,
        cookTime: '20-30',
        favorite: true,
        origins: ['Asian'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-9.jpg',
        tags: ['FastFood', 'Asian Food'],
      },
      {
        id: 11,
        name: 'Boneless',
        price: 100,
        cookTime: '20-30',
        favorite: false,
        origins: ['Usa'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-10.jpg',
        tags: ['FastFood', 'Spicy'],
      },
      {
        id: 12,
        name: 'Papas fritas',
        price: 70,
        cookTime: '10-20',
        favorite: true,
        origins: ['Usa'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-12.jpg',
        tags: ['FastFood', 'Fry'],
      },
    ];
  }
}
