interface HeaderProps {
    children: React.ReactElement;
}

export const Header = (props: HeaderProps) => {
    const { children } = props;
    return (
        <div className="sm:text-4xl text-2xl text-center font-bold">
            {children}
        </div>
    );
};
