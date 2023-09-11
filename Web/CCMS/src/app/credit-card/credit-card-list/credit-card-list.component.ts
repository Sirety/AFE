import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCardService } from 'src/app/services/credit-card.service';
import { CreditCard } from '../model';
CommonModule;
AsyncPipe;

@Component({
  selector: 'app-credit-card-list',
  templateUrl: './credit-card-list.component.html',
  styleUrls: ['./credit-card-list.component.scss'],
})
export class CreditCardListComponent implements OnInit {
  creditCards$: Observable<CreditCard[]> | null = null;
  constructor(CreditCardService: CreditCardService) {
    this.creditCards$ = CreditCardService.getCreditCards();
  }
  ngOnInit(): void {
    this.creditCards$ = this.creditCards$;
  }
}
