// source: github.com/mzaini30/simple-chart

simple_chart = function(div, data){
	
	// deklarasi parameter
	height = 100

	$(div).css({
		width: '100%',
		height: height,
		display: 'block'
	})

	apakah_total_data_nol = 0
	for (n in data.data){
		apakah_total_data_nol += Number(data.data[n])
	}

	banyak_data = data.data.length
	lebar_elemen = $(div).width() / banyak_data
	nilai_tertinggi = 0
	for (n in data.data){
		if (data.data[n] == null){
			data.data[n] = 0
		}
		if (Number(data.data[n]) >= nilai_tertinggi){
			nilai_tertinggi = data.data[n]
		}
	}
	$(div).html('')
	for (n in data.data){
		if (apakah_total_data_nol == 0){
			height_elemen = 1
		} else {
			height_elemen = Number(data.data[n]) / nilai_tertinggi * height
		}
		
		height_kosong = height - height_elemen
		$(div).append('<div style="float: left; width: ' + lebar_elemen + 'px; height: ' + height + 'px;"><div style="height: ' + height_kosong + 'px;"></div><div style="height: ' + height_elemen + 'px; background: ' + data.background[n] + '; border: 1px solid '+ data.color[n] + ';"></div></div>')
	}
}
