export interface Result<T> {
    data?: T,
    code?: number,
    message?: string,
    description?: string,
    success: boolean
}