/************************

	koleksi function javascript
	coding mum

***************************/


/*menghitung jumlah harga dan diskon
	- harga satuan fixed 2500
	- diskon fixed 10%

	*/
		function hitungJumlahHarga( jumlah ) {

			var hasil;
			var total;
			total = jumlah * 2500;
			hasil = total - (total*0.1)

			return  hasil;


		}
