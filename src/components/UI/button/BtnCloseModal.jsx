import React from 'react';

const BtnCloseModal = ({...props}) => {

    let BaseIcon = function BaseIcon(_ref) {
        let color = _ref.color,
            _ref$pushRight = _ref.pushRight,
            pushRight = _ref$pushRight === undefined ? true : _ref$pushRight,
            children = _ref.children;
        return React.createElement(
            'svg',
            {
                xmlns: 'http://www.w3.org/2000/svg',
                width: '24',
                height: '24',
                viewBox: '0 0 24 24',
                fill: 'none',
                stroke: color,
                strokeWidth: '2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                style: { marginRight: pushRight ? '20px' : '0', minWidth: 24 }
            },
            children
        );
    };


    let CloseIcon = function CloseIcon() {
        return React.createElement(
            BaseIcon,
            { color: '#000000', pushRight: false },
            React.createElement('line', { x1: '18', y1: '6', x2: '6', y2: '18' }),
            React.createElement('line', { x1: '6', y1: '6', x2: '18', y2: '18' })
        );
    };

    return (
        <button {...props} className="mymodalBtnClose">
            {React.createElement(CloseIcon, null)}
        </button>
    );
};

export default BtnCloseModal;