export interface Serializer {
    serialize<T>(object: T): Uint8Array;
    deserialize<T>(data: Uint8Array): T;
}