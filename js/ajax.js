var type="1";
var geoCoordMap=[];
var map=[];
//全国钢铁公司地理位置分布
	// 	$.ajax({
	// 	type:"GET",
	// 	url:"http://localhost:8080/BIMPlus/macdata.json",
	// 	dataType:'jsonp',
	// 	jsonp:"callback",
	// 	jsonpCallback:"callbackFun",
	// 	success:function(json){
	// 		var data=json;
	// 		if (json) {
	// 			for(var i=0;i<data.length;i++){
	// 				map.push({
	// 					divCode:data[i].divCode
	// 				});
	// 			}
	// 		}
	// 	/*	myChart.setOption({
	// 			series:[{
	// 				name:'产能',
	// 				data:geoCoordMap
	// 			}]
	// 		});*/
	// 	}
	// });
	
//点击地图上的点显示饼图
	
function query(x,y){	
	var capacity=[];
		$.ajax({
			type:"GET",
			url:"http://localhost:8080/BIMPlus/macdata.json",
			data:{macDataType:y,macDataYear:x},
			dataType:"jsonp",
			jsonp:"callback",
			//jsonpCallback:"callbackFun",
			success:function(json){
				for(var i=0;i<json.length;i++){
					//plist[i]=json[i].divName;
					capacity.push({
					name:json[i].divName,
					value:json[i].dataValue
				
					});	
				}
				myChart.setOption({
					series:[{
						name:'mapmap',
						data:capacity
					}]
				});
				myChart1.setOption({
						series:[{
						name:'piepie',
						data:capacity
						}]
				});
				myChart2.setOption({
					series:[{
						name:'barbar',
						data:capacity
					}]
				})
			}
		});
		return capacity;
	}
//点击省份显示所有数据

function province(x){
var arrGDP=[];
var arrCPI=[];
var arrPMI=[];
	$.ajax({
		type:"GET",
			url:"http://localhost:8080/BIMPlus/macdata.json",
			data:{macDivName:x},
			dataType:"jsonp",
			jsonp:"callback",
			success:function(json){
				for(let i=0;i<json.length;i++){
					if(json[i].dataType=="1"){
						arrGDP.push({
						dataYear:json[i].dataYear,
						value:json[i].dataValue
						});
					}else if(json[i].dataType=="3"){
						arrCPI.push({
							dataYear:json[i].dataYear,
							value:json[i].dataValue
						});
					}else{
						arrPMI.push({
							dataYear:json[i].dataYear,
							value:json[i].dataValue
						});
					}
				}
				myChart1.setOption({
					series:[{
						name:'piepie',
						data:arrGDP
					},{
						name:'piepie1',
						data:arrCPI
					},{
						name:'piepie2',
						data:arrPMI
					}]
				})
			}
	})
}

//点击产品显示详细月份产能
	function proMonth(){
		var capacity=[];
		$.ajax({
			type:"GET",
			url:"http://localhost:8080/BIMPlus/capacity.json",
			data:{comId:"AB0001",productId:"CD0030"},
			dataType:"jsonp",
			jsonp:"callback",
			jsonpCallback:"callbackFun",
			success:function(json){
				for(var i=0;i<json.length;i++){
					capacity[i]=json[i].capacity;
				}
				myChart.setOption({
					legend:{
						data:["CD0030","CD0031","CD0024","CD0019","CD0020"]
					},
					series:{
						name:"CD0030",
						data:capacity
					}
				});
			}
		})
	}

//输入年月筛选符合条件的数据
	function yearQuery(){
		var inputQuery=[];
		$.ajax({
			type:"GET",
			url:"http://localhost:8080/BIMPlus/capacity.json",
			data:$("#inputQuery").serialize(),
			dataType:"jsonp",
			jsonp:"callback",
			jsonpCallback:"callbackFun",
			success:function(json){
				for(var i=0;i<json.length;i++){
					inputQuery.push({
						value:parseInt(json[i].capacity),
						name:json[i].productId
						
					});
				}
				myChart.setOption({
					series:[{
						name:"产能占比",
						data:inputQuery
					}]
				});
			}
		});
	}

//切换热力图
	function heatmap(){
		myChart.setOption({
			series:{
				id:'heatmap',
				data:converdata(geocoord,mapinfo[0])
			}
		});
	}

//刷选工具
	

