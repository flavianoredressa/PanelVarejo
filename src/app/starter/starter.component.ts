import { ApartmentServiceService } from './../services/apartment-service.service';
import { Apartamento } from './../models/apartamento';
import { Component, AfterViewInit } from '@angular/core';
import { Util } from '../utils/util';
import { Chamado } from '../models/chamado';
@Component({
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss']
})
export class StarterComponent implements AfterViewInit {
  showApStatus = Util.showApStatus;
  getClasApStatus = Util.getClasApStatus;
  status = {
    "1": true,
    "2": true,
    "3": true,
    "4": true,
    "5": true,
    "6": true
  }
  apartamentos: Array<Apartamento>;
  constructor(private apartmentService: ApartmentServiceService) {
    this.get()
  }
  clickChek(){
    this.get()
  }
  get() {
    this.apartmentService.getMany(this.status).
      subscribe(apartamentos => {

        this.apartamentos = apartamentos.filter(i => {
          let achou = false;
          for (let s in this.status) {
            if(this.status[s] && i.status == Number(s)){
              achou = true;
            }
          }
          return achou;
        }).sort((a,  b)=>{
          var A = a.numero.toLowerCase();
          var B = b.numero.toLowerCase();
          if (A < B){
             return -1;
          }else if (A > B){
            return  1;
          }else{
            return 0;
          }
        });
      });
  }
  
  ngAfterViewInit() { }
}
