import { Serializer } from "../../domain/interfaces/serializer";
import { Msg } from '../../protos/ciot/proto/v2/msg';

export class SerializerPb implements Serializer {
    private static instance: SerializerPb;

    private constructor() {
        // Construtor privado para impedir instanciação direta
    }

    public static getInstance(): SerializerPb {
        if (!SerializerPb.instance) {
            SerializerPb.instance = new SerializerPb();
        }
        return SerializerPb.instance;
    }

    serialize<T>(object: T): Uint8Array {
        if (SerializerPb.isMsg(object)) {
            return Msg.toBinary(object);
        }
        throw new Error("Unable to serialize object");
    }

    deserialize<T>(data: Uint8Array): T {
        try {
            const msg = Msg.fromBinary(data) as unknown as T;
            return msg;
        } catch {
            throw new Error("Unable to deserialize object");
        }
    }

    static isMsg(obj: any): obj is Msg {
        return typeof obj.id === 'number' &&
               typeof (obj.iface === undefined || typeof obj.data === 'object') &&
               typeof obj.error === 'number' &&
               (obj.data === undefined || typeof obj.data === 'object');
    }
}