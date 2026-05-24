import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TripData } from '../services/trip-data';
import { Trip } from '../models/trip';


@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-trip.html',
  styleUrl: './edit-trip.css'
})

export class EditTripComponent implements OnInit {

  public editForm!: FormGroup;
  trip!: Trip;
  submitted = false;
  message: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private tripDataService: TripData
  ) {}

  ngOnInit(): void {

  const tripCode = this.route.snapshot.paramMap.get('tripCode');

  if (!tripCode) {
    alert("Something went wrong. No trip code was provided.");
    this.router.navigate(['']);
    return;
  }

  console.log('EditTripComponent::ngOnInit');
  console.log('tripCode: ' + tripCode);

  this.editForm = this.formBuilder.group({
    _id: [],
    code: [tripCode, Validators.required],
    name: ['', Validators.required],
    length: ['', Validators.required],
    start: ['', Validators.required],
    resort: ['', Validators.required],
    perPerson: ['', Validators.required],
    image: ['', Validators.required],
    description: ['', Validators.required]
  });

  this.tripDataService.getTrip(tripCode)
    .subscribe({
      next: (value: any) => {
        this.trip = value;

        // If backend returns an array, use first item.
        // If backend returns one object, use value directly.
        const tripRecord = Array.isArray(value) ? value[0] : value;

        if (!tripRecord) {
          this.message = 'No Trip Retrieved!';
          return;
        }

        this.editForm.patchValue(tripRecord);
        this.message = 'Trip: ' + tripCode + ' retrieved';

        console.log(this.message);
      },
      error: (error: any) => {
        console.log('Error: ' + error);
        this.message = 'Error retrieving trip.';
      }
    });
}

  public onSubmit() {
    this.submitted = true;

    if (this.editForm.valid) {
      this.tripDataService.updateTrip(this.editForm.value)
        .subscribe({
          next: (value: any) => {
            console.log(value);
            this.router.navigate(['']);
          },
          error: (error: any) => {
            console.log('Error: ' + error);
          }
        })
    }
  }

  // get the form short name to access the form fields
  get f() { return this.editForm.controls; }

}

