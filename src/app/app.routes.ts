import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { ExploreComponent } from './explore/explore.component';
import { SongsComponent } from './songs/songs.component';
import { EventsComponent } from './events/events.component';
import { AccountComponent } from './account/account.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'store', component: StoreComponent },
    { path: 'explore', component: ExploreComponent },
    { path: 'songs', component: SongsComponent },
    { path: 'events', component: EventsComponent },
    { path: 'account', component: AccountComponent },
    { path: 'about', component: AboutComponent }
];
