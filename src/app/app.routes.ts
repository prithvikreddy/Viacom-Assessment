import { Routes } from '@angular/router';
import { MTVcompComponent } from './mtvcomp/mtvcomp.component';
import { LogoTvCompComponent } from './logo-tv-comp/logo-tv-comp.component';
import { VH1CompComponent } from './vh1-comp/vh1-comp.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'mtv', pathMatch: 'full' },
  { path: 'mtv', component: MTVcompComponent },
  { path: 'logotv', component: LogoTvCompComponent },
  { path: 'vh1', component: VH1CompComponent },
  ];