var comprados = [2, 3, 4, 6, 7, 11, 12, 13, 14, 15, 18, 20, 21, 25, 32, 33, 35, 36, 41, 49, 51, 53, 61, 65, 66,  68, 72, 85, 88, 89, 93, 94, 98, 99]

var names = [
    "Kim Gordon",
    "Rita Lee",
    "Yagao",
    "Raul Seixas",
    "HR",
    "Amy Taylor",
    "Joey Ramone",
    "Laura Jane Grace",
    "Iggy Pop",
    "Poly Styrene",
    "Pelanza",
    "Lux Interior",
    "Sandra Coutinho",
    "Beth Ditto",
    "George Clinton",
    "Hironha",
    "Stephanie Luke",
    "Frank Zappa",
    "Kat Bjelland",
    "Gordog",
    "Damo Suzuki",
    "Marcelixo",
    "Renee Scroggins",
    "Clemente",
    "Ozzy Osbourne",
    "Kathleen Hannah",
    "Bobby Hackney",
    "Theo Kogan",
    "Pedrangeles",
    "Damon Locks",
    "Donita Sparks",
    "Matheus Peixes",
    "Dee Dee Ramone",
    "Sister Rosetta Tharpe",
    "Heldinho",
    "Syd Barret",
    "Tobi Vail",
    "Ariel",
    "Buzz Osbourne",
    "Charlito",
    "Courtney Love",
    "Robert Smith",
    "Rachel Gagliardi",
    "Will",
    "Lanny Gordin",
    "Thourston Moore",
    "Kate Pierson",
    "Shannon Selberg",
    "Diegao Churumi",
    "Åsa Söderqvist",
    "Bode Macabro",
    "Arto Lindsay",
    "Matheusao",
    "Dora Longo Bahia",
    "Marian Li Pino",
    "Joe Strummer",
    "Mariao",
    "Courtney Barnett",
    "Lee Ranaldo",
    "Ze Gordinho",
    "Ney Matogrosso",
    "Diego Marx",
    "Siouxsie Sioux",
    "Tina",
    "Debbie Harris",
    "Mestre Vini",
    "Ari Up",
    "Johny Ramone",
    "Juan Calavera",
    "Paloma McLardy",
    "Hollie Cook",
    "Iago Fiches",
    "Cornelius Lucifer",
    "Jimi Hendrix",
    "Ieri Luna",
    "Janis Joplin",
    "Ian MacKaye",
    "Exene Cervenka",
    "Patti Smith",
    "Mike Watt",
    "Keith Morris",
    "Karen Carpenter",
    "George Benson",
    "Pitchu Ferraz",
    "Marky Ramone",
    "Muddy Waters",
    "Joni Mitchell",
    "Lou Reed",
    "Elliot Smith",
    "Lora Logic",
    "Eloy Casagrande",
    "Billie Holliday",
    "Arnaldo Baptista",
    "Mike Kinsella",
    "Mark Sandman",
    "Anton Newcombe",
    "Oskar Carls",
    "Toninho Horta",
    "Stevie Nicks",
    "Chorão"
]

var hlinks = [
    "https://tse2.mm.bing.net/th?id=OIP.xmmbliVcDJsPJTKMB9Gn-gAAAA&pid=Api",
    "https://tse1.mm.bing.net/th?id=OIP.2wJXe6ZIPBdNMOPn7C0eKQHaHa&pid=Api",
    "https://live.staticflickr.com/65535/54321011983_e88567ab3d_z.jpg",
    "https://tse1.explicit.bing.net/th?id=OIP.TCVlKwFSwzt1nLmrOoHxoQHaHa&pid=Api",
    "https://tse1.mm.bing.net/th?id=OIP.vISPxfwwSOPnByI5f-pDQwAAAA&pid=Api",
    "https://64.media.tumblr.com/0f0c0fed68d7ab786f6bbb2319b511c3/f50eda857b9139ea-6f/s1280x1920/f41a4ff1d163b028cc3f4adddee1fa03cc15275f.jpg",
    "https://tse2.mm.bing.net/th?id=OIP.kx76q529uJ-vvYKdcDr8BwHaHa&pid=Api",
    "https://tse1.explicit.bing.net/th?id=OIP.pKF-vkgvccSd8lG6VxgDdgAAAA&pid=Api",
    "https://tse1.explicit.bing.net/th?id=OIP.TQEqbrFPq30meiLp6Xz4AwHaHa&pid=Api",
    "https://preview.redd.it/g9vyjvtf1kz71.jpg?auto=webp&s=3dae145861d3f6fdf80c605171762778079922ff",
    "https://live.staticflickr.com/65535/54320887756_ed7ff428ba_z.jpg",
    "https://tse3.mm.bing.net/th?id=OIP.NrYqFX0bfXubE8v_uC8DLgHaIL&pid=Api",
    "https://conteudo.imguol.com.br/c/entretenimento/9d/2018/08/07/sandra-coutinho-das-mercenarias-1533653314183_v2_300x300.jpg",
    "https://www.welt.de/img/vermischtes/mobile110903970/7972500457-ci102l-w1024/Beth-Ditto-2.jpg",
    "https://s.yimg.com/ny/api/res/1.2/svO6AJJN_MCE_8oavj4sdg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD0xMDgz/https://s.yimg.com/os/creatr-uploaded-images/2022-11/fc51c3f0-6148-11ed-bbbb-660ac6f59307",
    "https://live.staticflickr.com/65535/54320821191_5ee6fb978d_z.jpg",
    "https://tse1.mm.bing.net/th?id=OIP.DLbUWArn9bcbRWFkUpZC-AHaGQ&pid=Api`",
    "http://4.bp.blogspot.com/-ONjTVo3yGBI/Tvj6WJi59qI/AAAAAAAAA8I/hDV94C2tK8s/s1600/FrankZappa.jpg",
    "https://tse2.mm.bing.net/th?id=OIP.3bOQ3o3xlvQHoKYAqFBK7wHaHa&pid=Api",
    "https://live.staticflickr.com/65535/54321062174_0bd04ea23c_z.jpg",
    "https://tse2.mm.bing.net/th?id=OIP.O7MbmQk4V26kAXV3yMIvuAHaHd&pid=Api",
    "https://live.staticflickr.com/65535/54321238480_4ac7ef157a_z.jpg",
    "https://i.discogs.com/trdldnsQCfiFCEkB9MM9z1GXRcTgdkM_mC4PNCthA9M/rs:fit/g:sm/q:90/h:500/w:447/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTI5NjMz/MC0xMTk1MjQ3NTQx/LmpwZWc.jpeg",
    "https://tse1.mm.bing.net/th?id=OIP.EBbHKrm-6lyBpTzMPvalfQAAAA&pid=Api",
    "https://static.spin.com/files/2019/08/GettyImages-133617092-1564874122.jpg",
    "https://www.wallofcelebrities.com/celebrity/kathleen-hanna/pictures/xxlarge/kathleen-hanna_2389956.jpg",
    "http://images.genius.com/ad6650aa8ee85f1eff13d03579831304.233x233x1.jpg",
    "https://tse3.mm.bing.net/th?id=OIP.d1R-0m04cP8gSM7qkDQ7CwAAAA&pid=Api",
    "https://live.staticflickr.com/65535/54321018419_7a16aa850b_z.jpg",
    "https://tse1.mm.bing.net/th?id=OIP.C16J1hBT9SUvNoj_V-XWiwAAAA&pid=Api",
    "https://tse1.mm.bing.net/th?id=OIP.5YRNtc91B6RyRM1XqzvkUwHaHa&pid=Api",
    "https://live.staticflickr.com/65535/54321194215_3bb0138d12_z.jpg",
    "https://www.usleathermart.com/wp-content/uploads/2023/10/Dee-Dee-Ramone-Leather-Jacket.jpg",
    "http://cdn8.openculture.com/wp-content/uploads/2013/04/tharpe.jpg",
    "https://live.staticflickr.com/65535/54320776231_1163043b99_z.jpg",
    "https://tse1.mm.bing.net/th?id=OIP.bj717FDz7oZabmQZaMTKZAHaGL&pid=Api",
    "https://tse1.mm.bing.net/th?id=OIP.n0zh4Lcc9lYrcrDLq1zG_AHaHa&pid=Api",
    "https://br.in-edit.org/wp-content/uploads/2022/06/Ariel.jpg",
    "https://tse4.mm.bing.net/th?id=OIP.U7RHeFu9OtOG-YNNbhr8NgAAAA&pid=Api",
    "https://live.staticflickr.com/65535/54321194200_2efa5706d9_z.jpg",
    "https://tse4.mm.bing.net/th?id=OIP.sR022N_wu6R0nLyILbSN_AAAAA&pid=Api",
    "https://tse1.mm.bing.net/th?id=OIP.tEYV7kdrrGrCrisDMLfbFwHaHa&pid=Api",
    "https://tse2.mm.bing.net/th?id=OIP.wtpkORE7fDKGseQZquq5DwHaJQ&pid=Api",
    "https://live.staticflickr.com/65535/54320821196_d56e642b3f_z.jpg",
    "https://3.bp.blogspot.com/-dECjkfv4tiU/WOkSaWH29CI/AAAAAAAAAZg/Y3d7Op_JW1A1EBB6GqFJPp18VQ6UtNHsACEw/s640/Lanny-Diabo.jpg",
    "https://tse1.mm.bing.net/th?id=OIP.l0z9HpIlfMfrAGE9bEpJmgHaGL&pid=Api",
    "https://tse1.explicit.bing.net/th?id=OIP.hq3ikvwiavmUHBujxTIxOgAAAA&pid=Api",
    "https://tse1.explicit.bing.net/th?id=OIP.gv5hI5soyKgDjUFmVb_pIAHaH2&pid=Api",
    "https://live.staticflickr.com/65535/54321238495_065586b38b_z.jpg",
    "https://tse1.explicit.bing.net/th?id=OIP._3sN5utobrI-RWMcIjmwqwHaHa&pid=Api",
    "https://live.staticflickr.com/65535/54319932782_170782ff5d_z.jpg",
    "https://tse2.mm.bing.net/th?id=OIP.Jp-alBCevuu7bDgjKkYPOwHaHa&pid=Api",
    "https://live.staticflickr.com/65535/54319998597_0e12582aa1_z.jpg",
    "https://f.i.uol.com.br/fotografia/2013/05/08/273831-970x600-1.jpeg",
    "https://live.staticflickr.com/7038/13911889213_687e8f6a52_b.jpg",
    "https://tse1.mm.bing.net/th?id=OIP.n_jowQJD_GWBls8Ks2pA7wHaIy&pid=Api",
    "https://live.staticflickr.com/65535/54319998567_599b54142a_z.jpg",
    "https://tse3.mm.bing.net/th?id=OIP.TCPoaPVtYKb23FvdMfbTdAHaHa&pid=Api",
    "https://tse1.mm.bing.net/th?id=OIP.uHhtVnKc4OKVgQ--1sn9PgHaIy&pid=Api",
    "https://live.staticflickr.com/65535/54321303835_1851ba7539_z.jpg",
    "https://aloalobahia.com/images/p/neybiografiaep_alo_alo_bahia.png",
    "https://live.staticflickr.com/65535/54321127269_63cb2cf404_z.jpg",
    "https://tse3.mm.bing.net/th?id=OIP.bcsjwwHzYQj7HMzvScSj1gHaIy&pid=Api",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ41MrufsvSjxs-D-FR-VR91rB7m8fJBvOlA&s",
    "https://tse1.explicit.bing.net/th?id=OIP.DqEB_r1zTf1DwPnTSgW8mQHaHa&pid=Api",
    "https://live.staticflickr.com/65535/54321303840_58ee63e72a_z.jpg",
    "https://tse1.mm.bing.net/th?id=OIP.wdLuFl2IeCSfJvYlygX6oQHaIy&pid=Api",
    "https://tse4.mm.bing.net/th?id=OIP.6Lonk5tysF9DFKGkRg7a8AHaIZ&pid=Api",
    "https://live.staticflickr.com/65535/54320887761_58be8eae8e_z.jpg",
    "https://tse4.mm.bing.net/th?id=OIP.rrHBYhx1CFMaZmfjgbUgswAAAA&pid=Api",
    "https://tse2.mm.bing.net/th?id=OIP.9g86Rl4qGklxrSnJsMCz3gHaHa&pid=Api",
    "https://live.staticflickr.com/65535/54321303815_e4a4a090ae_z.jpg",
    "https://www.oexplorador.com.br/exp/wp-content/uploads/imagens-old/ft_imagem_33556_8548_08082013.jpg",
    "https://tse4.mm.bing.net/th?id=OIP.iVxWNZh17gOhsrOZ5Yq8cgHaIj&pid=Api",
    "https://miro.medium.com/v2/resize:fit:1000/1*69AET7vA2bxazR_WCt_QRw.jpeg",
    "https://tse1.mm.bing.net/th?id=OIP.zwJyNwq90OOuHPqFg1H0JwHaG6&pid=Api",
    "https://tse3.mm.bing.net/th?id=OIP.1OcvzjbFIGF3PSr5DWw7zAHaJQ&pid=Api",
    "https://tse3.mm.bing.net/th?id=OIP.kZfYsCNWV91d24Ms1iK5nAHaJQ&pid=Api",
    "https://tse4.mm.bing.net/th?id=OIP.Jy-F8CdvYY6R8rqLfkwrDAHaHa&pid=Api",
    "https://tse2.mm.bing.net/th?id=OIP.5HdUVB8dDRDMvjnzbCIXcgHaHa&pid=Api",
    "https://tse4.mm.bing.net/th?id=OIP.Zh_M0qBesM_FCUHOxIhFHQHaGm&pid=Api",
    "https://tse1.mm.bing.net/th?id=OIP.A_YLDfDN6bQpiwTliZcfqAHaJO&pid=Api",
    "https://tse4.mm.bing.net/th?id=OIP.yw30xoZxGEvR07bmcJh6QgHaHa&pid=Api",
    "https://live.staticflickr.com/8053/8421153340_65ebc332c9_b.jpg",
    "https://tse2.mm.bing.net/th?id=OIP.xK5hjkMaaoaKikqQj9hA3AHaHa&pid=Api",
    "https://tse4.mm.bing.net/th?id=OIP.AUq7oImcv1aRbbGhsqHjyQHaHa&pid=Api",
    "https://tse2.mm.bing.net/th?id=OIP.qU5uagcbgYuHxayjTQ17DAHaHj&pid=Api",
    "https://tse3.mm.bing.net/th?id=OIP.jByzthGp-vVBfCHQdgSelwHaHF&pid=Api",
    "https://tse1.mm.bing.net/th?id=OIP.tFiKUfpxLy8WfoeHjo9PXQHaHa&pid=Api",
    "https://tse1.mm.bing.net/th?id=OIP.3b76_e2ohVWex50a2l7k8wHaHa&pid=Api",
    "https://tse4.mm.bing.net/th?id=OIP.76dnjqtPhWcoU9oD4WNP2wHaEK&pid=Api",
    "https://tse4.mm.bing.net/th?id=OIP.mnQY7sFaJCV4X_yXb41i4wHaGY&pid=Api",
    "https://tse4.mm.bing.net/th?id=OIP.QFu1fwQyvA0pYCjtw2LCpAHaG1&pid=Api",
    "https://last-donut-of-the-night.ghost.io/content/images/v0/b/zmtvapp.appspot.com/o/pictures-2fb9ac1622-7417-438f-84b7-9ae114a5aa43.jpg",
    "https://tse3.mm.bing.net/th?id=OIP.aSnE5FyCIil56tV17POaPwAAAA&pid=Api",
    "https://i.pinimg.com/originals/83/a5/94/83a5945ab5441eba8afee3c9726f75af.jpg",
    "https://www.shutterstock.com/editorial/image-editorial/M9T5Qa37O1TaQ505MTAxODg=/viagra-boys-saxophonist-oskar-carls-performs-2024-440nw-14653232f.jpg",
    "https://tse3.mm.bing.net/th?id=OIP.D9HHjLuspLiydQgnIfAWOQHaHa&pid=Api",
    "https://revista.cifras.com.br/wp-content/uploads/2013/01/5385.245.jpg",
    "https://tse3.mm.bing.net/th?id=OIP.Z69s8Qs0r2grQZ4GtGKxygHaFj&pid=Api",
]

function fill() {
    var grid = document.getElementById('grid-container');
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }

   
    for (let i=0; i<names.length;i++) {
        createNewImage(i, hlinks[i], names[i], grid);
    }
}

function createNewImage(i, hlink, name, grid) {
    let icontainer = document.createElement('div');
    icontainer.className = "container";

    let img = document.createElement('img');
    img.className = "imagem";
    img.src = hlink;
    img.alt = name;
    img.title = name;
    
    let numero = document.createElement('div');
    numero.className = "numero";
    numero.innerHTML = i+1;
    
    let nome = document.createElement('div');
    nome.className = "nome";
    nome.innerHTML = name;
    
    
    if(comprados.includes(i+1)) {
        let comprado = document.createElement('div');
        comprado.className = "comprado";
        icontainer.appendChild(comprado);
        nome.innerHTML = "Comprado";
    } 

    
    icontainer.appendChild(img);
    icontainer.appendChild(nome);
    icontainer.appendChild(numero);
    
    grid.appendChild(icontainer);
}

fill();


function pegaColuna(query) {
    const sheetId = "1k0_5lvTkX-u6FiG4jdNweVmse7kewzOH";
    const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;;
    const sheetName = "RIFA SOLIDARIA";
    var url = `${base}&sheet=${sheetName}&tq=${encodeURIComponent(query)}`;
    var coluna = [];
    fetch(url)
    .then(res => res.text())
    .then(rep => {
        // Desconsidera textos adicionais e extrai so JSON
        let jsonData = JSON.parse(rep.substring(47).slice(0, -2))
        let colz = [];
        // Extrai o nome das colunas
        jsonData.table.cols.forEach((heading) => {
            let column = heading.label;
            colz.push(column);
        })
        //Extrai dados das linhas
        jsonData.table.rows.forEach((rowData) => {
            colz.forEach((ele, ind) => {
            if (rowData.c[ind] != null) {
                coluna.push(rowData.c[ind].v);
                console.log(query, rowData.c[ind].v);
            }    
        })
      })
    })
    console.log("coluna", coluna);
    return coluna;
}

function sorteio() {
    var nomes = pegaColuna("Select A");
    var numeros = pegaColuna("Select B");
    var candidatos = [];
    console.log("len nomes", nomes.length);
    console.log("len numeros", numeros.length);
    for (var i = 0; i < nomes.length; i++) {
        console.log("nome ", nomes[i]);
        const numerosPorPessoa = numeros[i].split(";");
        for (var j = 0; j < numerosPorPessoa.length; j++) {
            console.log("numero por pessoa", numerosPorPessoa[j]);
            let candidato = `${nomes[i]} ${numerosPorPessoa[j]}`;
            console.log("Candidato", candidato);
            candidatos.push(candidato);
        }
    }
    let sorteado = parseInt(Math.random()*candidatos.length);
    console.log("Sorteado", sorteado)
    console.log("Candidato sorteado", candidatos[sorteado]);
}

