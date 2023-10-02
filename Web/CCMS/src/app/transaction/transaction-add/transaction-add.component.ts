import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreditCard } from 'src/app/credit-card/model';
import { CreditCardService } from 'src/app/services/credit-card.service';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from '../model';

@Component({
  selector: 'app-transaction-add',
  templateUrl: './transaction-add.component.html',
  styleUrls: ['./transaction-add.component.scss'],
})
export class TransactionAddComponent {
  transactionForm = this.fb.group({
    credit_card_number: ['', Validators.required],
    amount: [
      '',
      [Validators.required, Validators.pattern('^[0-9]+(.[0-9]{1,2})?$')],
    ],
    currency: ['', Validators.required],
    comment: [''],
    date: ['', Validators.required],
    uid: ['', Validators.required],
  });

  creditCards: CreditCard[] = [];

  constructor(
    private fb: FormBuilder,
    private transactionService: TransactionService,
    private creditCardService: CreditCardService
  ) {
    this.creditCardService.getCreditCards().subscribe((response) => {
      this.creditCards = response;
    });
  }
  formToTransaction(form: FormGroup, creditCards: CreditCard[]): Transaction {
    const transaction: Transaction = {
      credit_card:
        creditCards.find(
          (card) => card.card_number === Number(form.get('credit_card_number'))
        ) ?? creditCards[0],
      amount: Number(form.get('amount')),
      currency: form.get('currency')?.value,
      comment: form.get('comment')?.value,
      date: form.get('date')?.value,
      uid: form.get('uid')?.value,
    };

    return transaction;
  }

  onSubmit() {
    if (this.transactionForm.valid) {
      this.transactionService
        .postTransactions(
          this.formToTransaction(this.transactionForm, this.creditCards)
        )
        .subscribe((response) => {
          console.log('Transaction added:', response);
          // You might want to navigate or show a success message
        });
    }
  }
}
