import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HotelInformationComponent } from './hotel-information/hotel-information.component';
import { TournamentRulesComponent } from './tournaments/tournament-rules.component';
import { PoliciesComponent } from './policy/policies.component';
import { PlayToWinComponent } from './playToWin/play-to-win.component';
import { WinnersComponent } from './winners/winners.component';
import { MeepleAcademyComponent } from './meeple-academy/meeple-academy.component';
import {PricingPageComponent} from "./pricing/pricing-page.component";
import { WarhammerComponent } from './warhammer/warhammer.component';
import { TournamentGamesComponent } from './tournaments/tournament-games.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent, data: { text: 'Home Page' } },
  { path: 'contact-us', component: ContactUsComponent, data: { text: 'Contact Us' } },
  { path: 'hotel-info', component: HotelInformationComponent, data: { text: 'Hotel Information' } },
  { path: 'tournaments', component: TournamentGamesComponent, data: { text: 'Tournaments' } },
  { path: 'tournament-rules', component: TournamentRulesComponent, data: { text: 'Tournament Rules' } },
  { path: 'policies', component: PoliciesComponent, data: { text: 'Policies' } },
  { path: 'play-to-win', component: PlayToWinComponent, data: { text: 'Play To Win' } },
  { path: 'meeple-academy', component: MeepleAcademyComponent, data: { text: 'Meeple Academy' } },
  { path: 'warhammer', component: WarhammerComponent, data: { text: 'Warhammer' } },
  { path: 'winners', component: WinnersComponent, data: { text: 'Winners' } },
  { path: 'pricing', component: PricingPageComponent, data: { text: 'Pricing' }},
  { path: 'error', component: UncaughtErrorComponent },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
