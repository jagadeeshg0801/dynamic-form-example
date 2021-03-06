import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehiclesList: any = [];
  headerNames : any = [
    {fieldName: 'countryName', displayName: "Country Name" },
    {fieldName: 'breedName', displayName: "Breed Name" },
    

  ]
  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.getAllVehicles();


  }

  getAllVehicles() {
    this.vehicleService.getAllVehicles().subscribe((res: any) => {
      console.log(res);
      const vehiclesList = res.data || [];
      this.vehiclesList = vehiclesList.map((ele:any)=> {return {countryName: ele.country, breedName: ele.breed}});
      // const updateList = this.vehiclesList.pipe(map((ele: any) => {
      //   return { countryName: ele.country, domainNames: ele.domains }
      // }));
      let obj;
      let  updateList:any =[];
      
      //INSTEAD OF map Operator Use below logic
      // this.vehiclesList.forEach((ele:any) => {
      //     obj = { countryName: ele.country, domainNames: ele.domains }
      //     updateList.push(obj);
      // });

      console.log('updateList', this.vehiclesList)
    },
      (err:any) => {

      })
  }


  onSaveForm() {
    let formData = { name: 'maruthi', model: 2032 };
    this.vehicleService.saveVechicles(formData).subscribe((res: any) => { //here, res = newly saved vehicle object
      if (res && res['id']) {
        console.log("successfully saved");


        this.getAllVehicles(); // 
        // [Or]
        this.vehiclesList.push(res);

      } else {
        console.log('Failed to save the data');

      }
    })
  }

}
