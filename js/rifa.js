var names = [
    "Kim Gordon",
    "HR",
    "Amy Taylor",
    "Joey Ramone",
    "Laura Jane Grace",
    "Iggy Pop",
    "Poly Styrene",
    "Lux Interior",
    "Beth Ditto",
    "George Clinton",
    "Stephanie Luke",
    "Frank Zappa",
    "Kat Bjelland",
    "Damo Suzuki",
    "Renee Scroggins",
    "Ozzy Osbourne",
    "Kathleen Hannah",
    "Bobby Hackney",
    "Theo Kogan",
    "Damon Locks",
    "Donita Sparks",
    "Dee Dee Ramone",
    "Sister Rosetta Tharpe",
    "Syd Barret",
    "Tobi Vail",
    "Buzz Osbourne",
    "Courtney Love",
    "Robert Smith",
    "Rachel Gagliardi",
    "Thourston Moore",
    "Kate Pierson",
    "Shannon Selberg",
    "Åsa Söderqvist",
    "Arto Lindsay",
    "Marian Li Pino",
    "Joe Strummer",
    "Courtney Barnett",
    "Lee Ranaldo",
    "Siouxsie Sioux",
    "Debbie Harris",
    "Ari Up",
    "Johny Ramone",
    "Paloma McLardy",
    "Hollie Cook",
    "Jimi Hendrix",
    "Janis Joplin",
    "Ian MacKaye",
    "Exene Cervenka",
    "Patti Smith",
    "Mike Watt",
    "Keith Morris",
    "Karen Carpenter",
    "George Benson",
    "Marky Ramone",
    "Muddy Waters",
    "Joni Mitchell",
    "Lou Reed",
    "Elliot Smith",
    "Lora Logic",
    "Billie Holliday"
]

var hlinks = [
    "https://tse2.mm.bing.net/th?id=OIP.xmmbliVcDJsPJTKMB9Gn-gAAAA&pid=Api",
    "https://tse1.mm.bing.net/th?id=OIP.vISPxfwwSOPnByI5f-pDQwAAAA&pid=Api",
    "https://64.media.tumblr.com/0f0c0fed68d7ab786f6bbb2319b511c3/f50eda857b9139ea-6f/s1280x1920/f41a4ff1d163b028cc3f4adddee1fa03cc15275f.jpg",
    "https://tse2.mm.bing.net/th?id=OIP.kx76q529uJ-vvYKdcDr8BwHaHa&pid=Api",
    "https://tse1.explicit.bing.net/th?id=OIP.pKF-vkgvccSd8lG6VxgDdgAAAA&pid=Api",
    "https://tse1.explicit.bing.net/th?id=OIP.TQEqbrFPq30meiLp6Xz4AwHaHa&pid=Api",
    "https://preview.redd.it/g9vyjvtf1kz71.jpg?auto=webp&s=3dae145861d3f6fdf80c605171762778079922ff",
    "https://tse3.mm.bing.net/th?id=OIP.NrYqFX0bfXubE8v_uC8DLgHaIL&pid=Api",
    "https://www.welt.de/img/vermischtes/mobile110903970/7972500457-ci102l-w1024/Beth-Ditto-2.jpg",
    "https://s.yimg.com/ny/api/res/1.2/svO6AJJN_MCE_8oavj4sdg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD0xMDgz/https://s.yimg.com/os/creatr-uploaded-images/2022-11/fc51c3f0-6148-11ed-bbbb-660ac6f59307",
    "https://tse1.mm.bing.net/th?id=OIP.DLbUWArn9bcbRWFkUpZC-AHaGQ&pid=Api`",
    "http://4.bp.blogspot.com/-ONjTVo3yGBI/Tvj6WJi59qI/AAAAAAAAA8I/hDV94C2tK8s/s1600/FrankZappa.jpg",
    "https://tse2.mm.bing.net/th?id=OIP.3bOQ3o3xlvQHoKYAqFBK7wHaHa&pid=Api",
    "https://tse2.mm.bing.net/th?id=OIP.O7MbmQk4V26kAXV3yMIvuAHaHd&pid=Api",
    "https://i.discogs.com/trdldnsQCfiFCEkB9MM9z1GXRcTgdkM_mC4PNCthA9M/rs:fit/g:sm/q:90/h:500/w:447/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTI5NjMz/MC0xMTk1MjQ3NTQx/LmpwZWc.jpeg",
    "https://static.spin.com/files/2019/08/GettyImages-133617092-1564874122.jpg",
    "https://www.wallofcelebrities.com/celebrity/kathleen-hanna/pictures/xxlarge/kathleen-hanna_2389956.jpg",
    "http://images.genius.com/ad6650aa8ee85f1eff13d03579831304.233x233x1.jpg",
    "https://tse3.mm.bing.net/th?id=OIP.d1R-0m04cP8gSM7qkDQ7CwAAAA&pid=Api",
    "https://tse1.mm.bing.net/th?id=OIP.C16J1hBT9SUvNoj_V-XWiwAAAA&pid=Api",
    "https://tse1.mm.bing.net/th?id=OIP.5YRNtc91B6RyRM1XqzvkUwHaHa&pid=Api",
    "https://www.usleathermart.com/wp-content/uploads/2023/10/Dee-Dee-Ramone-Leather-Jacket.jpg",
    "http://cdn8.openculture.com/wp-content/uploads/2013/04/tharpe.jpg",
    "https://tse1.mm.bing.net/th?id=OIP.bj717FDz7oZabmQZaMTKZAHaGL&pid=Api",
    "https://tse1.mm.bing.net/th?id=OIP.n0zh4Lcc9lYrcrDLq1zG_AHaHa&pid=Api",
    "https://tse4.mm.bing.net/th?id=OIP.U7RHeFu9OtOG-YNNbhr8NgAAAA&pid=Api",
    "https://tse4.mm.bing.net/th?id=OIP.sR022N_wu6R0nLyILbSN_AAAAA&pid=Api",
    "https://tse1.mm.bing.net/th?id=OIP.tEYV7kdrrGrCrisDMLfbFwHaHa&pid=Api",
    "https://tse2.mm.bing.net/th?id=OIP.wtpkORE7fDKGseQZquq5DwHaJQ&pid=Api",
    "https://tse1.mm.bing.net/th?id=OIP.l0z9HpIlfMfrAGE9bEpJmgHaGL&pid=Api",
    "https://tse1.explicit.bing.net/th?id=OIP.hq3ikvwiavmUHBujxTIxOgAAAA&pid=Api",
    "https://tse1.explicit.bing.net/th?id=OIP.gv5hI5soyKgDjUFmVb_pIAHaH2&pid=Api",
    "https://tse1.explicit.bing.net/th?id=OIP._3sN5utobrI-RWMcIjmwqwHaHa&pid=Api",
    "https://tse2.mm.bing.net/th?id=OIP.Jp-alBCevuu7bDgjKkYPOwHaHa&pid=Api",
    "https://live.staticflickr.com/7038/13911889213_687e8f6a52_b.jpg",
    "https://tse1.mm.bing.net/th?id=OIP.n_jowQJD_GWBls8Ks2pA7wHaIy&pid=Api",
    "https://tse3.mm.bing.net/th?id=OIP.TCPoaPVtYKb23FvdMfbTdAHaHa&pid=Api",
    "https://tse1.mm.bing.net/th?id=OIP.uHhtVnKc4OKVgQ--1sn9PgHaIy&pid=Api",
    "https://tse3.mm.bing.net/th?id=OIP.bcsjwwHzYQj7HMzvScSj1gHaIy&pid=Api",
    "https://tse1.explicit.bing.net/th?id=OIP.DqEB_r1zTf1DwPnTSgW8mQHaHa&pid=Api",
    "https://tse1.mm.bing.net/th?id=OIP.wdLuFl2IeCSfJvYlygX6oQHaIy&pid=Api",
    "https://tse4.mm.bing.net/th?id=OIP.6Lonk5tysF9DFKGkRg7a8AHaIZ&pid=Api",
    "https://tse4.mm.bing.net/th?id=OIP.rrHBYhx1CFMaZmfjgbUgswAAAA&pid=Api",
    "https://tse2.mm.bing.net/th?id=OIP.9g86Rl4qGklxrSnJsMCz3gHaHa&pid=Api",
    "https://tse4.mm.bing.net/th?id=OIP.iVxWNZh17gOhsrOZ5Yq8cgHaIj&pid=Api",
    "https://tse1.mm.bing.net/th?id=OIP.zwJyNwq90OOuHPqFg1H0JwHaG6&pid=Api",
    "https://tse3.mm.bing.net/th?id=OIP.1OcvzjbFIGF3PSr5DWw7zAHaJQ&pid=Api",
    "https://tse3.mm.bing.net/th?id=OIP.kZfYsCNWV91d24Ms1iK5nAHaJQ&pid=Api",
    "https://tse4.mm.bing.net/th?id=OIP.Jy-F8CdvYY6R8rqLfkwrDAHaHa&pid=Api",
    "https://tse2.mm.bing.net/th?id=OIP.5HdUVB8dDRDMvjnzbCIXcgHaHa&pid=Api",
    "https://tse4.mm.bing.net/th?id=OIP.Zh_M0qBesM_FCUHOxIhFHQHaGm&pid=Api",
    "https://tse1.mm.bing.net/th?id=OIP.A_YLDfDN6bQpiwTliZcfqAHaJO&pid=Api",
    "https://tse4.mm.bing.net/th?id=OIP.yw30xoZxGEvR07bmcJh6QgHaHa&pid=Api",
    "https://tse2.mm.bing.net/th?id=OIP.xK5hjkMaaoaKikqQj9hA3AHaHa&pid=Api",
    "https://tse4.mm.bing.net/th?id=OIP.AUq7oImcv1aRbbGhsqHjyQHaHa&pid=Api",
    "https://tse2.mm.bing.net/th?id=OIP.qU5uagcbgYuHxayjTQ17DAHaHj&pid=Api",
    "https://tse3.mm.bing.net/th?id=OIP.jByzthGp-vVBfCHQdgSelwHaHF&pid=Api",
    "https://tse1.mm.bing.net/th?id=OIP.tFiKUfpxLy8WfoeHjo9PXQHaHa&pid=Api",
    "https://tse1.mm.bing.net/th?id=OIP.3b76_e2ohVWex50a2l7k8wHaHa&pid=Api",
    "https://tse4.mm.bing.net/th?id=OIP.mnQY7sFaJCV4X_yXb41i4wHaGY&pid=Api"
]

var comprados = [3, 10, 20]

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
    
    
    if(comprados.includes(i+1)) {
        let comprado = document.createElement('div');
        comprado.className = "comprado";
        icontainer.appendChild(comprado)
    } 
    
    icontainer.appendChild(img);
    icontainer.appendChild(nome);
    icontainer.appendChild(numero);
    
    grid.appendChild(icontainer);
}

fill()