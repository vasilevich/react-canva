import { FC, ReactNode } from "react";
import { Events } from "../Types";
export interface BaseProps extends Events {
    stroke?: string;
    fill?: string;
    lineCap?: CanvasLineCap;
    lineDashOffset?: number;
    lineJoin?: CanvasLineJoin;
    lineWidth?: number;
    miterLimit?: number;
}
interface CanvasProps<T = unknown> {
    children?: ReactNode[];
    src?: string;
}
declare const Canvas: FC<CanvasProps>;
export default Canvas;
