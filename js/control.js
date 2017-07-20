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
				data:converdata1(plist,mapinfo[caonima])
			},{
				name:'barbar',
				type:'bar',
				data:converdata1(plist,mapinfo[caonima])
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
var qwer=["GDP","人均GDP","CPI"];
//动态生成选项列表
function filter(){
	$("#www").hide();
	$("#xuanxiang li").remove();
	for(let x of qwer){
		$("#xuanxiang").append(
		'<li><a href="#" class="black-text" onclick="propoty()">'+x+'</a></li>'
	);}
}

$("#section3").click(function(){
	$(".panelll").slideToggle();
});