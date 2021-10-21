

//Main//

//Artículos//

     const $articles = document.getElementById("articles"),
     
          $article_element = document.getElementById("template_article").content,
          $article_details = document.createDocumentFragment();

     const $article = [
          {
               titulo: "Bicicletas",
               src: "https://scontent.feze11-1.fna.fbcdn.net/v/t1.6435-9/98599428_2622145488060684_6195964411560067072_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeHie76tH5ke78njOuNBdK2lqli7ftWnSXuqWLt-1adJezAKJm6BDi-NSQxKbm7wSNE&_nc_ohc=d35mYcjwz1oAX9_xPPj&_nc_ht=scontent.feze11-1.fna&oh=cfaeeaacebe0c62d8e3cc9baa5a1b252&oe=6171F96C",
               detalle: "Para todas las edades y estilos"
          },
          {
titulo: "Cascos",
src: "https://scontent.feze11-1.fna.fbcdn.net/v/t1.6435-9/239231571_332217795049895_3524712453581806112_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGsM15rfdQp8xyIaqq8JqDFOV8noQYLdmA5XyehBgt2YDzoyRI5nHo-dCC2-i26qyI&_nc_ohc=5c6UA2sO8wkAX_vyGUY&_nc_ht=scontent.feze11-1.fna&oh=2d4d933e42a687c2c414465f0aba2a15&oe=6172C47C",
detalle: "Cascos de todos los tamaños y colores"

    },

{titulo: "Timbres y canastos",
src: "https://scontent.feze11-1.fna.fbcdn.net/v/t1.6435-9/72673241_2423679804573921_4877285967083339776_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeFG7ViY-b_hA0FhVkaZYShSGI3pEmfaUJcYjekSZ9pQly-qlzTdtl2H6JNXPWoVGeg&_nc_ohc=V8euEXygoSAAX-JiRyS&_nc_oc=AQlUr1IDPlI3ZE5_UEOsBFiez7YpZsI_PX5wGoWamsENvihsNM0kb0Af279Q7csLRnWyOq-ofpUfmWylHF6248k1&_nc_ht=scontent.feze11-1.fna&oh=a65247468b68a381e7852746271e06ac&oe=6171550A",
detalle: "Variedad en canastos para transportar lo necesario. Timbres de diferentes estilos"},

{titulo: "Andarines y triciclos",
src: "https://scontent.feze11-1.fna.fbcdn.net/v/t1.6435-9/79710620_2485632871711947_7485784378069483520_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeGBr_AjISNvyp3FE8zi7GDMJg7xOUFU6vUmDvE5QVTq9V_R9faQ-obBvDNV5T-zICE&_nc_ohc=aPqLS84dcOIAX_nEDEO&_nc_ht=scontent.feze11-1.fna&oh=0823a4acbbd5284e695734dc9427a4af&oe=61703117",
detalle: "Para los más chicos de la familia"},
{titulo: "Accesorios",
src:"https://scontent.feze11-1.fna.fbcdn.net/v/t1.6435-9/66638973_2350769965198239_3377907176038203392_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeHJLIgGDF6lsGwvhaaqZaDKCH0IGkitOHYIfQgaSK04doHrOveExpO9gJvToVc4bsk&_nc_ohc=ebptogtrBjwAX9zu2Bw&_nc_ht=scontent.feze11-1.fna&oh=a731114004d701894545bc3c811d33b5&oe=6170A41B",
detalle: "Increíble variedad en accesorios y complementos para tu bici"},
{titulo: "Repuestos",
src: "https://scontent.feze11-1.fna.fbcdn.net/v/t1.6435-9/42744703_2165276560414248_6163886915733946368_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeG0kDhbUZEp0mMhGid3NTXHFwWPzkFpHo8XBY_OQWkejx7PFNxVLvJ9dqMIlKV25NU&_nc_ohc=zP4q2aSjj0EAX_lte5r&tn=TPa4Ghu8wTCxJJGQ&_nc_ht=scontent.feze11-1.fna&oh=98dd81697fe1f29c061616f7dfc91f89&oe=6172AE00",
detalle: "Todos los repuestos que necesites"},
];

    $articles.querySelector("h1").textContent = "Artículos";

    const $div = document.createElement ("div")
    
    
    $article.forEach(Element => {

         $article_element.querySelector("h3").textContent = Element.titulo;
         $article_element.querySelector("img").setAttribute("src", Element.src);
         $article_element.querySelector("figcaption").textContent = Element.detalle;
         $article_element.querySelector("img").setAttribute("width", "auto");
         $article_element.querySelector("img").setAttribute("height", "200px");
      
                 
         let $clone = document.importNode($article_element, true);


         $article_details.appendChild($clone);
        
     
     }) ; 
     $div.appendChild($article_details);
    $articles.appendChild($div);
  
    $articles.style.textAlign = "center";
    $articles.style.paddingBottom = "30px"
 
    $div.style.display = "grid";
    $div.style.gridTemplateColumns = "2fr 2fr 2fr"
    $div.style.gap = "2em";
    $div.style.justifyContent = "space-evenly";

     $div.style.cursor = "pointer"
    $articles.addEventListener('click', function(){
    prompt("Si querés averiguar por un producto particular, indicanos tu whatsapp para contactarte. ¡Muchas gracias!")


    })
  
  
 







