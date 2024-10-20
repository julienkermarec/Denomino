import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  devices_list: any[] = [
    {
      name: "Smartcontract.org",
      stars: 5,
      count: 182,
      icon: "1.jpg",
    },
    {
      name: "KerwebApps",
      stars: 123,
      count: 112,
      icon: "2.jpg",
    },
    {
      name: "Pavel",
      stars: 5,
      count: 109,
      icon: "3.jpg",
    },
    {
      name: "ApeDealer87",
      stars: 3,
      count: 89,
      icon: "4.jpg",
    },
    {
      name: "ScamKombat",
      stars: 5,
      count: 77,
      icon: "5.jpg",
    },
    {
      name: "ApeVerfied",
      stars: 2,
      count: 66,
      icon: "6.jpg",
    },
  ]  
  
  get devices(): any[] {
    return this.devices_list
  }
}
