export class ErrorResponse {
    message: string;
    constructor(message: string) {
        this.message = message;
    }
    get() {
        return {
            message: this.message
        }
    }
}