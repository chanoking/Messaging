import {
    Body,
    Controller,
    Get,
    NotFoundException,
    Param,
    Post,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {}
  @Get()
  getAllMessages() {
    return this.messagesService.findAll();
  }

  @Get('/:id')
  async getOneMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);

    if (!message) {
      throw new NotFoundException('messages not found');
    }

    return message;
  }

  @Post()
  async createMessage(@Body() body: CreateMessageDto) {
    return await this.messagesService.create(body.content);
  }
}
