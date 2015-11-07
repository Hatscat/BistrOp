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
		console.log('All is finished');
	})
	.error(function (e){
		console.log('ERROR: ' + e.response.transactionDetails);
	});
}