import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconCallNo = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="m1.293 21.293 1.414 1.414 4.831-4.83c4.435 4.025 9.902 5.422 12.566 2.757.465-.448.858-.842 1.169-1.17.895-.946 1.03-2.604-.006-3.681-.532-.553-1.617-1.394-3.534-2.766-.587-.525-1.284-.411-1.922.008-.307.201-.53.405-.952.827l-.767.767c-.082.082-1.003-.356-2.059-1.238L22.707 2.707l-1.414-1.414-20 20Zm9.317-6.489L8.954 16.46c3.724 3.343 8.044 4.453 9.75 2.747.457-.441.83-.815 1.117-1.118.208-.219.245-.671.006-.92-.397-.412-1.37-1.17-3.05-2.377a6.866 6.866 0 0 0-.505.474l-.766.767c-1.153 1.153-3.021.417-4.896-1.229ZM9.374 9.9c-.036.036.03.235.19.538l-1.471 1.47c-.806-1.34-.98-2.575-.132-3.423l.766-.766c.123-.123.18-.18.246-.25.092-.097.167-.182.228-.257-1.166-1.623-1.958-2.637-2.385-3.06-.22-.217-.714-.177-.896.002-.483.476-.642.635-1.144 1.145-1.48 1.48-.816 4.971 1.608 8.318l-1.43 1.43C1.85 10.913.974 6.273 3.357 3.889c.504-.512.67-.678 1.16-1.161.914-.9 2.649-1.041 3.703 0 .555.549 1.44 1.686 2.755 3.526.585.65.4 1.386-.118 2.084a5.448 5.448 0 0 1-.436.508c-.082.087-.146.152-.28.286l-.767.767Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconCallNo;
