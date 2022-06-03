(function () {
    if (!sessionStorage.getItem('cookieconsent')) {
                    document.body.innerHTML += '\
					<div class="cookieconsent" style="font-family:sans-serif;position:fixed;padding:20px;left:0;bottom:0;background-color:#000;color:#FFF;text-align:center;width:100%;z-index:99999;">\
						Ce site n\'est pas à vendre et je n\'autorise aucune utilisation de ce code à but commercial. Le site est encore en construction.\
						<a href="#" style="color:#CCCCCC;">J\'accepte cette condition.</a>\
					</div>\
					';
                    document.querySelector('.cookieconsent a').onclick = function (e) {
                        e.preventDefault();
                        document.querySelector('.cookieconsent').style.display = 'none';
                        sessionStorage.setItem('cookieconsent', true);
                    };
                }
})();