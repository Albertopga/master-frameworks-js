// importar los modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importar los componentes a los cuales les quiero hacer una página para ellos ( blog, contacto...)
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';
import { ArticleComponent } from './components/article/article.component';

// definir array de rutas
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'blog/articulo/:id', component: ArticleComponent },
    { path: 'peliculas', component: PeliculasComponent },
    { path: 'formulario', component: FormularioComponent },
    { path: 'pagina-de-pruebas', component: PaginaComponent },
    // de este modo hago que el parametro sea opcional, puesto que hay dos definiciones de la ruta
    { path: 'pagina-de-pruebas/:nombre/:apellido', component: PaginaComponent },
    { path: '**', component: ErrorComponent }

]

// exportamos el modulo de rutas para poder usarlo en otros modulos
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);