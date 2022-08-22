import * as React from "react";
import { AbstractPureComponent2, HTMLDivProps, Intent, IntentProps, MaybeElement, Props } from "../../common";
import { IconName } from "../icon/icon";
export declare type CalloutProps = ICalloutProps;
/** @deprecated use CalloutProps */
export interface ICalloutProps extends IntentProps, Props, HTMLDivProps {
    /** Callout contents. */
    children?: React.ReactNode;
    /**
     * Name of a Blueprint UI icon (or an icon element) to render on the left side.
     *
     * If this prop is omitted or `undefined`, the `intent` prop will determine a default icon.
     * If this prop is explicitly `null`, no icon will be displayed (regardless of `intent`).
     */
    icon?: IconName | MaybeElement;
    /**
     * Visual intent color to apply to background, title, and icon.
     *
     * Defining this prop also applies a default icon, if the `icon` prop is omitted.
     */
    intent?: Intent;
    /**
     * String content of optional title element.
     *
     * Due to a conflict with the HTML prop types, to provide JSX content simply
     * pass `<H4>JSX title content</H4>` as first `children` element instead of
     * using this prop (note uppercase tag name to use the Blueprint Heading
     * component).
     */
    title?: string;
}
export declare class Callout extends AbstractPureComponent2<CalloutProps> {
    static displayName: string;
    render(): JSX.Element;
    private getIconName;
}
