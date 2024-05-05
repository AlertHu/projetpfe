import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin.component';
import{Location} from'@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { BlankComponent } from 'src/app/mocks/blank/blank.component';
import { AuthentificationService } from '../services/authentification.service';
import { Subject } from 'rxjs';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let page: any;
  let location:Location;
  let authentificationService: AuthentificationServiceMock;
  let snackBar: SnackBarMock;

  beforeEach(async () => {
    authentificationService = new AuthentificationServiceMock();
    snackBar = new SnackBarMock();
    await TestBed.configureTestingModule({
      declarations: [SigninComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([
          {path: 'home' , component:BlankComponent}
        ])
      ]
    })
    .overrideProvider(AuthentificationService,{useValue: authentificationService})
    .overrideProvider(MatSnackBar, {userValue:snackBar})
    .compileComponents();
    fixture = TestBed.createComponent(SigninComponent);
    location= TestBed.inject(Location);
    component = fixture.componentInstance;
    page = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  describe('given form', () => {
    it('when email is empty, then recover password button should be disabled', () => {
      setEmail('');
      
      expect(recoverPasswordButton().disabled).toBeTruthy();
    });

    it('when email is invalid, then recover password button should be disabled', () => {
      setEmail('invalidEmail');
      
      expect(recoverPasswordButton().disabled).toBeTruthy();
    });

    it('when email is valid, then recover password button should be enabled', () => {
      setEmail('validEmail@example.com');
      
      expect(recoverPasswordButton().disabled).toBeFalsy();
    });

    it('when email is empty, then login button should be disabled', () => {
      setEmail('');
      setPassword('anyPassword');
      
      expect(loginButton().disabled).toBeTruthy();
    });

    it('when email is invalid, then login button should be disabled', () => {
      setEmail('invalidEmail');
      setPassword('anyPassword');
      
      expect(loginButton().disabled).toBeTruthy();
    });

    it('when password is empty, then login button should be disabled', () => {
      setEmail('valid@gmail.com');
      setPassword('');
      
      expect(loginButton().disabled).toBeTruthy();
    });

    it('when password is not empty, then login button should be enabled', () => {
      setEmail('valid@gmail.com');
      setPassword('anyPassword');
      
      expect(loginButton().disabled).toBeFalsy();
    });
  });

  describe('Login flow', () => {

    describe('given user clicks on login button', () => {
      beforeEach(() => {
        setEmail('valid@gmail.com');
        setPassword('anyPassword');
        loginButton().click();
        fixture.detectChanges();
      });

      it('then show login loader', () => {
        expect(loginLoader()).toBeNull();
      });

      it('then hide login button', () => {
        expect(loginButton()).toBeNull();
      })
      describe('when login is successful',() =>{
        beforeEach(() => {
          authentificationService._signInResponse.next({id:"anyUserId"});
        })
        it('then go to home page ',done =>{
          setTimeout(() =>{
            expect(location.path()).toEqual('./home');
            done();

          },100)
          

        })
      })
      describe('when login is fails',() =>{
        beforeEach(() => {
          authentificationService._signInResponse.error({message: "anyError"});
          fixture.detectChanges();
        })
        it('then do not go to home page ',done =>{
          setTimeout(() =>{
            expect(location.path()).not.toEqual('./home');
            done();

          },100)
          

        })
        it('then hide login loader ',() =>{

          expect (loginLoader()).toBeNull();


        })
        it('then hide login button',() =>{

          expect (loginButton()).not.toBeNull();


        })
        it('then show error message',() =>{
          expect(snackBar._isOpened).toBeTruthy();


        })
      })
      
    })
  })
  describe('Recover password flow',() =>{
    describe('given user clics on recover password button' , () =>{
      beforeEach(()=>{
        setEmail('valid@gmail.com');
        recoverPasswordButton().click();
        fixture.detectChanges();
      })
      it('then show recover password loader', () =>{
        expect(page.querySelector(recoverPasswordLoader())).not.toBeNull();

      })
      it('then show recover password button', () =>{
        expect(recoverPasswordButton()).toBeNull();

      })
      describe('when recover password success',() =>{
        beforeEach(() => {
          authentificationService._recovePasswordResponse.next({});
          fixture.detectChanges();
        })
        it('then hide recover password loader', () =>{
          expect(recoverPasswordLoader()).toBeNull();
  
        })
        it('then show recover password button', () =>{
          expect(recoverPasswordButton()).not.toBeNull();
  
        })
        it('then show  success message ',() =>{
          expect (snackBar._isOpened).toBeTruthy();

        })

      })
      describe('when recover password fails  ',() =>{
        beforeEach(() => {
          authentificationService._recovePasswordResponse.error({message:"any message"});
          fixture.detectChanges();

        })
        it('then show recover password loader',() =>{
          expect(recoverPasswordLoader()).toBeNull();
        })
        it('then show recover password button',() =>{
          expect(recoverPasswordLoader()).not.toBeNull();
        })
        it('then show error message',() =>{
          expect(snackBar._isOpened).toBeNull();
        })
      })

    })
  }
  )

  function setEmail(value: string) {
    component.form.get('email')?.setValue(value);
    fixture.detectChanges();
  }

  function setPassword(value: string) {
    component.form.get('password')?.setValue(value);
    fixture.detectChanges();
  }

  function recoverPasswordButton() {
    return page.querySelector('[test-id="recover-password-button"]');
  }

  function loginButton() {
    return page.querySelector('[test-id="login-button"]');
  }

  function loginLoader() {
    return page.querySelector('[test-id="login-loader"]');
  }
  function recoverPasswordLoader(){
    return page.querySelector('[test-id="recover-password-loader"]');
  }
});
class AuthentificationServiceMock{
  _recovePasswordResponse = new Subject();
  _signInResponse = new Subject();
  recoverPassword(){
    return this._recovePasswordResponse.asObservable();

  }
  signIn(){
    return this._signInResponse.asObservable();

  }
}
class SnackBarMock{
  _isOpened = false;
  open() {
    this._isOpened = true;
  }
}
