import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() //декоратор
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllUsers(): string {
    return this.appService.getHello();
  }

  @Get('/users/:id')
  getUser(@Param('id') id: string): string {
    return this.appService.getUser(+id);
  }
}
