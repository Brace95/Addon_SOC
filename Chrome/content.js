chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    $("input[type=radio]").each(function () {

		var pattern = /^competent/i
		if(pattern.test($('label[for="' + $(this).attr("id") + '"]').html()))
			$(this).attr('checked', true);

	});
  }
);