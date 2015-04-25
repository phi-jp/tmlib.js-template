/*
 * 
 */


;(function(ns) {

	ns.gspread = {};

	gspread.post = function(sheetName, key, value) {
		sheetName = sheetName || 'test2';
		key = key || 'data1';
		value = value || 'hoge';

		var data = {};
		data['sheetName'] = sheetName;
		data[key] = value;
		tm.util.Ajax.load({
			url: "https://script.google.com/macros/s/AKfycbz9m_RmcZHXMS0912_dorY0VA1--XKl6emLxNTYNCJN9L4MhiHk/exec",
			type: "POST",
			data: data,
			success: function(d) {
				console.log('success request!');
			},
		});
	};

})(this);

