	var p = document.getElementById("p");

	$.getUrlParam = function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if (r !== null) return unescape(r[2]); return null;
	};

	var query = $.getUrlParam('to_url');
	var is_base64 = $.getUrlParam('is_base64');
	//两个参数的使用方法
	/*
	to_url:必须,URL值,可以base64
	string,eg:http://www.baidu.com
	is_base64:可选,默认false,若ture先解码再跳转
	string(bool),true;false
	*/
	if(!is_base64){
		is_base64 = false;
	}
	if(!!query) {
		try {
			if(is_base64){
				query = Base64.decode(query);
			}
		} catch(e) {
			console.log(e);
		}
	}else{
		//debug
		//query = "http://www.baidu.com";
	}
	
	/*根据to_url参数跳转*/
	var target_str=query//encodeURIComponent(query);
	p.innerHTML="<a href=\""+target_str+"\">Targe URL:"+target_str+"</a>";
	console.log("target_url:"+target_str);
	if(!!query) {
		window.location.href = target_str;
		//window.open(encodeURIComponent(query));
	}	