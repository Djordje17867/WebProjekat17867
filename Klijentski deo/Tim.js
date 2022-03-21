export class Tim{
    constructor(ime, mesto, brLige, imeKap){
        this.ime = ime;
        this.mesto = mesto;
        this.brLige = brLige;
        this.imeKap = imeKap;
    }

    crtajTim(host){
        var tr = document.createElement("tr");
        host.appendchild(tr);

        var el = document.createElement("td");
        el.innerHTML = this.ime;
        tr.appendChild(el);

        var el = document.createElement("td");
        el.innerHTML = this.mesto;
        tr.appendChild(el);

        var el = document.createElement("td");
        el.innerHTML = this.brLige;
        tr.appendChild(el);

        var el = document.createElement("td");
        el.innerHTML = this.imeKap;
        tr.appendChild(el);


    }

    crtajTimDiv(host){
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
        l.innerHTML = "Dodati tim";
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
        l.innerHTML = "Mesto : ";
        m.appendChild(l);

        l = document.createElement("label");
        l.innerHTML = this.mesto;
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
        l.innerHTML = "Kapiten : ";
        m.appendChild(l);

        l = document.createElement("label");
        l.innerHTML = this.imeKap;
        l.className = "DodSudDivLab";
        m.appendChild(l);

    }

    izmeniTimDiv(host){
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
        l.innerHTML = "Izmenjeni tim";
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
        l.innerHTML = "Mesto : ";
        m.appendChild(l);

        l = document.createElement("label");
        l.innerHTML = this.mesto;
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
        l.innerHTML = "Kapiten : ";
        m.appendChild(l);

        l = document.createElement("label");
        l.innerHTML = this.imeKap;
        l.className = "DodSudDivLab";
        m.appendChild(l);

    }
}