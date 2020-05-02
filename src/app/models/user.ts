export interface UserResponse {
    status?: number;
    result?: ElemToken;
}
export interface ElemToken {
    userName?: string;
    token?: string;
}