var myChart = echarts.init(document.getElementById('mainarea'));
var plist=["北京市","天津市","河北省","山西省","内蒙古自治区","辽宁省","吉林省","黑龙江省","上海市","江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省","湖北省","湖南省","广东省","广西壮族自治区","海南省","重庆市","四川省","贵州省","云南省","西藏自治区","陕西省","甘肃省","青海省","宁夏回族自治区","新疆维吾尔自治区"];
var year=['2015','2014','2013','2012','2011','2010','2009','2008','2007','2006'];


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
		left:300,
		label:{
			emphasis:{
				show:false
			}//高亮
		},//图形上的文本标签
		roam:true,//开启鼠标缩放
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
	brush:{
		seriesIndex:[0,1],
		geoIndex:'all',
		brushStyle: {
            borderWidth: 2,
            color: 'rgba(0,0,0,0.2)',
            borderColor: 'rgba(0,0,0,0.5)',
        },
        outOfBrush:{
			color:'#abc'
        },
        throttleType:'debounce',
        throttleDelay:300
	},
//坐标系容器
	grid:{
		right:40,
		top:450,
		bottom:50,
		width:'20%'
	},
//X轴参数设置
	xAxis:{
		position:'top',
		//type:'value',
		scale:true,//比例尺
		boundaryGap:false,//坐标轴两边留白
		splitLine:{show:false},//刻度分隔线
		axisTick:{show:false},//坐标轴刻度，true为全显示	
		axisLine:{show:false},//坐标轴轴线
		axisLabel:{margin:2,textStyle:{color:'#aaa'}}
	},
//Y轴参数设置
	yAxis:{
		id:'top10',
		type:'category',
		nameGap:5,//坐标名与轴线之间的距离
		axisLine:{show:false,lineStyle:{color:'#ddd'}},
		axisTick:{show:false,lineStyle:{color:'#ddd'}},
		axisLabel:{interval:0,textStyle:{color:'#fff'}},//坐标轴标签设置项
		data:[]
	},
	
	series:[{
		name:'产值',
		type:'scatter',
		coordinateSystem:'geo',
		data:[],
		symboleSize:12,
		label:{
			emphasis:{
				show:false
			},
			normal:{
				show:false,
				//textStyle:{color:'#9e9d24'}
			}
		},
		itemStyle:{
			emphasis:{
				borderColor:'#9e9d24',
				borderWidth:1
			},
			normal:{
				color:'#00c853'
			}
		}
	},
//柱状图模块
	{
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
	},
	{
		name:"CD0030",
		zlevel:3,
		type:"bar",
		stack:"产能",
		label:{
			normal:{
				show:true,
				position:"inside"
			}
		},
		data:[]
	},
	{
		name:"CD0031",
		zlevel:2,
		type:"bar",
		stack:"产能",
		label:{
			normal:{
				show:true,
				position:"inside"
			}
		},
		data:[]
	},
	{
		name:"CD0024",
		zlevel:2,
		type:"bar",
		stack:"产能",
		label:{
			normal:{
				show:true,
				position:"inside"
			}
		},
		data:[]
	},
	{
		name:"CD0019",
		zlevel:2,
		type:"bar",
		stack:"产能",
		label:{
			normal:{
				show:true,
				position:"inside"
			}
		},
		data:[]
	},
	{
		name:"CD0020",
		zlevel:2,
		type:"bar",
		stack:"产能",
		label:{
			normal:{
				show:true,
				position:"inside"
			}
		},
		data:[]
	},
	{
		name:'piepie',
		center:['88%','30%'],
		zlevel:2,
		type:'pie',
		radius: '50%',
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
	},//饼图模块
//热力图模块
	{
		id:'heatmap',
		type:'heatmap',
		coordinateSystem:'geo',
		data:[],
		blurSize:20
	}]
	},
	options:[]	
};

for(let i=0;i<year.length;i++){
  option.options.push({
    series:[{
      name:'产值',
      type:'scatter',
      data:converdata(geocoord,mapinfo[i])
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
//myChart.on('brushselected',renderBrushed);//刷选事件
myChart.on("click",function(params){//点击事件，点击显示图表
	if (params.componentType=="series") {
		if (params.seriesType=="scatter") {
			query(params.dataIndex);
		}
	}
});
// myChart.on("click",function(params){
// 	if (params.componentType=="series") {
// 		if (params.seriesName=="产能占比") {
// 			proMonth();
// 		}
// 	}
// });
var caonima=0;
myChart.on("timelinechanged",function(params){
	 caonima=params.currentIndex;
});

myChart.on('brushselected', renderBrushed);
setTimeout(function(){
	myChart.dispatchAction({//区域刷子设置
		type:'brush',
		areas:[
			{
				geoIndex:0,
				brushType:'polygon',
				coordRange:[[119.72,34.85],[119.5,34.84],[119.5,34.84],[119.19,34.77]]
			}
		]
	});
},0);

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
		var dataItem=converdata(geocoord,mapinfo[caonima])[rawIndex];
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