"use strict"

function init_transaction(nbr)
{
	window.all.t_data.transaction.value = nbr * 100 | 0;

	window.all.t_service.reset().call(
		'ManageTransaction',
		{
			hide: true,
			data: window.all.t_data
		})
	.success(function (e)
	{
		window.all.user_to_credit++;
		console.log('All is finished');
	})
	.error(function (e){
		window.all.user_to_credit++;
		console.log('ERROR: ' + e.response.transactionDetails);
	});
}