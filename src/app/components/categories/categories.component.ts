import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit{

  categories: any[] = []

  constructor(private _masterservice: MasterService, private router: Router){}

  ngOnInit(): void {
     this.getAllCategories();
  }

  getAllCategories(){
    this._masterservice.getAllCategories().subscribe(
      (res: any) => this.categories = res.data
    )
  }

  navigate(categoryId:any){
      this.router.navigate(['restaurant', categoryId])
  }

}
