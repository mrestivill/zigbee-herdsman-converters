import * as m from "../lib/modernExtend";
import type {DefinitionWithExtend} from "../lib/types";

export const definitions: DefinitionWithExtend[] = [
    // Tested working with firmware 2.5.3_r58: dimming, on/off, and effects give no
    // errors (although the stop effect and the finish effect do nothing).
    {
        zigbeeModel: ["K10-1220Z"],
        model: "K10-1220Z",
        vendor: "TLW Global",
        description: "12V LED smart driver 15W with 6-port micro plug connector",
        extend: [m.light()],
    },
    // K10-1230Z and K10-1250Z untested, but assumed to be consistent with K10-1220W
    {
        zigbeeModel: ["K10-1230Z"],
        model: "K10-1230Z",
        vendor: "TLW Global",
        description: "12V LED smart driver 30W with 6-port micro plug connector",
        extend: [m.light()],
    },
    {
        zigbeeModel: ["K10-1250Z"],
        model: "K10-1250Z",
        vendor: "TLW Global",
        description: "12V LED smart driver 50W with 6-port micro plug connector",
        extend: [m.light()],
    },
];
