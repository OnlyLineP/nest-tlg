import { Injectable } from '@nestjs/common'

@Injectable()
export class botServiceEcho{
    echo(text: string): string {
        return `Echo: ${text}`
    }
}