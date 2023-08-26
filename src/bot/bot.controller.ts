
import { Update, Ctx, Start, Help, On, Hears, InjectBot, Message, Command} from 'nestjs-telegraf'
import  {Context}  from '../common/interfaces/context.interface'
import { botServiceEcho } from './bot.service';
import { Telegraf } from 'telegraf'

const GreeterBotName=""
@Update()
//@UseInterceptors(ResponseTimeInterceptor)
//@UseFilters(TelegrafExceptionFilter)
export class BotControl {  
  
  constructor(
    @InjectBot(GreeterBotName)
    private readonly bot: Telegraf<Context>,
    private readonly echoService: botServiceEcho,
  ) {}

  @Start()
  async onStart(): Promise<string> {
    const me = await this.bot.telegram.getMe();
    return `Hey, I'm ${me.first_name}`;
  }

  @Help() 
  async onHelp(): Promise<string> {
    return 'Send me any text';
  }

  @Command('admin')
  //@UseGuards(AdminGuard)
  onAdminCommand(): string {
    return 'Welcome judge';
  }

  @On('text')
  onMessage(@Message('text') msgText:string): string
    {
        return msgText.toUpperCase()
    }
//   onMessage(@Message('text', new ReverseTextPipe()) reversedText: string,): string 
//     {return this.echoService.echo(reversedText);}
}