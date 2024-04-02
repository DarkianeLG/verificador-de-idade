function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.querySelector('input#txtano');
    let res = document.querySelector('div#res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('ERRO. Verifique os dados e tente novamente!');
    } 
    else {
        let sexo = document.getElementsByName('radsex');
        let idade = ano - Number(fano.value);
        let gênero = ''
        let img = document.createElement('img');
        img.setAttribute('id', 'foto');

       if (sexo[0].checked){
         gênero = 'homem'
         if (idade >= 0 && idade < 2){
            img.setAttribute('src', 'img/bebe-homem.png');
         }
         else if (idade >= 2 && idade < 12){
            img.setAttribute('src', 'img/crianca-homem.png');
         }
         else if (idade >= 12 && idade < 18){
            img.setAttribute('src', 'img/jovem-homem.png');
         }
         else if (idade >= 18 && idade < 65){
            img.setAttribute('src', 'img/adulto-homem.png');
         }
         else{
            img.setAttribute('src', 'img/idoso-homem.png');
         }
        }
       else if(sexo[1].checked){
        gênero = 'mulher'
        if (idade >= 0 && idade < 2){
            img.setAttribute('src', 'img/bebe-mulher.png');
         }
         else if (idade >= 2 && idade < 12){
            img.setAttribute('src', 'img/crianca-mulher.png');
         }
         else if (idade >= 12 && idade < 18){
            img.setAttribute('src', 'img/jovem-mulher.png');
         }
         else if (idade >= 18 && idade < 65){
            img.setAttribute('src', 'img/adulta-mulher.png');
         }
         else{
            img.setAttribute('src', 'img/idosa-mulher.png');
         }
        }
       
     res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
     res.appendChild(img);
    }
}