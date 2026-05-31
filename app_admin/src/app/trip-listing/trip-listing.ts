import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TripCard } from '../trip-card/trip-card';

import { TripData } from '../services/trip-data';
import { Trip } from '../models/trip';

import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, FormsModule, TripCard],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css',
  providers: [TripData]
})

export class TripListing implements OnInit {

  trips: Trip[] = [];
  filteredTrips: Trip[] = [];

  searchText: string = '';
  sortOption: string = '';

  maxPrice: number | null = null;
  durationFilter: string = '';

  message: string = '';

  constructor(
    private tripData: TripData,
    private router: Router
  ) {
    console.log('trip-listing constructor');
  }

  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }

  private getStuff(): void {
    this.tripData.getTrips()
      .subscribe({
        next: (value: any) => {
          this.trips = value;
          this.filteredTrips = value;
          if (value.length > 0)
          {
            this.message = 'There are ' + value.length + ' trips available.';
          }
          else {
            this.message = 'There were no trips retrieved from the database';
          }
          console.log(this.message);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      })
  }

  public applyFilters(): void {
  let results = [...this.trips];

  // Search by destination or trip name
  if (this.searchText) {
    results = results.filter(trip =>
      trip.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      trip.resort.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  // Filter by maximum price
  if (this.maxPrice) {
    results = results.filter(trip =>
      Number(trip.perPerson) <= this.maxPrice!
    );
  }

  // Filter by trip duration
  if (this.durationFilter) {
    results = results.filter(trip =>
      trip.length.toLowerCase().includes(this.durationFilter.toLowerCase())
    );
  }

  // Sort by price
  if (this.sortOption === 'lowToHigh') {
    results.sort((a, b) => Number(a.perPerson) - Number(b.perPerson));
  }

  if (this.sortOption === 'highToLow') {
    results.sort((a, b) => Number(b.perPerson) - Number(a.perPerson));
  }

  this.filteredTrips = results;
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.getStuff();
  }
}