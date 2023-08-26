import { Module } from '@nestjs/common';
import { TelegrafModule} from 'nestjs-telegraf'
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { BotModule } from './bot/bot.module';


@Module({
  imports: [
    TelegrafModule.forRoot({
        token: '1665254305:AAGQ7MxVxHgTaGvP1-wT4fviw8FpiKFvons',
        include: [BotModule]
      }),
    // TelegrafModule.forRootAsync({
    //   botName: "Merhaba",
    //   useFactory: () => ({
    //     token: '1665254305:AAGQ7MxVxHgTaGvP1-wT4fviw8FpiKFvons',
    //   })
    // }),
    BotModule
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
