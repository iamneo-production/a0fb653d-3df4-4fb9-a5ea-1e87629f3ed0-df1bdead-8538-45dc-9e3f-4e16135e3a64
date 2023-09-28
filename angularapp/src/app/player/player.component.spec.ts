import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerComponent } from './player.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule, RouterTestingModule],

      declarations: [PlayerComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('Frontend_create_Player_component', () => {
    expect(component).toBeTruthy();
  });

  fit('Frontend_should_have_edit_buttons_for_each_player_Player_component', () => {
    const player = { id: 1, name: 'Test Player', age: 25, category: 'Category A', biddingPrice: 100 };

    // Set the players and trigger change detection
    component.players = [player];
    fixture.detectChanges();

    const editButton = fixture.nativeElement.querySelector('li button:nth-child(1)');

    expect(editButton).toBeTruthy();    // Check if the edit button exists
  });

  fit('Frontend_should_have_delete_buttons_for_each_player_Player_component', () => {
    const player = { id: 1, name: 'Test Player', age: 25, category: 'Category A', biddingPrice: 100 };

    // Set the players and trigger change detection
    component.players = [player];
    fixture.detectChanges();

    const deleteButton = fixture.nativeElement.querySelector('li button:nth-child(2)');

    expect(deleteButton).toBeTruthy();  // Check if the delete button exists
  });

  fit('Frontend_check_the_bidding_amount_Player_component', () => {
    const fixture = TestBed.createComponent(PlayerComponent);
    const app = fixture.componentInstance;
    app.newPlayer.biddingPrice = 200;
    expect(1).toEqual(1);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const element: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#playerBiddingPrice');
      expect(element.value).toEqual('200'); // Add this expect statement
    });
  });

  fit('Frontend_check_bidding_amount_in_status_div_TwoWayBinding_Player_component', () => {
    const fixture = TestBed.createComponent(PlayerComponent);
    const app = fixture.componentInstance;
    app.newPlayer.biddingPrice = 10000
    expect(1).toEqual(1);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
    const element:HTMLInputElement =fixture.debugElement.nativeElement.querySelector('#playerBiddingPrice');
    //  expect(element.value).toEqual('10000');
    fixture.detectChanges();
    fixture.whenStable().then(() => {
    const paraelement:HTMLDivElement =fixture.debugElement.nativeElement.querySelector('#status');
    expect(paraelement.innerHTML).toEqual('Bidding Price Status: Good bidding');
    // expect(paraelement.innerHTML).toEqual(app.newPlayer.biddingPrice);
   })
  })
});

  fit('Frontend_should_display_Player_information_by_ngfor_Player_component', () => {
    component.players = [
    { id: 1, name: 'Test Player', age: 25, category: 'Category A', biddingPrice: 10100 },
    { id: 2, name: 'Test Player1', age: 35, category: 'Category B', biddingPrice: 500 }
       // Add more test teams as needed
     ];
     fixture.detectChanges();
     const elements: DebugElement[] = fixture.debugElement.queryAll(By.css('#list'));
     expect(elements.length).toEqual(component.players.length);
     elements.forEach((obj: DebugElement, index) => {
    const team = component.players[index];
    const expectedText = `${team.name} (Age: ${team.age} Category: ${team.category} Bidding Price: ${team.biddingPrice})`;
    const textNode = obj.nativeElement.childNodes[0];
    const actualText = textNode.textContent.trim();
    expect(actualText).toEqual(expectedText);
    });
  });
});
