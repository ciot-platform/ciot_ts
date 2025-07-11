// @generated by protobuf-ts 2.11.1
// @generated from protobuf file "ciot/proto/v2/sys.proto" (package "Ciot", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * Message used to stop system interface
 *
 * @generated from protobuf message Ciot.SysStop
 */
export interface SysStop {
}
/**
 * Message representing configuration for the system.
 *
 * @generated from protobuf message Ciot.SysCfg
 */
export interface SysCfg {
}
/**
 * Message representing system features.
 *
 * @generated from protobuf message Ciot.SysFeatures
 */
export interface SysFeatures {
    /**
     * @generated from protobuf field: bool ble_adv = 1
     */
    bleAdv: boolean; // Bluetooth Low Energy advertising.
    /**
     * @generated from protobuf field: bool ble_scn = 2
     */
    bleScn: boolean; // Bluetooth Low Energy scanning.
    /**
     * @generated from protobuf field: bool ble = 3
     */
    ble: boolean; // Bluetooth Low Energy support.
    /**
     * @generated from protobuf field: bool eth = 4
     */
    eth: boolean; // Ethernet support.
    /**
     * @generated from protobuf field: bool gpio = 5
     */
    gpio: boolean; // General Purpose Input/Output support.
    /**
     * @generated from protobuf field: bool http_client = 6
     */
    httpClient: boolean; // HTTP client support.
    /**
     * @generated from protobuf field: bool http_server = 7
     */
    httpServer: boolean; // HTTP server support.
    /**
     * @generated from protobuf field: bool mbus_client = 8
     */
    mbusClient: boolean; // Modbus client support.
    /**
     * @generated from protobuf field: bool mbus_server = 9
     */
    mbusServer: boolean; // Modbus server support.
    /**
     * @generated from protobuf field: bool mqtt_client = 10
     */
    mqttClient: boolean; // Mqtt client support.
    /**
     * @generated from protobuf field: bool ntp = 11
     */
    ntp: boolean; // Network Time Protocol support.
    /**
     * @generated from protobuf field: bool ota = 12
     */
    ota: boolean; // Over-the-Air update support.
    /**
     * @generated from protobuf field: bool pwm = 13
     */
    pwm: boolean; // Pulse Width Modulation support.
    /**
     * @generated from protobuf field: bool sys = 14
     */
    sys: boolean; // System support.
    /**
     * @generated from protobuf field: bool tcp = 15
     */
    tcp: boolean; // Transmission Control Protocol support.
    /**
     * @generated from protobuf field: bool timer = 16
     */
    timer: boolean; // Timer support.
    /**
     * @generated from protobuf field: bool uart = 17
     */
    uart: boolean; // Universal Asynchronous Receiver-Transmitter support.
    /**
     * @generated from protobuf field: bool usb = 18
     */
    usb: boolean; // Universal Serial Bus support.
    /**
     * @generated from protobuf field: bool wifi = 19
     */
    wifi: boolean; // Wireless Fidelity support.
    /**
     * @generated from protobuf field: bool storage = 20
     */
    storage: boolean; // Storage support.
    /**
     * @generated from protobuf field: bool serializer = 21
     */
    serializer: boolean; // Serializer support.
    /**
     * @generated from protobuf field: bool crypt = 22
     */
    crypt: boolean; // Cryptography support.
    /**
     * @generated from protobuf field: bool dfu = 23
     */
    dfu: boolean; // Device Firmware Update support.
}
/**
 * Message representing system information.
 *
 * @generated from protobuf message Ciot.SysInfo
 */
export interface SysInfo {
    /**
     * @generated from protobuf field: bytes app_ver = 1
     */
    appVer: Uint8Array; // Application version.
    /**
     * @generated from protobuf field: string hw_name = 2
     */
    hwName: string; // Hardware name.
    /**
     * @generated from protobuf field: Ciot.SysHw hw_type = 3
     */
    hwType: SysHw; // Hardware type.
    /**
     * @generated from protobuf field: Ciot.SysFeatures features = 4
     */
    features?: SysFeatures; // System features.
}
/**
 * Message representing system status.
 *
 * @generated from protobuf message Ciot.SysStatus
 */
export interface SysStatus {
    /**
     * @generated from protobuf field: uint32 reset_reason = 1
     */
    resetReason: number; // Reason for the last reset.
    /**
     * @generated from protobuf field: uint32 reset_count = 2
     */
    resetCount: number; // Number of resets.
    /**
     * @generated from protobuf field: uint32 free_memory = 3
     */
    freeMemory: number; // Amount of free memory.
    /**
     * @generated from protobuf field: uint32 lifetime = 4
     */
    lifetime: number; // Lifetime of the system.
}
/**
 * Message representing a system request.
 *
 * @generated from protobuf message Ciot.SysReq
 */
export interface SysReq {
    /**
     * @generated from protobuf oneof: type
     */
    type: {
        oneofKind: "cmd";
        /**
         * @generated from protobuf field: Ciot.SysReqCmd cmd = 1
         */
        cmd: SysReqCmd; // System command
    } | {
        oneofKind: undefined;
    };
}
/**
 * Message representing data for the system.
 *
 * @generated from protobuf message Ciot.SysData
 */
export interface SysData {
    /**
     * @generated from protobuf oneof: type
     */
    type: {
        oneofKind: "stop";
        /**
         * @generated from protobuf field: Ciot.SysStop stop = 1
         */
        stop: SysStop;
    } | {
        oneofKind: "config";
        /**
         * @generated from protobuf field: Ciot.SysCfg config = 2
         */
        config: SysCfg; // Configuration for the system.
    } | {
        oneofKind: "status";
        /**
         * @generated from protobuf field: Ciot.SysStatus status = 3
         */
        status: SysStatus; // Status of the system.
    } | {
        oneofKind: "request";
        /**
         * @generated from protobuf field: Ciot.SysReq request = 4
         */
        request: SysReq; // System request data.
    } | {
        oneofKind: "info";
        /**
         * @generated from protobuf field: Ciot.SysInfo info = 5
         */
        info: SysInfo; // System info.
    } | {
        oneofKind: undefined;
    };
}
/**
 * Enum representing different types of system requests.
 *
 * @generated from protobuf enum Ciot.SysReqCmd
 */
export enum SysReqCmd {
    /**
     * Unknown system request type.
     *
     * @generated from protobuf enum value: SYS_REQ_CMD_UNKOWN = 0;
     */
    UNKOWN = 0,
    /**
     * System restart request.
     *
     * @generated from protobuf enum value: SYS_REQ_CMD_RESTART = 1;
     */
    RESTART = 1,
    /**
     * System init DFU bootloader
     *
     * @generated from protobuf enum value: SYS_REQ_CMD_INIT_DFU = 2;
     */
    INIT_DFU = 2
}
/**
 * Enum representing hardware version
 *
 * @generated from protobuf enum Ciot.SysHw
 */
export enum SysHw {
    /**
     * Unknown hardware
     *
     * @generated from protobuf enum value: SYS_HW_UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * ESP8266
     *
     * @generated from protobuf enum value: SYS_HW_ESP8266 = 1;
     */
    ESP8266 = 1,
    /**
     * Arduino Board
     *
     * @generated from protobuf enum value: SYS_HW_ARDUINO = 2;
     */
    ARDUINO = 2,
    /**
     * ESP32
     *
     * @generated from protobuf enum value: SYS_HW_ESP32 = 3;
     */
    ESP32 = 3,
    /**
     * NRF51
     *
     * @generated from protobuf enum value: SYS_HW_NRF51 = 4;
     */
    NRF51 = 4,
    /**
     * NRF52
     *
     * @generated from protobuf enum value: SYS_HW_NRF52 = 5;
     */
    NRF52 = 5,
    /**
     * Linux device
     *
     * @generated from protobuf enum value: SYS_HW_LINUX = 6;
     */
    LINUX = 6,
    /**
     * Windows device
     *
     * @generated from protobuf enum value: SYS_HW_WIN32 = 7;
     */
    WIN32 = 7
}
// @generated message type with reflection information, may provide speed optimized methods
class SysStop$Type extends MessageType<SysStop> {
    constructor() {
        super("Ciot.SysStop", []);
    }
    create(value?: PartialMessage<SysStop>): SysStop {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<SysStop>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SysStop): SysStop {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: SysStop, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Ciot.SysStop
 */
export const SysStop = new SysStop$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SysCfg$Type extends MessageType<SysCfg> {
    constructor() {
        super("Ciot.SysCfg", []);
    }
    create(value?: PartialMessage<SysCfg>): SysCfg {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<SysCfg>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SysCfg): SysCfg {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: SysCfg, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Ciot.SysCfg
 */
export const SysCfg = new SysCfg$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SysFeatures$Type extends MessageType<SysFeatures> {
    constructor() {
        super("Ciot.SysFeatures", [
            { no: 1, name: "ble_adv", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "ble_scn", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "ble", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "eth", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "gpio", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "http_client", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "http_server", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "mbus_client", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "mbus_server", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "mqtt_client", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "ntp", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "ota", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "pwm", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "sys", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "tcp", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 16, name: "timer", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 17, name: "uart", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 18, name: "usb", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 19, name: "wifi", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 20, name: "storage", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 21, name: "serializer", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 22, name: "crypt", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 23, name: "dfu", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<SysFeatures>): SysFeatures {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.bleAdv = false;
        message.bleScn = false;
        message.ble = false;
        message.eth = false;
        message.gpio = false;
        message.httpClient = false;
        message.httpServer = false;
        message.mbusClient = false;
        message.mbusServer = false;
        message.mqttClient = false;
        message.ntp = false;
        message.ota = false;
        message.pwm = false;
        message.sys = false;
        message.tcp = false;
        message.timer = false;
        message.uart = false;
        message.usb = false;
        message.wifi = false;
        message.storage = false;
        message.serializer = false;
        message.crypt = false;
        message.dfu = false;
        if (value !== undefined)
            reflectionMergePartial<SysFeatures>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SysFeatures): SysFeatures {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool ble_adv */ 1:
                    message.bleAdv = reader.bool();
                    break;
                case /* bool ble_scn */ 2:
                    message.bleScn = reader.bool();
                    break;
                case /* bool ble */ 3:
                    message.ble = reader.bool();
                    break;
                case /* bool eth */ 4:
                    message.eth = reader.bool();
                    break;
                case /* bool gpio */ 5:
                    message.gpio = reader.bool();
                    break;
                case /* bool http_client */ 6:
                    message.httpClient = reader.bool();
                    break;
                case /* bool http_server */ 7:
                    message.httpServer = reader.bool();
                    break;
                case /* bool mbus_client */ 8:
                    message.mbusClient = reader.bool();
                    break;
                case /* bool mbus_server */ 9:
                    message.mbusServer = reader.bool();
                    break;
                case /* bool mqtt_client */ 10:
                    message.mqttClient = reader.bool();
                    break;
                case /* bool ntp */ 11:
                    message.ntp = reader.bool();
                    break;
                case /* bool ota */ 12:
                    message.ota = reader.bool();
                    break;
                case /* bool pwm */ 13:
                    message.pwm = reader.bool();
                    break;
                case /* bool sys */ 14:
                    message.sys = reader.bool();
                    break;
                case /* bool tcp */ 15:
                    message.tcp = reader.bool();
                    break;
                case /* bool timer */ 16:
                    message.timer = reader.bool();
                    break;
                case /* bool uart */ 17:
                    message.uart = reader.bool();
                    break;
                case /* bool usb */ 18:
                    message.usb = reader.bool();
                    break;
                case /* bool wifi */ 19:
                    message.wifi = reader.bool();
                    break;
                case /* bool storage */ 20:
                    message.storage = reader.bool();
                    break;
                case /* bool serializer */ 21:
                    message.serializer = reader.bool();
                    break;
                case /* bool crypt */ 22:
                    message.crypt = reader.bool();
                    break;
                case /* bool dfu */ 23:
                    message.dfu = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: SysFeatures, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool ble_adv = 1; */
        if (message.bleAdv !== false)
            writer.tag(1, WireType.Varint).bool(message.bleAdv);
        /* bool ble_scn = 2; */
        if (message.bleScn !== false)
            writer.tag(2, WireType.Varint).bool(message.bleScn);
        /* bool ble = 3; */
        if (message.ble !== false)
            writer.tag(3, WireType.Varint).bool(message.ble);
        /* bool eth = 4; */
        if (message.eth !== false)
            writer.tag(4, WireType.Varint).bool(message.eth);
        /* bool gpio = 5; */
        if (message.gpio !== false)
            writer.tag(5, WireType.Varint).bool(message.gpio);
        /* bool http_client = 6; */
        if (message.httpClient !== false)
            writer.tag(6, WireType.Varint).bool(message.httpClient);
        /* bool http_server = 7; */
        if (message.httpServer !== false)
            writer.tag(7, WireType.Varint).bool(message.httpServer);
        /* bool mbus_client = 8; */
        if (message.mbusClient !== false)
            writer.tag(8, WireType.Varint).bool(message.mbusClient);
        /* bool mbus_server = 9; */
        if (message.mbusServer !== false)
            writer.tag(9, WireType.Varint).bool(message.mbusServer);
        /* bool mqtt_client = 10; */
        if (message.mqttClient !== false)
            writer.tag(10, WireType.Varint).bool(message.mqttClient);
        /* bool ntp = 11; */
        if (message.ntp !== false)
            writer.tag(11, WireType.Varint).bool(message.ntp);
        /* bool ota = 12; */
        if (message.ota !== false)
            writer.tag(12, WireType.Varint).bool(message.ota);
        /* bool pwm = 13; */
        if (message.pwm !== false)
            writer.tag(13, WireType.Varint).bool(message.pwm);
        /* bool sys = 14; */
        if (message.sys !== false)
            writer.tag(14, WireType.Varint).bool(message.sys);
        /* bool tcp = 15; */
        if (message.tcp !== false)
            writer.tag(15, WireType.Varint).bool(message.tcp);
        /* bool timer = 16; */
        if (message.timer !== false)
            writer.tag(16, WireType.Varint).bool(message.timer);
        /* bool uart = 17; */
        if (message.uart !== false)
            writer.tag(17, WireType.Varint).bool(message.uart);
        /* bool usb = 18; */
        if (message.usb !== false)
            writer.tag(18, WireType.Varint).bool(message.usb);
        /* bool wifi = 19; */
        if (message.wifi !== false)
            writer.tag(19, WireType.Varint).bool(message.wifi);
        /* bool storage = 20; */
        if (message.storage !== false)
            writer.tag(20, WireType.Varint).bool(message.storage);
        /* bool serializer = 21; */
        if (message.serializer !== false)
            writer.tag(21, WireType.Varint).bool(message.serializer);
        /* bool crypt = 22; */
        if (message.crypt !== false)
            writer.tag(22, WireType.Varint).bool(message.crypt);
        /* bool dfu = 23; */
        if (message.dfu !== false)
            writer.tag(23, WireType.Varint).bool(message.dfu);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Ciot.SysFeatures
 */
export const SysFeatures = new SysFeatures$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SysInfo$Type extends MessageType<SysInfo> {
    constructor() {
        super("Ciot.SysInfo", [
            { no: 1, name: "app_ver", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "hw_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "hw_type", kind: "enum", T: () => ["Ciot.SysHw", SysHw, "SYS_HW_"] },
            { no: 4, name: "features", kind: "message", T: () => SysFeatures }
        ]);
    }
    create(value?: PartialMessage<SysInfo>): SysInfo {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.appVer = new Uint8Array(0);
        message.hwName = "";
        message.hwType = 0;
        if (value !== undefined)
            reflectionMergePartial<SysInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SysInfo): SysInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes app_ver */ 1:
                    message.appVer = reader.bytes();
                    break;
                case /* string hw_name */ 2:
                    message.hwName = reader.string();
                    break;
                case /* Ciot.SysHw hw_type */ 3:
                    message.hwType = reader.int32();
                    break;
                case /* Ciot.SysFeatures features */ 4:
                    message.features = SysFeatures.internalBinaryRead(reader, reader.uint32(), options, message.features);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: SysInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bytes app_ver = 1; */
        if (message.appVer.length)
            writer.tag(1, WireType.LengthDelimited).bytes(message.appVer);
        /* string hw_name = 2; */
        if (message.hwName !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.hwName);
        /* Ciot.SysHw hw_type = 3; */
        if (message.hwType !== 0)
            writer.tag(3, WireType.Varint).int32(message.hwType);
        /* Ciot.SysFeatures features = 4; */
        if (message.features)
            SysFeatures.internalBinaryWrite(message.features, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Ciot.SysInfo
 */
export const SysInfo = new SysInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SysStatus$Type extends MessageType<SysStatus> {
    constructor() {
        super("Ciot.SysStatus", [
            { no: 1, name: "reset_reason", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "reset_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "free_memory", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "lifetime", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<SysStatus>): SysStatus {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.resetReason = 0;
        message.resetCount = 0;
        message.freeMemory = 0;
        message.lifetime = 0;
        if (value !== undefined)
            reflectionMergePartial<SysStatus>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SysStatus): SysStatus {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 reset_reason */ 1:
                    message.resetReason = reader.uint32();
                    break;
                case /* uint32 reset_count */ 2:
                    message.resetCount = reader.uint32();
                    break;
                case /* uint32 free_memory */ 3:
                    message.freeMemory = reader.uint32();
                    break;
                case /* uint32 lifetime */ 4:
                    message.lifetime = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: SysStatus, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 reset_reason = 1; */
        if (message.resetReason !== 0)
            writer.tag(1, WireType.Varint).uint32(message.resetReason);
        /* uint32 reset_count = 2; */
        if (message.resetCount !== 0)
            writer.tag(2, WireType.Varint).uint32(message.resetCount);
        /* uint32 free_memory = 3; */
        if (message.freeMemory !== 0)
            writer.tag(3, WireType.Varint).uint32(message.freeMemory);
        /* uint32 lifetime = 4; */
        if (message.lifetime !== 0)
            writer.tag(4, WireType.Varint).uint32(message.lifetime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Ciot.SysStatus
 */
export const SysStatus = new SysStatus$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SysReq$Type extends MessageType<SysReq> {
    constructor() {
        super("Ciot.SysReq", [
            { no: 1, name: "cmd", kind: "enum", oneof: "type", T: () => ["Ciot.SysReqCmd", SysReqCmd, "SYS_REQ_CMD_"] }
        ]);
    }
    create(value?: PartialMessage<SysReq>): SysReq {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.type = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial<SysReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SysReq): SysReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* Ciot.SysReqCmd cmd */ 1:
                    message.type = {
                        oneofKind: "cmd",
                        cmd: reader.int32()
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: SysReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* Ciot.SysReqCmd cmd = 1; */
        if (message.type.oneofKind === "cmd")
            writer.tag(1, WireType.Varint).int32(message.type.cmd);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Ciot.SysReq
 */
export const SysReq = new SysReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SysData$Type extends MessageType<SysData> {
    constructor() {
        super("Ciot.SysData", [
            { no: 1, name: "stop", kind: "message", oneof: "type", T: () => SysStop },
            { no: 2, name: "config", kind: "message", oneof: "type", T: () => SysCfg },
            { no: 3, name: "status", kind: "message", oneof: "type", T: () => SysStatus },
            { no: 4, name: "request", kind: "message", oneof: "type", T: () => SysReq },
            { no: 5, name: "info", kind: "message", oneof: "type", T: () => SysInfo }
        ]);
    }
    create(value?: PartialMessage<SysData>): SysData {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.type = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial<SysData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SysData): SysData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* Ciot.SysStop stop */ 1:
                    message.type = {
                        oneofKind: "stop",
                        stop: SysStop.internalBinaryRead(reader, reader.uint32(), options, (message.type as any).stop)
                    };
                    break;
                case /* Ciot.SysCfg config */ 2:
                    message.type = {
                        oneofKind: "config",
                        config: SysCfg.internalBinaryRead(reader, reader.uint32(), options, (message.type as any).config)
                    };
                    break;
                case /* Ciot.SysStatus status */ 3:
                    message.type = {
                        oneofKind: "status",
                        status: SysStatus.internalBinaryRead(reader, reader.uint32(), options, (message.type as any).status)
                    };
                    break;
                case /* Ciot.SysReq request */ 4:
                    message.type = {
                        oneofKind: "request",
                        request: SysReq.internalBinaryRead(reader, reader.uint32(), options, (message.type as any).request)
                    };
                    break;
                case /* Ciot.SysInfo info */ 5:
                    message.type = {
                        oneofKind: "info",
                        info: SysInfo.internalBinaryRead(reader, reader.uint32(), options, (message.type as any).info)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: SysData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* Ciot.SysStop stop = 1; */
        if (message.type.oneofKind === "stop")
            SysStop.internalBinaryWrite(message.type.stop, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* Ciot.SysCfg config = 2; */
        if (message.type.oneofKind === "config")
            SysCfg.internalBinaryWrite(message.type.config, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* Ciot.SysStatus status = 3; */
        if (message.type.oneofKind === "status")
            SysStatus.internalBinaryWrite(message.type.status, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* Ciot.SysReq request = 4; */
        if (message.type.oneofKind === "request")
            SysReq.internalBinaryWrite(message.type.request, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* Ciot.SysInfo info = 5; */
        if (message.type.oneofKind === "info")
            SysInfo.internalBinaryWrite(message.type.info, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Ciot.SysData
 */
export const SysData = new SysData$Type();
