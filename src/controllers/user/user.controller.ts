import { Controller, Get, Param } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { UserDTO } from 'src/dto/UserDTO';
import { UserService } from 'src/services/user/user.service';

@Controller('user')
export class UserController {
  
  constructor(private readonly userService: UserService){}

  @Get()
  findAll() {      
      return this.userService.findUsers();        
  }
  
  @Get('/find')
  find(@Body() userDTO: UserDTO) {      
    console.log("Controller: " + JSON.stringify(userDTO));
      return this.userService.findByDto(userDTO);        
  }



  @Get(':name')
  findOne(@Param('name') name: string) {      
      return this.userService.findUser(name);        
  }

}
