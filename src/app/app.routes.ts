import { Routes } from '@angular/router';
import {Home} from './components/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'about',
    loadComponent: () => import('./components/about/about').then(m => m.About),
  },
  {
    path: 'tasks',
    loadChildren: () => import('./components/tasks-page/routes').then( m => m.TASKS_ROUTES )
  },
];
