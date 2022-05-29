document.addEventListener("DOMContentLoaded", function () {
  var naslovKreativna = document.title;
  if (naslovKreativna != "Kreativna") {
    var linkovi = document.getElementsByClassName("links");
    for (var i = 0; i < 5; i++) {
      linkovi[i].addEventListener("click", function (event) {
        if (window.confirm("Želite li napustiti stranicu?")) {
        } else {
          alert("Ostajete na stranici " + document.title);
          event.preventDefault();
        }
      });
    }
  }
  var naslovTest = document.title;
  if (naslovTest == "Kreativna") {
    var kreativniLinkovi = document.getElementsByClassName("test");
    console.log(kreativniLinkovi);
    for (var i = 0; i < kreativniLinkovi.length; i++) {
      kreativniLinkovi[i].addEventListener("click", function (event) {
        if (window.confirm("Želite li napustiti stranicu?")) {
        } else {
          alert("Ostajete na stranici " + document.title);
          event.preventDefault();
        }
      });
    }
  }
  var korisnickoIme = "korisnik";
  var lozinkaPrijava = "test";

  var naslovPrijave = document.title;
  if (naslovPrijave == "Prijava") {
    document.addEventListener("submit", function (event) {
      var unesenoKorisnickoIme = document.getElementById("username").value;
      var unesenaLozinka = document.getElementById("password").value;
      if (
        unesenoKorisnickoIme == korisnickoIme &&
        unesenaLozinka == lozinkaPrijava
      ) {
        var trenutno = new Date();
        var zavrsava = new Date();

        zavrsava.setTime(trenutno.getTime() + 600000);

        document.cookie =
          "Username=" +
          unesenoKorisnickoIme +
          "; expires=" +
          zavrsava.toUTCString() +
          ";path=/; SameSite=Lax";
        document.cookie =
          "trajanjePrvog=" +
          zavrsava.toUTCString() +
          "; expires=" +
          zavrsava.toUTCString() +
          ";path=/; SameSite=Lax";
      } else {
        alert("Krivo uneseni podaci!");
        event.preventDefault();
      }
    });
  }

  //prikaz keksa
  const keks = document.cookie;
  const razdvojeniKeksi = keks.split(";");
  const vrijednostiKeksa = razdvojeniKeksi.map((value) => value.split("=")[1]);
  var prikazKeksa = document.getElementById("keksi");

  if (document.cookie) {
    prikazKeksa.innerHTML = vrijednostiKeksa[0] + ", " + vrijednostiKeksa[1];
  }

  //prikaz prijave/odjave
  var prijava = document.getElementById("link1");
  var odjava = document.getElementById("link2");

  var naslovPrijava = document.title;
  if (naslovPrijava != "Prijava") {
    if (document.cookie) {
      prijava.style.visibility = "hidden";
      odjava.style.marginRight = "80px";
    } else {
      odjava.style.visibility = "hidden";
      prijava.style.marginLeft = "65px";
    }

    //ne dopusta prikaz stranica ak nismo prijavljeni
    var naslov = document.title;
    if (!document.cookie) {
      if (naslov == "Početna stranica" || naslov == "Obrazac") {
        window.location.replace("prijava.html");
      } else {
        window.location.replace("../prijava.html");
      }
    }

    //brisanje keksa
    function deleteKeks() {
      document.cookie =
        "trajanjePrvog=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
      document.cookie =
        "Username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    }

    var odjava = document.getElementById("link2");

    odjava.addEventListener("click", function (event) {
      deleteKeks();
      console.log("I'm FREEEE!");
    });

    var naslovStranice = document.title;

    if (naslovStranice == "Početna stranica") {
      var brojacCanvas = 0;
      var gumb = document.getElementById("gumbPrikaz");

      var boje = ["blue", "red"];
      var obrazac = document.getElementById("obrazacCanvas");
      gumb.addEventListener("click", function (event) {
        obrazac.style.visibility = "visible";

        if (brojacCanvas > 0) {
          ctx.clearRect(160, 1, 80, 398);
        }
        brojacCanvas++;
      });

      var platno = document.getElementById("canvas1");
      var prvi = document.getElementById("nike1");
      var drugi = document.getElementById("adidas1");

      document.addEventListener("submit", function (event) {
        for (var i = 0; i < 2; i++) {
          var brojevi = [prvi.value, drugi.value];
          ctx.fillStyle = boje[i];
          ctx.fillRect(200 + 40 * (i - 1), 399 - brojevi[i], 38, brojevi[i]);
          event.preventDefault();
        }
        obrazac.style.visibility = "hidden";
      });

      var ctx = platno.getContext("2d");
      ctx.fillStyle = "rgb(0, 0, 0)";

      ctx.strokeRect(40, 0, 320, 400);
    }
    //     // var pravokutnik = document.getElementById("pravokutnik");
    //     // var krug = document.getElementById("krug");
    //     // var poly = document.getElementById("poly");
    //     // var mjesto = document.getElementsByClassName("figcaption1")[0];
    //     // var pocetni = mjesto.innerHTML;
    //     // function funkcija() {
    //     //   pravokutnik.addEventListener("mouseout", (event) => {
    //     //     mjesto.innerHTML = pocetni;
    //     //   });
    //     //   krug.addEventListener("mouseout", (event) => {
    //     //     mjesto.innerHTML = pocetni;
    //     //   });
    //     //   poly.addEventListener("mouseout", (event) => {
    //     //     mjesto.innerHTML = pocetni;
    //     //   });
    //     // }
    //     // pravokutnik.addEventListener("mouseover", function (event) {
    //     //   while (mjesto.innerHTML == pocetni) {
    //     //     mjesto.innerHTML +=
    //     //       " <br> Pravokutnik: X<sub>1</sub>=99, Y<sub>1</sub>=228, X<sub>2</sub>=176, Y<sub>2</sub>=276.";
    //     //   }
    //     //   funkcija();
    //     // });
    //     // krug.addEventListener("mouseover", function (event) {
    //     //   while (mjesto.innerHTML == pocetni) {
    //     //     mjesto.innerHTML +=
    //     //       " <br> Krug: X<sub>1</sub>=187, Y<sub>1</sub>=152, R=22.";
    //     //   }
    //     //   funkcija();
    //     // });
    //     // poly.addEventListener("mouseover", function (event) {
    //     //   while (mjesto.innerHTML == pocetni) {
    //     //     mjesto.innerHTML +=
    //     //       " <br> Višekut: X<sub>1</sub>=112, Y<sub>1</sub>=87, X<sub>2</sub>=116, Y<sub>2</sub>=136, X<sub>3</sub>=157, Y<sub>3</sub>=120, X<sub>4</sub>=151, Y<sub>4</sub>=83, X<sub>5</sub>=142, Y<sub>5</sub>=53.";
    //     //   }
    //     //   funkcija();
    //     // });
    //   }
    var naslov2 = document.title;
    if (naslov2 == "Obrazac") {
      var brojac = 0;
      // document.addEventListener("readystatechange", () => {
      var ime_prezime = document.getElementById("ime_prezime");
      var labelaIme = document.getElementById("ime");
      var datum_vrijeme = document.getElementById("datum_vrijeme");
      var labelaVrijeme = document.getElementById("vrijeme");

      var provjera = document.querySelector("#datum_vrijeme").validity.badInput;

      var mail = document.getElementById("email");
      var labelaMail = document.getElementById("mail");
      var lozinka = document.getElementById("password");
      var labelaSifra = document.getElementById("pass");
      //

      // ^.[^<>"']{100,1000}$
      var regexBroj = /^[1-9][0-9]?$|^100$/;
      var regexTekst = /^.(?!.*\.\.)[^<>"']{100,1000}$/;
      var regexDatum =
        /^[0-3][\d]\.[0-1][\d]\.[\d][\d][\d][\d]\.\s[0-2][\d]\:[\d][\d]\:[0-5][\d]$/;
      var multiple2 = document.getElementById("visestruki_izbor");
      var labelaMultiple = document.getElementById("visestruki");
      var fieldset2 = document.getElementById("fieldset2");
      var najdraziBroj = document.getElementById("najdrazi_broj");
      var labelaBroj = document.getElementById("najdrazi");
      var kosarkasi = document.getElementById("kosarkasi");
      var kosarkasi2 = document.getElementById("kosarkasi");
      var labelaKosarkasi = document.getElementById("kosarkasi2");
      var viseLinijski = document.getElementById("viselinijski_tekst");
      var labelaViselinija = document.getElementById("viselinija");

      najdraziBroj.max = "100";
      najdraziBroj.min = "0";
      najdraziBroj.required;
      var radioGumb = document.getElementById("test1");
      var labelaRadio = document.getElementById("pozicija");

      var checkBox1 = document.getElementsByName("kosarkas");
      // var checkBox2 = document.getElementById("kosarkas2");
      // var checkBox3 = document.getElementById("kosarkas3");
      // var checkBox4 = document.getElementById("kosarkas4");

      // var polje = [checkBox1, checkBox2, checkBox3, checkBox4];

      var checkBox = document.getElementById("test2");
      var labelaCheckbox = document.getElementById("kosarkasi2");

      function provjeraIme() {
        if (ime_prezime.value.trim().length == 0) {
          ime_prezime.style.border = " 5px solid red";
          labelaIme.innerHTML = "Ime i prezime*";
          return false;
        } else {
          return true;
        }
      }

      function provjeraVrijeme() {
        if (regexDatum.test(datum_vrijeme.value) == false) {
          datum_vrijeme.style.border = " 5px solid red";
          labelaVrijeme.innerHTML = "Datum rođenja i vrijeme: *";
          return false;
        } else {
          return true;
        }
      }

      function provjeraViselinijski() {
        if (regexTekst.test(viseLinijski.value) == false) {
          viseLinijski.style.border = "5px solid red";
          labelaViselinija.innerHTML = "Opis najdražeg igrača: *";
          return false;
        } else {
          return true;
        }
      }

      function provjeraMail() {
        if (mail.value.trim().length == 0) {
          mail.style.border = " 5px solid red";
          labelaMail.innerHTML = "Email adresa: *";
          return false;
        } else {
          return true;
        }
      }
      function provjeraSifra() {
        if (lozinka.value.trim().length == 0) {
          lozinka.style.border = " 5px solid red";
          labelaSifra.innerHTML = "Lozinka: *";
          return false;
        } else {
          return true;
        }
      }

      var brojacMultiple = 0;
      console.log(document.getElementById("visestruki_izbor").options);
      function provjeraMultiple() {
        brojacMultiple = 0;
        for (var option of document.getElementById("visestruki_izbor")
          .options) {
          if (option.selected) {
            brojacMultiple++;
          }
        }
        if (brojacMultiple < 2) {
          multiple2.style.border = " 5px solid red";
          labelaMultiple.innerHTML = "Odaberite najdraži tim: *";
          return false;
        } else {
          return true;
        }
      }

      var brojacRadio = 0;
      function provjeraRadio() {
        brojacRadio = 0;
        if (
          document.getElementById("PG").checked == true ||
          document.getElementById("SG").checked == true ||
          document.getElementById("SF").checked == true ||
          document.getElementById("PF").checked == true ||
          document.getElementById("C").checked == true
        ) {
          brojacRadio++;
        }
        if (brojacRadio == 0) {
          radioGumb.style.border = "5px solid red";
          labelaRadio.innerHTML = "Najdraža pozicija: *";
          return false;
        } else {
          return true;
        }
      }

      function provjeraBroj() {
        if (regexBroj.test(najdraziBroj.value) == false) {
          najdraziBroj.style.border = "5px solid red";
          labelaBroj.innerHTML = "Najdraži broj na dresu: *";
          return false;
        } else {
          return true;
        }
      }

      var brojacCheckBox = 0;

      function provjeraCheckBox() {
        brojacCheckBox = 0;
        for (var i = 0; i < 4; i++) {
          if (checkBox1[i].checked == true) {
            brojacCheckBox++;
          }
        }

        if (brojacCheckBox >= 2) {
          return true;
        } else {
          checkBox.style.border = "5px solid red";
          labelaCheckbox.innerHTML = "Najdraži hrvati u NBA: *";
          return false;
        }
      }

      document.addEventListener("submit", function (event) {
        console.log(brojacMultiple);
        if (brojac == 0) {
          if (
            provjeraIme() === false ||
            provjeraVrijeme() === false ||
            provjeraMail() === false ||
            provjeraSifra() === false
          ) {
            event.preventDefault();
          } else {
            event.preventDefault();
            fieldset2.style.visibility = "visible";
            brojac++;
          }
        } else if (brojac == 1) {
          if (
            provjeraRadio() === false ||
            provjeraBroj() === false ||
            provjeraMultiple() === false ||
            provjeraCheckBox() === false ||
            provjeraViselinijski() === false
          ) {
            event.preventDefault();
          }
        }
      });
    }

    var naslovAutor = document.title;
    if (naslovAutor == "O autoru") {
      var okidac = true;
      document.getElementById("button").onclick = function () {
        if (okidac === true) {
          var img = document.getElementById("selfie");
          img.style.transform = "rotate(180deg)";
        } else {
          var img = document.getElementById("selfie");
          img.style.transform = "revert";
        }
        okidac = !okidac;
      };

      var klik = true;
      document.getElementById("ime").onclick = function () {
        if (klik === true) {
          var tekst = document.getElementById("ime");
          tekst.style.color = "red";
          tekst.style.fontSize = "50px";
        } else {
          var tekst = document.getElementById("ime");
          tekst.style.color = "revert";
          tekst.style.fontSize = "15px";
        }
        klik = !klik;
      };

      window.addEventListener("load", function () {
        var lopta = document.getElementById("lopta");
        lopta.style = "animation: rotiraj 1.5s infinite linear;";
      });
    }
  }
});
