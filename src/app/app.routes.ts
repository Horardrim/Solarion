import { Routes } from '@angular/router';
import { LtcdComponent } from './ltcd/ltcd.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', redirectTo: '/ltcd', pathMatch: 'full' },
    { path: 'ltcd', component: LtcdComponent },
];
