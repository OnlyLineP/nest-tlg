import { Module } from '@nestjs/common';
import { BotControl } from './bot.controller';
import { botServiceEcho } from './bot.service'


@Module({
    providers: [botServiceEcho, BotControl],    
})

export class BotModule {
    
}
