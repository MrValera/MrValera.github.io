function createRow (rowName) {
		var rowName = document.createElement('div');
		document.body.appendChild(rowName);
		rowName.classList.add('row');
		return rowName;
	}
	
	var timerRow = createRow(timerRow);
	var startResetRow = createRow(startResetRow);
	var splitRow = createRow(splitRow);
	

	var timerUnit = document.createElement('div');
	timerRow.appendChild(timerUnit);
	timerUnit.innerHTML = '00:00:00:000';
	timerUnit.classList.add('col-md-2', 'col-md-offset-5', 'text-center');
	
	var startButton = document.createElement('button');
	startResetRow.appendChild(startButton);
	startButton.classList.add('btn', 'btn-danger', 'col-md-1', 'col-md-offset-5');
	startButton.setAttribute('type', 'button');
	startButton.innerHTML = 'Start';
	startButton.addEventListener("click", startTimer);
	
	var resetButton = document.createElement('button');
	startResetRow.appendChild(resetButton);
	resetButton.classList.add('btn', 'btn-danger', 'col-md-1');
	resetButton.setAttribute('type', 'button');
	resetButton.innerHTML = 'Reset';
	resetButton.addEventListener("click", resetTimer);
	
	var splitButton = document.createElement('button');
	splitRow.appendChild(splitButton);
	splitButton.classList.add('btn', 'btn-warning', 'col-md-2', 'col-md-offset-5', 'row');
	splitButton.setAttribute('type', 'button');
	splitButton.innerHTML = 'Split';
	splitButton.addEventListener("click", splitTime);
	
	var counter = new Date(0, 0),
	sec = 0,
	min = 0,
	hours = 0,
	timer,
	time;
	
	function countTime() {
		counter.setMilliseconds( counter.getMilliseconds() + 4);
		var msec = counter.getMilliseconds();
		var msecCount, secCount, minCount, hoursCount;
		
			if ( msec === 996) {
				++sec;
			} 
	
			if (sec >= 60) {
				sec = 0;
				++min;
			} 
	
			if (min >= 60) {
				min = 0;
				++hours;
			} 
			
			if (msec < 10) {
				msecCount = '00' + msec;
			} else if (msec < 100) {
				msecCount = '0' + msec;
			} else {
				msecCount = msec;
			}
	
			if (sec < 10) {
				secCount = '0' + sec;
			} else {
				secCount = sec;
			}
	
			if (min < 10) {
				minCount = '0' + min;
			} else {
				minCount = min;
			}
	
			if (hours < 10) {
				hoursCount = '0' + hours;
			} else {
				hoursCount = hours;
			}
	
		time = hoursCount + ':' + minCount + ':' + secCount + ':' + msecCount;
		timerUnit.innerHTML = time;
	}
	
	function startTimer(){
		startButton.classList.add('btn', 'btn-primary');
		startButton.classList.remove('btn-danger', 'btn-success');
		startButton.innerHTML = 'Pause';
		timer = setInterval(countTime, 4);
		startButton.removeEventListener("click", startTimer);
		startButton.addEventListener("click", pauseTimer);
	}
	
	function pauseTimer(){
		startButton.classList.add('btn-success');
		startButton.classList.remove('btn-primary');
		startButton.innerHTML = 'Continue';
		clearInterval(timer);
		timerUnit.innerHTML = time;
		startButton.removeEventListener("click", pauseTimer);
		startButton.addEventListener("click", startTimer);
	}
	
	function resetTimer(){
		startButton.classList.remove('btn-primary', 'btn-success');
		startButton.classList.add('btn-danger');
		startButton.innerHTML = 'Start';
		timerUnit.innerHTML = '00:00:00:000';
		clearInterval(timer);
		startButton.removeEventListener("click", pauseTimer);
		startButton.addEventListener("click", startTimer);
		var timestamp = document.querySelectorAll('.test');
		
		counter = new Date(0, 0);
		sec = 0;
		min = 0;
		hours = 0;
	}
	
	function splitTime() {
		var timestamp = document.createElement('p');
		document.body.appendChild(timestamp);
		timestamp.classList.add('test', 'col-md-2', 'col-md-offset-5', 'text-center', 'row');
		timestamp.innerHTML = timerUnit.innerHTML;
	}
