import { Routes } from '@angular/router';
import { AddTripComponent } from './add-trip/add-trip';
import { TripListing } from './trip-listing/trip-listing';
import { EditTripComponent } from './edit-trip/edit-trip';
import { LoginComponent } from './login/login';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    {
        path: 'add-trip',
        component: AddTripComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'edit-trip/:tripCode',
        component: EditTripComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: TripListing,
        pathMatch: 'full'
    }
];