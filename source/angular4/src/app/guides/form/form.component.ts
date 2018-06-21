import { Component, OnInit, Inject } from '@angular/core';

import { UserVo } from '../../vo/user-vo';
import { SignVo } from '../../vo/sign-vo';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  name: string;
  user: UserVo;
  signInfo: SignVo;

  constructor( @Inject(FormBuilder) private fb) {
    console.log(this.fb);
    this.createForm();
  }

  ngOnInit() {
    this.name = 'angular4';
    this.user = new UserVo();
    this.user.name = 'Angular';
    this.user.age = 10;
    this.signInfo = new SignVo();
  }

  onClickHandler(event) {
    console.log('FormComponent -> onClickHandler', event);
  }

  onKeyUpHandler(event) {
    console.log('FormComponent -> onKeyUpHandler', event);
  }

  onKeyUpEnterHandler(event) {
    console.log('FormComponent -> onKeyUpEnterHandler', event);
  }

  onFocusHandler(event) {
    console.log('FormComponent -> onFocusHandler', event);
  }

  onBlurHandler(event) {
    console.log('FormComponent -> onBlurHandler', event);
  }

  onKeyDownHandler(event, value, target) {
    console.log('FormComponent -> onKeyDownHandler', event, value, target);
    console.log(target.value)
  }

  onSignFormSubmit() {
    console.log('FormComponent -> onSignFormSubmit', event, this.signInfo);
  }

  userForm: FormGroup;
  states: Array<any>;
  currentState: any;

  createForm() {
    this.states = [
      { value: 1, text: '一' },
      { value: 2, text: '二' },
      { value: 3, text: '三' }
    ];
    this.currentState = 2;
    // phone
    // /^(1[3578][0-9]{9}|(\\d{3,4}-)\\d{7,8}(-\\d{1,4})?)$/
    // password
    // /^[\s\S]{6,20}$/
    //identifyingCode
    // /^\d{6}$/
    // username
    // /^[^-!$%^&*()_+|~=`{}\[\]:/;<>?,.@#'"\\]{5,20}$/
    // };
    // email
    // /^[^@\s]+@(?:[^@\s.]+)(?:\.[^@\s.]+)+$/
    // emailOrPhone
    // /^[^@\s]+@(?:[^@\s.]+)(?:\.[^@\s.]+)+$/.test(value) || /^(1[3578][0-9]{9}|(\\d{3,4}-)\\d{7,8}(-\\d{1,4})?)$/
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+_]+@[a-z0-9.-]+')]],
      street: '',
      city: '',
      state: '',
      zip: '',
      power: '',
      sidekick: true
    });
  }

  onUserFormSubmit() {
    console.log('FormComponent -> onUserFormSubmit', event, this.userForm.value);
  }

}
