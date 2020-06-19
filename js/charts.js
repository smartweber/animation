google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawCustomChart);

function drawCustomChart(){
    var controller = new ScrollMagic();

    //Ad Industry Chart
    var industry_values = [6.9, 6.2, 5.4, 19.9, 14.6, 11.1, 10.9, 9.7, 7.9, 7.4];
    var industry_colors = ['#458ef3', '#526b82', '#d7e0e8', '#ed3990', '#efd246', '#ee9040', '#96ca39', '#24a192', '#49b7ea', '#a66bda'];
    var industry_labels = ['Consumer Electronics', 'Travel', 'Other', 'Retail', 'Automotive', 'Telecom', 'CPG & Consummer Goods', 'Financial Services', 'Entertainment', 'Media'];
    var industry_data = new google.visualization.DataTable();
    var industry_options = {
        chartArea: {width:300,height:300},
        legend: 'none',
        pieSliceText: 'label',
        pieHole: 0.5,
        enableInteractivity: false,
        pieSliceBorderColor: 'transparent',
        pieSliceText: 'none',
        pieStartAngle: -66.6,
    };
    industry_data.addColumn('string', 'Category');
    industry_data.addColumn('number', 'Percent');
    industry_data.addRow(['Rest', 0]);
    industry_options['colors'] = ['#ffffff'];
    var industry_chart = new google.visualization.PieChart(document.getElementById('adIndustryChart'));
    var industry_percent = {var: 0};
    var industry_tween = new TimelineMax();
    industry_tween.fromTo(industry_percent, 0.3, {var: 0}, {var: industry_values[0], onStart: function(){
        var rest_value = 100;
        industry_data.setCell(0, 0, industry_labels[0]);
        industry_data.setCell(0, 1, industry_values[0]);
        industry_data.addRow(['Rest', rest_value]);
        industry_options['colors'].splice(0, 0, industry_colors[0]);
        industry_chart.draw(industry_data, industry_options);
        $(".industry-label-number-1").css("opacity", 1);
    }, onUpdate: function(){
        industry_data.setCell(0, 1, industry_percent.var.toFixed(1));
        var rest_value = 100;
        rest_value -= industry_percent.var.toFixed(1);
        industry_data.setCell(1, 1, rest_value);
        industry_chart.draw(industry_data, industry_options);
        $(".industry-label-number-1").html(industry_percent.var.toFixed(1)+"<sup>%</sup>");
    }});
    industry_tween.fromTo(industry_percent, 0.3, {var: 0}, {var: industry_values[1], onStart: function(){
        var rest_value = 100;
        for(var i=0;i<1;i++)
            rest_value -= industry_values[i];
        industry_data.setCell(1, 0, industry_labels[1]);
        industry_data.setCell(1, 1, industry_values[1]);
        industry_data.addRow(['Rest', rest_value]);
        industry_options['colors'].splice(1, 0, industry_colors[1]);
        industry_chart.draw(industry_data, industry_options);
        $(".industry-label-number-2").css("opacity", 1);
    }, onUpdate: function(){
        industry_data.setCell(1, 1, industry_percent.var.toFixed(1));
        var rest_value = 100;
        for(var i=0;i<1;i++)
            rest_value -= industry_values[i];
        rest_value -= industry_percent.var.toFixed(1);
        industry_data.setCell(2, 1, rest_value);
        industry_chart.draw(industry_data, industry_options);
        $(".industry-label-number-2").html(industry_percent.var.toFixed(1)+"<sup>%</sup>");
    }});
    industry_tween.fromTo(industry_percent, 0.3, {var: 0}, {var: industry_values[2], onStart: function(){
        var rest_value = 100;
        for(var i=0;i<2;i++)
            rest_value -= industry_values[i];
        industry_data.setCell(2, 0, industry_labels[2]);
        industry_data.setCell(2, 1, industry_values[2]);
        industry_data.addRow(['Rest', rest_value]);
        industry_options['colors'].splice(2, 0, industry_colors[2]);
        industry_chart.draw(industry_data, industry_options);
        $(".industry-label-number-3").css("opacity", 1);
    }, onUpdate: function(){
        industry_data.setCell(2, 1, industry_percent.var.toFixed(1));
        var rest_value = 100;
        for(var i=0;i<2;i++)
            rest_value -= industry_values[i];
        rest_value -= industry_percent.var.toFixed(1);
        industry_data.setCell(3, 1, rest_value);
        industry_chart.draw(industry_data, industry_options);
        $(".industry-label-number-3").html(industry_percent.var.toFixed(1)+"<sup>%</sup>");
    }});
    industry_tween.fromTo(industry_percent, 0.3, {var: 0}, {var: industry_values[3], onStart: function(){
        var rest_value = 100;
        for(var i=0;i<3;i++)
            rest_value -= industry_values[i];
        industry_data.setCell(3, 0, industry_labels[3]);
        industry_data.setCell(3, 1, industry_values[3]);
        industry_data.addRow(['Rest', rest_value]);
        industry_options['colors'].splice(3, 0, industry_colors[3]);
        industry_chart.draw(industry_data, industry_options);
        $(".industry-label-number-4").css("opacity", 1);
    }, onUpdate: function(){
        industry_data.setCell(3, 1, industry_percent.var.toFixed(1));
        var rest_value = 100;
        for(var i=0;i<3;i++)
            rest_value -= industry_values[i];
        rest_value -= industry_percent.var.toFixed(1);
        industry_data.setCell(4, 1, rest_value);
        industry_chart.draw(industry_data, industry_options);
        $(".industry-label-number-4").html(industry_percent.var.toFixed(1)+"<sup>%</sup>");
    }});
    industry_tween.fromTo(industry_percent, 0.3, {var: 0}, {var: industry_values[4], onStart: function(){
        var rest_value = 100;
        for(var i=0;i<4;i++)
            rest_value -= industry_values[i];
        industry_data.setCell(4, 0, industry_labels[4]);
        industry_data.setCell(4, 1, industry_values[4]);
        industry_data.addRow(['Rest', rest_value]);
        industry_options['colors'].splice(4, 0, industry_colors[4]);
        industry_chart.draw(industry_data, industry_options);
        $(".industry-label-number-5").css("opacity", 1);
    }, onUpdate: function(){
        industry_data.setCell(4, 1, industry_percent.var.toFixed(1));
        var rest_value = 100;
        for(var i=0;i<4;i++)
            rest_value -= industry_values[i];
        rest_value -= industry_percent.var.toFixed(1);
        industry_data.setCell(5, 1, rest_value);
        industry_chart.draw(industry_data, industry_options);
        $(".industry-label-number-5").html(industry_percent.var.toFixed(1)+"<sup>%</sup>");
    }});
    industry_tween.fromTo(industry_percent, 0.3, {var: 0}, {var: industry_values[5], onStart: function(){
        var rest_value = 100;
        for(var i=0;i<5;i++)
            rest_value -= industry_values[i];
        industry_data.setCell(5, 0, industry_labels[5]);
        industry_data.setCell(5, 1, industry_values[5]);
        industry_data.addRow(['Rest', rest_value]);
        industry_options['colors'].splice(5, 0, industry_colors[5]);
        industry_chart.draw(industry_data, industry_options);
        $(".industry-label-number-6").css("opacity", 1);
    }, onUpdate: function(){
        industry_data.setCell(5, 1, industry_percent.var.toFixed(1));
        var rest_value = 100;
        for(var i=0;i<5;i++)
            rest_value -= industry_values[i];
        rest_value -= industry_percent.var.toFixed(1);
        industry_data.setCell(6, 1, rest_value);
        industry_chart.draw(industry_data, industry_options);
        $(".industry-label-number-6").html(industry_percent.var.toFixed(1)+"<sup>%</sup>");
    }});
    industry_tween.fromTo(industry_percent, 0.3, {var: 0}, {var: industry_values[6], onStart: function(){
        var rest_value = 100;
        for(var i=0;i<6;i++)
            rest_value -= industry_values[i];
        industry_data.setCell(6, 0, industry_labels[6]);
        industry_data.setCell(6, 1, industry_values[6]);
        industry_data.addRow(['Rest', rest_value]);
        industry_options['colors'].splice(6, 0, industry_colors[6]);
        industry_chart.draw(industry_data, industry_options);
        $(".industry-label-number-7").css("opacity", 1);
    }, onUpdate: function(){
        industry_data.setCell(6, 1, industry_percent.var.toFixed(1));
        var rest_value = 100;
        for(var i=0;i<6;i++)
            rest_value -= industry_values[i];
        rest_value -= industry_percent.var.toFixed(1);
        industry_data.setCell(7, 1, rest_value);
        industry_chart.draw(industry_data, industry_options);
        $(".industry-label-number-7").html(industry_percent.var.toFixed(1)+"<sup>%</sup>");
    }});
    industry_tween.fromTo(industry_percent, 0.3, {var: 0}, {var: industry_values[7], onStart: function(){
        var rest_value = 100;
        for(var i=0;i<7;i++)
            rest_value -= industry_values[i];
        industry_data.setCell(7, 0, industry_labels[7]);
        industry_data.setCell(7, 1, industry_values[7]);
        industry_data.addRow(['Rest', rest_value]);
        industry_options['colors'].splice(7, 0, industry_colors[7]);
        industry_chart.draw(industry_data, industry_options);
        $(".industry-label-number-8").css("opacity", 1);
    }, onUpdate: function(){
        industry_data.setCell(7, 1, industry_percent.var.toFixed(1));
        var rest_value = 100;
        for(var i=0;i<7;i++)
            rest_value -= industry_values[i];
        rest_value -= industry_percent.var.toFixed(1);
        industry_data.setCell(8, 1, rest_value);
        industry_chart.draw(industry_data, industry_options);
        $(".industry-label-number-8").html(industry_percent.var.toFixed(1)+"<sup>%</sup>");
    }});
    industry_tween.fromTo(industry_percent, 0.3, {var: 0}, {var: industry_values[8], onStart: function(){
        var rest_value = 100;
        for(var i=0;i<8;i++)
            rest_value -= industry_values[i];
        industry_data.setCell(8, 0, industry_labels[8]);
        industry_data.setCell(8, 1, industry_values[8]);
        industry_data.addRow(['Rest', rest_value]);
        industry_options['colors'].splice(8, 0, industry_colors[8]);
        industry_chart.draw(industry_data, industry_options);
        $(".industry-label-number-9").css("opacity", 1);
    }, onUpdate: function(){
        industry_data.setCell(8, 1, industry_percent.var.toFixed(1));
        var rest_value = 100;
        for(var i=0;i<8;i++)
            rest_value -= industry_values[i];
        rest_value -= industry_percent.var.toFixed(1);
        industry_data.setCell(9, 1, rest_value);
        industry_chart.draw(industry_data, industry_options);
        $(".industry-label-number-9").html(industry_percent.var.toFixed(1)+"<sup>%</sup>");
    }});
    industry_tween.fromTo(industry_percent, 0.3, {var: 0}, {var: industry_values[9], onStart: function(){
        var rest_value = 100;
        for(var i=0;i<9;i++)
            rest_value -= industry_values[i];
        industry_data.setCell(9, 0, industry_labels[9]);
        industry_data.setCell(9, 1, industry_values[9]);
        industry_data.addRow(['Rest', rest_value]);
        industry_options['colors'].splice(9, 0, industry_colors[9]);
        industry_chart.draw(industry_data, industry_options);
        $(".industry-label-number-10").css("opacity", 1);
    }, onUpdate: function(){
        industry_data.setCell(9, 1, industry_percent.var.toFixed(1));
        var rest_value = 100;
        for(var i=0;i<9;i++)
            rest_value -= industry_values[i];
        rest_value -= industry_percent.var.toFixed(1);
        if(rest_value < 0) rest_value = 0;
        industry_data.setCell(10, 1, rest_value);
        industry_chart.draw(industry_data, industry_options);
        $(".industry-label-number-10").html(industry_percent.var.toFixed(1)+"<sup>%</sup>");
    }});

    var industry_explode = {var: 0};
    var industry_explode_pos1 = {}, industry_explode_pos2 = {};
    industry_explode_pos1.left = $(".industry-label-number-9").css("margin-left").replace("px","");
    industry_explode_pos1.top = $(".industry-label-number-9").css("margin-top").replace("px","");
    industry_explode_pos2.left = $(".industry-label-number-10").css("margin-left").replace("px","");
    industry_explode_pos2.top = $(".industry-label-number-10").css("margin-top").replace("px","");
    industry_tween.fromTo(industry_explode, 1, {var: 0}, {var: 0.2, onUpdate: function(){
        industry_options['slices'] = {8: {offset: industry_explode.var}, 9: {offset: industry_explode.var}};
        industry_chart.draw(industry_data, industry_options);
        $(".industry-label-number-9").css("margin-left", (parseInt(industry_explode_pos1.left) - parseInt(175 * industry_explode.var)) + "px");
        $(".industry-label-number-9").css("margin-top", (parseInt(industry_explode_pos1.top) + parseInt(30 * industry_explode.var)) + "px");
        $(".industry-label-number-10").css("margin-left", (parseInt(industry_explode_pos2.left) - parseInt(180 * industry_explode.var)) + "px");
        $(".industry-label-number-10").css("margin-top", (industry_explode_pos2.top - 60 * industry_explode.var) + "px");
    }});

    var industry_scene = new ScrollScene({triggerElement: "#adIndustryChart", reverse: false})
        .setTween(industry_tween)
        .addTo(controller);

    // Ad spending by format
    var fmedia_values = [42.6, 9.4, 31, 17];
    var fmedia_colors = ['#96ca39', '#efd246', '#458ef3', '#ed3990'];
    var fmedia_labels = ['Search', 'Other', 'Display', 'Video'];
    var fmedia_data = new google.visualization.DataTable();
    var fmedia_options = {
        chartArea: {width:300,height:300},
        legend: 'none',
        pieSliceText: 'label',
        pieHole: 0.5,
        enableInteractivity: false,
        pieSliceBorderColor: 'transparent',
        pieSliceText: 'none',
        pieStartAngle: 172.8
    };
    fmedia_data.addColumn('string', 'Category');
    fmedia_data.addColumn('number', 'Percent');
    fmedia_data.addRow(['Rest', 0]);
    fmedia_options['colors'] = ['#ffffff'];
    var fmedia_chart = new google.visualization.PieChart(document.getElementById('formatMediaChart'));
    var fmedia_percent = {var: 0};
    var fmedia_tween = new TimelineMax();
    fmedia_tween.fromTo(fmedia_percent, 0.5, {var: 0}, {var: fmedia_values[0], onStart: function(){
        var rest_value = 100;
        fmedia_data.setCell(0, 0, fmedia_labels[0]);
        fmedia_data.setCell(0, 1, fmedia_values[0]);
        fmedia_data.addRow(['Rest', rest_value]);
        fmedia_options['colors'].splice(0, 0, fmedia_colors[0]);
        fmedia_chart.draw(fmedia_data, fmedia_options);
        $(".fmedia-label-number-1").css("opacity", 1);
    }, onUpdate: function(){
        fmedia_data.setCell(0, 1, fmedia_percent.var.toFixed(1));
        var rest_value = 100;
        rest_value -= fmedia_percent.var.toFixed(1);
        fmedia_data.setCell(1, 1, rest_value);
        fmedia_chart.draw(fmedia_data, fmedia_options);
        $(".fmedia-label-number-1").html(fmedia_percent.var.toFixed(1)+"<sup>%</sup>");
    }});
    fmedia_tween.fromTo(fmedia_percent, 0.5, {var: 0}, {var: fmedia_values[1], onStart: function(){
        var rest_value = 100;
        for(var i=0;i<1;i++)
            rest_value -= fmedia_values[i];
        fmedia_data.setCell(1, 0, fmedia_labels[1]);
        fmedia_data.setCell(1, 1, fmedia_values[1]);
        fmedia_data.addRow(['Rest', rest_value]);
        fmedia_options['colors'].splice(1, 0, fmedia_colors[1]);
        fmedia_chart.draw(fmedia_data, fmedia_options);
        $(".fmedia-label-number-2").css("opacity", 1);
    }, onUpdate: function(){
        fmedia_data.setCell(1, 1, fmedia_percent.var.toFixed(1));
        var rest_value = 100;
        for(var i=0;i<1;i++)
            rest_value -= fmedia_values[i];
        rest_value -= fmedia_percent.var.toFixed(1);
        fmedia_data.setCell(2, 1, rest_value);
        fmedia_chart.draw(fmedia_data, fmedia_options);
        $(".fmedia-label-number-2").html(fmedia_percent.var.toFixed(1)+"<sup>%</sup>");
    }});
    fmedia_tween.fromTo(fmedia_percent, 0.5, {var: 0}, {var: fmedia_values[2], onStart: function(){
        var rest_value = 100;
        for(var i=0;i<2;i++)
            rest_value -= fmedia_values[i];
        fmedia_data.setCell(2, 0, fmedia_labels[2]);
        fmedia_data.setCell(2, 1, fmedia_values[2]);
        fmedia_data.addRow(['Rest', rest_value]);
        fmedia_options['colors'].splice(2, 0, fmedia_colors[2]);
        fmedia_chart.draw(fmedia_data, fmedia_options);
        $(".fmedia-label-number-3").css("opacity", 1);
    }, onUpdate: function(){
        fmedia_data.setCell(2, 1, fmedia_percent.var.toFixed(1));
        var rest_value = 100;
        for(var i=0;i<2;i++)
            rest_value -= fmedia_values[i];
        rest_value -= fmedia_percent.var.toFixed(1);
        fmedia_data.setCell(3, 1, rest_value);
        fmedia_chart.draw(fmedia_data, fmedia_options);
        $(".fmedia-label-number-3").html(fmedia_percent.var.toFixed(0)+"<sup>%</sup>");
    }});
    fmedia_tween.fromTo(fmedia_percent, 0.5, {var: 0}, {var: fmedia_values[3], onStart: function(){
        var rest_value = 100;
        for(var i=0;i<3;i++)
            rest_value -= fmedia_values[i];
        fmedia_data.setCell(3, 0, fmedia_labels[3]);
        fmedia_data.setCell(3, 1, fmedia_values[3]);
        fmedia_data.addRow(['Rest', rest_value]);
        fmedia_options['colors'].splice(3, 0, fmedia_colors[3]);
        fmedia_chart.draw(fmedia_data, fmedia_options);
        $(".fmedia-label-number-4").css("opacity", 1);
    }, onUpdate: function(){
        fmedia_data.setCell(3, 1, fmedia_percent.var.toFixed(1));
        var rest_value = 100;
        for(var i=0;i<3;i++)
            rest_value -= fmedia_values[i];
        rest_value -= fmedia_percent.var.toFixed(1);
        if(rest_value < 0) rest_value = 0;
        fmedia_data.setCell(4, 1, rest_value);
        fmedia_chart.draw(fmedia_data, fmedia_options);
        $(".fmedia-label-number-4").html(fmedia_percent.var.toFixed(0)+"<sup>%</sup>");
    }});

    var fmedia_explode = {var: 0};
    var fmedia_explode_pos = {};
    fmedia_explode_pos.left = $(".fmedia-label-number-4").css("margin-left").replace("px","");
    fmedia_explode_pos.bottom = $(".fmedia-label-number-4").css("margin-bottom").replace("px","");
    fmedia_tween.fromTo(fmedia_explode, 1, {var: 0}, {var: 0.2, onUpdate: function(){
        fmedia_options['slices'] = {3: {offset: fmedia_explode.var}};
        fmedia_chart.draw(fmedia_data, fmedia_options);
        $(".fmedia-label-number-4").css("margin-left", (parseInt(fmedia_explode_pos.left) + parseInt(100 * fmedia_explode.var)) + "px");
        $(".fmedia-label-number-4").css("margin-bottom", (fmedia_explode_pos.bottom - 100 * fmedia_explode.var) + "px");
    }});

    var fmedia_scene = new ScrollScene({triggerElement: "#formatMediaChart", reverse: false})
        .setTween(fmedia_tween)
        .addTo(controller);


    var fentertain_values = [26.6, 5.4, 46, 22];
    var fentertain_colors = ['#96ca39', '#efd246', '#458ef3', '#ed3990'];
    var fentertain_labels = ['Search', 'Other', 'Display', 'Video'];
    var fentertain_data = new google.visualization.DataTable();
    var fentertain_options = {
        chartArea: {width:300,height:300},
        legend: 'none',
        pieSliceText: 'label',
        pieHole: 0.5,
        enableInteractivity: false,
        pieSliceBorderColor: 'transparent',
        pieSliceText: 'none',
        pieStartAngle: -115.2
    };
    fentertain_data.addColumn('string', 'Category');
    fentertain_data.addColumn('number', 'Percent');
    fentertain_data.addRow(['Rest', 0]);
    fentertain_options['colors'] = ['#ffffff'];
    var fentertain_chart = new google.visualization.PieChart(document.getElementById('formatEntertainChart'));
    var fentertain_percent = {var: 0};
    var fentertain_tween = new TimelineMax();
    fentertain_tween.fromTo(fentertain_percent, 0.5, {var: 0}, {var: fentertain_values[0], onStart: function(){
        var rest_value = 100;
        fentertain_data.setCell(0, 0, fentertain_labels[0]);
        fentertain_data.setCell(0, 1, fentertain_values[0]);
        fentertain_data.addRow(['Rest', rest_value]);
        fentertain_options['colors'].splice(0, 0, fentertain_colors[0]);
        fentertain_chart.draw(fentertain_data, fentertain_options);
        $(".fentertain-label-number-1").css("opacity", 1);
    }, onUpdate: function(){
        fentertain_data.setCell(0, 1, fentertain_percent.var.toFixed(1));
        var rest_value = 100;
        rest_value -= fentertain_percent.var.toFixed(1);
        fentertain_data.setCell(1, 1, rest_value);
        fentertain_chart.draw(fentertain_data, fentertain_options);
        $(".fentertain-label-number-1").html(fentertain_percent.var.toFixed(1)+"<sup>%</sup>");
    }});
    fentertain_tween.fromTo(fentertain_percent, 0.5, {var: 0}, {var: fentertain_values[1], onStart: function(){
        var rest_value = 100;
        for(var i=0;i<1;i++)
            rest_value -= fentertain_values[i];
        fentertain_data.setCell(1, 0, fentertain_labels[1]);
        fentertain_data.setCell(1, 1, fentertain_values[1]);
        fentertain_data.addRow(['Rest', rest_value]);
        fentertain_options['colors'].splice(1, 0, fentertain_colors[1]);
        fentertain_chart.draw(fentertain_data, fentertain_options);
        $(".fentertain-label-number-2").css("opacity", 1);
    }, onUpdate: function(){
        fentertain_data.setCell(1, 1, fentertain_percent.var.toFixed(1));
        var rest_value = 100;
        for(var i=0;i<1;i++)
            rest_value -= fentertain_values[i];
        rest_value -= fentertain_percent.var.toFixed(1);
        fentertain_data.setCell(2, 1, rest_value);
        fentertain_chart.draw(fentertain_data, fentertain_options);
        $(".fentertain-label-number-2").html(fentertain_percent.var.toFixed(1)+"<sup>%</sup>");
    }});
    fentertain_tween.fromTo(fentertain_percent, 0.5, {var: 0}, {var: fentertain_values[2], onStart: function(){
        var rest_value = 100;
        for(var i=0;i<2;i++)
            rest_value -= fentertain_values[i];
        fentertain_data.setCell(2, 0, fentertain_labels[2]);
        fentertain_data.setCell(2, 1, fentertain_values[2]);
        fentertain_data.addRow(['Rest', rest_value]);
        fentertain_options['colors'].splice(2, 0, fentertain_colors[2]);
        fentertain_chart.draw(fentertain_data, fentertain_options);
        $(".fentertain-label-number-3").css("opacity", 1);
    }, onUpdate: function(){
        fentertain_data.setCell(2, 1, fentertain_percent.var.toFixed(1));
        var rest_value = 100;
        for(var i=0;i<2;i++)
            rest_value -= fentertain_values[i];
        rest_value -= fentertain_percent.var.toFixed(1);
        fentertain_data.setCell(3, 1, rest_value);
        fentertain_chart.draw(fentertain_data, fentertain_options);
        $(".fentertain-label-number-3").html(fentertain_percent.var.toFixed(0)+"<sup>%</sup>");
    }});
    fentertain_tween.fromTo(fentertain_percent, 0.5, {var: 0}, {var: fentertain_values[3], onStart: function(){
        var rest_value = 100;
        for(var i=0;i<3;i++)
            rest_value -= fentertain_values[i];
        fentertain_data.setCell(3, 0, fentertain_labels[3]);
        fentertain_data.setCell(3, 1, fentertain_values[3]);
        fentertain_data.addRow(['Rest', rest_value]);
        fentertain_options['colors'].splice(3, 0, fentertain_colors[3]);
        fentertain_chart.draw(fentertain_data, fentertain_options);
        $(".fentertain-label-number-4").css("opacity", 1);
    }, onUpdate: function(){
        fentertain_data.setCell(3, 1, fentertain_percent.var.toFixed(1));
        var rest_value = 100;
        for(var i=0;i<3;i++)
            rest_value -= fentertain_values[i];
        rest_value -= fentertain_percent.var.toFixed(1);
        if(rest_value < 0) rest_value = 0;
        fentertain_data.setCell(4, 1, rest_value);
        fentertain_chart.draw(fentertain_data, fentertain_options);
        $(".fentertain-label-number-4").html(fentertain_percent.var.toFixed(0)+"<sup>%</sup>");
    }});

    var fentertain_explode = {var: 0};
    var fentertain_explode_pos = {};
    fentertain_explode_pos.left = $(".fentertain-label-number-4").css("margin-left").replace("px","");
    fentertain_explode_pos.bottom = $(".fentertain-label-number-4").css("margin-bottom").replace("px","");
    fentertain_tween.fromTo(fentertain_explode, 1, {var: 0}, {var: 0.15, onUpdate: function(){
        fentertain_options['slices'] = {3: {offset: fentertain_explode.var}};
        fentertain_chart.draw(fentertain_data, fentertain_options);
        $(".fentertain-label-number-4").css("margin-left", (parseInt(fentertain_explode_pos.left) - parseInt(100 * fentertain_explode.var)) + "px");
        $(".fentertain-label-number-4").css("margin-bottom", (fentertain_explode_pos.bottom - 100 * fentertain_explode.var) + "px");
    }});

    var fentertain_scene = new ScrollScene({triggerElement: "#formatEntertainChart", reverse: false})
        .setTween(fentertain_tween)
        .addTo(controller);


    // Digital Ad Spending by Objective
    var objmedia_values = [55, 45];
    var objmedia_colors = ['#458ef3', '#efd246'];
    var objmedia_labels = ['Direct Response', 'Branding'];
    var objmedia_data = new google.visualization.DataTable();
    var objmedia_options = {
        chartArea: {width:300,height:300},
        legend: 'none',
        pieSliceText: 'label',
        pieHole: 0.5,
        enableInteractivity: false,
        pieSliceBorderColor: 'transparent',
        pieSliceText: 'none',
        pieStartAngle: 0
    };
    objmedia_data.addColumn('string', 'Category');
    objmedia_data.addColumn('number', 'Percent');
    objmedia_data.addRow(['Rest', 0]);
    objmedia_options['colors'] = ['#ffffff'];
    var objmedia_chart = new google.visualization.PieChart(document.getElementById('objMediaChart'));
    var objmedia_percent = {var: 0};
    var objmedia_tween = new TimelineMax();
    objmedia_tween.fromTo(objmedia_percent, 0.5, {var: 0}, {var: objmedia_values[0], onStart: function(){
        var rest_value = 100;
        objmedia_data.setCell(0, 0, objmedia_labels[0]);
        objmedia_data.setCell(0, 1, objmedia_values[0]);
        objmedia_data.addRow(['Rest', rest_value]);
        objmedia_options['colors'].splice(0, 0, objmedia_colors[0]);
        objmedia_chart.draw(objmedia_data, objmedia_options);
        $(".objmedia-label-number-1").css("opacity", 1);
    }, onUpdate: function(){
        objmedia_data.setCell(0, 1, objmedia_percent.var.toFixed(1));
        var rest_value = 100;
        rest_value -= objmedia_percent.var.toFixed(1);
        objmedia_data.setCell(1, 1, rest_value);
        objmedia_chart.draw(objmedia_data, objmedia_options);
        $(".objmedia-label-number-1").html(objmedia_percent.var.toFixed(0)+"<sup>%</sup>");
    }});
    objmedia_tween.fromTo(objmedia_percent, 0.5, {var: 0}, {var: objmedia_values[1], onStart: function(){
        var rest_value = 100;
        for(var i=0;i<1;i++)
            rest_value -= objmedia_values[i];
        objmedia_data.setCell(1, 0, objmedia_labels[1]);
        objmedia_data.setCell(1, 1, objmedia_values[1]);
        objmedia_data.addRow(['Rest', rest_value]);
        objmedia_options['colors'].splice(1, 0, objmedia_colors[1]);
        objmedia_chart.draw(objmedia_data, objmedia_options);
        $(".objmedia-label-number-2").css("opacity", 1);
    }, onUpdate: function(){
        objmedia_data.setCell(1, 1, objmedia_percent.var.toFixed(1));
        var rest_value = 100;
        for(var i=0;i<1;i++)
            rest_value -= objmedia_values[i];
        rest_value -= objmedia_percent.var.toFixed(1);
        objmedia_data.setCell(2, 1, rest_value);
        objmedia_chart.draw(objmedia_data, objmedia_options);
        $(".objmedia-label-number-2").html(objmedia_percent.var.toFixed(0)+"<sup>%</sup>");
    }});

    var objmedia_scene = new ScrollScene({triggerElement: "#objMediaChart", reverse: false})
        .setTween(objmedia_tween)
        .addTo(controller);

    var objentertain_values = [40, 60];
    var objentertain_colors = ['#96ca39', '#ed3990'];
    var objentertain_labels = ['Direct Response', 'Branding'];
    var objentertain_data = new google.visualization.DataTable();
    var objentertain_options = {
        chartArea: {width:300,height:300},
        legend: 'none',
        pieSliceText: 'label',
        pieHole: 0.5,
        enableInteractivity: false,
        pieSliceBorderColor: 'transparent',
        pieSliceText: 'none',
        pieStartAngle: 0
    };
    objentertain_data.addColumn('string', 'Category');
    objentertain_data.addColumn('number', 'Percent');
    objentertain_data.addRow(['Rest', 0]);
    objentertain_options['colors'] = ['#ffffff'];
    var objentertain_chart = new google.visualization.PieChart(document.getElementById('objEntertainChart'));
    var objentertain_percent = {var: 0};
    var objentertain_tween = new TimelineMax();
    objentertain_tween.fromTo(objentertain_percent, 0.5, {var: 0}, {var: objentertain_values[0], onStart: function(){
        var rest_value = 100;
        objentertain_data.setCell(0, 0, objentertain_labels[0]);
        objentertain_data.setCell(0, 1, objentertain_values[0]);
        objentertain_data.addRow(['Rest', rest_value]);
        objentertain_options['colors'].splice(0, 0, objentertain_colors[0]);
        objentertain_chart.draw(objentertain_data, objentertain_options);
        $(".objentertain-label-number-1").css("opacity", 1);
    }, onUpdate: function(){
        objentertain_data.setCell(0, 1, objentertain_percent.var.toFixed(1));
        var rest_value = 100;
        rest_value -= objentertain_percent.var.toFixed(1);
        objentertain_data.setCell(1, 1, rest_value);
        objentertain_chart.draw(objentertain_data, objentertain_options);
        $(".objentertain-label-number-1").html(objentertain_percent.var.toFixed(0)+"<sup>%</sup>");
    }});
    objentertain_tween.fromTo(objentertain_percent, 0.5, {var: 0}, {var: objentertain_values[1], onStart: function(){
        var rest_value = 100;
        for(var i=0;i<1;i++)
            rest_value -= objentertain_values[i];
        objentertain_data.setCell(1, 0, objentertain_labels[1]);
        objentertain_data.setCell(1, 1, objentertain_values[1]);
        objentertain_data.addRow(['Rest', rest_value]);
        objentertain_options['colors'].splice(1, 0, objentertain_colors[1]);
        objentertain_chart.draw(objentertain_data, objentertain_options);
        $(".objentertain-label-number-2").css("opacity", 1);
    }, onUpdate: function(){
        objentertain_data.setCell(1, 1, objentertain_percent.var.toFixed(1));
        var rest_value = 100;
        for(var i=0;i<1;i++)
            rest_value -= objentertain_values[i];
        rest_value -= objentertain_percent.var.toFixed(1);
        objentertain_data.setCell(2, 1, rest_value);
        objentertain_chart.draw(objentertain_data, objentertain_options);
        $(".objentertain-label-number-2").html(objentertain_percent.var.toFixed(0)+"<sup>%</sup>");
    }});

    var objentertain_scene = new ScrollScene({triggerElement: "#objEntertainChart", reverse: false})
        .setTween(objentertain_tween)
        .addTo(controller);


    // Digital Ad Spending by Device
    var devicemedia_values = [49, 51];
    var devicemedia_colors = ['#ee9040', '#458ef3'];
    var devicemedia_labels = ['Desktop/Laptop', 'Mobile'];
    var devicemedia_data = new google.visualization.DataTable();
    var devicemedia_options = {
        chartArea: {width:300,height:300},
        legend: 'none',
        pieSliceText: 'label',
        pieHole: 0.5,
        enableInteractivity: false,
        pieSliceBorderColor: 'transparent',
        pieSliceText: 'none',
        pieStartAngle: 0
    };
    devicemedia_data.addColumn('string', 'Category');
    devicemedia_data.addColumn('number', 'Percent');
    devicemedia_data.addRow(['Rest', 0]);
    devicemedia_options['colors'] = ['#ffffff'];
    var devicemedia_chart = new google.visualization.PieChart(document.getElementById('deviceMediaChart'));
    var devicemedia_percent = {var: 0};
    var devicemedia_tween = new TimelineMax();
    devicemedia_tween.fromTo(devicemedia_percent, 0.5, {var: 0}, {var: devicemedia_values[0], onStart: function(){
        var rest_value = 100;
        devicemedia_data.setCell(0, 0, devicemedia_labels[0]);
        devicemedia_data.setCell(0, 1, devicemedia_values[0]);
        devicemedia_data.addRow(['Rest', rest_value]);
        devicemedia_options['colors'].splice(0, 0, devicemedia_colors[0]);
        devicemedia_chart.draw(devicemedia_data, devicemedia_options);
        $(".devicemedia-label-number-1").css("opacity", 1);
    }, onUpdate: function(){
        devicemedia_data.setCell(0, 1, devicemedia_percent.var.toFixed(1));
        var rest_value = 100;
        rest_value -= devicemedia_percent.var.toFixed(1);
        devicemedia_data.setCell(1, 1, rest_value);
        devicemedia_chart.draw(devicemedia_data, devicemedia_options);
        $(".devicemedia-label-number-1").html(devicemedia_percent.var.toFixed(0)+"<sup>%</sup>");
    }});
    devicemedia_tween.fromTo(devicemedia_percent, 0.5, {var: 0}, {var: devicemedia_values[1], onStart: function(){
        var rest_value = 100;
        for(var i=0;i<1;i++)
            rest_value -= devicemedia_values[i];
        devicemedia_data.setCell(1, 0, devicemedia_labels[1]);
        devicemedia_data.setCell(1, 1, devicemedia_values[1]);
        devicemedia_data.addRow(['Rest', rest_value]);
        devicemedia_options['colors'].splice(1, 0, devicemedia_colors[1]);
        devicemedia_chart.draw(devicemedia_data, devicemedia_options);
        $(".devicemedia-label-number-2").css("opacity", 1);
    }, onUpdate: function(){
        devicemedia_data.setCell(1, 1, devicemedia_percent.var.toFixed(1));
        var rest_value = 100;
        for(var i=0;i<1;i++)
            rest_value -= devicemedia_values[i];
        rest_value -= devicemedia_percent.var.toFixed(1);
        devicemedia_data.setCell(2, 1, rest_value);
        devicemedia_chart.draw(devicemedia_data, devicemedia_options);
        $(".devicemedia-label-number-2").html(devicemedia_percent.var.toFixed(0)+"<sup>%</sup>");
    }});

    var devicemedia_scene = new ScrollScene({triggerElement: "#deviceMediaChart", reverse: false})
        .setTween(devicemedia_tween)
        .addTo(controller);

    var deviceentertain_values = [46.5, 53.5];
    var deviceentertain_colors = ['#458ef3', '#49b7ea'];
    var deviceentertain_labels = ['Desktop/Laptop', 'Mobile'];
    var deviceentertain_data = new google.visualization.DataTable();
    var deviceentertain_options = {
        chartArea: {width:300,height:300},
        legend: 'none',
        pieSliceText: 'label',
        pieHole: 0.5,
        enableInteractivity: false,
        pieSliceBorderColor: 'transparent',
        pieSliceText: 'none',
        pieStartAngle: 0
    };
    deviceentertain_data.addColumn('string', 'Category');
    deviceentertain_data.addColumn('number', 'Percent');
    deviceentertain_data.addRow(['Rest', 0]);
    deviceentertain_options['colors'] = ['#ffffff'];
    var deviceentertain_chart = new google.visualization.PieChart(document.getElementById('deviceEntertainChart'));
    var deviceentertain_percent = {var: 0};
    var deviceentertain_tween = new TimelineMax();
    deviceentertain_tween.fromTo(deviceentertain_percent, 0.5, {var: 0}, {var: deviceentertain_values[0], onStart: function(){
        var rest_value = 100;
        deviceentertain_data.setCell(0, 0, deviceentertain_labels[0]);
        deviceentertain_data.setCell(0, 1, deviceentertain_values[0]);
        deviceentertain_data.addRow(['Rest', rest_value]);
        deviceentertain_options['colors'].splice(0, 0, deviceentertain_colors[0]);
        deviceentertain_chart.draw(deviceentertain_data, deviceentertain_options);
        $(".deviceentertain-label-number-1").css("opacity", 1);
    }, onUpdate: function(){
        deviceentertain_data.setCell(0, 1, deviceentertain_percent.var.toFixed(1));
        var rest_value = 100;
        rest_value -= deviceentertain_percent.var.toFixed(1);
        deviceentertain_data.setCell(1, 1, rest_value);
        deviceentertain_chart.draw(deviceentertain_data, deviceentertain_options);
        $(".deviceentertain-label-number-1").html(deviceentertain_percent.var.toFixed(1)+"<sup>%</sup>");
    }});
    deviceentertain_tween.fromTo(deviceentertain_percent, 0.5, {var: 0}, {var: deviceentertain_values[1], onStart: function(){
        var rest_value = 100;
        for(var i=0;i<1;i++)
            rest_value -= deviceentertain_values[i];
        deviceentertain_data.setCell(1, 0, deviceentertain_labels[1]);
        deviceentertain_data.setCell(1, 1, deviceentertain_values[1]);
        deviceentertain_data.addRow(['Rest', rest_value]);
        deviceentertain_options['colors'].splice(1, 0, deviceentertain_colors[1]);
        deviceentertain_chart.draw(deviceentertain_data, deviceentertain_options);
        $(".deviceentertain-label-number-2").css("opacity", 1);
    }, onUpdate: function(){
        deviceentertain_data.setCell(1, 1, deviceentertain_percent.var.toFixed(1));
        var rest_value = 100;
        for(var i=0;i<1;i++)
            rest_value -= deviceentertain_values[i];
        rest_value -= deviceentertain_percent.var.toFixed(1);
        deviceentertain_data.setCell(2, 1, rest_value);
        deviceentertain_chart.draw(deviceentertain_data, deviceentertain_options);
        $(".deviceentertain-label-number-2").html(deviceentertain_percent.var.toFixed(1)+"<sup>%</sup>");
    }});

    var deviceentertain_scene = new ScrollScene({triggerElement: "#deviceEntertainChart", reverse: false})
        .setTween(deviceentertain_tween)
        .addTo(controller);


    // Entertainment Mobile Video Ad Spending By Category
    var centertain_values = [39, 25, 21, 15];
    var centertain_colors = ['#458ef3', '#efd246', '#ee9040', '#ed3990'];
    var centertain_labels = ['Theatrical/DVD Release', 'TV Programs', 'Digital Goods And Songs', 'Live Events/Concert Tickets'];
    var centertain_data = new google.visualization.DataTable();
    var centertain_options = {
        chartArea: {width:300,height:300},
        legend: 'none',
        pieSliceText: 'label',
        pieHole: 0.5,
        enableInteractivity: false,
        pieSliceBorderColor: 'transparent',
        pieSliceText: 'none',
        pieStartAngle: 0
    };
    centertain_data.addColumn('string', 'Category');
    centertain_data.addColumn('number', 'Percent');
    centertain_data.addRow(['Rest', 0]);
    centertain_options['colors'] = ['#ffffff'];
    var centertain_chart = new google.visualization.PieChart(document.getElementById('categoryEntertainChart'));
    var centertain_percent = {var: 0};
    var centertain_tween = new TimelineMax();
    centertain_tween.fromTo(centertain_percent, 0.5, {var: 0}, {var: centertain_values[0], onStart: function(){
        var rest_value = 100;
        centertain_data.setCell(0, 0, centertain_labels[0]);
        centertain_data.setCell(0, 1, centertain_values[0]);
        centertain_data.addRow(['Rest', rest_value]);
        centertain_options['colors'].splice(0, 0, centertain_colors[0]);
        centertain_chart.draw(centertain_data, centertain_options);
        $(".centertain-label-number-1").css("opacity", 1);
    }, onUpdate: function(){
        centertain_data.setCell(0, 1, centertain_percent.var.toFixed(1));
        var rest_value = 100;
        rest_value -= centertain_percent.var.toFixed(1);
        centertain_data.setCell(1, 1, rest_value);
        centertain_chart.draw(centertain_data, centertain_options);
        $(".centertain-label-number-1").html(centertain_percent.var.toFixed(0)+"<sup>%</sup>");
    }});
    centertain_tween.fromTo(centertain_percent, 0.5, {var: 0}, {var: centertain_values[1], onStart: function(){
        var rest_value = 100;
        for(var i=0;i<1;i++)
            rest_value -= centertain_values[i];
        centertain_data.setCell(1, 0, centertain_labels[1]);
        centertain_data.setCell(1, 1, centertain_values[1]);
        centertain_data.addRow(['Rest', rest_value]);
        centertain_options['colors'].splice(1, 0, centertain_colors[1]);
        centertain_chart.draw(centertain_data, centertain_options);
        $(".centertain-label-number-2").css("opacity", 1);
    }, onUpdate: function(){
        centertain_data.setCell(1, 1, centertain_percent.var.toFixed(1));
        var rest_value = 100;
        for(var i=0;i<1;i++)
            rest_value -= centertain_values[i];
        rest_value -= centertain_percent.var.toFixed(1);
        centertain_data.setCell(2, 1, rest_value);
        centertain_chart.draw(centertain_data, centertain_options);
        $(".centertain-label-number-2").html(centertain_percent.var.toFixed(0)+"<sup>%</sup>");
    }});
    centertain_tween.fromTo(centertain_percent, 0.5, {var: 0}, {var: centertain_values[2], onStart: function(){
        var rest_value = 100;
        for(var i=0;i<2;i++)
            rest_value -= centertain_values[i];
        centertain_data.setCell(2, 0, centertain_labels[2]);
        centertain_data.setCell(2, 1, centertain_values[2]);
        centertain_data.addRow(['Rest', rest_value]);
        centertain_options['colors'].splice(2, 0, centertain_colors[2]);
        centertain_chart.draw(centertain_data, centertain_options);
        $(".centertain-label-number-3").css("opacity", 1);
    }, onUpdate: function(){
        centertain_data.setCell(2, 1, centertain_percent.var.toFixed(1));
        var rest_value = 100;
        for(var i=0;i<2;i++)
            rest_value -= centertain_values[i];
        rest_value -= centertain_percent.var.toFixed(1);
        centertain_data.setCell(3, 1, rest_value);
        centertain_chart.draw(centertain_data, centertain_options);
        $(".centertain-label-number-3").html(centertain_percent.var.toFixed(0)+"<sup>%</sup>");
    }});
    centertain_tween.fromTo(centertain_percent, 0.5, {var: 0}, {var: centertain_values[3], onStart: function(){
        var rest_value = 100;
        for(var i=0;i<3;i++)
            rest_value -= centertain_values[i];
        centertain_data.setCell(3, 0, centertain_labels[3]);
        centertain_data.setCell(3, 1, centertain_values[3]);
        centertain_data.addRow(['Rest', rest_value]);
        centertain_options['colors'].splice(3, 0, centertain_colors[3]);
        centertain_chart.draw(centertain_data, centertain_options);
        $(".centertain-label-number-4").css("opacity", 1);
    }, onUpdate: function(){
        centertain_data.setCell(3, 1, centertain_percent.var.toFixed(1));
        var rest_value = 100;
        for(var i=0;i<3;i++)
            rest_value -= centertain_values[i];
        rest_value -= centertain_percent.var.toFixed(1);
        if(rest_value < 0) rest_value = 0;
        centertain_data.setCell(4, 1, rest_value);
        centertain_chart.draw(centertain_data, centertain_options);
        $(".centertain-label-number-4").html(centertain_percent.var.toFixed(0)+"<sup>%</sup>");
    }});

    var centertain_scene = new ScrollScene({triggerElement: "#categoryEntertainChart", reverse: false})
        .setTween(centertain_tween)
        .addTo(controller);
}