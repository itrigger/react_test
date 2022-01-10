import React from 'react';

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
        { color: '#ffffff', pushRight: false },
        React.createElement('line', { x1: '18', y1: '6', x2: '6', y2: '18' }),
        React.createElement('line', { x1: '6', y1: '6', x2: '18', y2: '18' })
    );
};

let _extends = Object.assign || function (target) {
    for (let i = 1; i < arguments.length; i++) {
        let source = arguments[i];

        for (let key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }

    return target;
};

let alertStyle = {
    backgroundColor: '#e2e2e2',
    color: '#000000',
    padding: '10px 30px 10px 10px',
    borderRadius: '6px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '3px 3px 10px 0px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial',
    width: '300px',
    boxSizing: 'border-box'
};

let alertStyleSuccess = {
    backgroundColor: '#44b42a',
    color: '#ffffff',
    padding: '10px 30px 10px 10px',
    borderRadius: '6px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '3px 3px 10px 0px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial',
    width: '300px',
    boxSizing: 'border-box'
}

let alertStyleError = {
    backgroundColor: '#ec5a5a',
    color: '#ffffff',
    padding: '10px 30px 10px 10px',
    borderRadius: '6px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '3px 3px 10px 0px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial',
    width: '300px',
    boxSizing: 'border-box'
}

let buttonStyle = {
    marginLeft: '20px',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    color: '#FFFFFF',
    position: 'absolute',
    top: '15px',
    right: '10px',
};

const AlertTemplate = function AlertTemplate(_ref) {
    let message = _ref.message,
        options = _ref.options,
        style = _ref.style,
        close = _ref.close;

    let newStyle = alertStyle;

    if(options.type === 'success'){
        newStyle = alertStyleSuccess;
    } else if(options.type === 'error') {
        newStyle = alertStyleError;
    }

    return React.createElement(
        'div',
        {style: _extends({},
                newStyle,
                style)},
        React.createElement(
            'span',
            {style: {flex: 2}},
            message
        ),
        React.createElement(
            'button',
            {onClick: close, style: buttonStyle},
            React.createElement(CloseIcon, null)
        )
    );
};

export default AlertTemplate;
