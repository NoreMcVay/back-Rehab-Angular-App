import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BirdDogsComponent } from './Components/back-exercises/bird-dogs/bird-dogs.component';
import { McgillSitUpsComponent } from './Components/back-exercises/mcgill-sit-ups/mcgill-sit-ups.component';
import { SidePlanksComponent } from './Components/back-exercises/side-planks/side-planks.component';
import { HomeComponent } from './Components/home/home.component';


const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'bird-dogs', component: BirdDogsComponent },
    { path: 'mcgill-sit-ups' , component: McgillSitUpsComponent },
    { path: 'side-planks', component: SidePlanksComponent },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: true})
    ],
         exports: [RouterModule]
    })

    export class AppRoutingModule {

    }
