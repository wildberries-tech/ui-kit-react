import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconGlobeNo = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M3.547 4.96 1.293 2.708l1.414-1.414 20 20-1.414 1.414-2.254-2.254A10.956 10.956 0 0 1 12 23C5.925 23 1 18.075 1 12c0-2.678.957-5.132 2.547-7.04Zm14.07 14.072-1.296-1.297c-.259.987-.587 1.872-.976 2.623.825-.33 1.59-.78 2.273-1.326Zm-4.077-4.078 1.098 1.098C14.086 19 12.996 21 12 21c-1.123 0-2.367-2.543-2.821-6.123.897.081 1.842.123 2.821.123.518 0 1.033-.016 1.54-.046Zm-1.957-1.957L9.05 10.464a23.415 23.415 0 0 0-.035 2.386c.813.085 1.674.135 2.568.147ZM7.218 8.633a25.337 25.337 0 0 0-.212 3.917 15.421 15.421 0 0 1-1.598-.402c-1.24-.39-2.05-.867-2.342-1.24a8.958 8.958 0 0 1 1.902-4.526l2.25 2.25Zm1.437-4.99c-.177.341-.342.71-.493 1.105L9.744 6.33C10.338 4.292 11.2 3 12 3c1.367 0 2.911 3.765 2.996 8.582l2.752 2.752c1.227-.3 2.311-.69 3.173-1.138a8.941 8.941 0 0 1-1.082 3.229l1.458 1.457A10.948 10.948 0 0 0 23 12c0-6.075-4.925-11-11-11-2.164 0-4.181.625-5.882 1.703l1.457 1.458a8.96 8.96 0 0 1 1.08-.519ZM7.129 14.61c-1.606-.28-2.983-.702-4.026-1.245a9.012 9.012 0 0 0 5.552 6.992c-.766-1.479-1.296-3.48-1.526-5.747Zm13.8-3.75c-.471.527-1.955 1.155-3.933 1.593.003-.15.004-.302.004-.454 0-3.328-.606-6.333-1.655-8.358a9.01 9.01 0 0 1 5.583 7.218Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconGlobeNo;
