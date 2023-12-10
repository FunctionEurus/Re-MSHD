import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
import * as crypto from 'crypto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  crypto = require('crypto');
  
  generateSalt() {
    return crypto.randomBytes(16).toString('hex');
  }

  hashPassword(password, salt) {
    return crypto
      .pbkdf2Sync(password, salt, 10000, 64, 'sha512')
      .toString('hex');
  }

  async findOne(username: string) {
    const user = await this.userRepository.findOne({
      where: { username: username },
    });
    return user;
  }

  async create(body: JSON) {
    const user = new CreateUserDto();
    const salt = this.generateSalt();
    const hashedPassword = this.hashPassword(body['password'], salt);

    user.username = body['username'];
    user.password = hashedPassword;
    user.email = body['email'];
    user.salt = salt;

    return this.userRepository.save(user);
  }

  async update(username: string, updateUserDto: CreateUserDto) {
    const user = this.findOne(username);
    (await user).password = updateUserDto.password;
    (await user).email = updateUserDto.email;
  }

  async findOneDto(username: string) {
    const user = await this.userRepository.findOne({ where: { username: username } });
    return user;
  }

  async remove(username: string): Promise<void> {
    const user = await this.findOneDto(username);
    await this.userRepository.remove(user);
  }
}
