function draw_charst_doc(data){
    var data_chart =[] 
    data.map((e)=>{
        data_chart.push({value:e[1],name:e[0]})
    })
    var chartDom = document.getElementById('draw_charts_doc');

var myChart = echarts.init(chartDom);
var option;

option = {
    title: {
        text: 'THỐNG KÊ SỐ LƯỢNG',
        subtext: 'Tài liệu theo bộ phận',
        left: 'center',
        textStyle: {
            fontFamily: "Montserrat",
            fontSize:14
          }
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
        textStyle: {
            fontFamily: "Montserrat",
            fontSize:10
          }
      },
    legend: {
        top: 'bottom',
        textStyle: {
            fontFamily: "Montserrat",
            fontSize:10
          }
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
    series: [
      {
        name: 'Số lượng tài liệu',
        type: 'pie',
        radius: [35, 80],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,

        },
        label: {
          show: false,
          position: 'center',
          textStyle: {
            fontFamily: "Montserrat",
            fontSize:8
          }
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold',
            fontFamily: "Montserrat",
          }
        },
        data: data_chart
      }
    ]
  };

option && myChart.setOption(option);
}