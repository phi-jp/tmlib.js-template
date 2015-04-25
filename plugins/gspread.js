/*
 * 
 */


;(function(ns) {


	ns.gspread = {};
	gspread.post = function(sheetName, values) {
		sheetName = sheetName || 'test2';

		var data = {
			'sheetName': sheetName,
			'id': this.getUserId(),
		};
		data.$extend(values);

		console.log(data);

		tm.util.Ajax.load({
			url: "https://script.google.com/macros/s/AKfycbz9m_RmcZHXMS0912_dorY0VA1--XKl6emLxNTYNCJN9L4MhiHk/exec",
			type: "POST",
			data: data,
			success: function(d) {
				console.log('success request!');
			},
		});
	};

	gspread.initUserId = function(force) {
		// デフォルトの id をセット
		var userId = localStorage.getItem('gspread-userId');
		if (!userId || force === true) {
			userId = (new Date()).getTime().toHex();
			this.setUserId(userId);
		}
		else {
			this._userId = userId;
		}

		return this;
	};

	gspread.setUserId = function(id) {
		this._userId = id;
		localStorage.setItem('gspread-userId', this._userId);

		return this;
	};

	gspread.getUserId = function() {
		return this._userId;
	};

	gspread.initUserId();

})(this);

