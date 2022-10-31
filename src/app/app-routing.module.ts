import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'characters',
    loadChildren: () => import('./characters/characters.module').then( m => m.CharactersPageModule)
  },
  {
    path: 'moments',
    loadChildren: () => import('./moments/moments.module').then( m => m.MomentsPageModule)
  },
  {
    path: 'about-it',
    loadChildren: () => import('./about-it/about-it.module').then( m => m.AboutItPageModule)
  },
  {
    path: 'in-life',
    loadChildren: () => import('./in-life/in-life.module').then( m => m.InLifePageModule)
  },
  {
    path: 'hire-me',
    loadChildren: () => import('./hire-me/hire-me.module').then( m => m.HireMePageModule)
  },
  {
    path: 'view1',
    loadChildren: () => import('./view1/view1.module').then( m => m.View1PageModule)
  },
  {
    path: 'view2',
    loadChildren: () => import('./view2/view2.module').then( m => m.View2PageModule)
  },
  {
    path: 'view3',
    loadChildren: () => import('./view3/view3.module').then( m => m.View3PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
