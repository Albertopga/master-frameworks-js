// importar los modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importar los componentes a los cuales les quiero hacer una página para ellos ( blog, contacto...)
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PaginaComponent } from './components/pagina/pagina.component';

// definir array de rutas
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'peliculas', component: PeliculasComponent },
    { path: 'formulario', component: FormularioComponent },
    { path: 'pagina-de-pruebas', component: PaginaComponent }

]

// exportamos el modulo de rutas para poder usarlo en otros modulos
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);