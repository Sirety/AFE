import { Injectable } from '@angular/core';
import { BaseHttpClientService } from './base-http-client.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(base: BaseHttpClientService) {}
}
