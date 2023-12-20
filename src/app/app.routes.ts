import { Routes, provideRouter } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { ApplicationConfig} from '@angular/core';
import { FilmsSpecialComponent } from './films-special/films-special.component';

export const routes: Routes = [
    { path: 'movie/:id', component: MovieDetailsComponent },
    { path: 'films-special/:option', component: FilmsSpecialComponent},
];

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes)]
};