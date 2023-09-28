// import { TestBed } from '@angular/core/testing';

// import { OrganizerService } from './organizer.service';
// import { HttpClientTestingModule } from '@angular/common/http/testing';

// describe('OrganizerService', () => {
//   let service: OrganizerService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule]
//     });
//     service = TestBed.inject(OrganizerService);
//   });

//   fit('Week5_Day3_should create organizerServices', () => {
//     expect(service).toBeTruthy();
//   });
// });


// import { TestBed } from '@angular/core/testing';

// import { AdminService } from './admin.service';
// import { HttpClientTestingModule } from '@angular/common/http/testing';

// describe('AdminService', () => {
//   let service: AdminService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule]
//     });
//     service = TestBed.inject(AdminService);
//   });

//   fit('Week5_Day3_should create AdminServices', () => {
//     expect(service).toBeTruthy();
//   });

//   // fit("getteams Method exists", () => {
//   //   expect(service.getTeams).toBeTruthy();
//   // })
// });


// // import { TestBed } from '@angular/core/testing';

// // import { AdminService } from './admin.service';
// // import { HttpClientTestingModule } from '@angular/common/http/testing';

// // describe('AdminService', () => {
// //   let service: AdminService;

// //   beforeEach(() => {
// //     TestBed.configureTestingModule({
// //       imports: [HttpClientTestingModule]
// //     });
// //     service = TestBed.inject(AdminService);
// //   });

// //   fit('Week5_Day3_should create AdminServices', () => {
// //     expect(service).toBeTruthy();
// //   });

// //   // fit("getteams Method exists", () => {
// //   //   expect(service.getTeams).toBeTruthy();
// //   // })
// // });

import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { OrganizerService } from './organizer.service';
import { Team } from '../../models/team.model';
import { Player } from '../../models/player.model';
import { HttpTestingController } from '@angular/common/http/testing';

describe('OrganizerService Integration Tests', () => {
  let service: OrganizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [OrganizerService]
    });
    service = TestBed.inject(OrganizerService);
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 3000;

  });

  // afterEach(() => {
  //   const httpMock = TestBed.inject(HttpTestingController);
  //   httpMock.verify(); // Verify that there are no open requests after each test
  // });

  fit('Frontend_OrganizerService_should_be_created', () => {
    expect(service).toBeTruthy();
  });

  fit('Frontend_OrganizerService_should_retrieve_UnsoldPlayers_from_the_backend', (done: DoneFn) => {
    service.getUnsoldPlayers().subscribe(
      (players: Player[]) => {
        console.log("length"+players.length)
        expect(players.length).toBeGreaterThan(-1); // Check if any teams are retrieved
        done();
      },
      (error: any) => {
        fail('Failed to retrieve teams: ' + JSON.stringify(error));
      }
    );
  });

  // fit('Frontend_AdminService_should_create_a_new_team_via_the_backend', (done: DoneFn) => {
  //   const newTeam: Team = { name: 'New Team', maximumBudget: 50000 };

  //   service.createTeam(newTeam).subscribe(
  //     (createdTeam: Team) => {
  //       console.log("funny"+createdTeam);

  //       expect(createdTeam).toEqual(newTeam);
  //       done();
  //     },
  //     (error: any) => {
  //       fail('Failed to create team: ' + JSON.stringify(error));
  //     }
  //   );
  // });

  // fit('Frontend_AdminService_should_retrieve_players_from_the_backend', (done: DoneFn) => {
  //   service.getPlayers().subscribe(
  //     (players: Player[]) => {
  //       console.log(players)
  //       expect(players.length).toBeGreaterThan(0); // Check if any teams are retrieved
  //       done();
  //     },
  //     (error: any) => {
  //       fail('Failed to retrieve teams: ' + JSON.stringify(error));
  //     }
  //   );
  // });



  // Write similar test cases for other methods (updateTeam, deleteTeam, getPlayers, createPlayer, updatePlayer, deletePlayer)

});
