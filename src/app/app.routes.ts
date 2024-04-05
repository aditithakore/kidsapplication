import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },

  {
    path: 'alphabets',
    loadComponent: () => import('./alphabets/alphabets.page').then( m => m.AlphabetsPage)
  },
  {
    path: 'number',
    loadComponent: () => import('./number/number.page').then( m => m.NumberPage)
  },
  {
    path: 'shapes',
    loadComponent: () => import('./shapes/shapes.page').then( m => m.ShapesPage)
  },
  {
    path: 'quiz',
    loadComponent: () => import('./quiz/quiz.page').then( m => m.QuizPage)
  },
  {
    path: 'colors',
    loadComponent: () => import('./colors/colors.page').then( m => m.ColorsPage)
  },
];
