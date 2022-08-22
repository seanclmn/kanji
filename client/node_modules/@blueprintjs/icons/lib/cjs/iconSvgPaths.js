"use strict";
/*
 * Copyright 2021 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.iconNameToPathsRecordKey = exports.IconSvgPaths20 = exports.IconSvgPaths16 = void 0;
var tslib_1 = require("tslib");
var change_case_1 = require("change-case");
var IconSvgPaths16 = tslib_1.__importStar(require("./generated/16px/paths"));
exports.IconSvgPaths16 = IconSvgPaths16;
var IconSvgPaths20 = tslib_1.__importStar(require("./generated/20px/paths"));
exports.IconSvgPaths20 = IconSvgPaths20;
/**
 * Type safe string literal conversion of snake-case icon names to PascalCase icon names,
 * useful for indexing into the SVG paths record to extract a single icon's SVG path definition.
 */
function iconNameToPathsRecordKey(name) {
    return (0, change_case_1.pascalCase)(name);
}
exports.iconNameToPathsRecordKey = iconNameToPathsRecordKey;
//# sourceMappingURL=iconSvgPaths.js.map