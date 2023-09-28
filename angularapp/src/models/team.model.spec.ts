import { Team } from './team.model';

describe('Team Models', () => {
  fit('Frontend_should_create_Team_instance', () => {
    const team: Team = {
      name: 'Team A',
      maximumBudget: 1000000
    };
    expect(team).toBeTruthy();
    expect(team.name).toBe('Team A');
    expect(team.maximumBudget).toBe(1000000);
  });

  // it('Week4_Day3_should_create_Team_instance_with_default_values', () => {
  //   const team: Team = {
  //     name: 'Team B',
  //     maximumBudget: 2000000
  //   };
  //   expect(team).toBeTruthy();
  //   expect(team.name).toBe('Team B');
  //   expect(team.maximumBudget).toBe(2000000);
  // });
});
