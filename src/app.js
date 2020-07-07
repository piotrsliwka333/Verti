document.addEventListener('DOMContentLoaded',function () {
	const $body = document.querySelector('body');
	const $toggleBtn = document.querySelector('.toggle-menu');
	const $pageHeder = document.querySelector('.page-header');
	const $pageNav = document.querySelector('.nav')
	const $dropDownBtn = document.querySelector('#drop-down');
	const $dropDownMenu = document.querySelector('#drop-down-menu');
	const $main = document.querySelector('main')

	$toggleBtn.addEventListener('click',function () {
		$pageHeder.classList.toggle('page-heder-active-nav')
		$main.classList.toggle('page-heder-active-nav')
		$pageNav.classList.toggle('nav-active')
		// when we remove class imediatly where will show white belt on the bottom coz our animation take 0.3ms
		if($body.classList.contains('active-nav-body')) {
			setTimeout(() => {
				$body.classList.toggle('active-nav-body')
			},600)
		} else {
			$body.classList.toggle('active-nav-body')
		}
	})

	$dropDownBtn.addEventListener('click',() => {
		$dropDownMenu.classList.toggle('active-drop-down-menu')
	})
})