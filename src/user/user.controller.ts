import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return 'it works';
  }

  @Get('/:username')
  findOne(@Param('username') username: string) {
    return this.userService.findOne(username);
  }

  @Get('/:username/:password')
  async findPassword(
    @Param('username') username: string,
    @Param('password') password: string,
  ) {
    const user = this.userService.findOneDto(username);
    if (user) {
      return this.userService.hashPassword(password, (await user).salt) === (await user).password;
    } else {
      return { error: 'User not found' };
    }
  }

  @Post()
  create(@Body() body) {
    return this.userService.create(body);
  }

  @Patch(':username')
  async update(@Param('username') username: string, @Body() body) {
    const updateUserDto = this.userService.create(body);
    return this.userService.update(username, await updateUserDto);
  }

  @Delete(':username')
  async remove(@Param('username') username: string) {
    this.userService.remove(username);
    return `Already remove the ${username}th record.`;
  }
}
