// Initialize the Module
_modules['clockhead'] = {};

_modules.clockhead.displayName = 'Clock Header'

// Runs when the module is switched on & on page load.
_modules.clockhead['startRun'] = function () {
	$('#title_input').prop('disabled', true);
	
	let style = $('<style id="clockhead_style">'+_modules.clockhead.SOURCE_style+'</style>')
	$('head').append(style);

	$('#HEADER').html(_modules.clockhead.SOURCE_header);

	_modules.clockhead['TIMER_Clock'] = setInterval(function() {
		let date = new Date();
		let hour = date.getHours();
		let minute = '' + date.getMinutes();
		if (hour > 12) {
			hour -= 12;
		};
		if (hour === 0) {
			hour = 12;
		};
		if (minute.length === 1) {
			minute = '0' + minute;
		};
		$('#HEADER #hour').text(hour);
		$('#HEADER #minute').text(minute);
	}, 500);

};

// Runs when the module is switched off.
_modules.clockhead['endRun'] = function () {
	$('#title_input').prop('disabled', false);
	$('#clockhead_style').remove();
	clearInterval(_modules.clockhead.TIMER_Clock);
	renderLinks();
};

// Run when links are rendered.
_modules.clockhead['onRender'] = function () {
	$('#HEADER').html(_modules.clockhead.SOURCE_header);
	let date = new Date();
	let hour = date.getHours();
	let minute = '' + date.getMinutes();
	if (hour > 12) {
		hour -= 12;
	};
	if (hour === 0) {
		hour = 12;
	};
	if (minute.length === 1) {
		minute = '0' + minute;
	};
	$('#HEADER #hour').text(hour);
	$('#HEADER #minute').text(minute);
};

_modules.clockhead['SOURCE_header'] = `<div id="hour">00</div><div id="colon">:</div><div id="minute">00</div>`;
_modules.clockhead['SOURCE_style'] = `

#HEADER div {
	display: inline-block;
}

#HEADER #colon {
	animation: blinkcolon 1.5s infinite;
}

@keyframes blinkcolon {
	0%   {opacity: 1;}
	50%  {opacity: 0;}
	100% {opacity: 1;}
  }

`