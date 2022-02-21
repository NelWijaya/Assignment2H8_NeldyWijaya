var personal = {
    name: "Neldy Wijaya",
    role: "Front End Designer",
    availability: "Full Time",
    usia: 21,
    lokasi: "Pontianak",
    pengalaman: 2,
    email: "emailku@gmail.com"
};

awal();

function awal() {
    // Munculkan data ke profile
    document.getElementById("nameProfile").innerHTML = personal.name;
    document.getElementById("roleProfile").innerHTML = personal.role;
    document.getElementById("availabilityProfile").innerHTML = ": " + personal.availability;
    document.getElementById("usiaProfile").innerHTML = ": " + personal.usia;
    document.getElementById("lokasiProfile").innerHTML = ": " + personal.lokasi;
    document.getElementById("pengalamanProfile").innerHTML = ": " + personal.pengalaman;
    document.getElementById("emailProfile").innerHTML = ": " + personal.email;

    // Untuk Form
    document.getElementById("nama").value = personal.name;
    document.getElementById("role").value = personal.role;
    document.getElementById("availability").value = personal.availability;
    document.getElementById("usia").value = personal.usia;
    document.getElementById("lokasi").value = personal.lokasi;
    document.getElementById("pengalaman").value = personal.pengalaman;
    document.getElementById("email").value = personal.email;
}


// Fungsi Submit
function edited(id) {
    // alert("test");
    personal.name = document.getElementById("nama").value;
    personal.role = document.getElementById("role").value;
    personal.availability = document.getElementById("availability").value;
    personal.usia = document.getElementById("usia").value;
    personal.lokasi = document.getElementById("lokasi").value;
    personal.pengalaman = document.getElementById("pengalaman").value;
    personal.email = document.getElementById("email").value;
    // alert(personal.name);
    awal();
}