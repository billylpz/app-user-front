import { Component, input, OnInit } from '@angular/core';
import { FormUtils } from '../../utils/form-utils';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-error-label',
  templateUrl: './form-error-label.component.html',
  styleUrls: ['./form-error-label.component.css']
})
export class FormErrorLabelComponent {

  control = input.required<AbstractControl>();

  get errorMessage() {

    return FormUtils.errorMessage(this.control())
  }

}
