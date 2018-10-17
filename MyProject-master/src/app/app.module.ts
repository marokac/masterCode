import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
 import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './Header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { LoginComponent} from './Login/login.component';
import {RegisterComponent} from './Register/register.component';
import {ServiceComponent} from './Login/server.service';
import {HttpModule} from '@angular/http';
import {RegistrationService} from './Register/RegistrationService';
import {RouterModule, Routes} from '@angular/router';
import {CheckoutComponent} from './Payment/Checkout/checkout.component';
import {CheckOutComponent} from './Payment/Checkout/service.component';
import {GetServiceFromSpring} from './Services/getServiceFromSpring';
import {GetProductsComponent} from './getProducts/getProducts.component';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { KidsComponent } from './kids/kids.component';
import { MenComponent } from './men/men.component';
// import { ModelComponent } from './model/model.component';
import { PaymentsComponent } from './payments/payments.component';
import { WomenComponent } from './women/women.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ListAllUsersComponent } from './list-all-users/list-all-users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { HttpClientModule} from '@angular/common/http';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { UpoladfileComponent } from './upoladfile/upoladfile.component';
import { CustomerComponent } from './customer/customer.component';
import {AgmCoreModule} from '@agm/core';
import { MapComponent } from './map/map.component';
import { UploadfiletospringComponent } from './uploadfiletospring/uploadfiletospring.component';
import { ListuploadedimagesComponent } from './listuploadedimages/listuploadedimages.component';
import { DetailsUploadComponent } from './details-upload/details-upload.component';
import { CentralizeHeaderComponent } from './centralize-header/centralize-header.component';
import { CartComponent } from './cart/cart.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { SubmitCodeComponent } from './submit-code/submit-code.component';
import { MaterialmoduleComponent } from './materialmodule/materialmodule.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavbarComponent } from './my-navbar/my-navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule,
  MatDialogModule
} from '@angular/material';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';
import {ToastaModule} from 'ngx-toasta';
import {ToasterService} from './Login/ToastService';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';
const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'men', component: MenComponent},
  { path: 'women', component: WomenComponent},
  { path: 'kids', component: KidsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'products', component: ViewProductComponent},
  {path: 'app-checkout', component: CheckoutComponent},
  {path: 'userDataBoard', component: UserDashboardComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'submitCode', component: SubmitCodeComponent},
  {path: 'app-my-navbar', component: MyNavbarComponent},
  {path: 'login', component: LoginComponent},
  {path: 'editUserComponent' , component: EditUserComponent},
  {path: 'app-addproduct', component: AddproductComponent},
  {path: 'pp-get-all-products', component: GetProductsComponent},
  {path: 'app-list-all-users', component: ListAllUsersComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailsComponent,
    RecipesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    LoginComponent,
    RegisterComponent,
    CheckoutComponent,
    GetProductsComponent,
    AboutComponent,
    AccountComponent,
    HomeComponent,
    KidsComponent,
    MenComponent,
   // ModelComponent,
    PaymentsComponent,
    WomenComponent,
    AddproductComponent,
    ListAllUsersComponent,
    AddUserComponent,
    EditUserComponent,
    ViewProductComponent,
    UpoladfileComponent,
    CustomerComponent,
    MapComponent,
    UploadfiletospringComponent,
    ListuploadedimagesComponent,
    DetailsUploadComponent,
    CentralizeHeaderComponent,
    CartComponent,
    UserDashboardComponent,
    SubmitCodeComponent,
    MaterialmoduleComponent,
    MyNavbarComponent,
    UpdateUserComponent,
    ViewcustomerComponent,
    DialogComponentComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    Ng2SmartTableModule,
    FlexLayoutModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
   ),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    ToastaModule.forRoot()
  ],
  providers: [ServiceComponent, RegistrationService, CheckOutComponent, GetServiceFromSpring, ToasterService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponentComponent]
})
export class AppModule { }
