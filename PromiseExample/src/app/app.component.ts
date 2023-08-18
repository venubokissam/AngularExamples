import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class Post {
  constructor(
    public userId: number,
    public id: string,
    public title: string,
    public body: string
  ) { }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  api: string = "https://jsonplaceholder.typicode.com/posts";
  data!: Post [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    const promise = new Promise<void>((resolve, reject) => {
      const apiURL = this.api;
      this.http
        .get<Post[]>(apiURL)
        .toPromise()
        .then((res: any) => {
          // Success
          this.data = res.map((res: any) => {
            return new Post(
              res.userId,
              res.id,
              res.title,
              res.body
            );
          });
          resolve();
        },
          err => {
            // Error
            reject(err);
          }
        );
    });
    return promise;
  }

}


// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

// class Post {
//   constructor(
//     public userId: number,
//     public id: string,
//     public title: string,
//     public body: string
//   ) { }
// }

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

// export class AppComponent implements OnInit {

//   api: string = "https://jsonplaceholder.typicode.com/posts";
//   data!: Observable<Post[]>;

//   constructor(private http: HttpClient) { }

//   ngOnInit() {
//     this.getPosts();
//   }

//   getPosts() {
//     const apiURL = this.api;
//     this.data = this.http.get<Post[]>(apiURL).pipe(
//       map((res: any) => {
//         return res.map((post: any) => {
//           return new Post(
//             post.userId,
//             post.id,
//             post.title,
//             post.body
//           );
//         });
//       })
//     );
//   }

// }
