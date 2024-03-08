import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MeepleAcademyComponent } from './meeple-academy/meeple-academy.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },{ path: 'home', component: HomeComponent, data: { text: 'Home' } }, { path: 'meeple-academy', component: MeepleAcademyComponent, data: { text: 'Meeple Academy' } }];
