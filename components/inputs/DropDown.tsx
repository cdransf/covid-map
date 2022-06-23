import React, { useEffect, useState } from 'react';

type DropDownProps = {
    values: object[]; //TODO implement as a generic
    valueSelection?: Function; //TODO make required
};

export const DropDown: React.FunctionComponent<DropDownProps> = ({
    values,
    valueSelection,
}: DropDownProps) => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);

    const onClickHandler = (value: string): void => {
        valueSelection?.(value);
    };

    useEffect(() => {
        setShowDropDown(showDropDown);
    }, [showDropDown]);

    return (
        <>
            <select className={showDropDown ? 'dropdown' : 'dropdown active'}>
                {values.map(
                    (value): JSX.Element => {
                        return (
                            <option
                                key={value.country}
                                onClick={(): void => {
                                    onClickHandler(value.country);
                                }}
                            >
                                {value.country}
                            </option>
                        );
                    }
                )}
            </select>
        </>
    );
};

DropDown.defaultProps = {
    valueSelection: () => {}
}
