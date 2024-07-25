import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { SongsComponent } from './songs/songs.component';
import { EventsComponent } from './events/events.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'store', component: StoreComponent },
    { path: 'songs', component: SongsComponent },
    { path: 'events', component: EventsComponent },
    { path: 'about', component: AboutComponent }
];
