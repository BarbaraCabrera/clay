/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

export interface IProps extends React.HTMLAttributes<HTMLUListElement> {
	/**
	 * Flag to indicate the Management Toolbar Item List should fit the width of the parent container.
	 */
	expand?: boolean;
}

const ItemList = ({children, expand}: IProps) => (
	<ul
		className={classNames('navbar-nav', {
			'navbar-nav-expand': expand,
		})}
	>
		{children}
	</ul>
);

export {ItemList};
export default ItemList;
