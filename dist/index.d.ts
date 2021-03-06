/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import * as React from 'react';

// --------------------
// Interfaces and types
// --------------------

export interface LocalizationMap {
    [key: string]: LocalizationMap;
}

export interface Offset {
    left: number;
    top: number;
}

export enum Position {
    TopLeft = 'TOP_LEFT',
    TopCenter = 'TOP_CENTER',
    TopRight = 'TOP_RIGHT',
    RightTop = 'RIGHT_TOP',
    RightCenter = 'RIGHT_CENTER',
    RightBottom = 'RIGHT_BOTTOM',
    BottomLeft = 'BOTTOM_LEFT',
    BottomCenter = 'BOTTOM_CENTER',
    BottomRight = 'BOTTOM_RIGHT',
    LeftTop = 'LEFT_TOP',
    LeftCenter = 'LEFT_CENTER',
    LeftBottom = 'LEFT_BOTTOM',
}

export type RenderToolbarSlot = (slot: ToolbarSlot) => React.ReactElement;
export type RenderToolbar = (renderToolbar: RenderToolbarSlot) => React.ReactElement;

export const defaultToolbar: RenderToolbarSlot;

export interface SlotAttr extends React.HTMLAttributes<HTMLDivElement> {
    ref?: React.MutableRefObject<HTMLDivElement | null>;
}
export interface Slot {
    attrs: SlotAttr;
    children: React.ReactNode;
}

export enum ToggleStatus {
    Close = 'Close',
    Open = 'Open',
    Toggle = 'Toggle',
}
export type Toggle = (status?: ToggleStatus) => void;

export interface ToolbarSlot {
    currentPage: number;
    numPages: number;
    toggleSidebarButton: React.ReactNode;
    searchPopover: React.ReactNode;
    previousPageButton: React.ReactNode;
    nextPageButton: React.ReactNode;
    currentPageInput: React.ReactNode;
    zoomOutButton: React.ReactNode;
    zoomPopover: React.ReactNode;
    zoomInButton: React.ReactNode;
    fullScreenButton: React.ReactNode;
    downloadButton: React.ReactNode;
    openFileButton: React.ReactNode;
    moreActionsPopover: React.ReactNode;
}

// ----------
// Components
// ----------

// Button

export interface ButtonProps {
    isSelected?: boolean;
    onClick(): void;
}

export class Button extends React.Component<ButtonProps> {}

// Icon

export interface IconProps {
    size?: number;
}

export class Icon extends React.Component<IconProps> {}

// MenuDivider

export class MenuDivider extends React.Component<{}> {}

// MenuItem

export interface MenuItemProps {
    checked?: boolean;
    icon?: React.ReactElement;
    onClick(): void;
}

export class MenuItem extends React.Component<MenuItemProps> {}

// Modal

export interface ModalProps {
    closeOnClickOutside: boolean;
    closeOnEscape: boolean;
    content: RenderContent;
    target: RenderTarget;
}

export class Modal extends React.Component<ModalProps> {}

// Popover

export interface PopoverProps {
    closeOnClickOutside: boolean;
    closeOnEscape: boolean;
    content: RenderContent;
    offset: Offset;
    position: Position;
    target: RenderTarget;
}

export class Popover extends React.Component<PopoverProps> {}

// Portal

export type RenderContent = (toggle: Toggle) => React.ReactNode;
export type RenderTarget = (toggle: Toggle, opened: boolean) => React.ReactNode;

// Tooltip

export type RenderTooltipContent = () => React.ReactNode;

export interface TooltipProps {
    content: RenderTooltipContent;
    offset: Offset;
    position: Position;
    target: React.ReactElement;
}

export class Tooltip extends React.Component<TooltipProps> {}

// Viewer

export type Layout = (
    isSidebarOpened: boolean,
    main: Slot,
    toolbar: RenderToolbar,
    sidebar: Slot,
) => React.ReactElement;

export const defaultLayout: Layout;

export interface ViewerProps {
    fileUrl: string;
    localization?: LocalizationMap;
    layout?: Layout;
}
export default class Viewer extends React.Component<ViewerProps> {}

// Worker

export interface WorkerProps {
    workerUrl: string;
}

export class Worker extends React.Component<WorkerProps> {}
