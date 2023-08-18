// import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
// import { fromEvent } from 'rxjs';
// import { debounceTime, map } from 'rxjs/operators';

// @Component({
//   selector: 'app-root',
//   template: `
//     <input #searchInput type="text" />
//   `,
// })
// export class AppComponent implements AfterViewInit {
//   @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

//   ngAfterViewInit() {
//     const inputObservable = fromEvent(this.searchInput.nativeElement, 'input');

//     inputObservable.pipe(
//       map((event: Event) => (event.target as HTMLInputElement).value),
//       debounceTime(300)
//     ).subscribe(value => console.log(value)); // Emits input value after 300ms of inactivity
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { switchMap } from 'rxjs/operators';
// import { of } from 'rxjs';

// interface User {
//   id: number;
//   username: string;
// }

// interface Profile {
//   userId: number;
//   firstName: string;
//   lastName: string;
// }

// interface Order {
//   userId: number;
//   id: number;
//   product: string;
// }

// @Component({
//   selector: 'app-root',
//   template: `
//     <h1>User Profile and Orders</h1>
//     <div *ngIf="user">
//       <h2>{{ user.username }}</h2>
//       <p>Name: {{ userProfile?.firstName }} {{ userProfile?.lastName }}</p>
//       <h3>Recent Orders:</h3>
//       <ul>
//         <li *ngFor="let order of recentOrders">{{ order.product }}</li>
//       </ul>
//     </div>
//     <div *ngIf="!user">
//       <p>Please log in</p>
//       <button (click)="login()">Log In</button>
//     </div>
//   `
// })
// export class AppComponent implements OnInit {
//   user: User | null = null;
//   userProfile: Profile | null = null;
//   recentOrders: Order[] = [];

//   constructor(private http: HttpClient) {}

//   ngOnInit() {}

//   login() {
//     this.user = { id: 1, username: 'exampleuser' };

//     // Simulate fetching profile and orders after successful login
//     this.fetchUserProfileAndOrders(this.user.id).subscribe(
//       (result) => {
//         this.userProfile = result.profile;
//         this.recentOrders = result.orders;
//       }
//     );
//   }

//   fetchUserProfileAndOrders(userId: number) {
//     return of({ profile: this.fetchUserProfile(userId), orders: this.fetchRecentOrders(userId) }).pipe(
//       switchMap((result) => {
//         return of(result);
//       })
//     );
//   }

//   fetchUserProfile(userId: number): Profile {
//     return { userId: userId, firstName: 'John', lastName: 'Doe' };
//   }

//   fetchRecentOrders(userId: number): Order[] {
//     return [
//       { userId: userId, id: 1, product: 'Product A' },
//       { userId: userId, id: 2, product: 'Product B' },
//       { userId: userId, id: 3, product: 'Product C' }
//     ];
//   }
// }



// import { Component, AfterViewInit } from '@angular/core';
// import { combineLatest, interval } from 'rxjs';

// @Component({
//   selector: 'app-root',
//   template: ''
// })
// export class AppComponent implements AfterViewInit {

//   ngAfterViewInit() {
//     const source1 = interval(1000);
//     const source2 = interval(2000);

//     combineLatest(source1, source2).subscribe(([val1, val2]) =>
//       console.log(`Value 1: ${val1}, Value 2: ${val2}`)
//     );
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { mergeMap } from 'rxjs/operators';
// import { of } from 'rxjs';

// interface User {
//   id: number;
//   username: string;
// }

// interface Profile {
//   userId: number;
//   firstName: string;
//   lastName: string;
// }

// interface Order {
//   userId: number;
//   id: number;
//   product: string;
// }

// @Component({
//   selector: 'app-root',
//   template: `
//     <h1>User Profile and Orders</h1>
//     <div *ngIf="user">
//       <h2>{{ user.username }}</h2>
//       <p>Name: {{ userProfile?.firstName }} {{ userProfile?.lastName }}</p>
//       <h3>Recent Orders:</h3>
//       <ul>
//         <li *ngFor="let order of recentOrders">{{ order.product }}</li>
//       </ul>
//     </div>
//     <div *ngIf="!user">
//       <p>Please log in</p>
//       <button (click)="login()">Log In</button>
//     </div>
//   `
// })
// export class AppComponent implements OnInit {
//   user: User | null = null;
//   userProfile: Profile | null = null;
//   recentOrders: Order[] = [];

//   constructor(private http: HttpClient) {}

//   ngOnInit() {}

//   login() {
//     this.user = { id: 1, username: 'exampleuser' };

//     // Simulate fetching profile and orders after successful login
//     this.fetchUserProfileAndOrders(this.user.id).subscribe(
//       (result) => {
//         this.userProfile = result.profile;
//         this.recentOrders = result.orders;
//       }
//     );
//   }

//   fetchUserProfileAndOrders(userId: number) {
//     return of({ profile: this.fetchUserProfile(userId), orders: this.fetchRecentOrders(userId) }).pipe(
//       mergeMap((result) => {
//         return of(result);
//       })
//     );
//   }

//   fetchUserProfile(userId: number): Profile {
//     return { userId: userId, firstName: 'John', lastName: 'Doe' };
//   }

//   fetchRecentOrders(userId: number): Order[] {
//     return [
//       { userId: userId, id: 1, product: 'Product A' },
//       { userId: userId, id: 2, product: 'Product B' },
//       { userId: userId, id: 3, product: 'Product C' }
//     ];
//   }
// }



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Quiz Scores</h1>
    <ul>
      <li *ngFor="let score of quizScores">{{ score }}</li>
    </ul>
    <p>Total Score: {{ totalScore }}</p>
  `
})
export class AppComponent implements OnInit {
  quizScores: number[] = [10, 8, 6, 9, 7];
  totalScore: number = 0;

  ngOnInit() {
    this.calculateTotalScore();
  }

  calculateTotalScore() {
    this.totalScore = this.quizScores.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }


}


