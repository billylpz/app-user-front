import { UserService } from './../../../users/services/user.service';
import { AfterViewInit, Component, effect, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormUtils } from '../../../utils/form-utils';
import { FormErrorLabelComponent } from "../../../shared/form-error-label/form-error-label.component";
import { User } from '../../../users/interfaces/user.interface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  imports: [ReactiveFormsModule, FormErrorLabelComponent, RouterLink]
})
export class UserFormComponent  {
  @ViewChild('photoFile')
  photoFile!: ElementRef<HTMLInputElement>;

  fb = inject(FormBuilder);
  router = inject(Router);
  userService = inject(UserService);
  route = inject(ActivatedRoute);
  selectedFile: File | null = null;
  loading = signal<boolean>(false);
  isNewUser = signal<boolean>(true);


  effects = effect(() => {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get("id");
      if (idParam != null) {
        const id = +idParam;

        this.isNewUser.set(false)
        this.userService.findById(id).subscribe({
          next: (response) => {
            this.myForm.patchValue(response)
          },
          error: (e) => {
            console.log(e);
          }
        });
      }
    });
  });


  myForm = this.fb.group({
    id: [0],
    name: ['', [Validators.required, Validators.minLength(3)]],
    lastname: ['', [Validators.required]],
    email: ['', [Validators.required]],
    cellphone: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(20), Validators.pattern(FormUtils.cellphonePattern)]],
    age: [1, [Validators.required, Validators.min(0)]],
  });


  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;


    if (input.files && input.files.length > 0) {
      if (!input.files[0].type.includes('image')) {
        alert("Solo se permite archivos de tipo imagen");
        // this.photoFile.nativeElement.value = '';
        input.value=''
        this.selectedFile = null;
        return;
      }

      this.selectedFile = input.files[0];
    }
  }

  onSubmit() {
    this.myForm.markAllAsTouched();

    if (this.myForm.invalid) return;

    const user = this.myForm.value as User;

    this.loading.set(true);

    const request = user.id > 0
      ? this.userService.update(user, this.selectedFile)
      : this.userService.save(user, this.selectedFile);

    request.subscribe({
      next: () => {
        this.loading.set(false);
        this.router.navigate(["users"]);
      },
      error: (err) => {
        this.loading.set(false);
        console.log(err);
      }
    });
  }

}
