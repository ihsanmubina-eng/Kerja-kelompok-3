          let dataPasien = [];
          let EditData = -1;

          function Click() {
            let nama = document.getElementById("nama").value;
            let umur = document.getElementById("umur").value;
            let poli = document.getElementById("Poli").value;
            let Alamat = document.getElementById("Alamat").value;
            let NoTelepon = document.getElementById("NoTelepon").value;
            let TanggalDaftar = document.getElementById("TanggalDaftar").value;

            if (
              nama === "" ||
              umur === "" ||
              Alamat === "" ||
              NoTelepon === "" ||
              poli === "" ||
              TanggalDaftar === ""
            ) {
              alert("Mohon lengkapi semua data pasien!");
              return;
            }

            if (EditData !== -1) {
              dataPasien[EditData] = {
                nama: nama,
                umur: umur,
                Alamat: Alamat,
                NoTelepon: NoTelepon,
                poli: poli,
                TanggalDaftar: TanggalDaftar,
              };
              EditData = -1;
              document.querySelector(".submit").textContent = "Submit";
            } else {
              dataPasien.push({
                nama: nama,
                umur: umur,
                Alamat: Alamat,
                NoTelepon: NoTelepon,
                poli: poli,
                TanggalDaftar: TanggalDaftar,
              });
            }
            TampilkanPasien();

            document.getElementById("nama").value = "";
            document.getElementById("umur").value = "";
            document.getElementById("Alamat").value = "";
            document.getElementById("NoTelepon").value = "";
            document.getElementById("Poli").value = "";
            document.getElementById("TanggalDaftar").value = "";
          }

          function EditPasien(index) {
            const pasien = dataPasien[index];
            document.getElementById("nama").value = pasien.nama;
            document.getElementById("umur").value = pasien.umur;
            document.getElementById("Alamat").value = pasien.Alamat;
            document.getElementById("NoTelepon").value = pasien.NoTelepon;
            document.getElementById("Poli").value = pasien.poli;
            document.getElementById("TanggalDaftar").value =
              pasien.TanggalDaftar;
            document.querySelector(".submit").textContent = "Update";
            EditData = index;
          }

          function TampilkanPasien() {
            const tbody = document.getElementById("tabelPasien");

            tbody.innerHTML = "";

            dataPasien.forEach((pasien, i) => {
              const baris = `
                <tr>
                    <td>${i + 1}</td>
                    <td>${pasien.nama}</td>
                    <td>${pasien.umur} tahun</td>
                    <td>${pasien.Alamat}</td>
                    <td>${pasien.poli}</td>
                    <td>${pasien.NoTelepon}</td>
                    <td>${pasien.TanggalDaftar}</td>
                    <td><button class="Edit" onclick="EditPasien(${i})">Edit</button> 
                    <button class="Selesai" onclick="HapusData(${i})" id="Selesai">Selesai</button></td>
                </tr>`;

              tbody.innerHTML += baris;
            });
          }

          function HapusData(index) {
            if (confirm("Yakin data pasien sudah selesai?")) {
              alert("Data pasien sudah selesai!");
              dataPasien.splice(index, 1);
              TampilkanPasien();
            }
          }
