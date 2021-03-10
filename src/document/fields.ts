import { element, fromAttribute } from "../parser/xml-serialize";
import { convertBoolean, convertLength } from "./common";
import { DocxContainer, DocxElement } from "./dom";

@element('fldChar')
export class FieldCharElement extends DocxElement {
    @fromAttribute('fldCharType')
    type: 'begin' | 'end' | 'separate'; 
}

@element('fldSimple')
export class FieldSimpleElement extends DocxContainer {
    @fromAttribute("dirty", convertBoolean)
    dirty: boolean;

    @fromAttribute("fldLock", convertBoolean)
    lock: boolean;

    @fromAttribute("instr")
    instruction: string;
}