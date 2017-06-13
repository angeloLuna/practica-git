(function(){
  'use strict'

  var generoComponent = {
    controller : generoCtrl,
    templateUrl : 'app/components/genero/genero.html'
  }

  angular
  .module("Practica")
  .component("generoComponent", generoComponent)

  function generoCtrl(){
    var genC = this;
    genC.variable = '1'

    genC.array = [
      {
        image: "http://f0.pepst.com/c/25D6F2/107238/ssc3/home/020/a.rock.zone/1_rock_zone.gif_480_480_0_64000_0_1_0.gif",
        genero: "Rock",
        descripcion: "En forma genérica, se le da este nombre a diversos estilos musicales ligeros desarrollados desde los años cincuenta en adelante, y derivados en mayor o menor medida del rock and roll.",
        pag: "1"
      },
      {
        image: "http://3.bp.blogspot.com/-ghInoWJpPJU/UlBG6r61MbI/AAAAAAAAAFk/fNDJZcO9NDE/s1600/Popular-Music-Pop-Download.jpeg",
        genero: "Pop",
        descripcion: "Se desarrolló en los países anglosajones desde la década de los cincuenta bajo la influencia de estilos musicales negros, especialmente el rythm and blues, y de la música folk británica. En la actualidad y desde hace décadas, constituye un importante fenómeno de comunicación de masas prácticamente en todo el mundo.",
        pag: "1"
      },
      {
        image: "http://2.bp.blogspot.com/-Z9aoOi3qqU8/U06n3jOfWDI/AAAAAAAAACg/3xyjFZnQqOk/s1600/electronic_music_by_TeXon.jpg",
        genero: "Musica electrónica",
        descripcion: "Se basa en tonos puros electrónicamente generados en el laboratorio. Esta música fue desarrollada en los talleres de la radio de Colonia(Alemania) a partir de 1985, y sus exponentes se apoderaron de la música concreta en poco tiempo.",
        pag: "1"
      },
      {
        image: "https://img06.rl0.ru/f1d147e1df4031f1ee7440605f2d9ab6/c1023x877/img08.rl0.ru/10dd3ad12fff176b230800f808fc1f61/c1023x877/img04.rl0.ru/fcd24a3b5c47ff6e2de0691cb70aca31/c1023x877/img08.rl0.ru/c0f76b1c6b500ecda4c931dd788ea242/c1023x877/img07.rl0.ru/4b3ce98e87d9c68415aa2761e21a01fe/c1023x877/img03.rl0.ru/cf02f02d119f6c1449d183524f7c8871/c1023x877/kingofwallpapers.com/rap/rap-002.jpg",
        genero: "Rap",
        descripcion: "Este género musical surgió en los barrios negros e hispanos neoyorquinos en los ochenta y alcanzó su apogeo en los noventa. Se caracteriza por un juego de réplicas y contrarréplicas de lenguaje combativo.",
        pag: "1"
      },
      {
        image: "http://www.kope.es/fotos/rock-alternativo.png",
        genero: "Rock alternativo",
        descripcion: "Es una manifestación underground posiblemente contracultural, por consiguiente no es del común de la vitrina de cualquier discotienda. Intenta presentar lo nuevo, o por lo menos combina y recrea con cierto ingenio formas roqueras conocidas.",
        pag: "1"
      },
      {
        image: "http://liputanrakyat.com/wp-content/uploads/2017/01/%ED%9E%99%ED%95%A9-450x450.jpg",
        genero: "Hip-Hop",
        descripcion: "este género es el padre del rap y su origen es principalmente urbano su expresión máxima se da en la calle misma. Incluye expresiones tales como el graffiti y el breakdance.",
        pag: "1"
      },
      {
        image: "http://3.bp.blogspot.com/_0l898mw-OyQ/S74FeCPmVTI/AAAAAAAAAA0/kRLgf1IQgzY/s1600/eeee.gif",
        genero: "Reggae",
        descripcion: "Estilo musical popular jamaiquino, de ritmo simple y repetitivo, que alcanzó su máxima difusión en los setenta gracias a los jamaiquinos residentes en Londres y al cantante Bob Marley.",
        pag: "2"
      },
      {
        image: "http://4.bp.blogspot.com/_HqgKj4hZPcw/TEhdsWBEA4I/AAAAAAAAADI/gWDYfsZrTzk/s1600/Bachata_Souls_logo_RGB.JPG",
        genero: "Bachata",
        descripcion: "un Genero Musical Hibrido del Bolero y el Son, de la Republica Dominicana, cuyas características comprende los Movimientos continuos de Cinturas, dominio propio de los Pasos Originarios y un alto grado de Compás de Lo exacto de este Genero Musical, tiene ligado el Bolero Cubano es su Ritmo",
        pag: "2"
      },
      {
        image: "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/7333575/5.png?1477917758",
        genero: "Rock and roll",
        descripcion: "En el momento en el que el rythm and blues and country and western empezaron a fusionarse a partir de los cincuenta, nació el rock and roll, llamado originalmente race music sepia music.",
        pag: "2"
      },
      {
        image: "http://4.bp.blogspot.com/-TvenFqkoNkM/UnxfOEkXQuI/AAAAAAAAAFQ/MbdNsZ7eUv8/s1600/musica-clasicaL-400x400.png",
        genero: "Clasica",
        descripcion: "la época llamada clasicismo, en otras artes se trató de redescubrimiento y copia de los clásicos del arte greco romano, que era considerado tradicional o ideal. En la música no existió un clasicismo original ya que no había quedado escrita ninguna música de la época griega o romana. Sus principales exponentes son Haydn, Mozart y Beethoven.",
        pag: "2"
      },
      {
        image: "http://www.biggigbag.com/archivos/articulos/rock-progresivo.jpg",
        genero: "Rock progresivo",
        descripcion: "Esta música tiene sus orígenes en el art rock de los setenta, rock sinfónico, sicodélica, rock clásico, folk y muchas otras formas de música. En los últimos 20 años se ha utilizado la palabra progresivo para describir la música que producen las bandas colegiales y el pop alternativo entre otros.",
        pag: "2"
      },
      {
        image: "http://mundorocklml.galeon.com/imagenes/thrasmetal.png",
        genero: "Thrash metal",
        descripcion: "Voces de ultratumba, casi rugidos, sobre bases guitarreras metálicas. Representó una revolución en el campo del heavy metal.",
        pag: "2"
      },
      {
        image: "http://st-listas.20minutos.es/images/2012-01/318596/list_640px.jpg?1327619680",
        genero: "Balada",
        descripcion: "Se origino en Italia, fue una manera de Expresión Sentimental, una forma de Expresión Poética. estilo propio con el uso de Versos Literarios con Rima y Ritmos delicados al compás de las letras. Utilizando sonidos Sensuales y Calidos, esparciéndose por toda Latinoamérica. El Amor, Desamor y El Sufrimiento son cualidades peculiares que caracterizan desde sus inicios.",
        pag: "3"
      },
      {
        image: "http://bailepopular.com/images/Musica_De_Banda.jpg",
        genero: "Banda",
        descripcion: "Nació en México y se expandió por Latinoamérica. En sus inicios, los instrumentos españoles, como las cornetas, fueron su principal elemento Durante el siglo XIX. Un género que para muchos ha unido a un pueblo. La banda, un ritmo que rompe fronteras.",
        pag: "3"
      },
      {
        image: "http://4.bp.blogspot.com/-yzWFHQSamn8/TyVr4IzumPI/AAAAAAAAAAM/5n-M4oe34PU/s1600/SALSA1.jpg",
        genero: "Salsa",
        descripcion: "La salsa, es un género musical de estilo afro caribeña latinoamericana, que surgió en Nueva York. Fue creado por inmigrantes latinoamericanos, especialmente de Cuba, Puerto Rico y Repúblicanos que mezclaron ritmos tradicionales latinos dando fondo a la música con varios estilo.",
        pag: "3"
      },
      {
        image: "https://ae01.alicdn.com/kf/HTB1oM2uPVXXXXc0XVXXq6xXFXXXM/Punk-Rock-Singer-Sticker-font-b-Music-b-font-font-b-Wall-b-font-font-b.jpg",
        genero: "Punk",
        descripcion: "Movimiento musical de origen británico surgido a finales de los años 60 y de sus manifestaciones en la moda y las costumbres. Sus principales representantes fueron Sex Pistols, autores de un rock primario y vital. Sus seguidores son partidarios de una ideología anárquica y en ocasiones violenta; usan cabellos chillones, y ropa de cuero.",
        pag: "3"
      },
      {
        image: "http://www.jazzradio.fr/media/news/thumb/870x544_jazzbook.jpeg",
        genero: "Jazz",
        descripcion: "Originario de los Estados Unidos. Concede gran importancia a la improvisación y se caracteriza por su ritmo cambiante. Surge a finales del siglo XIX de la conjunción de ritmos negroafricanos con melodías del folklore anglosajón. El ritmo sincopado y la alternancia o superposición de los tiempos, el swing o balanceo que produce tensión emocional y la libertad de improvisación.",
        pag: "3"
      },
      {
        image: "https://2r62j11x4zsy3ytak02nzvbk24y-wpengine.netdna-ssl.com/wp-content/uploads/2015/02/Symphonic-Rock-square-cmyk-2012.jpg",
        genero: "Rock sinfonico",
        descripcion: "Es una corriente del rock casi exclusiva de Londres. Sus exponentes producen un rock con impresionantes arreglos creando ese ambiente sinfónico, de música trabajada de sonidos serios. Sus principales representantes han sido Marillion, Yes, Génesis y Queen.",
        pag: "3"
      },
      {
        image: "https://grupomusicatsi.files.wordpress.com/2016/04/fantasma-cumbia.jpg",
        genero: "Cumbia",
        descripcion: "La cumbia es uno de los bailes más representativos del folclor autóctonos colombianos. Al ritmo de un conjunto de gaitas acompañadas por tambores, la cumbia es sinónimo de baile por tambores, alegría y fiesta. la mujer baila suelta, mientras que el hombre la sigue al compás de los movimientos sensuales de su cintura.",
        pag: "4"
      },
      {
        image: "https://skatergorix.files.wordpress.com/2007/08/adhesivo-ska.jpg",
        genero: "Ska",
        descripcion: "Este género surgió en Jamaica en los años sesenta y funde estilos como el Mento, el Calypso, el Swing y el Boogie. Es un género irreverente, contagioso y que ideológicamente está fundamentado en la lucha contra el racismo.",
        pag: "4"
      },
      {
        image: "http://openstereo.es/wp-content/uploads/2011/06/musica-disco.jpg",
        genero: "Disco",
        descripcion: "Este género se caracteriza por la predominancia de ritmo sobre la melodía. Alcanzó su punto máximo de popularidad en los años setenta.",
        pag: "4"
      },
      {
        image: "http://www.albacity.org/fotos-albacete/musica/antologia-bolero-rm.jpg",
        genero: "Bolero",
        descripcion: "Uno de los géneros afrocubanos con mayor difusión a lo largo y a lo ancho de toda  América Latina. Nació a finales del siglo XIX en Cuba como un heredero del bolero español pero con sus propias características musicales. Por un lado existen el bolero trovadoresco y el bolero rítmico.",
        pag: "4"
      },
      {
        image: "http://4.bp.blogspot.com/-mlqyS52Kt6g/UqF0mqCt4BI/AAAAAAAAAC4/IGor14pc2q8/s1600/la+trova%5B1%5D.gif",
        genero: "Trova",
        descripcion: "La trova es la composición poética compuesta para ser cantada característica de los trovadores medievales. ... La definición del género musical trova es poesía con música, son canciones con letra inteligente que cuentan una historia de amor, crítica o que contienen contenido político.",
        pag: "4"
      },
      {
        image: "http://4.bp.blogspot.com/_HNKTzaQX7ak/TBX3tWsfb3I/AAAAAAAAAAk/xaMyZQ7XxDU/s1600/flamenco_transp.gif",
        genero: "Flamenco",
        descripcion: "El flamenco es un género español de música y danza que se originó en Andalucía en el siglo XVIII, se conforma como unareunión y mezcla de otros estilos musicales populares con participación o influenciasjudías, moriscas, gitanas, castellanas, africanas y americanas.",
        pag: "4"
      }


    ]
  }

})();
