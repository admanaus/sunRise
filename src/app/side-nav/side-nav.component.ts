import { getLocaleDirection } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  form: FormGroup;
  fb: FormBuilder = new FormBuilder;
  sunApiResponse: any;

  constructor(private apiService: ApiService, fb: FormBuilder) { 
    this.form = fb.group({
      zipcode: ['']
    });
  }

  ngOnInit(): void { }

  submitZip(){
    let zip = this.form.controls['zipcode'].value;
    if(zip){
      this.apiService.getLatAndLon(zip).subscribe((res:any) => {
        this.apiService.getSunInfo(res.lat, res.lon).subscribe((res: any) =>{
          this.sunApiResponse = res;
        })
      })
    }

  }

}
