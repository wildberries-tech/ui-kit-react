import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconFlame = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M11.176 11.53c.546-.767.485-1.575.106-3.028-.75-2.873-.45-4.448 2.133-6.313l1.26-.91.305 1.525c.325 1.62.857 2.623 2.223 4.55l.11.154C19.28 10.285 20 11.96 20 15c0 3.688-3.729 7-8 7-4.272 0-8-3.311-8-7 0-.069 0-.067-.012-.371-.09-2.357.346-4.202 2.109-6.193.372-.42.796-.825 1.272-1.212l1.052-.855.507 1.258c.373.928.812 1.659 1.306 2.195.42.453.73 1.024.942 1.708ZM7.594 9.762c-1.357 1.533-1.68 2.899-1.607 4.79.013.352.013.34.013.448 0 2.528 2.783 5 6 5 3.216 0 6-2.473 6-5 0-2.542-.568-3.865-2.32-6.335l-.108-.154c-1.064-1.5-1.697-2.543-2.117-3.71-.685.82-.644 1.636-.238 3.197.75 2.873.451 4.448-2.132 6.313l-1.473 1.063-.11-1.813c-.07-1.159-.333-1.945-.737-2.383a7.89 7.89 0 0 1-1.082-1.515l-.089.099Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconFlame;
