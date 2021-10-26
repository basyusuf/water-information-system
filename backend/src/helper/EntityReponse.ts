interface IEntityResponse {
    status: boolean;
    data?: any;
    error?: any;
}
export class EntityResponse implements IEntityResponse {
    status: boolean;
    data?: any = null;
    error?: any = null;
    constructor(data: IEntityResponse) {
        this.status = data.status;
        if (data.data) {
            this.data = data.data;
        }
        if (data.error) {
            this.error = data.error;
        }

    }
    get() {
        return {
            status: this.status,
            data: this.data,
            error: this.error
        }
    }
}