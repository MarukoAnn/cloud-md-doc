import React from 'react';
import PropTypes from  'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const BottomBtn = ({ text, colorClass, icon, onBtnClick }) => (
	<button
		type="button"
		className={`btn w-100 btn-clock no-border ${colorClass}`}
		onClick={() => {onBtnClick()}}
	>
		<FontAwesomeIcon
			className="mr-2 fa-1x "
			size={'lg'}
			icon={icon}
		/>
		{text}
	</button>
)

BottomBtn.propTypes = {
	text: PropTypes.string,
	colorClass: PropTypes.string,
	icon: PropTypes.element.isRequired,
	onBtnClick: PropTypes.func
}

export default BottomBtn;
