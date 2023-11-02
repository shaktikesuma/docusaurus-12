---
sidebar_position: 4
---

## Preparations
1. Pertama-tama, kita membutuhkan [Postman](https://www.postman.com/) untuk pengujian API, jika user belum mempunyai postman bisa mendownload langsung di situs resmi [Download Postman](https://www.postman.com/downloads/).
2. Setelah mendownload postman, langkah selanjutnya adalah meng-import API yang telah ditentukan atau API yang mau di gunakan dalam pengujian, dengan mengklik tombol import pada postman.
![Import API](./img/Import_API.png)
3. Kita juga perlu menyiapkan akun yang akan di testing, dan mendownload aplikasi D2D Mobile Staging.

## Steps
1. Setelah kita mendownload dan mengimport API yang diperlukan maka kita login menggunakan akun yang sudah disiapkan.
2. Kemudian kita membuka collection yang sudah diimport, untuk mengatur variabels yang akan digunakan.
![Edit Variabels](./img/Edit_Variabels.png)

| Variable     | Intial Value | Current Value|
|------------------|-----------|-------------|
| public_key   |84211511-f24f-471b-a515-a116711a1997|84211511-f24f-471b-a515-a116711a1997|
| private_key   |IL8sl47ouYumQ7rgatEAoUxy5gRYrtDjPeBm5htBzMIyVYunGnBVBtK3TxbP8yGNCvdJvM91tHoKgI5G|IL8sl47ouYumQ7rgatEAoUxy5gRYrtDjPeBm5htBzMIyVYunGnBVBtK3TxbP8yGNCvdJvM91tHoKgI5G|
| partner_name   |Nanda Partner|Nanda Partner|
| public_key   ||*Otomatis setelah merequest API Authentication*|

Untuk mendapatkan variabels, kita perlu login ke [Login Faskes](https://staging-faskesportal.d2d.co.id/)   untuk melihat **public_key**, **private_key**, dan **partner_name**. Misal kita menggunakan **partner_name** Nanda Partner, maka kita membuka menu **Partners** kemudian cari partners yang akan digunakan seperti pada gambar dibawah ini.
![Search Partners](./img/Search_Partners.png)
![Dashboard Partners](./img/Dashboard_Partners.png)
Setelah mengklik menu **Partners** maka selanjutnya kita mencari partners dengan mengklik field filter text.

![Search Partners](./img/Search_Partners1.png)

kemudian kita klik tombol search, maka akan muncul partners yang akan digunakan.

![Get Partners](./img/Get_partners.png)

Lalu kita mengklik pada bagian action , dan pilih showkeys maka akan muncul **private_key** dan **public_key** yang nanti akan kita gunakan saat testing.

![Show Keys](./img/Show_Keys.png)
![Detail Keys](./img/Detail_Showkeys.png)

Setelah kita men-setting variabels, dan untuk mendapatkan **authorization_partner** kita perlu merequest API Authentication.

![Request API](./img/Request_Api.png)
![Variabel Enviroment](./img/Variabel_Check.png)

setelah semua disesuaikan variabels-varibelsnya maka kita perlu juga men-setting enviroment untuk settings lanjutan,

![Set Variabels](./img/Set_Variabels.png)

Kemudian ada beberapa field yang harus kita isi, seperti pada table dibawah ini.

| Variable     | Type | Inital Value|Current Value|Deskripsi|
|------------------|-----------|-------------|-------------|-------------|
| url_consultation  |default/secret (pilih salah satu)|[Login](https://staging-consultapi.d2d.co.id/)|[Login](https://staging-consultapi.d2d.co.id/)|**isi sesuai dengan url yang mau ditest**|
| public_key  |default/secret (pilih salah satu)|84211511-f24f-471b-a515-a116711a1997|84211511-f24f-471b-a515-a116711a1997|**isi sesuai dengan public_key partner yang dipilih**|
| private_key   |default/secret (pilih salah satu)|IL8sl47ouYumQ7rgatEAoUxy5gRYrtDjPeBm5htBzMIyVYunGnBVBtK3TxbP8yGNCvdJvM91tHoKgI5G|IL8sl47ouYumQ7rgatEAoUxy5gRYrtDjPeBm5htBzMIyVYunGnBVBtK3TxbP8yGNCvdJvM91tHoKgI5G|**isi sesuai dengan public_key partner yang dipilih**|

Setelah terisi semua dan sesuai dengan kebutuhan maka langkah selanjutnya adalah kita login menggunakan akun yang sudah disediakan/akun khusus untuk melakukan testing.

### A. Login
Pertama-tama kita melakukan login memggunakan akun yang sudah disediakan/akun khusus untuk melakukan testing, lalu kita membuka aplikasi mobile D2D untuk melakukan telekonsultasi

![Login App](./img/Login_App.png)

Setelah melakukan login dengan menggunakan akun testing, kita akan menuju ke dashboard dari aplikasi mobile D2D, lalu kita mengklik tombol “Telekonsultasi”, yang berada di menu bar dibawah.

![Order Telekonsul](./img/Order_Telekonsul.png)

### B. Order Telekonsultasi
Setelah kita mengklik Telekonsultasi, maka kita sebagai dokter menunggu pasien untuk melakukan order sebuah pesanan, seperti order resep, order obat, dan konsultasi terkait obat yang dibutuhkan.

- **Order Menggunakan API Postman**

Jika kita sudah men-setting variabels-variabels yang dibutuhkan maka langkah selanjutnya adalah kita merequest API yang telah di setting. 

| Variable     | Type |
|------------------|-----------|
|**FINDING**  |Status ini sedang mencari dokter, dan otomatis akan masuk ke chat telekonsultasi dokter yang sedang aktif|
|**STARTED**  |Status ini dimulai saat kita mengklik terima telekonsultasi, dan kita merequest sekali lagi untuk mengubah status di postman|
|**CLOSED**  |Status ini dimulai saat kita sudah menyelesaikan telekonsultasi, obat dan resume sudah diberikan ke pasien maka kita melakukan request untuk mengubah status di postman|

![Order](./img/Order.png)

Setelah mengklik tombol send, maka kita membuka aplikasi D2D dan menuju ke fitur telekonsultasi dan menunggu beberapa saat untuk mendapatkan order yang telah dikirimkan, setelah order masuk maka kita klik tombol “Terima Pasien”.

![Telekonsultasi](./img/Melakukan_Telekonsultasi.png)

- **Telekonsultasi**

Setelah mendapatkan pasien kita, maka otomatis akan masuk ke chat telekonsultasi setelah itu kita melakukan “send” pada postman untuk mengubah status “FINDING” menjadi “STARTED” maka kita akan mendapatkan url untuk testing sebagai pasien.

![Update Status](./img/Update_Status.png)

Setelah meng-copy **consultationurl** maka kita akan bertindak sebagai pasien, seperti mengisi formulir telekonsultasi.

![Form](./img/Form.png)

Setelah mengisi, kita akan membuka mobile app D2D lagi untuk memberikan resep yang telah di order pasien.

![Resep Elektronik](./img/Resep_Elektronik.png)

Kita akan mengisi resep elektronik sesuai kebutuhan, misal **Saran Konsumsi Obat** apakah dilakukan harian/mingguan, diminum beberapa kali dalam seminggu/harian, konsumsi obat pagi/siang/malam dan kita dapat memberikan **Pilih Waktu Konsumsi Obat** : Sebelum Makan, Sesudah Makan, Bersama Makan, dan Tidak Ada Waktu Konsumsi Obat. Kita dapat menyesuaikan sesuai kebutuhan dan dapat memberikan catatan obat jika diperlukan.

Setelah itu kita mengklik tombol “TERIMA” untuk meneruskan ke pasien, atau kita dapat menolak resep elektronik dengan mengklik tombol “TOLAK”.

Saat dokter mengklik tombol terima maka dari sisi pasien bisa langsung menerima resep tersebut dan dapat melihat detail dari resep yang diberikan.

![Lihat Detail](./img/lihat_detail.png)

- **Catatan Pasien**

Setelah kita memberikan resep ke pasien dan mengklik tombol “TERIMA” maka kita akan diarahkan ke Catatan Pasien untuk menyetujui resep elektronik pasien, disini dokter bisa memberikan catatan, data diagnosa (Berdasarkan ICD-10) dan saran dokter (opsional).

![Memberikan Resep](./img/Memberikan_resep.png)

Setelah dokter memberikan catatan pasien, maka pasien akan langsung mendapatkan pop-up untuk memberikan feedback ke dokter, dan resep akan otomatis tercatat di Tokopedia/Platform yang berpatner dengan DKonsul.

![Review Telekonsul](./img/Review_Telekonsul.png)

- **Resume Pasien**

Setelah memberikan maka dokter akan memberikan resume untuk kebutuhan pencatatan data secara online, dan berguna jika pasien melakukan telekonsultasi lagi.

- **Update Status Closed**

Jika proses order sudah dilakukan dan selesai, maka kita perlu untuk merequest API lagi untuk mengubah status seperti pada gambar dibawah ini.

![Status Closed](./img/Status_selesai.png)