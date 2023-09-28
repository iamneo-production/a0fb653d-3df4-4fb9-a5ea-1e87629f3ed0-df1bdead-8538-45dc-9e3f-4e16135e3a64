import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrganizerComponent } from './organizer.component';
import { HttpClientModule } from '@angular/common/http';

describe('OrganizerComponent', () => {
  let component: OrganizerComponent;
  let fixture: ComponentFixture<OrganizerComponent>;


  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [OrganizerComponent],
      // providers: [{ provide: OrganizerService, useValue: mockOrganizerService }],
    });

    fixture = TestBed.createComponent(OrganizerComponent);
    component = fixture.componentInstance;
  });

  fit('Frontend_should_create_the_OrganizerComponent', () => {
    expect(component).toBeTruthy();
  });
});
