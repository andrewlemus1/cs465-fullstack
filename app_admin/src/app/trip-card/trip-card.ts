import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Trip } from  '../models/trip';
import { AuthenticationService } from '../services/authentication';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css',
  providers: [AuthenticationService]
})
export class TripCard implements OnInit {

  @Input('trip') trip: any;
 constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}


  ngOnInit(): void {
    
  }
  public isLoggedIn()
  {
    return this.authenticationService.isLoggedIn();
  }
}
