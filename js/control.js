$(document).ready(function(){
			$('.parallax').parallax();
			$(".dropdown-button").dropdown();
			$(".collapse").sideNav();
    });
//点击属性显示详细信息
function propoty(){
	myChart.setOption({
		baseOption:{
			yAxis:{
				id:'top10',
				data:plist
			},
		}
	});
	if(event.srcElement.id=="shuxin"){
		myChart.setOption({
			baseOption:{
				series:[{
				name:'piepie',
				center:['88%','25%'],
				data:converdata1(plist,mapinfo[hope])
			},{
				name:'barbar',
				type:'bar',
				data:converdata1(plist,mapinfo[hope])
			}]
			}
		})
	}else{
		myChart.setOption({
			baseOption:{
				series:[{
				name:'piepie',
				center:['88%','25%'],
				data:converdata1(plist,mapinfo[9])
			},{
				name:'barbar',
				data:converdata1(plist,mapinfo[9])
			}]
			}
		})
	}
}

function gdp(){
	alert(event.srcElement.innerHTML);
}

var qwer=[];
var a=[1,1,2];
var b=["GDP","人均GDP","CPI"]
for(let i=0;i<3;i++){
	qwer.push({
	name:a[i],
	value:b[i]
});
}

//动态生成选项列表
function filter(){
	$("#www").hide();
	//$("#xuanxiang li").remove();
	for(let i=0;i<3;i++){
		if(qwer[i].name==2){
			$("#xuanxiang").append(
			'<input placeholder="输入筛选信息" type="text"/>'
			);
		}else{
			$("#xuanxiang").append(
			'<li><a href="#" class="white-text" onclick="propoty()">'+qwer[i].value+'</a></li>'
			)
		}
	}		
	$('.button-collapse').sideNav('hide');
}