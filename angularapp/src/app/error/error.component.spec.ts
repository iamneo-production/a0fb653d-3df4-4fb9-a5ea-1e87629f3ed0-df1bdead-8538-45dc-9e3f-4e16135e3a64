// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ActivatedRoute } from '@angular/router';
// import { ErrorComponent } from './error.component';

// describe('ErrorComponent', () => {
//   let component: ErrorComponent;
//   let fixture: ComponentFixture<ErrorComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [ErrorComponent],
//       providers: [
//         {
//           provide: ActivatedRoute,
//           useValue: {
//             snapshot: {
//               data: {
//                 message: 'Test Error Message'
//               }
//             }
//           }
//         }
//       ]
//     });

//     fixture = TestBed.createComponent(ErrorComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   fit('Week4_Day2_should create the error component', () => {
//     expect(component).toBeTruthy();
//   });

//   fit('Week4_Day2_should display the error message on error page for invalid navigation', () => {
//     const errorMessageElement: HTMLElement = fixture.nativeElement.querySelector('p');
//     expect(errorMessageElement.textContent).toContain('Test Error Message');
//   });
// });
