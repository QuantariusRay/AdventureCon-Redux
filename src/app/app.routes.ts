import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { SplashPageComponent } from './splash-page/splash-page.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'splash-page', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'splash-page', component: SplashPageComponent, data: { text: 'Splash Page' } },
  { path: 'master-view', loadChildren: () => import('./master-view/master-view.routes').then(m => m.routes), data: { text: 'Master View' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
