import { ComponentFixture, TestBed, async, inject, TestBedStatic } from "@angular/core/testing";
import { Router } from "@angular/router";

import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "../app.component";
import { HomeComponent } from "../home/home.component";
import { Location } from "@angular/common";
import { AdminComponent } from "../admin/admin.component";
import { OrganizerComponent } from "../organizer/organizer.component";
import { LoginComponent } from "../login/login.component";
import { RegistrationComponent } from "../registration/registration.component";
import { ErrorComponent } from "../error/error.component";
// import { } from "./navbar/navbar.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { NavbarComponent } from "../navbar/navbar.component";

describe("App Routing",() => {
    let router: Router;
    let fixture: ComponentFixture<AppComponent>;
    let location: Location

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes(
                [
                  { path: '', component: HomeComponent },
                  { path: 'admin', component: AdminComponent },
                  { path: 'organizer', component: OrganizerComponent },
                  { path: 'login', component: LoginComponent },
                  { path: 'register', component: RegistrationComponent },
                  { path: 'error', component: ErrorComponent, data: { message: 'Oops! Something went wrong.' } },
                  { path: '**', redirectTo: '/error', pathMatch: 'full' },
                ]), HttpClientTestingModule
            ],
            declarations:[
                NavbarComponent,
                AppComponent,
                HomeComponent,
                AdminComponent,
                OrganizerComponent,
                LoginComponent,
                RegistrationComponent,
                ErrorComponent
            ]

        }).compileComponents();
    }));

    beforeEach(() => {
        router=TestBed.get(Router);
        location = TestBed.get(Location);
        router.initialNavigation();
        fixture = TestBed.createComponent(AppComponent)
    });

    // it('should navigate to home page by default', waitForAsync(()=>{
    //     fixture.detectChanges();
    //     fixture.whenStable().then(() => {
    //         expect(location.path()).toBe('/')
    //     })
    // }))

    fit('Frontend_should_route_to_home_page_by_default_app_routing', async () => {
      await router.initialNavigation();
      expect(location.path()).toBe('/');
    });

    fit('Frontend_should_route_to_admin_page_app_routing', async () => {
      await router.navigate(['/admin']);
      expect(location.path()).toBe('/admin');
    });

    fit('Frontend_should_route_to_organizer_page_app_routing', async () => {
      await router.navigate(['/organizer']);
      expect(location.path()).toBe('/organizer');
    });

    fit('Frontend_should_route_to_login_page_app_routing', async () => {
      await router.navigate(['/login']);
      expect(location.path()).toBe('/login');
    });

    fit('Frontend_should_route_to_register_page_app_routing', async () => {
      await router.navigate(['/register']);
      expect(location.path()).toBe('/register');
    });

    fit('Frontend_should_route_to_default_path_for_invalid_paths_app_routing', async () => {
        await router.navigate(['/invalid']);
        fixture.detectChanges();
        expect(location.path()).toBe('/error');
      });

})
