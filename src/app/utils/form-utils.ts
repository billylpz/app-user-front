import { AbstractControl, ValidationErrors } from "@angular/forms";

export class FormUtils {

    static cellphonePattern = '^[0-9]+$';

    //Recibe el objeto error de un formcontrol y devuelve su mensaje
    static getError(errors: ValidationErrors | null): string | null {
        if (errors == null) {
            return null;
        }

        for (const key of Object.keys(errors)) {
            switch (key) {
                case "required":
                    return "Este campo es requerido";
                case "minlength":
                    return `Mínimo de ${errors['minlength'].requiredLength} carácteres requeridos`;
                case "maxlength":
                    return `Máximo de ${errors['maxlength'].requiredLength} carácteres`;
                case "min":
                    return `El valor mínimo es ${errors['min'].min}`;
                case "max":
                    return `El valor máximo es ${errors['max'].max}`;
                case "pattern":
                    return "Solo se permiten números";

                default:
                    break;
            }
        }
        return null;
    }

    //Verifica si el control pasado por parámetro ha sido 'touched' y devuelve el mensaje de error
    static errorMessage(control: AbstractControl): string | null {
        const errors = control.errors;
        return control.touched ? FormUtils.getError(errors) : null;
    }
}