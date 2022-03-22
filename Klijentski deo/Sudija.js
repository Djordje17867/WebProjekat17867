export class Sudija{
    constructor(ime, prezime, brLic, brLige, polozaj){
        this.ime = ime;
        this.prezime = prezime;
        this. brLic = brLic;
        this.brLige = brLige;
        this.polozaj = polozaj;
    }

    crtajSudijuTab(host){
        var tr = document.createElement("tr");
        host.appendchild(tr);
        //var tr = document.createElement("div");
        //host.appendChild(tr);
        var el = document.createElement("td");
        el.innerHTML = this.ime;
        tr.appendChild(el);

        var el = document.createElement("td");
        el.innerHTML = this.prezime;
        tr.appendChild(el);

        var el = document.createElement("td");
        el.innerHTML = this.brLic;
        tr.appendChild(el);

        var el = document.createElement("td");
        el.innerHTML = this.brLige;
        tr.appendChild(el);

        var el = document.createElement("td");
        el.innerHTML = this.polozaj;
        tr.appendChild(el);


    }

    

    crtajSudije(host){

        let l;
        let i;
        let m;

        i = document.createElement("div");
        i.className = "crtajsuddivgl"
        host.appendChild(i);

        m = document.createElement("div");
        m.className = "CrtajSudDivLabgl"
        i.appendChild(m)

        m = document.createElement("div");
        m.className = "CrtajSudDiv"
        i.appendChild(m)

        l = document.createElement("label");
        l.className = "DodSudDivLab";
        l.innerHTML = "Ime : ";
        m.appendChild(l);

        l = document.createElement("label");
        l.innerHTML = this.ime;
        l.className = "DodSudDivLab";
        m.appendChild(l);

        m = document.createElement("div");
        m.className = "CrtajSudDiv"
        i.appendChild(m)

        l = document.createElement("label");
        l.className = "DodSudDivLab";
        l.innerHTML = "Prezime : ";
        m.appendChild(l);

        l = document.createElement("label");
        l.innerHTML = this.prezime;
        l.className = "DodSudDivLab";
        m.appendChild(l);

        m = document.createElement("div");
        m.className = "CrtajSudDiv"
        i.appendChild(m)

        l = document.createElement("label");
        l.className = "DodSudDivLab";
        l.innerHTML = "Broj licence : ";
        m.appendChild(l);

        l = document.createElement("label");
        l.innerHTML = this.brLic;
        l.className = "DodSudDivLab";
        m.appendChild(l);
        
    }

    crtajSudijuDiv(host){
        host.innerHTML = "";
        host.classList.add("SudijaDodajCrt");

        let l;
        let i;
        let m;

        i = document.createElement("div");
        i.className = "crtajsuddivgl"
        host.appendChild(i);

        m = document.createElement("div");
        m.className = "CrtajSudDivLabgl"
        i.appendChild(m)

        l = document.createElement("label");
        l.className = "DodSudDivLab";
        l.innerHTML = "Dodati sudija";
        m.appendChild(l);

        m = document.createElement("div");
        m.className = "CrtajSudDiv"
        i.appendChild(m)

        l = document.createElement("label");
        l.className = "DodSudDivLab";
        l.innerHTML = "Ime : ";
        m.appendChild(l);

        l = document.createElement("label");
        l.innerHTML = this.ime;
        l.className = "DodSudDivLab";
        m.appendChild(l);

        m = document.createElement("div");
        m.className = "CrtajSudDiv"
        i.appendChild(m)

        l = document.createElement("label");
        l.className = "DodSudDivLab";
        l.innerHTML = "Prezime : ";
        m.appendChild(l);

        l = document.createElement("label");
        l.innerHTML = this.prezime;
        l.className = "DodSudDivLab";
        m.appendChild(l);

        m = document.createElement("div");
        m.className = "CrtajSudDiv"
        i.appendChild(m)

        l = document.createElement("label");
        l.className = "DodSudDivLab";
        l.innerHTML = "Redni broj lige : ";
        m.appendChild(l);

        l = document.createElement("label");
        l.innerHTML = this.brLige;
        l.className = "DodSudDivLab";
        m.appendChild(l);

        m = document.createElement("div");
        m.className = "CrtajSudDiv"
        i.appendChild(m)

        l = document.createElement("label");
        l.className = "DodSudDivLab";
        l.innerHTML = "Broj licence : ";
        m.appendChild(l);

        l = document.createElement("label");
        l.innerHTML = this.brLic;
        l.className = "DodSudDivLab";
        m.appendChild(l);

        m = document.createElement("div");
        m.className = "CrtajSudDiv"
        i.appendChild(m)

        l = document.createElement("label");
        l.className = "DodSudDivLab";
        l.innerHTML = "Pozicija : ";
        m.appendChild(l);

        l = document.createElement("label");
        l.innerHTML = this.polozaj;
        l.className = "DodSudDivLab";
        m.appendChild(l);

    }

    izmeniSudijuDiv(host){

        host.innerHTML = "";
        host.classList.add("SudijaDodajCrt");

        let l;
        let i;
        let m;

        i = document.createElement("div");
        i.className = "crtajsuddivgl"
        host.appendChild(i);

        m = document.createElement("div");
        m.className = "CrtajSudDivLabgl"
        i.appendChild(m)

        l = document.createElement("label");
        l.className = "DodSudDivLab";
        l.innerHTML = "Izmenjeni sudija";
        m.appendChild(l);

        m = document.createElement("div");
        m.className = "CrtajSudDiv"
        i.appendChild(m)

        l = document.createElement("label");
        l.className = "DodSudDivLab";
        l.innerHTML = "Ime : ";
        m.appendChild(l);

        l = document.createElement("label");
        l.innerHTML = this.ime;
        l.className = "DodSudDivLab";
        m.appendChild(l);

        m = document.createElement("div");
        m.className = "CrtajSudDiv"
        i.appendChild(m)

        l = document.createElement("label");
        l.className = "DodSudDivLab";
        l.innerHTML = "Prezime : ";
        m.appendChild(l);

        l = document.createElement("label");
        l.innerHTML = this.prezime;
        l.className = "DodSudDivLab";
        m.appendChild(l);

        m = document.createElement("div");
        m.className = "CrtajSudDiv"
        i.appendChild(m)

        l = document.createElement("label");
        l.className = "DodSudDivLab";
        l.innerHTML = "Redni broj lige : ";
        m.appendChild(l);

        l = document.createElement("label");
        l.innerHTML = this.brLige;
        l.className = "DodSudDivLab";
        m.appendChild(l);

        m = document.createElement("div");
        m.className = "CrtajSudDiv"
        i.appendChild(m)

        l = document.createElement("label");
        l.className = "DodSudDivLab";
        l.innerHTML = "Broj licence : ";
        m.appendChild(l);

        l = document.createElement("label");
        l.innerHTML = this.brLic;
        l.className = "DodSudDivLab";
        m.appendChild(l);

        m = document.createElement("div");
        m.className = "CrtajSudDiv"
        i.appendChild(m)

        l = document.createElement("label");
        l.className = "DodSudDivLab";
        l.innerHTML = "Pozicija : ";
        m.appendChild(l);

        l = document.createElement("label");
        l.innerHTML = this.polozaj;
        l.className = "DodSudDivLab";
        m.appendChild(l);

    }
}