import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MountainDetailComponent } from './mountain-detail/mountain-detail.component';
import { MountainEditComponent } from './mountain-edit/mountain-edit.component';
import { MountainNewComponent } from './mountain-new/mountain-new.component';

const routes: Routes = [
    {path: '',                    component: HomeComponent},
    {path: 'mountains/:id/new', component: MountainNewComponent},
    {path: 'mountains/:mountainId', component: MountainDetailComponent},
    {path: 'mountains/:id/edit', component: MountainEditComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ], 
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}
