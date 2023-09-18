import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TransactionAddComponent } from './transaction-add/transaction-add.component';
import { TransactionOverviewComponent } from './transaction-overview/transaction-overview.component';
import { TransactionRoutingModule } from './transaction-routing.module';

@NgModule({
  declarations: [TransactionOverviewComponent, TransactionAddComponent],
  imports: [CommonModule, TransactionRoutingModule],
})
export class TransactionModule {}
