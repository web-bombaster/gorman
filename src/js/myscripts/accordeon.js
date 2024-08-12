$('.accordeon-item__descr').hide(); // скрыли все открытые описания айтемов
$('.accordeon-item__title').on('click', f_accordeon); // по щелчку на заголовок айтема

function f_accordeon(){
	$('.accordeon-item__descr').not($(this).next()).slideUp(); //скрываем все кроме того, что должны открыть
	$(this).next().slideToggle(); // открываем или скрываем блок под заголовком, по которому кликнули
}
