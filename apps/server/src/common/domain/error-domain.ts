export class ErrorDomain extends Error {
    constructor(
        readonly message: string,
        readonly code: number,
        readonly error: string,
    ) {
        super();
    }
}
