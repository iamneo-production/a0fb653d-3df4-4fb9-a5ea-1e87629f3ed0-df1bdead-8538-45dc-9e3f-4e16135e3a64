import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamComponent } from './team.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('TeamComponent', () => {
  let component: TeamComponent;
  let fixture: ComponentFixture<TeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule, RouterTestingModule],
      declarations: [TeamComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('Frontend_create_Team_Component', () => {
    expect(component).toBeTruthy();
  });

  fit('Frontend_should_have_edit_buttons_for_each_team_TeamComponent', () => {
    const team = { id: 1, name: 'Test Team', maximumBudget: 1000000 };

    // Set the teams and trigger change detection
    component.teams = [team];
    fixture.detectChanges();

    const editButton = fixture.nativeElement.querySelector('li button:nth-child(1)');

    expect(editButton).toBeTruthy();    // Check if the edit button exists
  });

  fit('Frontend_should_have_delete_buttons_for_each_team_TeamComponent', () => {
    const team = { id: 1, name: 'Test Team', maximumBudget: 1000000 };

    // Set the teams and trigger change detection
    component.teams = [team];
    fixture.detectChanges();

    const deleteButton = fixture.nativeElement.querySelector('li button:nth-child(2)');

    expect(deleteButton).toBeTruthy();  // Check if the delete button exists
  });

  fit('Frontend_check_the_Maximumbudget_amount_to_create_teams_TeamComponent', () => {
    const fixture = TestBed.createComponent(TeamComponent);
    const app = fixture.componentInstance;
    app.newTeam.maximumBudget = 2000;
    expect(1).toEqual(1);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const element: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#maximumBudget');
      expect(element.value).toEqual('2000'); // Add this expect statement
    });
  });

    fit('Frontend_check_MaxBudget_amount_in_status_div_to_create_teams_TeamComponent', () => {

        const fixture = TestBed.createComponent(TeamComponent);
              const app = fixture.componentInstance;
              app.newTeam.maximumBudget = 10000
              expect(1).toEqual(1);

              fixture.detectChanges();
              fixture.whenStable().then(() => {
               const element:HTMLInputElement =fixture.debugElement.nativeElement.querySelector('#maximumBudget');
              //  expect(element.value).toEqual('10000');
               fixture.detectChanges();
               fixture.whenStable().then(() => {
                const paraelement:HTMLDivElement =fixture.debugElement.nativeElement.querySelector('#status');
                expect(paraelement.innerHTML).toEqual('MaximumBudget Status: Good Budget');
                // expect(paraelement.innerHTML).toEqual(app.newPlayer.biddingPrice);
              })
              })
             });

fit('Frontend_should_display_team_information_by_ngfor_TeamComponent', () => {
  component.teams = [
    { name: 'Team A', maximumBudget: 1000 },
    // Add more test teams as needed
  ];
  fixture.detectChanges();
  const elements: DebugElement[] = fixture.debugElement.queryAll(By.css('#list'));
  expect(elements.length).toEqual(component.teams.length);

  elements.forEach((obj: DebugElement, index) => {
    const team = component.teams[index];
    const expectedText = `${team.name} (Budget: ${team.maximumBudget})`;

    const textNode = obj.nativeElement.childNodes[0];
    const actualText = textNode.textContent.trim();
    expect(actualText).toEqual(expectedText);
  });
});




  // it('should emit editTeamEvent when edit button is clicked', () => {
  //   const team = { id: 1, name: 'Team A', maximumBudget: 100 };
  //   spyOn(component.editTeamEvent, 'emit');

  //   component.onEditTeam(team);

  //   expect(component.editTeamEvent.emit).toHaveBeenCalledWith(team);
  // });

  // it('Week4_Day4_should emit deleteTeamEvent when delete button is clicked', () => {
  //   const teamId = 1;
  //   spyOn(component.deleteTeamEvent, 'emit');

  //   component.onDeleteTeam(teamId);

  //   expect(component.deleteTeamEvent.emit).toHaveBeenCalledWith(teamId);
  // });



  // Add more test cases for saveEditedTeamEvent, cancelEditTeamEvent, etc.
});
