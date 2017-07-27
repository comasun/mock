var myChart = echarts.init(document.getElementById('mainarea'));
var myChart1=echarts.init(document.getElementById('mainarea1'));
var myChart2=echarts.init(document.getElementById('mainarea2'));
//echarts.connect([myChart, myChart1]);
var year=['2015','2014','2013','2012','2011','2010','2009','2008','2007','2006'];
var pilst=["北京","天津","河北","山西","内蒙古","辽宁","吉林","黑龙江","上海","江苏","浙江","安徽","福建","江西","山东","河南","湖北","湖南","广东","广西","海南","重庆","四川","贵州","云南","西藏","陕西","甘肃","青海","宁夏","新疆"];


var option = {
	baseOption:{
		timeline:{
      axisType:'category',
      autoPlay:false,
      orient:'horizontal',
			data:year,
			label:{
				normal:{
					textStyle:{
						color:'#fff'
					}
				}
			}
  },
	title:{
		text:'全国生产总值信息'
	},//标题
	backgroundColor:'#404a59',//背景颜色
	tooltip:{
		trigger:'item',
		triggerOn:'mousemove',
		hideDelay:100,
		formatter: function(params) {
			return params.name + ' : ' + params.value[2];
		}
	},//提示框
	geo:{
		map:'china',//地图
		show:false,
		left:300,
		label:{
			emphasis:{
				show:true
			},
			normal:{
				show:true
			}
		},
		roam:false,//开启鼠标缩放
		itemStyle:{
			normal:{
				areaColor:'#323c48',
				borderColor:'#111'
			},
			emphasis:{
				areaColor:'#2a333d'
			}
		}
	},
//工具栏
	toolbox:{
		show:true,
		orient:'vertical',
		left:'right',
		top:'top',
		feature:{
			saveAsImage:{}
		}
	},
//视觉映射
	visualMap:{
		type:'continuous',
		min:0,
		max:75000,
		left:'left',
		top:'bottom',
		text:['多','少'],
		calculable:true,
		inRange:{
			color:['#50a3ba','#eac736','#d94e5d']
		},
		textStyle:{
			color:'#fff'
		}
	},
//区域刷子工具
	// brush:{
	// 	seriesIndex:[0,1],
	// 	geoIndex:'all',
	// 	brushStyle: {
  //           borderWidth: 2,
  //           color: 'rgba(0,0,0,0.2)',
  //           borderColor: 'rgba(0,0,0,0.5)',
  //       },
  //       outOfBrush:{
	// 		color:'#abc'
  //       },
  //       throttleType:'debounce',
  //       throttleDelay:300
	// },
//坐标系容器
	
//X轴参数设置
	
//Y轴参数设置
	
	
	series:[
	// 	{
	// 	name:'产值',
	// 	type:'scatter',
	// 	coordinateSystem:'geo',
	// 	data:[],
	// 	symboleSize:12,
	// 	label:{
	// 		emphasis:{
	// 			show:false
	// 		},
	// 		normal:{
	// 			show:false,
	// 			//textStyle:{color:'#9e9d24'}
	// 		}
	// 	},
	// 	itemStyle:{
	// 		emphasis:{
	// 			borderColor:'#9e9d24',
	// 			borderWidth:1
	// 		},
	// 		normal:{
	// 			color:'#00c853'
	// 		}
	// 	}
	// },
	{
		name:'mapmap',
		left:300,
		label:{
			emphasis:{
				show:true
			},
			normal:{
				show:true
			}
		},
		type:'map',
		map:'china',
		tooltip:{
			show:false
		},
		data:[],
		tooltip:{
			 formatter: function(params) {
			 return params.name + ' : ' + params.value;
		}},
	},
//柱状图模块
	
	// {
	// 	name:"CD0030",
	// 	zlevel:3,
	// 	type:"bar",
	// 	stack:"产能",
	// 	label:{
	// 		normal:{
	// 			show:true,
	// 			position:"inside"
	// 		}
	// 	},
	// 	data:[]
	// },
	// {
	// 	name:"CD0031",
	// 	zlevel:2,
	// 	type:"bar",
	// 	stack:"产能",
	// 	label:{
	// 		normal:{
	// 			show:true,
	// 			position:"inside"
	// 		}
	// 	},
	// 	data:[]
	// },
	// {
	// 	name:"CD0024",
	// 	zlevel:2,
	// 	type:"bar",
	// 	stack:"产能",
	// 	label:{
	// 		normal:{
	// 			show:true,
	// 			position:"inside"
	// 		}
	// 	},
	// 	data:[]
	// },
	// {
	// 	name:"CD0019",
	// 	zlevel:2,
	// 	type:"bar",
	// 	stack:"产能",
	// 	label:{
	// 		normal:{
	// 			show:true,
	// 			position:"inside"
	// 		}
	// 	},
	// 	data:[]
	// },
	// {
	// 	name:"CD0020",
	// 	zlevel:2,
	// 	type:"bar",
	// 	stack:"产能",
	// 	label:{
	// 		normal:{
	// 			show:true,
	// 			position:"inside"
	// 		}
	// 	},
	// 	data:[]
	// },
	//饼图模块
//热力图模块
	{
		id:'heatmap',
		type:'heatmap',
		coordinateSystem:'geo',
		data:[],
		blurSize:20
	}]
	},
	options:[],
	media:[
		{
			query:{
				minWidth:1200
			},
			option:{
				series:[{
					name:'mapmap',
					center:['60%','70%']
				}]
			}
		},{
			query:{
				maxWidth:1200
			},
			option:{
				series:[{
					name:'mapmap',
					left:10,
					right:10
				},{
					name:'piepie',
					center:['70%','50%']
				}]
			}
		}
	]
};

var option1={
	title:{
		text:'全国生产总值信息'
	},//标题
	backgroundColor:'#404a59',//背景颜色
	tooltip:{
		trigger:'item',
		triggerOn:'mousemove',
		hideDelay:100,
		formatter: function(params) {
			return params.name + ' : ' + params.value[2];
		}
	},
	
	series:[{
		name:'piepie',
		center:['50%','50%'],
		zlevel:2,
		type:'pie',
		radius: '85%',
		roseType:'radius',
		tooltip:{
			trigger:'item',
			triggerOn:'mousemove',
			hideDelay:100,
			formatter: function(params) {
				return params.name + ' : ' + params.value;
			}
		},
		label:{
			normal:{
				show:false,
				position:'inside'
			}
		},
		data:[]
	}]
}

var option2={
	title:{
		text:'全国生产总值信息'
	},//标题
	backgroundColor:'#404a59',//背景颜色
	tooltip:{
		trigger:'item',
		triggerOn:'mousemove',
		hideDelay:100,
		formatter: function(params) {
			return params.name + ' : ' + params.value[2];
		}
	},
	grid:{
		//right:40,
		//top:450,
		left:'center',
		bottom:15,
		width:'90%'
	},
	xAxis:{
		id:'top10',
		type:'category',
		data:pilst,
		scale:true,//比例尺
		boundaryGap:false,//坐标轴两边留白
		splitLine:{show:false},//刻度分隔线
		axisTick:{show:false},//坐标轴刻度，true为全显示	
		axisLine:{show:false},//坐标轴轴线
		axisLabel:{margin:2,textStyle:{color:'#aaa'}},
	},
	yAxis:{
		type:'value',
		nameGap:0,//坐标名与轴线之间的距离
		min:80,
		splitLine:{show:false},
		axisLine:{show:false,lineStyle:{color:'#ddd'}},
		axisTick:{show:false,lineStyle:{color:'#ddd'}},
		axisLabel:{interval:0,textStyle:{color:'#fff'}},//坐标轴标签设置项
	},
	series:[{
		name:'barbar',
		zlevel:2,
		type:'bar',
		symbol:'none',
		itemStyle:{
			normal:{
				color:'#ddb926'
			}
		},
		data:[],
		tooltip:{
			formatter:function(params){
			return params.name+':'+params.value;
			}
		}
	}]
}

 for(let i=0;i<year.length;i++){
   option.options.push({
     series:[{
       name:'mapmap',
			 type:'map',
			 map:'china',
       data:converdata1(pilst,mapinfo[i])
     }]
   });
 }

function converdata(arr,arr1){
  var temp=[];
  for(let i=0;i<arr.length;i++){
    temp.push({
      name:arr[i][0],
      value:[arr[i][1],arr[i][2],arr1[i]]
    });
  }
  return temp;
}

function converdata1(arr,arr1){
	var temp=[];
	for(let i=0;i<arr.length;i++){
		temp.push({
			name:arr[i],
			value:arr1[i]
		});
	}
	return temp;
}


myChart.setOption(option);
myChart1.setOption(option1);
myChart2.setOption(option2);
//myChart.on('brushselected',renderBrushed);//刷选事件
myChart.on("click",function(params){//点击事件，点击显示图表
	if(params.componentType=='geo'){
		//alert(params.name);
		province(params.dataIndex);
	}
});
// myChart.on("click",function(params){
// 	if (params.componentType=="series") {
// 		if (params.seriesName=="产能占比") {
// 			proMonth();
// 		}
// 	}
// });
var hope=0;
myChart.on("timelinechanged",function(params){
	 hope=params.currentIndex;
		query(year[hope],type);
		
});

// myChart.on('brushselected', renderBrushed);
// setTimeout(function(){
// 	myChart.dispatchAction({//区域刷子设置
// 		type:'brush',
// 		areas:[
// 			{
// 				geoIndex:0,
// 				brushType:'polygon',
// 				coordRange:[[119.72,34.85],[119.5,34.84],[119.5,34.84],[119.19,34.77]]
// 			}
// 		]
// 	});
// },0);

function renderBrushed(params){

	var mainSeries = params.batch[0].selected[0];

	var selectedItems=[];
	var categoryData=[];
	var barData=[];
	var maxBar=20;
	var sum=0;
	var count=0;

		for(var i=0;i<mainSeries.dataIndex.length;i++){
		var rawIndex=mainSeries.dataIndex[i];
		var dataItem=converdata(geocoord,mapinfo[hope])[rawIndex];
		var pdValue=dataItem.value[2];

		sum += pdValue;
		count++;

		selectedItems.push(dataItem);
		}

	

	selectedItems.sort(function(a,b){
		return a.value[2]-b.value[2];
	});

		for(var i=0;i<Math.min(selectedItems.length,maxBar);i++){
			categoryData.push(selectedItems[i].name);
			barData.push(selectedItems[i].value[2]);	
		}

	
	this.setOption({
		baseOption:{
			yAxis:{
				data:categoryData
		},
			xAxis:{
				axisLabel:{show:!!count}
			},
			series:[{
				name:'barbar',
				type:'bar',
				data:barData
			},{
				name:'piepie',
				type:'pie',
				data:converdata1(categoryData,barData)
			}]
		}
	});			
}