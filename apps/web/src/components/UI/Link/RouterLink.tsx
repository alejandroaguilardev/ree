import { Link } from 'react-router-dom';

interface RouterLinkProps {
    to: string;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export const RouterLink: React.FC<RouterLinkProps> = ({ to, children, className, style }) => {
    return (
        <Link to={to} className={className} style={style}>
            {children}
        </Link>
    );
};

