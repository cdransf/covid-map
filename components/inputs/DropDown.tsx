import React, { useEffect, useState } from 'react';

type DropDownProps<DropdownData> = {
    values: DropdownData[];
    valueSelection?: (data: DropdownData) => void;
};

export const DropDown = <DropdownData extends {[key: string]: string}, >({
    values,
    valueSelection,
}: DropDownProps<DropdownData>) => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);

    const onClickHandler = (value: DropdownData): void => {
        valueSelection?.(value);
    };

    useEffect(() => {
        setShowDropDown(showDropDown);
    }, [showDropDown]);

    return (
        <>
            <select className={showDropDown ? 'dropdown' : 'dropdown active'}>
                {values.map((value) =>
                    <>
                        {(Object.keys(value).map((key) => {
                            return (<option
                                key={value[key]}
                                value={value[key].toLowerCase()}
                                onClick={(): void => {
                                    onClickHandler(value);
                                }}
                            >
                                {value[key]}
                            </option>)
                        }))}
                    </>
                )}
            </select>
        </>
    );
};

DropDown.defaultProps = {
    valueSelection: () => {}
}
