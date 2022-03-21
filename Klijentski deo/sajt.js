import { Delegat } from "./Delegat.js";
import {Sudija} from "./Sudija.js";
import { Tim } from "./Tim.js";
import { Mec } from "./Mec.js";

export class Sajt{
    
    constructor(listaFss){
        this.listaFss=listaFss;
        this.kontejner=null;
    }

    crtaj(host){

        host.innerHTML="";
        this.kontejner=document.createElement("div");
        this.kontejner.className="GlavniKontejner";
        host.appendChild(this.kontejner);
        this.kontejner.innerHTML="";
        

        let kontejnerHeder = document.createElement("div");
        kontejnerHeder.className="Heder";
        this.kontejner.appendChild(kontejnerHeder);


        let divGornji = document.createElement("div");
        divGornji.className = "divgornji"
        this.kontejner.appendChild(divGornji);
        

        let kontejnerDugmici = document.createElement("div");
        kontejnerDugmici.className="Dugmici";
        divGornji.appendChild(kontejnerDugmici);

        let kontejnerVraca = document.createElement("div");
        kontejnerVraca.className="Vraca";
        divGornji.appendChild(kontejnerVraca);



        let kontejnerPrikaz = document.createElement("div");
        kontejnerPrikaz.className="Prikaz";
        this.kontejner.appendChild(kontejnerPrikaz);

        let kontejnerPrikazLevo = document.createElement("div");
        kontejnerPrikazLevo.className="PrikazLevo";
        kontejnerPrikaz.appendChild(kontejnerPrikazLevo);

        let kontejnerPrikazDesno = document.createElement("div");
        kontejnerPrikazDesno.className="PrikazDesno";
        kontejnerPrikaz.appendChild(kontejnerPrikazDesno); 






        this.crtajHeder(kontejnerHeder);
        this.crtajDugmice(kontejnerDugmici);

    }


    crtajHeder(host){
        let l = document.createElement("label");
        l.innerHTML="Delegiranje FSS";
        l.className="glavniNaslov";
        l.onclick=(ev)=>this.crtaj(document.body);
        host.appendChild(l);
    }


    crtajDugmice(host){
        
        let divSelect1 = document.createElement("div");
        divSelect1.className = "divS1";
        host.appendChild(divSelect1);

        let se;
        let l;
        let op;
        let dugme;

        l = document.createElement("label");
        l.innerHTML = "Izaberite opciju";
        l.className = "NaslovDugmici";
        divSelect1.appendChild(l);

        se = document.createElement("select");
        se.className = "select1";
        divSelect1.appendChild(se);

        op = document.createElement("option");
        op.innerHTML = "Sudija";
        op.value = 0;
        se.appendChild(op);

        op = document.createElement("option");
        op.innerHTML = "Delegat";
        op.value = 1;
        se.appendChild(op);
        
        op = document.createElement("option");
        op.innerHTML = "Timovi";
        op.value = 2;
        se.appendChild(op);

        dugme = document.createElement("button");
        dugme.innerHTML="Izaberi";
        dugme.className="dugmeOglas";
        divSelect1.appendChild(dugme);

        dugme.onclick=(ev)=>{
            let abc = this.kontejner.querySelector(".PrikazDesno");
            abc.innerHTML = "";
            let desno = this.kontejner.querySelector(".Vraca");
            desno.innerHTML="";
            let opt = this.kontejner.querySelector(".select1");
            let provera = opt.options[opt.selectedIndex].value;

            if(provera==0){
                this.SelectSudija(this.kontejner.querySelector(".PrikazLevo"));
            }
            else if (provera==1){
                this.SelectDelegat(this.kontejner.querySelector(".PrikazLevo"));
            }
            else{
                this.SelectTim(this.kontejner.querySelector(".PrikazLevo"));
            }
        }
        let divMec = document.createElement("div");
        divMec.className = "divMec";
        divSelect1.appendChild(divMec);

        l = document.createElement("label");
        l.innerHTML = "Mec";
        l.className = "NaslovDugmici";
        divMec.appendChild(l);

        se = document.createElement("select");
        se.className = "selectMec";
        divMec.appendChild(se); 

        op = document.createElement("option");
        op.innerHTML = "Dodaj mec";
        op.value = 0;
        se.appendChild(op);

        op = document.createElement("option");
        op.innerHTML = "Vrati kolo";
        op.value = 1;
        se.appendChild(op);

        op = document.createElement("option");
        op.innerHTML = "Vrati mec";
        op.value = 2;
        se.appendChild(op);

        let dugmeMec;
        dugmeMec = document.createElement("button");
        dugmeMec.innerHTML = "Izvrsi";
        dugmeMec.className = "dugmeMec";
        divMec.appendChild(dugmeMec);

        dugmeMec.onclick = (ev) =>{
            let abc = this.kontejner.querySelector(".PrikazDesno");
            abc.innerHTML = "";
            let desno = this.kontejner.querySelector(".Vraca");
            //desno.innerHTML="";
            let aa = this.kontejner.querySelector(".PrikazLevo");
            aa.innerHTML="";
            let opt = this.kontejner.querySelector(".selectMec");
            let provera = opt.options[opt.selectedIndex].value;

            if(provera == 0){
                this.DodajMec(desno);
            }
            else if(provera == 1){
                this.VratiKolo(desno);
            }
            else{
                this.VratiMec(desno);
            }

        }
    }

    SelectSudija(host){
        this.obrisiPrethodnisadrzaj();

        let divSudija = document.createElement("div");
        divSudija.className = "divDugmiciS1";
        host.appendChild(divSudija);

        let rb;
        let se;
        let l;
        let op;
        let dugme;

        l = document.createElement("label");
        l.innerHTML = "Sudija";
        l.className = "NaslovDugmici";
        divSudija.appendChild(l);

        se = document.createElement("select");
        se.className = "selectSudija";
        divSudija.appendChild(se); 

        op = document.createElement("option");
        op.innerHTML = "Dodaj sudiju";
        op.value = 0;
        se.appendChild(op);

        op = document.createElement("option");
        op.innerHTML = "Izmeni ligu sudije";
        op.value = 1;
        se.appendChild(op);

        op = document.createElement("option");
        op.innerHTML = "Izmeni poziciju sudije";
        op.value = 2;
        se.appendChild(op);

        op = document.createElement("option");
        op.innerHTML = "Izbrisi sudiju";
        op.value = 3;
        se.appendChild(op);

        dugme = document.createElement("button");
        dugme.innerHTML = "Izvrsi";
        dugme.className = "DugmeSudija";
        divSudija.appendChild(dugme);

        dugme.onclick=(ev)=>{
            let abc = this.kontejner.querySelector(".PrikazDesno");
            abc.innerHTML = "";
            let desno = this.kontejner.querySelector(".Vraca");
            //desno.innerHTML="";
            let opt = this.kontejner.querySelector(".selectSudija");
            let provera = opt.options[opt.selectedIndex].value;

            if(provera==0){
                this.DodajSudiju(desno);
            }
            else if (provera==1){
                this.IzmeniLiguSudije(desno);
            }
            else if (provera==2){
                this.IzmeniPozSudije(desno);
            }
            else{
                this.izbrisiSudiju(desno);
            }
        } 
    }

    SelectDelegat(host){
        this.obrisiPrethodnisadrzaj();
        let divDelegat = document.createElement("div");
        divDelegat.className = "divDugmiciS1";
        host.appendChild(divDelegat);

        let rb;
        let se;
        let l;
        let op;
        let dugme;

        l = document.createElement("label");
        l.innerHTML = "Delegat";
        l.className = "NaslovDugmici";
        divDelegat.appendChild(l);

        se = document.createElement("select");
        se.className = "selectDelegat";
        divDelegat.appendChild(se); 

        op = document.createElement("option");
        op.innerHTML = "Dodaj delegata";
        op.value = 0;
        se.appendChild(op);

        op = document.createElement("option");
        op.innerHTML = "Izmeni delegata";
        op.value = 1;
        se.appendChild(op);

        op = document.createElement("option");
        op.innerHTML = "Izbrisi delegata";
        op.value = 2;
        se.appendChild(op);

        dugme = document.createElement("button");
        dugme.innerHTML = "Izvrsi";
        dugme.className = "DugmeDelegat";
        divDelegat.appendChild(dugme);

        dugme.onclick=(ev)=>{

            let abc = this.kontejner.querySelector(".PrikazDesno");
            abc.innerHTML = "";
            
            let desno = this.kontejner.querySelector(".Vraca");
            desno.innerHTML="";
            let opt = this.kontejner.querySelector(".selectDelegat");
            let provera = opt.options[opt.selectedIndex].value;

            if(provera==0){
                this.DodajDelegata(desno);
            }
            else if (provera==1){
                this.Izmenidelegata(desno);
            }
            else{
                this.izbrisiDelegata(desno);
            }
        }
    }

    SelectTim(host){
        this.obrisiPrethodnisadrzaj();
        let divTim = document.createElement("div");
        divTim.className = "divDugmiciS1";
        host.appendChild(divTim);

        let rb;
        let se;
        let l;
        let op;
        let dugme;

        l = document.createElement("label");
        l.innerHTML = "Tim";
        l.className = "NaslovDugmici";
        divTim.appendChild(l);

        se = document.createElement("select");
        se.className = "selectTim";
        divTim.appendChild(se); 

        op = document.createElement("option");
        op.innerHTML = "Dodaj tim";
        op.value = 0;
        se.appendChild(op);

        op = document.createElement("option");
        op.innerHTML = "Izmeni kapitena tima";
        op.value = 1;
        se.appendChild(op);

        op = document.createElement("option");
        op.innerHTML = "Promeni ligu tima";
        op.value = 2;
        se.appendChild(op);

        op = document.createElement("option");
        op.innerHTML = "Izbrisi tim";
        op.value = 3;
        se.appendChild(op);

        dugme = document.createElement("button");
        dugme.innerHTML = "Izvrsi";
        dugme.className = "DugmeTim";
        divTim.appendChild(dugme);

        dugme.onclick=(ev)=>{

            let abc = this.kontejner.querySelector(".PrikazDesno");
            abc.innerHTML = "";
            let desno = this.kontejner.querySelector(".Vraca");
            //desno.innerHTML="";
            let opt = this.kontejner.querySelector(".selectTim");
            let provera = opt.options[opt.selectedIndex].value;

            if(provera==0){
                this.DodajTim(desno);
            }
            else if (provera==1){
                this.IzmeniKapitenaTima(desno);
            }
            else if (provera==2){
                this.IzmeniLiguTima(desno);
            }
            else{
                this.izbrisiTim(desno);
            }
        }
            
    }

    obrisiPrethodnisadrzaj()
    {
        var zaBrisanje = document.querySelector(".divDugmiciS1");
        if(zaBrisanje != null){
        var roditelj = zaBrisanje.parentNode;
        roditelj.removeChild(zaBrisanje);
        }
    }

    DodajDelegata(host){
        host.innerHTML = "";
        host.classList.add("DelegatDodaj");

        let l;
        let i;
        let m;

        l = document.createElement("label");
        l.innerHTML = "Dodaj delegata";
        l.className = "dodDelLab"
        host.appendChild(l);

        l = document.createElement("div")
        l.className = "DodDelDiv";
        host.appendChild(l);

        l = document.createElement("div");
        l.className = "divUnos";
        host.querySelector(".DodDelDiv").appendChild(l);

        m = document.createElement("label");
        m.className = "dodDelLab1";
        m.innerHTML = "Ime";
        l.appendChild(m);

        m = document.createElement("input");
        m.className = "dodDelIme";
        l.appendChild(m);

        l = document.createElement("div");
        l.className = "divUnos";
        host.querySelector(".DodDelDiv").appendChild(l);

        m = document.createElement("label");
        m.className = "dodDelLab1";
        m.innerHTML = "Prezime";
        l.appendChild(m);

        m = document.createElement("input");
        m.className = "dodDelPrezime";
        l.appendChild(m);

        l = document.createElement("div");
        l.className = "divUnos";
        host.querySelector(".DodDelDiv").appendChild(l);

        m = document.createElement("label");
        m.className = "dodDelLab1";
        m.innerHTML = "Redni broj lige";
        l.appendChild(m);

        m = document.createElement("input");
        m.className = "dodDelLig";
        l.appendChild(m);

        l = document.createElement("div");
        l.className = "divUnos";
        host.querySelector(".DodDelDiv").appendChild(l);

        m = document.createElement("label");
        m.className = "dodDelLab1";
        m.innerHTML = "Broj licence";
        l.appendChild(m);

        m = document.createElement("input");
        m.className = "dodDelLic";
        l.appendChild(m);

        let butt = document.createElement("button");
        butt.innerHTML = "Dodaj";
        butt.className = "DugmeDelegat";
        host.appendChild(butt);

        butt.onclick=(ev)=>{
            let imes = host.querySelector(".dodDelIme").value;
            if(imes===null || imes===undefined || imes===""){
                alert("Niste uneli ime sudije");
            }

            let prezimes = host.querySelector(".dodDelPrezime").value;
            if(prezimes===null || prezimes===undefined || prezimes===""){
                alert("Niste uneli prezime sudije");
            }

            let rbl = host.querySelector(".dodDelLig").value;
            if(rbl===null || rbl===undefined || rbl==="" || rbl>3 || rbl<1 ){
                alert("Niste uneli dobar broj lige sudije, postoje 3 lige.");
            }

            let lic = host.querySelector(".dodDelLic").value;
            if(lic===null || lic===undefined || lic==="" || lic<0 ){
                alert("Niste uneli dobru poziciju sudije, postoje 4 pozicije.");
            }

            console.log(imes,prezimes,rbl,lic);

            fetch("https://localhost:5001/Delegat/DodajDelegata/"+imes+"/"+prezimes+"/"
            +rbl+"/"+lic,
            {
                method:"POST"
            }).then(s=>{
                if(s.ok){
                    s.json().then(data=>{
                        console.log(data);
                        let del = new Delegat(data.ime, data.prezime, data.brLicence, data.liga);
                        alert("Uspesno dodat delegat sa brojem licence: "+ data.brLicence);
                        console.log(del);
                        let desno = this.kontejner.querySelector(".Vraca");
                        desno.innerHTML="";
                        del.crtajDelegataDiv(this.kontejner.querySelector(".PrikazDesno"));
                    })
                }
                else{
                    s.text().then(data=>{
                        alert(data);
                    })
                }
            })
                   
        }
    }

    Izmenidelegata(host){
        host.innerHTML = "";
        host.classList.add("DelegatDodaj");

        let l;
        let i;
        let m;

        l = document.createElement("label");
        l.innerHTML = "Izmeni delegata";
        l.className = "dodDelLab"
        host.appendChild(l);

        l = document.createElement("div")
        l.className = "DodDelDiv";
        host.appendChild(l);

        l = document.createElement("div");
        l.className = "divUnos";
        host.querySelector(".DodDelDiv").appendChild(l);

        m = document.createElement("label");
        m.className = "dodDelLab1";
        m.innerHTML = "Broj licence";
        l.appendChild(m);

        m = document.createElement("input");
        m.className = "izmDelBrl";
        l.appendChild(m);

        l = document.createElement("div");
        l.className = "divUnos";
        host.querySelector(".DodDelDiv").appendChild(l);

        m = document.createElement("label");
        m.className = "dodDelLab1";
        m.innerHTML = "Novi broj lige";
        l.appendChild(m);

        m = document.createElement("input");
        m.className = "izmDelNbl";
        l.appendChild(m);

        let butt = document.createElement("button");
        butt.innerHTML = "Izmeni Ligu";
        butt.className = "DugmeSudija";
        host.appendChild(butt);

        butt.onclick=(ev)=>{
            let val = 0;

            let nliga = host.querySelector(".izmDelNbl").value;
            if(nliga===null || nliga===undefined || nliga==="" || nliga>3 || nliga<1 ){
                alert("Niste uneli dobru ligu, postoje 3 lige");
                val = 1;
            }

            let lic = host.querySelector(".izmDelBrl").value;
            if(lic===null || lic===undefined || lic==="" || lic<0 ){
                val = 1;
                alert("Niste uneli dobru licencu delegata");
            }
            if(val != 1){
                fetch("https://localhost:5001/Delegat/PromeniLiguDelegata/"+lic+"/"+nliga,
                {
                    method:"PUT"
                }).then(s=>{
                    if(s.ok){
                        s.json().then(data=>{
                            console.log(data);
                        let del = new Delegat(data.ime, data.prezime, data.brLicence, data.liga);
                        alert("Uspesno izmenjen delegat sa brojem licence: "+ data.brLicence);
                        console.log(del);
                        let desno = this.kontejner.querySelector(".Vraca");
                        desno.innerHTML="";
                        del.izmeniDelegataDiv(this.kontejner.querySelector(".PrikazDesno"));
                        })
                    }
                    else{
                        s.text().then(data=>{
                            alert(data);
                        })
                    }
                })
            }

        }
    }

    izbrisiDelegata(host){
        host.innerHTML = "";
        host.classList.add("DelegatDodaj");

        let l;
        let i;
        let m;

        l = document.createElement("label");
        l.innerHTML = "Izbrisi delegata";
        l.className = "dodDelLab"
        host.appendChild(l);

        l = document.createElement("div")
        l.className = "DodDelDiv";
        host.appendChild(l);

        l = document.createElement("div");
        l.className = "divUnos";
        host.querySelector(".DodDelDiv").appendChild(l);

        m = document.createElement("label");
        m.className = "dodDelLab1";
        m.innerHTML = "Broj licence";
        l.appendChild(m);

        m = document.createElement("input");
        m.className = "izbDelLic";
        l.appendChild(m);

        let butt = document.createElement("button");
        butt.innerHTML = "Izbrisi";
        butt.className = "DugmeSudija";
        host.appendChild(butt);

        butt.onclick=(ev)=>{
            let lic = host.querySelector(".izbDelLic").value;
            if(lic===null || lic===undefined || lic==="" || lic<0 ){
                alert("Niste uneli dobru licencu delegata");
            }

            fetch("https://localhost:5001/Delegat/IzbrisiDelegata/"+lic,
            {
                method:"DELETE"
            }).then(s=>{
                if(s.ok){
                    s.json().then(data=>{
                        console.log(data);
                    })
                }
                else{
                    s.text().then(data=>{
                        alert(data);
                    })
                }
            })

        }
    }

    DodajSudiju(host){
        host.innerHTML = "";
        host.classList.add("SudijaDodaj");

        let l;
        let i;
        let m;

        l = document.createElement("label");
        l.innerHTML = "Dodaj sudiju";
        l.className = "dodDelLab"
        host.appendChild(l);

        l = document.createElement("div")
        l.className = "DodDelDiv";
        host.appendChild(l);

        l = document.createElement("div");
        l.className = "divUnos";
        host.querySelector(".DodDelDiv").appendChild(l);

        m = document.createElement("label");
        m.className = "dodDelLab1";
        m.innerHTML = "Ime";
        l.appendChild(m);

        m = document.createElement("input");
        m.className = "dodSudIme";
        l.appendChild(m);

        l = document.createElement("div");
        l.className = "divUnos";
        host.querySelector(".DodDelDiv").appendChild(l);

        m = document.createElement("label");
        m.className = "dodDelLab1";
        m.innerHTML = "Prezime";
        l.appendChild(m);

        m = document.createElement("input");
        m.className = "dodSudPrezime";
        l.appendChild(m);

        l = document.createElement("div");
        l.className = "divUnos";
        host.querySelector(".DodDelDiv").appendChild(l);

        m = document.createElement("label");
        m.className = "dodDelLab1";
        m.innerHTML = "Redni broj lige";
        l.appendChild(m);

        m = document.createElement("input");
        m.className = "dodSudLig";
        l.appendChild(m);

        l = document.createElement("div");
        l.className = "divUnos";
        host.querySelector(".DodDelDiv").appendChild(l);

        m = document.createElement("label");
        m.className = "dodDelLab1";
        m.innerHTML = "Pozicija sudije";
        l.appendChild(m);

        m = document.createElement("input");
        m.className = "dodSudPoz";
        l.appendChild(m);

        l = document.createElement("div");
        l.className = "divUnos";
        host.querySelector(".DodDelDiv").appendChild(l);

        m = document.createElement("label");
        m.className = "dodDelLab1";
        m.innerHTML = "Broj licence";
        l.appendChild(m);

        m = document.createElement("input");
        m.className = "dodSudLic";
        l.appendChild(m);

        let butt = document.createElement("button");
        butt.innerHTML = "Dodaj";
        butt.className = "DugmeSudija";
        host.appendChild(butt);

        butt.onclick=(ev)=>{
            let imes = host.querySelector(".dodSudIme").value;
            if(imes===null || imes===undefined || imes===""){
                alert("Niste uneli ime sudije");
            }

            let prezimes = host.querySelector(".dodSudPrezime").value;
            if(prezimes===null || prezimes===undefined || prezimes===""){
                alert("Niste uneli prezime sudije");
            }

            let rbl = host.querySelector(".dodSudLig").value;
            if(rbl===null || rbl===undefined || rbl==="" || rbl>3 || rbl<1 ){
                alert("Niste uneli dobar broj lige sudije, postoje 3 lige.");
            }

            let poz = host.querySelector(".dodSudPoz").value;
            if(poz===null || poz===undefined || poz==="" || poz>4 || poz<1 ){
                alert("Niste uneli dobru poziciju sudije, postoje 4 pozicije.");
            }

            let lic = host.querySelector(".dodSudLic").value;
            if(lic===null || lic===undefined || lic==="" || lic<0 ){
                alert("Niste uneli dobru licencu sudije");
            }

            fetch("https://localhost:5001/Sudija/DodajSudiju/"+imes+"/"+prezimes+"/"
            +rbl+"/"+lic+"/"+poz,
            {
                method:"POST"
            }).then(s=>{
                if(s.ok){
                    s.json().then(data=>{
                        console.log(data);
                        let su = new Sudija(data.ime, data.prezime, data.brLicence, data.rdBrLige, data.polozajSudije);
                        alert("Uspesno dodat sudija sa brojem licence: "+ data.brLicence);
                        console.log(su);
                        let desno = this.kontejner.querySelector(".Vraca");
                        desno.innerHTML="";
                        su.crtajSudijuDiv(this.kontejner.querySelector(".PrikazDesno"));
                    })
                }
                else{
                    s.text().then(data=>{
                        alert(data);
                    })
                }
            })
            
            

        }

    }

    IzmeniPozSudije(host){
        host.innerHTML = "";
        host.classList.add("DelegatDodaj");

        let l;
        let i;
        let m;

        l = document.createElement("label");
        l.innerHTML = "Izmeni poziciju sudije";
        l.className = "dodDelLab"
        host.appendChild(l);

        l = document.createElement("div")
        l.className = "DodDelDiv";
        host.appendChild(l);

        l = document.createElement("div");
        l.className = "divUnos";
        host.querySelector(".DodDelDiv").appendChild(l);

        m = document.createElement("label");
        m.className = "dodDelLab1";
        m.innerHTML = "Broj licence";
        l.appendChild(m);

        m = document.createElement("input");
        m.className = "izmPSudLic";
        l.appendChild(m);

        l = document.createElement("div");
        l.className = "divUnos";
        host.querySelector(".DodDelDiv").appendChild(l);

        m = document.createElement("label");
        m.className = "dodDelLab1";
        m.innerHTML = "Nova pozicija";
        l.appendChild(m);

        m = document.createElement("input");
        m.className = "izmPSudPoz";
        l.appendChild(m);

        let butt = document.createElement("button");
        butt.innerHTML = "Izmeni poziciju";
        butt.className = "DugmeSudija";
        host.appendChild(butt);

        butt.onclick=(ev)=>{

            let poz = host.querySelector(".izmPSudPoz").value;
            if(poz===null || poz===undefined || poz==="" || poz>4 || poz<1 ){
                alert("Niste uneli dobru poziciju sudije, postoje 4 pozicije.");
            }

            let lic = host.querySelector(".izmPSudLic").value;
            if(lic===null || lic===undefined || lic==="" || lic<0 ){
                alert("Niste uneli dobru licencu sudije");
            }

            fetch("https://localhost:5001/Sudija/IzmeniSudiju/"+lic+"/"+poz,
            {
                method:"PUT"
            }).then(s=>{
                if(s.ok){
                    s.json().then(data=>{
                        console.log(data);
                        let su = new Sudija(data.ime, data.prezime, data.brLicence, data.rdBrLige, data.polozajSudije);
                        alert("Uspesno izmenjen sudija sa brojem licence: "+ data.brLicence);
                        console.log(su);
                        let desno = this.kontejner.querySelector(".Vraca");
                        desno.innerHTML="";
                        su.izmeniSudijuDiv(this.kontejner.querySelector(".PrikazDesno"));
                    })
                }   
                else{
                    s.text().then(data=>{
                        alert(data);
                    })
                }
            })

        }

    }

    IzmeniLiguSudije(host){
        host.innerHTML = "";
        host.classList.add("DelegatDodaj");

        let l;
        let i;
        let m;

        l = document.createElement("label");
        l.innerHTML = "Izmeni ligu sudije";
        l.className = "dodDelLab"
        host.appendChild(l);

        l = document.createElement("div")
        l.className = "DodDelDiv";
        host.appendChild(l);

        l = document.createElement("div");
        l.className = "divUnos";
        host.querySelector(".DodDelDiv").appendChild(l);

        m = document.createElement("label");
        m.className = "dodDelLab1";
        m.innerHTML = "Broj licence";
        l.appendChild(m);

        m = document.createElement("input");
        m.className = "izmLiSudBrlic";
        l.appendChild(m);

        l = document.createElement("div");
        l.className = "divUnos";
        host.querySelector(".DodDelDiv").appendChild(l);

        m = document.createElement("label");
        m.className = "dodDelLab1";
        m.innerHTML = "Novi broj lige";
        l.appendChild(m);

        m = document.createElement("input");
        m.className = "izmLSudLiga";
        l.appendChild(m);

        let butt = document.createElement("button");
        butt.innerHTML = "Izmeni Ligu";
        butt.className = "DugmeSudija";
        host.appendChild(butt);

        butt.onclick=(ev)=>{

            let nliga = host.querySelector(".izmLSudLiga").value;
            if(nliga===null || nliga===undefined || nliga==="" || nliga>3 || nliga<1 ){
                alert("Niste uneli dobru poziciju sudije, postoje 4 pozicije.");
            }

            let lic = host.querySelector(".izmLiSudBrlic").value;
            if(lic===null || lic===undefined || lic==="" || lic<0 ){
                alert("Niste uneli dobru licencu sudije");
            }

            fetch("https://localhost:5001/Sudija/PromeniLiguSudije/"+lic+"/"+nliga,
            {
                method:"PUT"
            }).then(s=>{
                if(s.ok){
                    s.json().then(data=>{
                        console.log(data);
                        let su = new Sudija(data.ime, data.prezime, data.brLicence, data.rdBrLige, data.polozajSudije);
                        alert("Uspesno izmenjen sudija sa brojem licence: "+ data.brLicence);
                        console.log(su);
                        let desno = this.kontejner.querySelector(".Vraca");
                        desno.innerHTML="";
                        su.izmeniSudijuDiv(this.kontejner.querySelector(".PrikazDesno"));
                    })
                }   
                else{
                    s.text().then(data=>{
                        alert(data);
                    })
                }
            })

        }

    }

    izbrisiSudiju(host){
        host.innerHTML = "";
        host.classList.add("DelegatDodaj");

        let l;
        let i;
        let m;

        l = document.createElement("label");
        l.innerHTML = "Izbrisi sudiju";
        l.className = "dodDelLab"
        host.appendChild(l);

        l = document.createElement("div")
        l.className = "DodDelDiv";
        host.appendChild(l);

        l = document.createElement("div");
        l.className = "divUnos";
        host.querySelector(".DodDelDiv").appendChild(l);

        m = document.createElement("label");
        m.className = "dodDelLab1";
        m.innerHTML = "Broj licence";
        l.appendChild(m);

        m = document.createElement("input");
        m.className = "izbSudLic";
        l.appendChild(m);

        let butt = document.createElement("button");
        butt.innerHTML = "Izbrisi";
        butt.className = "DugmeSudija";
        host.appendChild(butt);

        butt.onclick=(ev)=>{
            let lic = host.querySelector(".izbSudLic").value;
            if(lic===null || lic===undefined || lic==="" || lic<0 ){
                alert("Niste uneli dobru licencu sudije");
            }

            fetch("https://localhost:5001/Sudija/IzbrisiSudiju/"+lic,
            {
                method:"DELETE"
            }).then(s=>{
                if(s.ok){
                    s.json().then(data=>{
                        console.log(data);
                        alert("Uspesno izbrisan sudija");
                    })
                }
                else{
                    s.text().then(data=>{
                        alert(data);
                    })
                }
            })

        }
        
    }

    DodajTim(host){
        host.innerHTML = "";
        host.classList.add("DelegatDodaj");

        let l;
        let i;
        let m;

        l = document.createElement("label");
        l.innerHTML = "Dodaj tim";
        l.className = "dodDelLab"
        host.appendChild(l);

        l = document.createElement("div")
        l.className = "DodDelDiv";
        host.appendChild(l);

        l = document.createElement("div");
        l.className = "divUnos";
        host.querySelector(".DodDelDiv").appendChild(l);

        m = document.createElement("label");
        m.className = "dodDelLab1";
        m.innerHTML = "Ime";
        l.appendChild(m);

        m = document.createElement("input");
        m.className = "dodTimIme";
        l.appendChild(m);

        l = document.createElement("div");
        l.className = "divUnos";
        host.querySelector(".DodDelDiv").appendChild(l);

        m = document.createElement("label");
        m.className = "dodDelLab1";
        m.innerHTML = "Mesto";
        l.appendChild(m);

        m = document.createElement("input");
        m.className = "dodTimMesto";
        l.appendChild(m);

        l = document.createElement("div");
        l.className = "divUnos";
        host.querySelector(".DodDelDiv").appendChild(l);

        m = document.createElement("label");
        m.className = "dodDelLab1";
        m.innerHTML = "Redni broj lige";
        l.appendChild(m);

        m = document.createElement("input");
        m.className = "dodTimBrli";
        l.appendChild(m);

        l = document.createElement("div");
        l.className = "divUnos";
        host.querySelector(".DodDelDiv").appendChild(l);

        m = document.createElement("label");
        m.className = "dodDelLab1";
        m.innerHTML = "Ime kapitena";
        l.appendChild(m);

        m = document.createElement("input");
        m.className = "dodTimImek";
        l.appendChild(m);

        let butt = document.createElement("button");
        butt.innerHTML = "Dodaj";
        butt.className = "DugmeDelegat";
        host.appendChild(butt);

        butt.onclick=(ev)=>{
            let imes = host.querySelector(".dodTimIme").value;
            if(imes===null || imes===undefined || imes===""){
                alert("Niste uneli ime tima");
            }

            let imemes = host.querySelector(".dodTimMesto").value;
            if(imemes===null || imemes===undefined || imemes===""){
                alert("Niste uneli ime mesta");
            }

            let imek = host.querySelector(".dodTimImek").value;
            if(imek===null || imek===undefined || imek===""){
                alert("Niste uneli dobro ime kapitena.");
            }

            let lic = host.querySelector(".dodTimBrli").value;
            if(lic===null || lic===undefined || lic==="" || lic<0 ){
                alert("Niste uneli dobar broj licence.");
            }

            fetch("https://localhost:5001/Tim/DodajTim/"+imes+"/"+imemes+"/"
            +imek+"/"+lic,
            {
                method:"POST"
            }).then(s=>{
                if(s.ok){
                    s.json().then(data=>{
                        console.log(data);
                        let tim = new Tim(data.ime, data.mesto, data.rangLige, data.imeKapitena);
                        alert("Uspesno dodat tim : "+ data.ime + " iz mesta " +data.mesto);
                        console.log(tim);
                        let desno = this.kontejner.querySelector(".Vraca");
                        desno.innerHTML="";
                        tim.crtajTimDiv(this.kontejner.querySelector(".PrikazDesno"));
                    })
                }
                else{
                    s.text().then(data=>{
                        alert(data);
                    })
                }
            })
                   
        }

    }

    IzmeniKapitenaTima(host){
        host.innerHTML = "";
        host.classList.add("DelegatDodaj");

        let l;
        let i;
        let m;

        l = document.createElement("label");
        l.innerHTML = "Izmeni kapitena tima";
        l.className = "dodDelLab"
        host.appendChild(l);

        l = document.createElement("div")
        l.className = "DodDelDiv";
        host.appendChild(l);

        l = document.createElement("div");
        l.className = "divUnos";
        host.querySelector(".DodDelDiv").appendChild(l);

        m = document.createElement("label");
        m.className = "dodDelLab1";
        m.innerHTML = "Ime tima";
        l.appendChild(m);

        m = document.createElement("input");
        m.className = "izmKapImet";
        l.appendChild(m);

        l = document.createElement("div");
        l.className = "divUnos";
        host.querySelector(".DodDelDiv").appendChild(l);

        m = document.createElement("label");
        m.className = "dodDelLab1";
        m.innerHTML = "Ime novog kapitena";
        l.appendChild(m);

        m = document.createElement("input");
        m.className = "izmKapImek";
        l.appendChild(m);

        let butt = document.createElement("button");
        butt.innerHTML = "Izmeni kapitena";
        butt.className = "DugmeSudija";
        host.appendChild(butt);

        butt.onclick=(ev)=>{
            let imet = host.querySelector(".izmKapImet").value;
            if(imet===null || imet===undefined || imet===""){
                alert("Niste uneli ime tima");
            }

            let imek = host.querySelector(".izmKapImek").value;
            if(imek===null || imek===undefined || imek===""){
                alert("Niste uneli ime kapitena");
            }

            fetch("https://localhost:5001/Tim/PromeniImeTima/"+imet+"/"+imek,
            {
                method:"PUT"
            }).then(s=>{
                if(s.ok){
                    s.json().then(data=>{
                        console.log(data);
                    })
                }
                else{
                    s.text().then(data=>{
                        alert(data);
                    })
                }
            })

        }

        
    }

    IzmeniLiguTima(host){
        host.innerHTML = "";
        host.classList.add("DelegatDodaj");

        let l;
        let i;
        let m;

        l = document.createElement("label");
        l.innerHTML = "Izmeni ligu tima";
        l.className = "dodDelLab"
        host.appendChild(l);

        l = document.createElement("div")
        l.className = "DodDelDiv";
        host.appendChild(l);

        l = document.createElement("div");
        l.className = "divUnos";
        host.querySelector(".DodDelDiv").appendChild(l);

        m = document.createElement("label");
        m.className = "dodDelLab1";
        m.innerHTML = "Ime tima";
        l.appendChild(m);

        m = document.createElement("input");
        m.className = "izmLiguImet";
        l.appendChild(m);

        l = document.createElement("div");
        l.className = "divUnos";
        host.querySelector(".DodDelDiv").appendChild(l);

        m = document.createElement("label");
        m.className = "dodDelLab1";
        m.innerHTML = "Novi rang lige";
        l.appendChild(m);

        m = document.createElement("input");
        m.className = "izmLiguTima";
        l.appendChild(m);

        let butt = document.createElement("button");
        butt.innerHTML = "Izmeni ligu tima";
        butt.className = "DugmeSudija";
        host.appendChild(butt);

        butt.onclick=(ev)=>{
            let imet = host.querySelector(".izmLiguImet").value;
            if(imet===null || imet===undefined || imet===""){
                alert("Niste uneli ime tima");
            }

            let liga = host.querySelector(".izmLiguTima").value;
            if(liga===null || liga===undefined || liga==="" || liga <1 || liga>3){
                alert("Niste uneli dobar rang lige, postoje 3 lige.");
            }

            fetch("https://localhost:5001/Tim/PromeniLiguTima/"+imet+"/"+liga,
            {
                method:"PUT"
            }).then(s=>{
                if(s.ok){
                    s.json().then(data=>{
                        console.log(data);
                    })
                }
                else{
                    s.text().then(data=>{
                        alert(data);
                    })
                }
            })

        }

        
    }

    izbrisiTim(host){
        host.innerHTML = "";
        host.classList.add("DelegatDodaj");

        let l;
        let i;
        let m;

        l = document.createElement("label");
        l.innerHTML = "Izbrisi tim";
        l.className = "dodDelLab"
        host.appendChild(l);

        l = document.createElement("div")
        l.className = "DodDelDiv";
        host.appendChild(l);

        l = document.createElement("div");
        l.className = "divUnos";
        host.querySelector(".DodDelDiv").appendChild(l);

        m = document.createElement("label");
        m.className = "dodDelLab1";
        m.innerHTML = "Ime tima";
        l.appendChild(m);

        m = document.createElement("input");
        m.className = "izbTimIme";
        l.appendChild(m);

        let butt = document.createElement("button");
        butt.innerHTML = "Izbrisi";
        butt.className = "DugmeSudija";
        host.appendChild(butt);

        butt.onclick=(ev)=>{
            let ime = host.querySelector(".izbTimIme").value;
            if(ime===null || ime===undefined || ime==="" ){
                alert("Niste uneli ime tima");
            }

            fetch("https://localhost:5001/Tim/IzbrisiTim/"+ime,
            {
                method:"DELETE"
            }).then(s=>{
                if(s.ok){
                    s.json().then(data=>{
                        console.log(data);
                        alert("Uspesno obrisan tim");
                    })
                }
                else{
                    s.text().then(data=>{
                        alert(data);
                    })
                }
            })

        }
        

    }

    DodajMec(host){
        host.innerHTML = "";
        host.classList.add("SudijaDodaj");

        let l;
        let i;
        let m;
        

        l = document.createElement("label");
        l.innerHTML = "Delegiraj mec";
        l.className = "dodDelLab"
        host.appendChild(l);

        l = document.createElement("div")
        l.className = "DodDelDiv";
        host.appendChild(l);

        l = document.createElement("div");
        l.className = "divUnos";
        host.querySelector(".DodDelDiv").appendChild(l);

        m = document.createElement("label");
        m.className = "dodDelLab1";
        m.innerHTML = "Imena timova";
        l.appendChild(m);

        i = document.createElement("div");
        i.className = "timovidodaj";
        l.appendChild(i);

        m = document.createElement("input");
        m.className = "MecTim1";
        i.appendChild(m);

        m = document.createElement("input");
        m.className = "MecTim2";
        i.appendChild(m);


        m = document.createElement("label");
        m.className = "dodDelLab1";
        m.innerHTML = "Licence sudija";
        l.appendChild(m);

        i = document.createElement("div");
        i.className = "timovidodajsud";
        l.appendChild(i);

        m = document.createElement("input");
        m.className = "MecSud1";
        i.appendChild(m);

        m = document.createElement("input");
        m.className = "MecSud2";
        i.appendChild(m);

        m = document.createElement("input");
        m.className = "MecSud3";
        i.appendChild(m);

        m = document.createElement("input");
        m.className = "MecSud4";
        i.appendChild(m);

        m = document.createElement("label");
        m.className = "dodDelLab1";
        m.innerHTML = "Licenca delegata";
        l.appendChild(m);

        m = document.createElement("input");
        m.className = "MecDel1";
        l.appendChild(m);

        i = document.createElement("div");
        i.className = "KoloDodMec";
        l.appendChild(i);

        m = document.createElement("label");
        m.className = "dodDelLab1";
        m.innerHTML = "Kolo kada se mec igra";
        i.appendChild(m);

        m = document.createElement("input");
        m.className = "MecKolo";
        i.appendChild(m);

        let butt = document.createElement("button");
        butt.innerHTML = "Dodaj mec";
        butt.className = "DugmeMec";
        host.appendChild(butt);

        butt.onclick=(ev)=>{
            let imet1 = host.querySelector(".MecTim1").value;
            if(imet1===null || imet1===undefined || imet1==="" ){
                alert("Niste uneli ime prvog tima");
            }

            let imet2 = host.querySelector(".MecTim2").value;
            if(imet2===null || imet2===undefined || imet2==="" ){
                alert("Niste uneli ime drugog tima");
            }

            let licsud1 = host.querySelector(".MecSud1").value;
            if(licsud1===null || licsud1===undefined || licsud1==="" || licsud1 < 1){
                alert("Niste uneli dobru licencu prvog sudije");
            }

            let licsud2 = host.querySelector(".MecSud2").value;
            if(licsud2===null || licsud2===undefined || licsud2==="" || licsud2 < 1){
                alert("Niste uneli dobru licencu drugog sudije");
            }

            let licsud3 = host.querySelector(".MecSud3").value;
            if(licsud3===null || licsud3===undefined || licsud3==="" || licsud3 < 1){
                alert("Niste uneli dobru licencu treceg sudije");
            }

            let licsud4 = host.querySelector(".MecSud4").value;
            if(licsud4===null || licsud4===undefined || licsud4==="" || licsud4 < 1){
                alert("Niste uneli dobru licencu cetvrtog sudije");
            }

            let licdel = host.querySelector(".MecDel1").value;
            if(licdel===null || licdel===undefined || licdel==="" || licdel < 1){
                alert("Niste uneli dobru licencu delegata");
            }

            let kolo = host.querySelector(".MecKolo").value;
            if(kolo===null || kolo===undefined || kolo==="" || kolo < 1){
                alert("Niste uneli dobro kolo, ne moze biti manje od 1");
            }
            
            fetch("https://localhost:5001/Mec/DodajMec/"+imet1+"/"+imet2+"/"+licsud1+"/"+licsud2
            +"/"+licsud3+"/"+licsud4+"/"+licdel+"/"+kolo,
            {
                method:"POST"
            }).then(s=>{
                if(s.ok){
                    s.json().then(data=>{
                        console.log(data);
                        alert("Uspesno dodat mec");
                    })
                }
                else{
                    s.text().then(data=>{
                        alert(data);
                    })
                }
            })

        }

    }

    VratiKolo(host){
        host.innerHTML = "";
        host.classList.add("SudijaDodaj");

        let l;
        let i;
        let m;

        l = document.createElement("label");
        l.innerHTML = "Vrati Kolo";
        l.className = "dodDelLab"
        host.appendChild(l);

        l = document.createElement("div")
        l.className = "DodDelDiv";
        host.appendChild(l);

        m = document.createElement("label");
        m.className = "vratiMecLab";
        m.innerHTML = "Kolo koje zelite da vidite";
        l.appendChild(m);

        m = document.createElement("input");
        m.className = "MecKolo1";
        l.appendChild(m);

        let butt = document.createElement("button");
        butt.innerHTML = "Vrati kolo";
        butt.className = "DugmeMec";
        host.appendChild(butt);

        butt.onclick=(ev)=>{
            let kolo = host.querySelector(".MecKolo1").value;
            if(kolo===null || kolo===undefined || kolo==="" || kolo < 1){
                alert("Niste uneli dobro kolo, ne moze biti manje od 1");
            }
            fetch("https://localhost:5001/Mec/VratiKolo/"+kolo,
            {
                method:"GET"
            }).then(s=>{
                if(s.ok){
                    s.json().then(data=>{
                        let desno = this.kontejner.querySelector(".Vraca");
                        desno.innerHTML="";
                        m = document.createElement("div");
                        m.className = "CrtajSudDiv"
                        desno.appendChild(m);

                        l = document.createElement("label");
                        l.className = "DodSudDivLab";
                        l.innerHTML = "Kolo: ";
                        m.appendChild(l);

                        l = document.createElement("label");
                        l.innerHTML = data[0].kolo ;
                        l.className = "DodSudDivLab";
                        m.appendChild(l);
                        data.forEach(me=>{
                            //console.log(me);
                            console.log(me.timovi[0].ime+me.timovi[1].ime);
                            var mec = new Mec(me.timovi[0].ime,me.timovi[1].ime);
                            mec.crtajUtakmicu(desno);
                        
                        })
                    })
                }
                else{
                    s.text().then(data=>{
                        alert(data);
                    })
                }
            })

        }
        
    }

    VratiMec(host){
        host.innerHTML = "";
        host.classList.add("SudijaDodaj");

        let l;
        let i;
        let m;

        l = document.createElement("label");
        l.innerHTML = "Informacije o mecu";
        l.className = "dodDelLab"
        host.appendChild(l);

        l = document.createElement("div")
        l.className = "DodDelDiv";
        host.appendChild(l);

        l = document.createElement("div");
        l.className = "divUnos";
        host.querySelector(".DodDelDiv").appendChild(l);

        m = document.createElement("label");
        m.className = "dodDelLab1";
        m.innerHTML = "Imena timova";
        l.appendChild(m);

        i = document.createElement("div");
        i.className = "timovidodaj";
        l.appendChild(i);

        m = document.createElement("input");
        m.className = "MecVTim1";
        i.appendChild(m);

        m = document.createElement("input");
        m.className = "MecVTim2";
        i.appendChild(m);

        let butt = document.createElement("button");
        butt.innerHTML = "Vrati mec";
        butt.className = "DugmeMec";
        host.appendChild(butt);

        butt.onclick=(ev)=>{
            let imet1 = host.querySelector(".MecVTim1").value;
            if(imet1===null || imet1===undefined || imet1==="" ){
                alert("Niste uneli ime prvog tima");
            }

            let imet2 = host.querySelector(".MecVTim2").value;
            if(imet2===null || imet2===undefined || imet2==="" ){
                alert("Niste uneli ime drugog tima");
            }

            fetch("https://localhost:5001/Mec/VratiMec/"+imet1+"/"+imet2,
            {
                method:"GET"
            }).then(s=>{
                if(s.ok){
                    s.json().then(data=>{
                        console.log(data);
                        console.log(data.sudija1[0].ime1);
                        let mec = new Mec(data.imet1, data.imet2, data.sudija1[0].ime1, data.sudija1[0].prezime1
                            , data.sudija1[1].ime1, data.sudija1[1].prezime1, data.sudija1[2].ime1,
                            data.sudija1[2].prezime1, data.sudija1[3].ime1, data.sudija1[3].prezime1,
                            data.imedelegata, data.prezdelegata, data.kolo);
                        mec.crtajMec(this.kontejner.querySelector(".PrikazDesno"));

                    })
                }
                else{
                    s.text().then(data=>{
                        alert(data);
                    })
                }
            })

        }

        
    }

}