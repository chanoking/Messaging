import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    this.messagesService = new MessagesService();
  }
  @Get()
  getAllMessages() {
    return this.messagesService.findAll();
  }

  @Get('/:id')
  async getOneMessage(@Param('id') id: string) {
    return await this.messagesService.findOne(id);
  }

  @Post()
  async createMessage(@Body() body: CreateMessageDto) {
    return await this.messagesService.create(body.content);
  }
}
