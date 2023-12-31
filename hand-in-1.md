# Credit Card Management System
## SWAFE 2023 – Hand in 1
## Introduction
We have been contacted by a new client who runs a consultant business. Each of their consultants has a company credit card, and they want to keep track of expenses for each credit card. They have drafted with a requirement specification for a credit card management system.

The solution will provide the accounting department with an overview of use for each credit card. Accountants can add new credit cards and remove them when after they have expired or is lost. It will also be possible to check transaction details for each credit card, as well as searching in transactions across all registered cards.

# Requirement specification
## Functional requirements
`F0` Application skeleton
- [x] `F0.1` Skeleton shall contain a navigation bar
- [x] `F0.1.1` Navigation bar shall contain links for navigation to Add credit card screen 
- [x] `F0.1.2` Navigation bar shall contain a link for navigation to Transactions screen
- [x] `F0.1.3` Navigation bar shall contain a link for navigation to Home screen

`F1` Home screen
- [x] `F1.1`: Screen shall contain a list of credit cards

`F2` Credit card list
- [x] `F2.1`: List shall contain an element for each credit card
- [x] `F2.1.1`: List item shall contain properties `card_number`, `cardholder_name`, `issuer`
- [x] `F2.1.2`: Navigate to a credit card details screen when an entry is clicked/pressed

`F3` Credit card details screen
- [x] `F3.1` Screen shall contain elements displaying the following credit card properties: `card_number`, `cardholder_name`, `csc_code`, `expiration_date_month`, `expiration_date_year`, `issuer`
- [x] `F3.2` Screen shall contain the option to remove the credit card
- [x] `F3.3` Screen shall contain a list of transactions for the credit card

`F4` Add credit card screen
- [x] `F4.1` Form that contains fields for `card_number`, `cardholder_name`, `csc_code`, `expiration_date_month`, `expiration_date_year`, `issuer`
- [x] `F4.1.1` Field `card_number` only accepts numbers (integers)
- [x] `F4.1.2` Field `card_number` length must be `7-16` digits
- [x] `F4.1.3` Field `card_number` is required
- [x] `F4.2.1` Field `csc_code` only accepts numbers (integers)
- [x] `F4.2.2` Field `csc_code` length must be `3` digits (integers)
- [x] `F4.2.4` Field `csc_code` is required
- [x] `F4.3.1` Field `cardholder_name` is required
- [x] `F4.4.1` Field `expiration_date_month` must be in range `1-12`
- [x] `F4.4.2` Field `expiration_date_month` is required
- [x] `F4.5.1` Field `expiration_date_year` is required

`F5` Transactions screen
- [x] `F5.1` Screen shall show a list of all transactions registered in the system
- [x] `F5.1.2` Screen shall present the option to add a transaction to the transaction list
- [x] `F5.1.3` Screen shall present the option to filter transactions
- [x] `F5.1.4` Screen shall provide filtering based on `card_number` 

`F6` Transactions list
- [x] `F6.1.1` Each transaction shall display properties `credit_card`, `amount`, `currency`, `comment`, `date`
- [x] `F6.1.2` Field `credit_card` shall be selected from a list of credit cards
- [x] `F6.1.3` Field `amount` must be a `number`
- [x] `F6.1.4` Field `amount` is required
- [x] `F6.1.5` Field `currency` is required
- [x] `F6.1.6` Field `date` is required
- [x] `F6.1.7` Each transaction shall present the option to remove itself

## Design requirements 
Futhermore, the solution must include the following:
- [x] The solution shall be implemented using the lastest major release of the Angular development platform<sup>(<a href="https://github.com/angular/angular/releases">GitHub</a>)</sup>
- [x] At least one module must be lazy-loaded<sup>(<a href="https://angular.io/guide/lazy-loading-ngmodules">docs</a>)</sup>
- [x] The application must implement at least one custom pipe <sup>(<a href="https://angular.io/guide/pipes#creating-pipes-for-custom-data-transformations">docs</a>)</sup> _Hint: Obvious candidates could be expiration date_
- [x] At least one module must contain a routing module<sup>(<a href="https://angular.io/guide/lazy-loading-ngmodules">docs</a>)</sup>
- [x] At least one component must be standalone<sup>(<a href="https://angular.io/guide/standalone-components">docs</a>)</sup>
- [x] The application must be seeded with data from the server found @ `hand-in/credit-card-server`

# Credit card server documentation
**Installation** 
1. Run `npm install` in `hand-in/credit-card-server`
2. Run `npm start` in `hand-in/credit-card-server`

The server is running @ http://localhost:3000

**Available endpoint**
- [x] `GET /cards`—returns an array of credit cards
- [x] `GET /cards/:card_number`—returns credit card with `card_number`
- [x] `POST /cards`—creates a credit card
- [x] `DELETE /cards/:card_number`–deletes a credit card
- [x] `GET /transactions`—returns an array of transactions
- [x] `POST /transactions`—creates a transaction
- [x] `DELETE /transactions/:transaction_uid`–deletes a transaction

# Internal notes
Our Senior Vice Principal Software Engineering Architect has chosen Angular to be used as the frontend framework. They have defined a proposal for an initial architecture. _Note: that some details is left out for the developer teams to decide. The list is not complete_

**Angular Artifact Checklist**
- Modules
  - [x] `AppModule`
    - [x] `HomeComponent`
    - [x] `NavigationBarComponent`
  - [x] `CreditCardModule`
    - [x] `CreditCardListComponent`
  - [x] `TransactionModule`
    - [x] `TransactionOverviewComponent`
    - [x] `TransactionAddComponent`
- Standalone components
  - [x] `TransactionListComponent`
  - [x] `CreditCardAddComponent`
- Services
  - [x] `CreditCardService`
  - [x] `TransactionService`

## Formalia

- Group size: 1-4 people
- Deadline: 16th October 2023 (2022-10-16)

## Submission

Before submitting your solution, do the following:

1. Delete the `node_modules` folder in the workspace root folder
2. Add a file `participants.txt` and insert a new line for each participant with the student number and name of each member separated by whitespace
3. Add `participants.txt` to the root folder of your application
4. Archive and compress you application using one the following formats: `zip`. All other formats (`rar`, `7z`, etc.) will result in a request for resubmission
5. The filename should be named `Group<no>.zip` _Example: `Group01.zip`_
6. And you are ready to upload it to Brightspace

Example `participants.txt` contents:
```
202101234 Alice Alison
202109876 Bob Bobson
```
