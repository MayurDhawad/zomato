import { Routes } from '@angular/router';
import { HomeComponent } from './components/layout/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { RestaurantItemsComponent } from './components/restaurant-items/restaurant-items.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';

export const routes: Routes = [
    {path: '', redirectTo: '', pathMatch:'full'},
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'forgot-password', component: ForgotPasswordComponent},
    {path: 'category', component: CategoriesComponent},
    {path: 'restaurant/:categoryName', component: RestaurantItemsComponent},
    {path: 'order', component: CreateOrderComponent},
    {path: '**', component: PageNotFoundComponent}
];
