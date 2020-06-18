import {Given, Then} from 'cucumber'

 Given('I enter Porsche ID {string}', (email: string) => {
           console.log("My Email: " + email);
         });

 Given('I enter password {string}', (password: string) => {
           console.log("Password: " + password);
         });

 Then('I should be logged', () => {
           console.log("I am logged: ");
         });


