import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AdminComponent } from './admin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;


  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule]
    });

    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
  });

  fit('Frontend_should_create_Admin_Component', () => {
    expect(component).toBeTruthy();
  });
});
