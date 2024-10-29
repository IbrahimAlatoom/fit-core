/* eslint-disable prettier/prettier */
export interface JwtPayload {
    username: string;
    sub: number;  // This corresponds to the user's ID in your system
    // Add any other properties you expect in the payload
}
