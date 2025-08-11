export interface generalAPISuccessResponse {
    payload: any;
    message: string;
    success: boolean;
}

export interface generalAPIErrorResponse {
    errors: [];
    message: string;
    success: boolean;
}

export interface axiosResponse {
    config: any;
    data: any;
    headers: any;
    status: number;
    statusText: string;
}