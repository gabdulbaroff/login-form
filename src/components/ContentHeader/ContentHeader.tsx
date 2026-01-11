import type { FC } from "react";
import css from "./ContentHeader.module.scss";
import cn from "classnames";

interface ContentHeaderProps {
    label: string;
    content: string;
    className?: string;
}

export const ContentHeader: FC<ContentHeaderProps> = ({ label, content, className }) => {
    return (
        <div className={cn(css.contentHeader, className)}>
            <div className={css.label}>{label}</div>
            <div className={css.content}>{content}</div>
        </div>
    )
}
