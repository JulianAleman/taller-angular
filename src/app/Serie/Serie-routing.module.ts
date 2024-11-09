import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SerieDetailComponent } from './Serie-detail/Serie-detail.component';
import { SerieListComponent } from './Serie-list/Serie-list.component';

const routes: Routes=[
    {
        path:'list',
        component: SerieListComponent
    },
    {
        path: ':id',
        component: SerieDetailComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AsesorRoutingModule{}