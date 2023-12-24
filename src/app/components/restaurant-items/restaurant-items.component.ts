import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterService } from '../../services/master.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurant-items.component.html',
  styleUrl: './restaurant-items.component.scss'
})
export class RestaurantItemsComponent{

  items: any[] = []

  constructor(private activated: ActivatedRoute, private _master: MasterService){
      this.activated.params.subscribe((res: any) => {
        console.log(res)
          this.loadRestaurantData(res.categoryName)
      })
  }

  loadRestaurantData(id: any){
    this._master.getItemByCategoryId(id).subscribe(
      (res:any) => { this.items = res.data}
    )
  }

}
