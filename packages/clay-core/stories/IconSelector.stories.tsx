/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');

import {IconSelector} from '../src/icon-selector';

export default {
	title: 'Design System/Components/IconSelector',
};

export const Default = () => {
	return (
		<div>
			<IconSelector spritemap={spritemap} />
		</div>
	);
};
