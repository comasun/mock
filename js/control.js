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
		// myChart.setOption({
		// 	baseOption:{
		// 		series:[{
		// 		name:'piepie',
		// 		center:['88%','25%'],
		// 		data:query(year[hope],"1")
		// 	},{
		// 		name:'barbar',
		// 		type:'bar',
		// 		data:query(year[hope],"1")
		// 	}]
		// 	}
		// })
	}else if(event.srcElement.innerHTML=="CPI"){
		// myChart.setOption({
		// 	baseOption:{
		// 		series:[{
		// 		name:'piepie',
		// 		center:['88%','25%'],
		// 		data:query(year[hope],"3")
		// 	},{
		// 		name:'barbar',
		// 		data:query(year[hope],"3")
		// 	}]
		// 	}
		// })
		type="3";
		query(year[hope],type);
	}else{
		// myChart.setOption({
		// 	baseOption:{
		// 		series:[{
		// 		name:'piepie',
		// 		center:['88%','25%'],
		// 		data:query(year[hope],"5")
		// 	},{
		// 		name:'barbar',
		// 		data:query(year[hope],"5")
		// 	}]
		// 	}
		// })
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

//动态生成一级列表
function menulv1(){
var menu=[];
	$.ajax({
		type:'GET',
		//url:"http://localhost:8080/BIMPlus/macdata.json",
		//data:{macDataType:1},
		dataType:"jsonp",
		jsonp:"callback",
		jsonpCallback:"callbackFun",
		success:function(json){
			for(let i=0;i<3;i++){
				menu.push({
					dataType:json[i].dataType,
					value:json[i].dataValue
		})
			$("#slide-out").append(
			'<li><a href="#!" onclick="filter()"><i class="material-icons">cloud</i>'+menu[i].dataValue+'</a></li>'
			)
			}
		}
	});
}

//动态生成二级列表
function menulv2(){
var menu=[];
	$.ajax({
		type:'GET',
		//url:"http://localhost:8080/BIMPlus/macdata.json",
		//data:{macDataType:1},
		dataType:"jsonp",
		jsonp:"callback",
		jsonpCallback:"callbackFun",
		success:function(){
			menu.push({
				dataType:json[i].dataType,
				value:json[i].dataValue
			})
			$("#xuanxiang li").remove();
			for(let i=0;i<3;i++){
				if(menu[i].dataType==2){
					$("#xuanxiang").append(
					'<input placeholder="输入筛选信息" type="text"/>'
					);
				}else{
					$("#xuanxiang").append(
					'<li><a href="#!" class="white-text" onclick="propoty()">'+menu[i].value+'</a></li>'
					)
				}
			}		
			$('.button-collapse').sideNav('hide');
		}
	});
}