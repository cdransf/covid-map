import React, { useEffect, useState } from 'react';

type DropDownProps = {
    countries: string[];
    showDropDown: boolean;
    toggleDropDown: Function;
    countrySelection: Function;
};

const DropDown: React.FunctionComponent<DropDownProps> = ({
    countries;
    countrySelection,
}: DropDownProps): JSX.Element => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);


    const onClickHandler = (country: string): void => {
        countrySelection(country);
    };

    useEffect(() => {
        setShowDropDown(showDropDown);
    }, [showDropDown]);

    return (
        <>
            <div className={showDropDown ? 'dropdown' : 'dropdown active'}>
                {contries.map(
                    (country: string, index: number): JSX.Element => {
                        return (
                            <p
                                key={index}
                                onClick={(): void => {
                                    onClickHandler(country);
                                }}
                            >
                                {country}
                            </p>
                        );
                    }
                )}
            </div>
        </>
    );
};

export default DropDown;

