/*
 * Copyright 2018 Palantir Technologies, Inc. All rights reserved.
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
import { AbstractPureComponent2, Classes } from "../../common";
import * as Errors from "../../common/errors";
import { getPositionIgnoreAngles, isPositionHorizontal } from "../../common/position";
import { DISPLAYNAME_PREFIX } from "../../common/props";
import { Button } from "../button/buttons";
import { H4 } from "../html/html";
import { Icon, IconSize } from "../icon/icon";
import { Overlay } from "../overlay/overlay";
export var DrawerSize;
(function (DrawerSize) {
    DrawerSize["SMALL"] = "360px";
    DrawerSize["STANDARD"] = "50%";
    DrawerSize["LARGE"] = "90%";
})(DrawerSize || (DrawerSize = {}));
export class Drawer extends AbstractPureComponent2 {
    static displayName = `${DISPLAYNAME_PREFIX}.Drawer`;
    static defaultProps = {
        canOutsideClickClose: true,
        isOpen: false,
        position: "right",
        style: {},
    };
    render() {
        const { size, style, position } = this.props;
        const realPosition = getPositionIgnoreAngles(position);
        const classes = classNames(Classes.DRAWER, {
            [Classes.positionClass(realPosition) ?? ""]: true,
        }, this.props.className);
        const styleProp = size == null
            ? style
            : {
                ...style,
                [isPositionHorizontal(realPosition) ? "height" : "width"]: size,
            };
        return (React.createElement(Overlay, { ...this.props, className: Classes.OVERLAY_CONTAINER },
            React.createElement("div", { className: classes, style: styleProp },
                this.maybeRenderHeader(),
                this.props.children)));
    }
    validateProps(props) {
        if (props.title == null) {
            if (props.icon != null) {
                console.warn(Errors.DIALOG_WARN_NO_HEADER_ICON);
            }
            if (props.isCloseButtonShown != null) {
                console.warn(Errors.DIALOG_WARN_NO_HEADER_CLOSE_BUTTON);
            }
        }
        if (props.position != null) {
            if (props.position !== getPositionIgnoreAngles(props.position)) {
                console.warn(Errors.DRAWER_ANGLE_POSITIONS_ARE_CASTED);
            }
        }
    }
    maybeRenderCloseButton() {
        // `isCloseButtonShown` can't be defaulted through default props because of props validation
        // so this check actually defaults it to true (fails only if directly set to false)
        if (this.props.isCloseButtonShown !== false) {
            return (React.createElement(Button, { "aria-label": "Close", className: Classes.DIALOG_CLOSE_BUTTON, icon: React.createElement(Icon, { icon: "small-cross", size: IconSize.LARGE }), minimal: true, onClick: this.props.onClose }));
        }
        else {
            return null;
        }
    }
    maybeRenderHeader() {
        const { icon, title } = this.props;
        if (title == null) {
            return null;
        }
        return (React.createElement("div", { className: Classes.DRAWER_HEADER },
            React.createElement(Icon, { icon: icon, size: IconSize.LARGE }),
            React.createElement(H4, null, title),
            this.maybeRenderCloseButton()));
    }
}
//# sourceMappingURL=drawer.js.map