import { UserService } from "src/user/user.service";
import { LoginUserUsecaseInput } from "./inputs/login-user-usecase.input";
import { UserNotFoundException } from "../exceptions/UserNotFound.exception";
import * as bcrypt from "bcryptjs";
import { InvalidPasswordException } from "../exceptions/InvalidPassword.exception";
import { AuthService } from "../auth.service";
import { Injectable } from "@nestjs/common";


@Injectable()
export class LoginUserUseCase{
    constructor(
        private userService: UserService,
        private authService: AuthService,
    ){}

    async excute(input: LoginUserUsecaseInput){
        //Find The User By Email
        const user = await this.userService.findByEmail(input.email);
        if(!user){
            return new UserNotFoundException();
        }
        //Verify The Password
        const isPasswordValid = await bcrypt.compare(input.password, user.password);
        if(!isPasswordValid){
            return new InvalidPasswordException();
        }

        
        return this.authService.login(user);

    }


}