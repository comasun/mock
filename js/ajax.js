var geoCoordMap=[];
var map=[];
//全国钢铁公司地理位置分布
		$.ajax({
		type:"GET",
		url:"http://localhost:8080/BIMPlus/companyList",
		dataType:'jsonp',
		jsonp:"callback",
		jsonpCallback:"callbackFun",
		success:function(json){
			var data=json;
			if (json) {
				for(var i=0;i<data.length;i++){
					geoCoordMap.push({
						Id:data[i].comId,
						name:data[i].comName,
						value:[data[i].longitude,data[i].latitude,data[i].comId]
					});
					map.push({
						comId:data[i].comId
					});
				}
			}
		/*	myChart.setOption({
				series:[{
					name:'产能',
					data:geoCoordMap
				}]
			});*/
		}
	});
	
//点击地图上的点显示饼图
	function query(x){
		var capacity=[];
		$.ajax({
			type:"GET",
			url:"http://localhost:8080/BIMPlus/capacity.json",
			data:map[x],
			dataType:"jsonp",
			jsonp:"callback",
			jsonpCallback:"callbackFun",
			success:function(json){
				for(var i=0;i<json.length;i++){
					capacity.push({
						value:parseInt(json[i].capacity),
						name:json[i].productId
					});
				}
				myChart.setOption({
					baseOption:{
						series:[{
						name:'piepie',
						data:capacity
						}]
					}
				});
			}

		});
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
	

