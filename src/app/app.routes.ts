import { Routes, provideRouter } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { ApplicationConfig} from '@angular/core';

export const routes: Routes = [
    { path: 'movie/:id', component: MovieDetailsComponent },
];

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes)]
};