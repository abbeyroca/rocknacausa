var names = [
    "Kim Gordon",
    "HR",
    "Laura Jane Grace",
    "Iggy Pop",
    "Poly Styrene",
    "Lux Interior",
    "Beth Ditto",
    "George Clinton",
    "Frank Zappa",
    "Renee Scroggins",
    "Ozzy Osbourne",
    "Bobby Hackney"
]

var hlinks = [
    "https://tse2.mm.bing.net/th?id=OIP.xmmbliVcDJsPJTKMB9Gn-gAAAA&pid=Api",
    "https://tse1.mm.bing.net/th?id=OIP.vISPxfwwSOPnByI5f-pDQwAAAA&pid=Api",
    "https://tse1.explicit.bing.net/th?id=OIP.pKF-vkgvccSd8lG6VxgDdgAAAA&pid=Api",
    "https://tse1.explicit.bing.net/th?id=OIP.TQEqbrFPq30meiLp6Xz4AwHaHa&pid=Api",
    "https://preview.redd.it/g9vyjvtf1kz71.jpg?auto=webp&s=3dae145861d3f6fdf80c605171762778079922ff",
    "https://tse3.mm.bing.net/th?id=OIP.NrYqFX0bfXubE8v_uC8DLgHaIL&pid=Api",
    "https://www.welt.de/img/vermischtes/mobile110903970/7972500457-ci102l-w1024/Beth-Ditto-2.jpg",
    "https://s.yimg.com/ny/api/res/1.2/svO6AJJN_MCE_8oavj4sdg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD0xMDgz/https://s.yimg.com/os/creatr-uploaded-images/2022-11/fc51c3f0-6148-11ed-bbbb-660ac6f59307",
    "http://4.bp.blogspot.com/-ONjTVo3yGBI/Tvj6WJi59qI/AAAAAAAAA8I/hDV94C2tK8s/s1600/FrankZappa.jpg",
    "https://i.discogs.com/trdldnsQCfiFCEkB9MM9z1GXRcTgdkM_mC4PNCthA9M/rs:fit/g:sm/q:90/h:500/w:447/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTI5NjMz/MC0xMTk1MjQ3NTQx/LmpwZWc.jpeg",
    "https://static.spin.com/files/2019/08/GettyImages-133617092-1564874122.jpg",
    "http://images.genius.com/ad6650aa8ee85f1eff13d03579831304.233x233x1.jpg"
]

function fill() {
    var grid = document.getElementById('grid-container')
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }

   
    for (let i=0; i<names.length;i++) {
        console.log(names[i]);
        createNewImage(i, hlinks[i], names[i], grid)
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
    numero.innerHTML = i+1

    let nome = document.createElement('div');
    nome.className = "nome";
    nome.innerHTML = name
    
    icontainer.appendChild(img);
    icontainer.appendChild(nome);
    icontainer.appendChild(numero);
    
    grid.appendChild(icontainer);
}

fill()