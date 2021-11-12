import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'fin',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'registro-admin',
    loadChildren: () => import('./pages/registro-admin/registro-admin.module').then( m => m.RegistroAdminPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./pages/tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'registro-admin2',
    loadChildren: () => import('./pages/registro-admin2/registro-admin2.module').then( m => m.RegistroAdmin2PageModule)
  },
  {
    path: 'cantidad-de-libros',
    loadChildren: () => import('./pages/cantidad-de-libros/cantidad-de-libros.module').then( m => m.CantidadDeLibrosPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'registro-user',
    loadChildren: () => import('./pages/registro-user/registro-user.module').then( m => m.RegistroUserPageModule)
  },
  {
    path: 'registro-bibliotecario',
    loadChildren: () => import('./pages/registro-bibliotecario/registro-bibliotecario.module').then( m => m.RegistroBibliotecarioPageModule)
  },
  {
    path: 'update-admin',
    loadChildren: () => import('./pages/update-admin/update-admin.module').then( m => m.UpdateAdminPageModule)
  },
  {
    path: 'nuevo-libro',
    loadChildren: () => import('./pages/nuevo-libro/nuevo-libro.module').then( m => m.NuevoLibroPageModule)
  },
  {
    path: 'update-biblioteca',
    loadChildren: () => import('./pages/update-biblioteca/update-biblioteca.module').then( m => m.UpdateBibliotecaPageModule)
  },
  {
    path: 'menuadmin',
    loadChildren: () => import('./pages/menuadmin/menuadmin.module').then( m => m.MenuadminPageModule)
  },
  {
    path: 'menu-bibliotecario',
    loadChildren: () => import('./pages/menu-bibliotecario/menu-bibliotecario.module').then( m => m.MenuBibliotecarioPageModule)
  },
  {
    path: 'menu-user',
    loadChildren: () => import('./pages/menu-user/menu-user.module').then( m => m.MenuUserPageModule)
  },
  {
    path: 'prestamo',
    loadChildren: () => import('./pages/prestamo/prestamo.module').then( m => m.PrestamoPageModule)
  },
  {
    path: 'devolucion',
    loadChildren: () => import('./pages/devolucion/devolucion.module').then( m => m.DevolucionPageModule)
  },
  {
    path: 'deletebook',
    loadChildren: () => import('./pages/deletebook/deletebook.module').then( m => m.DeletebookPageModule)
  },
  {
    path: 'show-books',
    loadChildren: () => import('./pages/show-books/show-books.module').then( m => m.ShowBooksPageModule)
  },
  {
    path: 'ver-prestamos',
    loadChildren: () => import('./pages/ver-prestamos/ver-prestamos.module').then( m => m.VerPrestamosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
