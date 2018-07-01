<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
/* The Modal (background) */
.modal {
	display: none; /* Hidden by default */
	position: fixed; /* Stay in place */
	z-index: 1; /* Sit on top */
	padding-top: 100px; /* Location of the box */
	left: 0;
	top: 0;
	width: 100%; /* Full width */
	height: 100%; /* Full height */
	overflow: auto; /* Enable scroll if needed */
	background-color: rgb(0, 0, 0); /* Fallback color */
	background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
	position: relative;
	background-color: #fefefe;
	margin: auto;
	padding: 0;
	border: 1px solid #888;
	width: 80%;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0
		rgba(0, 0, 0, 0.19);
	-webkit-animation-name: animatetop;
	-webkit-animation-duration: 0.4s;
	animation-name: animatetop;
	animation-duration: 0.4s
}

/* Add Animation */
@
-webkit-keyframes animatetop {
	from {top: -300px;
	opacity: 0
}

to {
	top: 0;
	opacity: 1
}

}
@
keyframes animatetop {
	from {top: -300px;
	opacity: 0
}

to {
	top: 0;
	opacity: 1
}

}

/* The Close Button */
.close {
	color: white;
	float: right;
	font-size: 28px;
	font-weight: bold;
}

.close:hover, .close:focus {
	color: #000;
	text-decoration: none;
	cursor: pointer;
}

.modal-header {
	padding: 2px 16px;
	background-color: #5cb85c;
	color: white;
}

.modal-body {
	padding: 2px 16px;
}

.modal-footer {
	padding: 2px 16px;
	background-color: #5cb85c;
	color: white;
}
</style>
<script type="text/javascript">
         
  		var company = <%=request.getAttribute("comp")%>;
  		
  		var name1 = company[0].companyName;
		var img1 = company[0].companyImage;
		var data1 = company[0].companyData;
		
		var name2 = company[1].companyName;
		var img2 = company[1].companyImage;
		var data2 = company[1].companyData;
		
		var name3 = company[2].companyName;
		var img3 =company[2].companyImage;
		var data3 = company[2].companyData;
		
		var name4 = company[3].companyName;
		var img4 = company[3].companyImage;
		var data4 = company[3].companyData;
  	
         var modal = document.getElementById('myModal');
         modal.style.display = "block";
         if(data.getFormattedValue(item.row, 0)=='SimSimi.Inc'){
        	document.getElementById("dataView").innerHTML=
             	"<h2 align='center'>"+name1+"<br><img src="+img1+"><br>"+data1+"</h2>";
         }else if(data.getFormattedValue(item.row, 0)=='FakeTalk.Inc'){
        		document.getElementById("dataView").innerHTML=
                	"<h2 align='center'>"+name2+"<br><img src="+img2+"><br>"+data2+"</h2>";
          }else if(data.getFormattedValue(item.row, 0)=='Adring.Inc'){
        	 document.getElementById("dataView").innerHTML=
        		 "<h2 align='center'>"+name3+"<br><img src="+img3+"><br>"+data3+"</h2>";
         }else if(data.getFormattedValue(item.row, 0)=='D'){
        	 document.getElementById("dataView").innerHTML=
        		 "<h2 align='center'>"+name4+"<br><img src="+img4+"><br>"+data4+"</h2>";
         }else if(data.getFormattedValue(item.row, 0)=='ETC'){
         document.getElementById("dataView").innerText = dataValue.ETC;
         }
   
         var btn = document.getElementById("dataView");
         btn.onclick = function(){
         if(data.getFormattedValue(item.row, 0)=='SimSimi.Inc'){
        	 location.href="http://www.simsimi.com/otn/signup";
         }
         	
         var modal1 = document.getElementById('myModal1');
         modal1.style.display = "block";
         if(data.getFormattedValue(item.row, 0)=='SimSimi.Inc'){
         	document.getElementById("dataView1").innerText = 
         		str;
          }else if(data.getFormattedValue(item.row, 0)=='FakeTalk.Inc'){
         		
           }else if(data.getFormattedValue(item.row, 0)=='Adring.Inc'){
         	
          }else if(data.getFormattedValue(item.row, 0)=='D'){
         
          }
   		}
      }
   }

   google.charts.setOnLoadCallback(drawChart1);
    function drawChart1() {
    	     var data1 = google.visualization.arrayToDataTable([
        ["'Company', ", "'share', ", { role: "style" } ],
        ["SimSimi.Inc", 20, "#b87333"],
        ["FakeTalk.Inc", 16  , "silver"],
        ["Adring.Inc", 12  , "gold"],
        ["LOTTE", 10  , "color: #e5e4e2"]
      ]);

      var view = new google.visualization.DataView(data1);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options1 = {
        title: "Company Market Possession",
        width: 600,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
      chart.draw(view, options1);
  }
  </script>


</head>
<body>
	<div id="piechart_3d" style="width: 900px; height: 500px;"data-toggle="modal">
	</div>
	<div id="myModal" class="modal">
		<!-- Modal content -->
		<div class="modal-content">
			<div class="modal-header">
				<span class="close" id="closeX">&times;</span>
				<h2>Modal Header</h2>
			</div>
			<div class="modal-body">
				<p id="dataView"></p>
			</div>
			<div class="modal-footer">
				<h3>Modal Footer</h3>
			</div>
		</div>
	</div>
<div id="barchart_values" style="width: 900px; height: 300px;"></div>
	<script>
var span = document.getElementById("closeX");
span.onclick = function() {
    document.getElementById("myModal").style.display = "none";
}
</script>

</body>
</html>