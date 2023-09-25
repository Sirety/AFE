import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CreditCardDetailsComponent } from './credit-card/credit-card-details/credit-card-details.component';
import { CreditCardListComponent } from './credit-card/credit-card-list/credit-card-list.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TransactionAddComponent } from './transaction/transaction-add/transaction-add.component';
import { TransactionOverviewComponent } from './transaction/transaction-overview/transaction-overview.component';
import { TransactionModule } from './transaction/transaction.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    //Overview of the credit cards in a list
    path: 'creditcard',
    component: CreditCardListComponent,
  },
  {
    //details of a specific credit card
    path: 'creditcard/:card_number',
    component: CreditCardDetailsComponent,
  },
  {
    //form to add a new credit card
    path: 'creditcard/add',
    component: CreditCardListComponent, //TODO: change to CreditCardAddComponent
  },
  {
    //Transaction screen
    path: 'transaction',
    component: TransactionModule,
  },
  {
    //Transaction add screen
    path: 'transaction/add',
    component: TransactionAddComponent,
  },
  {
    //Transaction overview screen
    path: 'transaction/:id',
    component: TransactionOverviewComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
