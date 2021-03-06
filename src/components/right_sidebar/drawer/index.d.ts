import * as React from 'react';
import './styles.scss';
declare type Props = {
    open: boolean;
    onClose?: () => void;
    direction: 'left' | 'right' | 'top' | 'bottom';
    children?: React.ReactNode;
    duration?: number;
    overlayOpacity?: number;
    overlayColor?: String;
    enableOverlay?: boolean;
    style?: React.CSSProperties;
    zIndex?: number;
    size?: number | string;
    className?: string | undefined;
};
declare const EZDrawer: React.FC<Props>;
export default EZDrawer;
