import { Routes, RouterModule } from '@angular/router';
import {GalerieComponent} from './galerie/galerie.component';
import {LoginComponent} from './login/login.component';
import {ImageUploadComponent} from './image-upload/image-upload.component';

const APP_ROUTES: Routes = [
  { path: '', component: GalerieComponent },
  {path: 'login', component: LoginComponent},
  {path: 'upload', component: ImageUploadComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
