/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
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
import classNames from "classnames";
import * as React from "react";
import { AbstractPureComponent2, Classes, Elevation } from "../../common";
import { DISPLAYNAME_PREFIX } from "../../common/props";
export class Card extends AbstractPureComponent2 {
    static displayName = `${DISPLAYNAME_PREFIX}.Card`;
    static defaultProps = {
        elevation: Elevation.ZERO,
        interactive: false,
    };
    render() {
        const { className, elevation, interactive, ...htmlProps } = this.props;
        const classes = classNames(Classes.CARD, { [Classes.INTERACTIVE]: interactive }, Classes.elevationClass(elevation), className);
        return React.createElement("div", { className: classes, ...htmlProps });
    }
}
//# sourceMappingURL=card.js.map