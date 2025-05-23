/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.6
 * source: auth.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace auth {
    export class LoginSucess extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            jwt?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("jwt" in data && data.jwt != undefined) {
                    this.jwt = data.jwt;
                }
            }
        }
        get jwt() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set jwt(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            jwt?: string;
        }): LoginSucess {
            const message = new LoginSucess({});
            if (data.jwt != null) {
                message.jwt = data.jwt;
            }
            return message;
        }
        toObject() {
            const data: {
                jwt?: string;
            } = {};
            if (this.jwt != null) {
                data.jwt = this.jwt;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.jwt.length)
                writer.writeString(1, this.jwt);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): LoginSucess {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new LoginSucess();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.jwt = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): LoginSucess {
            return LoginSucess.deserialize(bytes);
        }
    }
    export class LoginDto extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            email?: string;
            password?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("email" in data && data.email != undefined) {
                    this.email = data.email;
                }
                if ("password" in data && data.password != undefined) {
                    this.password = data.password;
                }
            }
        }
        get email() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set email(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get password() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set password(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            email?: string;
            password?: string;
        }): LoginDto {
            const message = new LoginDto({});
            if (data.email != null) {
                message.email = data.email;
            }
            if (data.password != null) {
                message.password = data.password;
            }
            return message;
        }
        toObject() {
            const data: {
                email?: string;
                password?: string;
            } = {};
            if (this.email != null) {
                data.email = this.email;
            }
            if (this.password != null) {
                data.password = this.password;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.email.length)
                writer.writeString(1, this.email);
            if (this.password.length)
                writer.writeString(2, this.password);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): LoginDto {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new LoginDto();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.email = reader.readString();
                        break;
                    case 2:
                        message.password = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): LoginDto {
            return LoginDto.deserialize(bytes);
        }
    }
    export class SignUpDto extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            name?: string;
            age?: number;
            email?: string;
            password?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
                if ("age" in data && data.age != undefined) {
                    this.age = data.age;
                }
                if ("email" in data && data.email != undefined) {
                    this.email = data.email;
                }
                if ("password" in data && data.password != undefined) {
                    this.password = data.password;
                }
            }
        }
        get name() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get age() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set age(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get email() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set email(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get password() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set password(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        static fromObject(data: {
            name?: string;
            age?: number;
            email?: string;
            password?: string;
        }): SignUpDto {
            const message = new SignUpDto({});
            if (data.name != null) {
                message.name = data.name;
            }
            if (data.age != null) {
                message.age = data.age;
            }
            if (data.email != null) {
                message.email = data.email;
            }
            if (data.password != null) {
                message.password = data.password;
            }
            return message;
        }
        toObject() {
            const data: {
                name?: string;
                age?: number;
                email?: string;
                password?: string;
            } = {};
            if (this.name != null) {
                data.name = this.name;
            }
            if (this.age != null) {
                data.age = this.age;
            }
            if (this.email != null) {
                data.email = this.email;
            }
            if (this.password != null) {
                data.password = this.password;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.name.length)
                writer.writeString(1, this.name);
            if (this.age != 0)
                writer.writeInt32(2, this.age);
            if (this.email.length)
                writer.writeString(3, this.email);
            if (this.password.length)
                writer.writeString(4, this.password);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SignUpDto {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SignUpDto();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.name = reader.readString();
                        break;
                    case 2:
                        message.age = reader.readInt32();
                        break;
                    case 3:
                        message.email = reader.readString();
                        break;
                    case 4:
                        message.password = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): SignUpDto {
            return SignUpDto.deserialize(bytes);
        }
    }
    export class AccountModelDto extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            id?: string;
            name?: string;
            email?: string;
            verified?: boolean;
            created_at?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
                if ("email" in data && data.email != undefined) {
                    this.email = data.email;
                }
                if ("verified" in data && data.verified != undefined) {
                    this.verified = data.verified;
                }
                if ("created_at" in data && data.created_at != undefined) {
                    this.created_at = data.created_at;
                }
            }
        }
        get id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get name() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get email() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set email(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get verified() {
            return pb_1.Message.getFieldWithDefault(this, 4, false) as boolean;
        }
        set verified(value: boolean) {
            pb_1.Message.setField(this, 4, value);
        }
        get created_at() {
            return pb_1.Message.getFieldWithDefault(this, 5, "") as string;
        }
        set created_at(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        static fromObject(data: {
            id?: string;
            name?: string;
            email?: string;
            verified?: boolean;
            created_at?: string;
        }): AccountModelDto {
            const message = new AccountModelDto({});
            if (data.id != null) {
                message.id = data.id;
            }
            if (data.name != null) {
                message.name = data.name;
            }
            if (data.email != null) {
                message.email = data.email;
            }
            if (data.verified != null) {
                message.verified = data.verified;
            }
            if (data.created_at != null) {
                message.created_at = data.created_at;
            }
            return message;
        }
        toObject() {
            const data: {
                id?: string;
                name?: string;
                email?: string;
                verified?: boolean;
                created_at?: string;
            } = {};
            if (this.id != null) {
                data.id = this.id;
            }
            if (this.name != null) {
                data.name = this.name;
            }
            if (this.email != null) {
                data.email = this.email;
            }
            if (this.verified != null) {
                data.verified = this.verified;
            }
            if (this.created_at != null) {
                data.created_at = this.created_at;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.id.length)
                writer.writeString(1, this.id);
            if (this.name.length)
                writer.writeString(2, this.name);
            if (this.email.length)
                writer.writeString(3, this.email);
            if (this.verified != false)
                writer.writeBool(4, this.verified);
            if (this.created_at.length)
                writer.writeString(5, this.created_at);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AccountModelDto {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AccountModelDto();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readString();
                        break;
                    case 2:
                        message.name = reader.readString();
                        break;
                    case 3:
                        message.email = reader.readString();
                        break;
                    case 4:
                        message.verified = reader.readBool();
                        break;
                    case 5:
                        message.created_at = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): AccountModelDto {
            return AccountModelDto.deserialize(bytes);
        }
    }
    export class AccountListDto extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            accounts?: AccountModelDto[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("accounts" in data && data.accounts != undefined) {
                    this.accounts = data.accounts;
                }
            }
        }
        get accounts() {
            return pb_1.Message.getRepeatedWrapperField(this, AccountModelDto, 1) as AccountModelDto[];
        }
        set accounts(value: AccountModelDto[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        static fromObject(data: {
            accounts?: ReturnType<typeof AccountModelDto.prototype.toObject>[];
        }): AccountListDto {
            const message = new AccountListDto({});
            if (data.accounts != null) {
                message.accounts = data.accounts.map(item => AccountModelDto.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                accounts?: ReturnType<typeof AccountModelDto.prototype.toObject>[];
            } = {};
            if (this.accounts != null) {
                data.accounts = this.accounts.map((item: AccountModelDto) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.accounts.length)
                writer.writeRepeatedMessage(1, this.accounts, (item: AccountModelDto) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AccountListDto {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AccountListDto();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.accounts, () => pb_1.Message.addToRepeatedWrapperField(message, 1, AccountModelDto.deserialize(reader), AccountModelDto));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): AccountListDto {
            return AccountListDto.deserialize(bytes);
        }
    }
}
