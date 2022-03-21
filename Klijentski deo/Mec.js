export class Mec{
    constructor(imet1, imet2, imesud1, prezsud1, imesud2, prezsud2, imesud3, prezsud3,
        imesud4, prezsud4, imedel, prezdel, kolo){
        this.imet1 = imet1;
        this.imet2 = imet2;
        this.imesud1 = imesud1;
        this.prezsud1 = prezsud1;
        this.imesud2 = imesud2;
        this.prezsud2 = prezsud2;
        this.imesud3 = imesud3;
        this.prezsud3 = prezsud3;
        this.imesud4 = imesud4;
        this.prezsud4 = prezsud4;
        this.imedel = imedel;
        this.prezdel = prezdel;
        this.kolo = kolo;
    }

    crtajMec(host){
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
        i.appendChild(m);

        l = document.createElement("label");
        l.className = "DodSudDivLab";
        l.innerHTML = "Trazeni mec";
        m.appendChild(l);

        m = document.createElement("div");
        m.className = "CrtajSudDiv"
        i.appendChild(m);

        l = document.createElement("label");
        l.className = "DodSudDivLab";
        l.innerHTML = "Kolo: ";
        m.appendChild(l);

        l = document.createElement("label");
        l.innerHTML = this.kolo ;
        l.className = "DodSudDivLab";
        m.appendChild(l);

        m = document.createElement("div");
        m.className = "CrtajSudDiv"
        i.appendChild(m);

        l = document.createElement("label");
        l.className = "DodSudDivLab";
        l.innerHTML = "Ime prvog tima : ";
        m.appendChild(l);

        l = document.createElement("label");
        l.innerHTML = this.imet1 ;
        l.className = "DodSudDivLab";
        m.appendChild(l);

        m = document.createElement("div");
        m.className = "CrtajSudDiv"
        i.appendChild(m);

        l = document.createElement("label");
        l.className = "DodSudDivLab";
        l.innerHTML = "Ime drugog tima : ";
        m.appendChild(l);

        l = document.createElement("label");
        l.innerHTML = this.imet2;
        l.className = "DodSudDivLab";
        m.appendChild(l);

        m = document.createElement("div");
        m.className = "CrtajSudDiv"
        i.appendChild(m);

        l = document.createElement("label");
        l.className = "DodSudDivLab";
        l.innerHTML = "Prvi sudija : ";
        m.appendChild(l);

        l = document.createElement("label");
        l.innerHTML = this.imesud1+ " ";
        l.className = "DodSudDivLab";
        m.appendChild(l);

        l = document.createElement("label");
        l.innerHTML = this.prezsud1;
        l.className = "DodSudDivLab";
        m.appendChild(l);

        m = document.createElement("div");
        m.className = "CrtajSudDiv"
        i.appendChild(m);

        l = document.createElement("label");
        l.className = "DodSudDivLab";
        l.innerHTML = "Drugi sudija: ";
        m.appendChild(l);

        l = document.createElement("label");
        l.innerHTML = this.imesud2 + " ";
        l.className = "DodSudDivLab";
        m.appendChild(l);

        l = document.createElement("label");
        l.innerHTML = this.prezsud2;
        l.className = "DodSudDivLab";
        m.appendChild(l);

        m = document.createElement("div");
        m.className = "CrtajSudDiv"
        i.appendChild(m);

        l = document.createElement("label");
        l.className = "DodSudDivLab";
        l.innerHTML = "Treci sudija: ";
        m.appendChild(l);

        l = document.createElement("label");
        l.innerHTML = this.imesud3 + " ";
        l.className = "DodSudDivLab";
        m.appendChild(l);

        l = document.createElement("label");
        l.innerHTML = this.prezsud3;
        l.className = "DodSudDivLab";
        m.appendChild(l);

        m = document.createElement("div");
        m.className = "CrtajSudDiv"
        i.appendChild(m);

        l = document.createElement("label");
        l.className = "DodSudDivLab";
        l.innerHTML = "Cetvrti sudija: ";
        m.appendChild(l);

        l = document.createElement("label");
        l.innerHTML = this.imesud4 + " ";
        l.className = "DodSudDivLab";
        m.appendChild(l);

        l = document.createElement("label");
        l.innerHTML = this.prezsud4;
        l.className = "DodSudDivLab";
        m.appendChild(l);

        m = document.createElement("div");
        m.className = "CrtajSudDiv"
        i.appendChild(m);

        l = document.createElement("label");
        l.className = "DodSudDivLab";
        l.innerHTML = "Delegat: ";
        m.appendChild(l);

        l = document.createElement("label");
        l.innerHTML = this.imedel + " ";
        l.className = "DodSudDivLab";
        m.appendChild(l);

        l = document.createElement("label");
        l.innerHTML = this.prezdel;
        l.className = "DodSudDivLab";
        m.appendChild(l);
    }

    crtajUtakmicu(host){
        host.classList.add("SudijaDodajCrt");

        let l;
        let i;
        let m;

        m = document.createElement("div");
        m.className = "DodDelDiv"
        host.appendChild(m);

        l = document.createElement("label");
        l.className = "dodDelLab1";
        l.innerHTML = this.imet1 + " - ";
        m.appendChild(l);

        l = document.createElement("label");
        l.innerHTML = this.imet2 + " ";
        l.className = "dodDelLab1";
        m.appendChild(l);   
    }

}