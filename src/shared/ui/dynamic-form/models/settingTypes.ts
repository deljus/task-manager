import { BooleanControl, StringfyNumberControl, NonePropsControl } from "./controlTypes"

export type BooleanField = {
    uuid: string,
    title: string;
    controlType: BooleanControl['type']
}

export type StringfyNumberField = {
    uuid: string,
    title: string;
    controlType: StringfyNumberControl['type']
}

export type NonePropsField = {
    uuid: string,
    title: string;
    controlType: NonePropsControl['type']
}

export type SettingType = BooleanField | StringfyNumberField | NonePropsField