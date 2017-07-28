$(document).ready(function(){
			$('.parallax').parallax();
			$(".dropdown-button").dropdown();
			$(".collapse").sideNav();
			$("#www").hide();
    });
//点击属性显示详细信息
function propoty(){
	// myChart.setOption({
	// 	baseOption:{
	// 		xAxis:{
	// 			id:'top10',
	// 			data:plist
	// 		},
	// 	}
	// });
	if(event.srcElement.innerHTML=="GDP"){
		type="1";
		query(year[hope],type);
	}else if(event.srcElement.innerHTML=="CPI"){
		type="3";
		query(year[hope],type);
	}else{
		type="5";
		query(year[hope],type);
	}
}

var qwer=[];
var a=[1,1,1];
var b=["GDP","人均GDP","CPI"]
for(let i=0;i<3;i++){
	qwer.push({
	name:a[i],
	value:b[i]
});
}
var menu=[];
//动态生成一级列表
function menulv1(){

	$.ajax({
		type:'GET',
		url:"http://localhost:8080/BIMPlus/menuList.json",
		//data:{macDataType:1},
		dataType:"jsonp",
		jsonp:"callback",
		jsonpCallback:"callbackFun",
		success:function(json){
			$(".dynatree-container span").remove();
			$("#tree").dynatree({
			title: "Programming Sample",
			onActivate: function(node) {
				$("#echoActive").text(node.data.title);
				menulv2();
				if( node.data.url )
					window.open(node.data.url, node.data.target);
			}
		});
			for(let i=0;i<json.length;i++){
				menu.push({
					ID:json[i].menuId,
					value:json[i].menuName
				});
				var obj = [
				{ title: menu[i].value, isFolder: true,
					children: [
						{ title: 'GDP' },
						{ title: 'CPI' }
					]
				}
			];
				$("#tree").dynatree("getRoot").addChild(obj);
				$(".dynatree-title").attr('class','black-text');
				$(".black-text").prepend('<i class="material-icons">cloud</i>');
			}
		}
	});
}

//动态生成二级列表
function menulv2(){

	// for(let i=0;i<menu.length;i++){
	// 	if(event.srcElement.innerHTML==menu[i].menuName){
	// 		var x=menu[i].ID;
	// 	}
	// }

var menulv=[];
	$.ajax({
		type:'GET',
		url:"http://localhost:8080/BIMPlus/selectItemList.json",
		data:{menuId:"110000"},
		dataType:"jsonp",
		jsonp:"callback",
		jsonpCallback:"callbackFun",
		success:function(json){
			$("#xuanxiang li").remove();
			for(let i=0;i<json.length;i++){
				menulv.push({
				//dataType:json[i].siId,
				value:json[i].siName
			})
				if(menulv[i].dataType==2){
					$("#xuanxiang").append(
					'<input placeholder="输入筛选信息" type="text"/>'
					);
				}else{
					$("#xuanxiang").append(
					'<li><a href="#!" class="white-text" onclick="propoty()">'+menulv[i].value+'</a></li>'
					)
				}
			}		
			$('.button-collapse').sideNav('hide');
		}
	});
}