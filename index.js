import React from 'react';
import ReactDom from 'react-dom';
import 'css/style';
import ReactStudy from 'js/reactStudy';

function rootDiv(){
	let Div = document.createElement('div');
	Div.setAttribute('id','app');
	return Div
}

document.body.appendChild(rootDiv());

ReactDom.render(
	<div className="test">这是一次练习
		<ReactStudy></ReactStudy>
	</div>,
	document.getElementById('app')
);