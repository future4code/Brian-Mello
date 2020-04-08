import { AppError } from './appError'

export class ErrorPrinter extends AppError {
 
    public printError(message: string, errorDate: Date): string{
        return `${message} - ${errorDate}`
    }
}