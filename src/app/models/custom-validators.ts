import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { UserServiceService } from "../services/user-service.service";

export class CustomValidators {
   
    static userExist(userService : UserServiceService): AsyncValidatorFn{
        return (control: AbstractControl): Promise<{ [key: string]: any } | null> => {
            if (control.value == '') {
              return Promise.resolve(null)
            }
            else {
              return userService.getByUsername(control.value).toPromise().then(
                response =>{
                    return response ? { 'userExist': { value: control.value } } : null;
                })
            }                  
        }
    }
}