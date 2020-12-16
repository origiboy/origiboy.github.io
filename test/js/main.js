var nav_animation_inp = 0;

function header_animation_border(e) {
    let left = e.offset().left + 44, width = e.outerWidth();
    header_nav_choosen = e.index(".header__nav");
    $(".header__nav__border-inner").eq(0).css({left: left, width: width});
}


/* Анимация движения букв */

function screen_1_animation(e) {
    let part_1 = (Math.random() * (1 - (-1))) + (-1);
    let part_2 = (Math.random() * (1 - (-1))) + (-1);
    if (part_2 >= 0) {
        top_minus = -1;
    } else {
        top_minus = 1;
    }
    if (part_1 >= 0) {
        left_minus = -1;
    } else {
        left_minus = 1;
    }
    let left_base = e.position().left;
    let top_base = e.position().top;
    let a_l = left_base + Math.abs(part_1 * $(window).width() * 10 / 100);
    let a_t = top_base + Math.sqrt(Math.pow(($(window).width() * 10 / 100), 2) - Math.pow((part_1 * $(window).width() * 10 / 100), 2));
    if ((a_t + e.height()) >= $(window).height() * 1 ) {
        top_minus = -1;
    }
    if ((a_t + e.height()) <= $(window).height() * 0.5 ) {
        top_minus = 1;
    }
    if ((a_l + e.width()) >= $(window).width() * 1.5 ) {
        left_minus = -1;
    }
    if ((a_l + e.width()) <= $(window).width() * 0.5 ) {
        left_minus = 1;
    }
    
    a_t = (a_t - top_base) * top_minus + top_base;
    a_l = (a_l - left_base) * left_minus + left_base;
    e.css("top", a_t);
    e.css("left", a_l);
    setTimeout(screen_1_animation, 6000, e);   
}

/* Анимация движения букв extra*/

function screen_1_animation_extra(e) {
    let part_1 = (Math.random() * (1 - (-1))) + (-1);
    let part_2 = (Math.random() * (1 - (-1))) + (-1);
    if (part_2 >= 0) {
        top_minus = -1;
    } else {
        top_minus = 1;
    }
    if (part_1 >= 0) {
        left_minus = -1;
    } else {
        left_minus = 1;
    }
    let left_base = e.position().left;
    let top_base = e.position().top;
    let a_l = left_base + Math.abs(part_1 * $(window).width() * 10 / 100);
    let a_t = top_base + top_minus * Math.sqrt(Math.pow(($(window).width() * 10 / 100), 2) - Math.pow((part_1 * $(window).width() * 10 / 100), 2));
    if ((a_t + e.height()) >= $(window).height() * 1.5 ) {
        top_minus = -1;
    }
    if (a_t <=  0 ) {
        top_minus = 1;
    }
    if ((a_l + e.width()) >= $(window).width() * 1.5 ) {
        left_minus = -1;
    }
    if ((a_l + e.width()) <= $(window).width() * 0.5 ) {
        left_minus = 1;
    }
    a_t = Math.abs((a_t - top_base)) * top_minus + top_base;
    a_l = (a_l - left_base) * left_minus + left_base;
    e.css("top", a_t);
    e.css("left", a_l);
    setTimeout(screen_1_animation_extra, 6000, e);   
}



/* Анимация движения инициалов */

function screen_3_animation(e) {
    let part_1 = (Math.random() * (1 - (-1))) + (-1);
    let part_2 = (Math.random() * (1 - (-1))) + (-1);
    if (part_1 <= 0) {
        left_minus = -1;
    } else {
        left_minus = 1;
    }
    if (part_2 <= 0) {
        top_minus = -1;
    } else {
        top_minus = 1;
    }
    let left_base = e.position().left;
    let top_base =  e.position().top;

    let a_l = left_base + part_1 * $(window).width() * 10 / 100;
    let a_t = top_base + top_minus * Math.sqrt(Math.pow(($(window).width() * 10 / 100), 2) - Math.pow((part_1 * $(window).width() * 10 / 100), 2));
    
    if ((a_t + e.height()) >= $(window).height() ) {
        a_t = Math.abs(a_t - top_base) * (-1) + top_base ;
    } else if (a_t < 0) {
        a_t = Math.abs(a_t - top_base) + top_base ;
    }

    if ((a_l + e.width()) >= $(window).width() ) {
        a_l =  Math.abs(a_l - left_base) * (-1) + left_base ;
    } else if (a_l < 0) {
        a_l =  Math.abs(a_l - left_base) + left_base ;
    }
    
    
    e.css("top", a_t);
    e.css("left", a_l);
    setTimeout(screen_3_animation, 6000, e);   
}



$(document).ready(function() {

    $(".header__nav").eq(0).click(function() {
        nav_animation_inp = 1;
        header_animation_border( $(".header__nav").eq(0));
        $('html, body').animate({ scrollTop: 0* $(window).height() }, 600, function(){ nav_animation_inp = 0; }); 
    });
    $(".header__nav").eq(1).click(function() {
        nav_animation_inp = 1;
        header_animation_border( $(".header__nav").eq(1));
        $('html, body').animate({ scrollTop: 1 * $(window).height() }, 600, function(){ nav_animation_inp = 0; }); 
    });
    $(".header__nav").eq(2).click(function() {
        nav_animation_inp = 1;
        header_animation_border( $(".header__nav").eq(2));
        $('html, body').animate({ scrollTop: 2 * $(window).height() }, 600, function(){ nav_animation_inp = 0; }); 
    });
    $(".header__nav").eq(3).click(function() {
        nav_animation_inp = 1;
        header_animation_border( $(".header__nav").eq(3));
        $('html, body').animate({ scrollTop: 3 * $(window).height() }, 600, function(){ nav_animation_inp = 0; }); 
    });
    $(".header__lang__block").eq(0).click(function() {
            $(".header__lang__block").eq(0).addClass("header__lang-click");
            $(".header__lang__block").eq(1).removeClass("header__lang-click");
            
            app_1.content_0 = content_en[0];
            app_1.content_1 = content_en[1];
            app_1.content_2 = content_en[2];
            app_1.content_3 = content_en[3];
            app_2.content_4 = content_en[4];
            app_3.content_5 = content_en[5];
            app_4.content_6 = content_en[6];
            app_4.content_7 = content_en[7];
            app_5.content_8 = content_en[8];
            app_5.content_9 = content_en[9];
            app_6.content_10 = content_en[10];
            app_6.content_11 = content_en[11];
            app_6.content_12 = content_en[12];
            app_6.content_13 = content_en[13];
            app_6.content_14 = content_en[14];
            app_6.content_15 = content_en[15];
            app_6.content_16 = content_en[16];
            app_6.content_17 = content_en[17];
        
        $(window).scrollTop(0);
        if ($(window).scrollTop() < $(window).height() && nav_animation_inp == 0) {
        setTimeout(() => header_animation_border($(".header__nav").eq(0)), 600);
    } else if($(window).scrollTop() < $(window).height() * 2 && nav_animation_inp == 0) {
        setTimeout(() => header_animation_border($(".header__nav").eq(1)), 600);
    } else if($(window).scrollTop() < $(window).height() * 3 && nav_animation_inp == 0) {
        setTimeout(() => header_animation_border($(".header__nav").eq(2)), 600);
    } else if(nav_animation_inp == 0) {
        setTimeout(() => header_animation_border($(".header__nav").eq(3)), 600);
    }
  });
    $(".header__lang__block").eq(1).click(function() {        
            $(".header__lang__block").eq(1).addClass("header__lang-click");
            $(".header__lang__block").eq(0).removeClass("header__lang-click");
            
            app_1.content_0 = content_pt[0];
            app_1.content_1 = content_pt[1];
            app_1.content_2 = content_pt[2];
            app_1.content_3 = content_pt[3];
            app_2.content_4 = content_pt[4];
            app_3.content_5 = content_pt[5];
            app_4.content_6 = content_pt[6];
            app_4.content_7 = content_pt[7];
            app_5.content_8 = content_pt[8];
            app_5.content_9 = content_pt[9];
            app_6.content_10 = content_pt[10];
            app_6.content_11 = content_pt[11];
            app_6.content_12 = content_pt[12];
            app_6.content_13 = content_pt[13];
            app_6.content_14 = content_pt[14];
            app_6.content_15 = content_pt[15];
            app_6.content_16 = content_pt[16];
            app_6.content_17 = content_pt[17];
        
        $(window).scrollTop(0);
        if ($(window).scrollTop() < $(window).height() && nav_animation_inp == 0) {
        setTimeout(() => header_animation_border($(".header__nav").eq(0)), 600);
    } else if($(window).scrollTop() < $(window).height() * 2 && nav_animation_inp == 0) {
        setTimeout(() => header_animation_border($(".header__nav").eq(1)), 600);
    } else if($(window).scrollTop() < $(window).height() * 3 && nav_animation_inp == 0) {
        setTimeout(() => header_animation_border($(".header__nav").eq(2)), 600);
    } else if(nav_animation_inp == 0) {
        setTimeout(() => header_animation_border($(".header__nav").eq(3)), 600);
    }
        
        
    });
    
    
    if ($(window).scrollTop() < $(window).height() && nav_animation_inp == 0) {
        setTimeout(() => header_animation_border($(".header__nav").eq(0)), 600);
    } else if($(window).scrollTop() < $(window).height() * 2 && nav_animation_inp == 0) {
        setTimeout(() => header_animation_border($(".header__nav").eq(1)), 600);
    } else if($(window).scrollTop() < $(window).height() * 3 && nav_animation_inp == 0) {
        setTimeout(() => header_animation_border($(".header__nav").eq(2)), 600);
    } else if(nav_animation_inp == 0) {
        setTimeout(() => header_animation_border($(".header__nav").eq(3)), 600);
    }
    setTimeout(() => $('.header__nav__border-inner').eq(0).css('display', 'inline-block'), 600);
    

    screen_1_animation($(".background__letter__c").eq(0));
    screen_1_animation($(".background__letter__c__second").eq(0));
    screen_1_animation($(".background__letter__d").eq(0));
    screen_1_animation($(".background__letter__m").eq(0));
    
    screen_1_animation_extra($(".background__letter__c").eq(1));
    screen_1_animation_extra($(".background__letter__c__second").eq(1));
    screen_1_animation_extra($(".background__letter__d").eq(1));
    screen_1_animation_extra($(".background__letter__m").eq(1));
    
    if ($(window).scrollTop() >= $(window).height() ) {
        $(".background__letters").eq(0).css("top", - ($(window).scrollTop() - $(window).height()));
    } 
    if ($(window).scrollTop() >= $(window).height() * 2 ) {
        $(".background__letters").eq(1).css("top", $(window).height() * 3 - $(window).scrollTop() );
    }
    
    function screen__third___appear(e)
    {
        e.css("display", "inline-block");
    }
    /* Анимация первых инициалов */
    
    $(".screen__third__firstblock").mouseover(function(){
        $(this).children().children(".screen__third__fl").css("width", "10vw");
        $(this).children().children(".screen__third__date").css("font-size", "36px");
        $(".screen__third__wrapper").eq(1).children(".screen__third__fl").css("width", "3vw");
        $(".screen__third__wrapper").eq(1).children(".screen__third__date").css("font-size", "9px"); 
        $(".screen__third__wrapper").eq(2).children(".screen__third__fl").css("width", "3vw");
        $(".screen__third__wrapper").eq(2).children(".screen__third__date").css("font-size", "9px"); 
        $(".screen__third__wrapper").eq(3).children(".screen__third__fl").css("width", "3vw");
        $(".screen__third__wrapper").eq(3).children(".screen__third__date").css("font-size", "9px"); 
    });
    $(".screen__third__firstblock").click(function(){
        $(this).children().children(".screen__third__sc").css("left", "30vw");
        $(this).children().children(".screen__third__date-1").css("left", "30vw");
        
        setTimeout(screen__third___appear, 300, $(this).children().children(".screen__third__text"));
    });
    $(".screen__third__firstblock").mouseleave(function(){
        $(this).children().children(".screen__third__text").css("display", "none");
        $(this).children().children(".screen__third__sc").css("left", "0vw");
        $(this).children().children(".screen__third__date-1").css("left", "0vw");
        $(".screen__third__wrapper").children(".screen__third__fl").css("width", "5vw");
        $(".screen__third__wrapper").children(".screen__third__date").css("font-size", "18px"); 
    });
    
    /* Анимация вторых инициалов */
    
    $(".screen__third__secondblock").mouseover(function(){
        $(this).children().children(".screen__third__fl").css("width", "10vw");
        $(this).children().children(".screen__third__date").css("font-size", "36px");
        $(".screen__third__wrapper").eq(0).children(".screen__third__fl").css("width", "3vw");
        $(".screen__third__wrapper").eq(0).children(".screen__third__date").css("font-size", "9px"); 
        $(".screen__third__wrapper").eq(2).children(".screen__third__fl").css("width", "3vw");
        $(".screen__third__wrapper").eq(2).children(".screen__third__date").css("font-size", "9px"); 
        $(".screen__third__wrapper").eq(3).children(".screen__third__fl").css("width", "3vw");
        $(".screen__third__wrapper").eq(3).children(".screen__third__date").css("font-size", "9px"); 
    });
    $(".screen__third__secondblock").click(function(){
        $(this).children().children(".screen__third__sc").css("left", "30vw");
        $(this).children().children(".screen__third__date-1").css("left", "30vw");
        
        setTimeout(screen__third___appear, 300, $(this).children().children(".screen__third__text"));
    });
    $(".screen__third__secondblock").mouseleave(function(){
        $(this).children().children(".screen__third__text").css("display", "none");
        $(this).children().children(".screen__third__sc").css("left", "0vw");
        $(this).children().children(".screen__third__date-1").css("left", "0vw");
        $(".screen__third__wrapper").children(".screen__third__fl").css("width", "5vw");
        $(".screen__third__wrapper").children(".screen__third__date").css("font-size", "18px"); 
    });
   
    /* Анимация третьих инициалов */
    
    $(".screen__third__thirdblock").mouseover(function(){
        $(this).children().children(".screen__third__fl").css("width", "10vw");
        $(this).children().children(".screen__third__date").css("font-size", "36px");
        $(".screen__third__wrapper").eq(0).children(".screen__third__fl").css("width", "3vw");
        $(".screen__third__wrapper").eq(0).children(".screen__third__date").css("font-size", "9px"); 
        $(".screen__third__wrapper").eq(1).children(".screen__third__fl").css("width", "3vw");
        $(".screen__third__wrapper").eq(1).children(".screen__third__date").css("font-size", "9px"); 
        $(".screen__third__wrapper").eq(3).children(".screen__third__fl").css("width", "3vw");
        $(".screen__third__wrapper").eq(3).children(".screen__third__date").css("font-size", "9px"); 
    });
    $(".screen__third__thirdblock").click(function(){
        $(this).children().children(".screen__third__sc").css("left", "30vw");
        $(this).children().children(".screen__third__date-1").css("left", "30vw");
        
        setTimeout(screen__third___appear, 300, $(this).children().children(".screen__third__text"));
    });
    $(".screen__third__thirdblock").mouseleave(function(){
        $(this).children().children(".screen__third__text").css("display", "none");
        $(this).children().children(".screen__third__sc").css("left", "0vw");
        $(this).children().children(".screen__third__date-1").css("left", "0vw");
        $(".screen__third__wrapper").children(".screen__third__fl").css("width", "5vw");
        $(".screen__third__wrapper").children(".screen__third__date").css("font-size", "18px"); 
    });
    
    /* Анимация четвертых инициалов */
    
    $(".screen__third__fourthblock").mouseover(function(){
        $(this).children().children(".screen__third__fl").css("width", "10vw");
        $(this).children().children(".screen__third__date").css("font-size", "36px");
        $(".screen__third__wrapper").eq(0).children(".screen__third__fl").css("width", "3vw");
        $(".screen__third__wrapper").eq(0).children(".screen__third__date").css("font-size", "9px"); 
        $(".screen__third__wrapper").eq(1).children(".screen__third__fl").css("width", "3vw");
        $(".screen__third__wrapper").eq(1).children(".screen__third__date").css("font-size", "9px"); 
        $(".screen__third__wrapper").eq(2).children(".screen__third__fl").css("width", "3vw");
        $(".screen__third__wrapper").eq(2).children(".screen__third__date").css("font-size", "9px"); 
    });
    $(".screen__third__fourthblock").click(function(){
        $(this).children().children(".screen__third__sc").css("left", "30vw");
        $(this).children().children(".screen__third__date-1").css("left", "30vw");
        
        setTimeout(screen__third___appear, 300, $(this).children().children(".screen__third__text"));
    });
    $(".screen__third__fourthblock").mouseleave(function(){
        $(this).children().children(".screen__third__text").css("display", "none");
        $(this).children().children(".screen__third__sc").css("left", "0vw");
        $(this).children().children(".screen__third__date-1").css("left", "0vw");
        $(".screen__third__wrapper").children(".screen__third__fl").css("width", "5vw");
        $(".screen__third__wrapper").children(".screen__third__date").css("font-size", "18px"); 
    });
   
});


$(window).resize(function() {
    header_animation_border($(".header__nav").eq(header_nav_choosen), 0);
});
screen_3_animation($(".screen__third__block").eq(0));
    screen_3_animation($(".screen__third__block").eq(1));
    screen_3_animation($(".screen__third__block").eq(2));
    screen_3_animation($(".screen__third__block").eq(3));

$(window).scroll(function(){     
    if ($(window).scrollTop() >= $(window).height() * 2 && screen_3_flag == 0) {
        screen_3_animation($(".screen__third__block").eq(0));
        screen_3_animation($(".screen__third__block").eq(1));
        screen_3_animation($(".screen__third__block").eq(2));
        screen_3_animation($(".screen__third__block").eq(3));
        screen_3_flag = 1;
    }
    
    if ($(window).scrollTop() < $(window).height() && nav_animation_inp == 0) {
        header_animation_border($(".header__nav").eq(0));
    } else if($(window).scrollTop() < $(window).height() * 2 && nav_animation_inp == 0) {
        header_animation_border($(".header__nav").eq(1));
    } else if($(window).scrollTop() < $(window).height() * 3 && nav_animation_inp == 0) {
        header_animation_border($(".header__nav").eq(2));
    } else if(nav_animation_inp == 0) {
        header_animation_border($(".header__nav").eq(3));
    }
    
    if ($(window).scrollTop() >= $(window).height() ) {
        $(".background__letters").eq(0).css("top", - ($(window).scrollTop() - $(window).height()));
    } 
    if ($(window).scrollTop() >= $(window).height() * 2 ) {
        $(".background__letters").eq(1).css("top", $(window).height() * 3 - $(window).scrollTop() );
    }
    
    
});






var header_nav_choosen = 0, 
    lang = 0; /* 0 - PT, 1 - EN */

var screen_3_flag = 0;

let content_pt = new Array();
let content_en = new Array();

content_pt[0] = "Home";
content_pt[1] = "Sobre (CC - D+M)";
content_pt[2] = "Speakers";
content_pt[3] = "Contactos";
content_pt[4] = "Museu da Ciência em Coimbra";
content_pt[5] = "Abril";
content_pt[6] = "Ciclo de conversas";
content_pt[7] = "Design+Multimédia";
content_pt[8] = `Ciclo de Conversas Design+Multimédia” é um ciclo de conferências  que se
realiza anualmente no âmbito dos   cursos de Licenciatura e Mestrado em Design e Multimédia da Faculdade de Ciências e de Tecnologia da Universidade de Coimbra. 
Esta acção de divulgação pública fora da Faculdade pretende não só mostrar o trabalho de diferentes profissionais cujo trabalho é amplamente reconhecido, como
contribuir para a divulgação do cursos, os primeiros nesta área leccionados na Universidade de Coimbra. `;
content_pt[9] = `O programa é constituído por convidados de diversas áreas (Design Gráfico, Design de Interacção, Web Design, Arquitectura, Teoria do Design, Arte, Ilustração, etc.) repartidos por quatro sessões. Propositadamente se junta, na mesma sessão, duas entidades convidadas (que podem ser individuais ou colectivas) de áreas distintas. Decorrerá em Abril de 2022 , repartida em quatro sessões que terão lugar
às quartas da parte da tarde, no auditório do Museu da Ciência em Coimbra. As
conferências são abertas ao público em geral e de entrada livre.`;
content_pt[10] = `Joana Monteiro`;
content_pt[11] = `A Joana é designer gráfica e faz direção de arte. No seu trabalho reconhece-se uma paixão pela tipografia. Para construção de imagens gráficas faz uso e mistura várias técnicas.`;
content_pt[12] = `Miguel Soares`;
content_pt[13] = `Licenciado em Design de Equipamento em Lisboa. Trabalhou como professor auxiliar em Licenciatura em Artes Visuais no Faro, no Mestrado em Design e Multimédia e no Mestrado Integrado de Arquitetura em Coimbra. Participou em bastantes exposições individuais e coletivas.
`;
content_pt[14] = `Rui Abreu`;
content_pt[15] = `Rui Abreu, fundador da R-Typography (fundidora de tipos?), ficou interessado em tipos durante os seus anos de estudante. A sua experiência profissional inclui trabalho em agências publicitárias e publicação de fontes, ambas de forma independente e com outras fundadoras.`;
content_pt[16] = `Susana Carvalho`;
content_pt[17] = `Susana é uma das fundadoras do ateliê Carvalho Bernau, um estúdio de design. O estúdio desenvolve livros, design editorial, tipografia, design de tipos, web design, design de interação, desenvolvimento conceptual e estratégia de conteúdo e investigação. Susana ensina design gráfico no curso Graphic Design BA na Royal Academy of Arts.
`;

content_en[0] = "Home";
content_en[1] = "About (CC - D+M)";
content_en[2] = "Speakers";
content_en[3] = "Contacts";
content_en[4] = "Science Museum in Coimbra";
content_en[5] = "April";
content_en[6] = "Conversation cycle";
content_en[7] = "Design + Multimedia";
content_en[8] = `Design + Multimedia Conversation Cycle” is a conference cycle that takes place
annually as part of the Bachelor and Master courses in Design and Multimedia at the Faculty of Sciences and Technology of the University of Coimbra.
This public dissemination action outside of the Faculty aims not only to show the work of different professionals whose work is widely recognized, but also contribute to the dissemination of courses, the first in this area taught at the University of Coimbra.
`;
content_en[9] = `The program consists of guests from different areas (Graphic Design, Interaction Design, Web Design, Architecture, Design Theory, Art, Illustration, etc.) divided into four sessions. Two invited entities (which may be individual or collective) from different areas will be joined on the same session on purpose. It will take place in April 2022, divided into four sessions that will take place on Wednesday afternoons, in the auditorium of the Science Museum in Coimbra. The conferences are open to the general public and are free to enter.
`;
content_en[10] = `Joana Monteiro`;
content_en[11] = `Joana is a graphic designer, art director. Through her work one can recognize a passion for typography. She uses and mixes different techniques to build graphic images.`;
content_en[12] = `Miguel Soares`;
content_en[13] = `Has degree in Equipment Design in Lisbon. He worked as an assistant professor in Visual Arts Bachelor program in Faro, in the Master program in Design and Multimedia and in the Integrated Master program in Architecture in Coimbra. He participated in many individual and group exhibitions.

`;
content_en[14] = `Rui Abreu`;
content_en[15] = `Rui Abreu, founder of R-Typography (type foundry). Rui became interested in type during his student years. His past professional experience includes working in advertising agencies and publishing fonts, both independently and with other foundries.
`;
content_en[16] = `Susana Carvalho`;
content_en[17] = `Susana is one of the founders of Atelier Carvalho Bernau, a design studio. The studio develops book and editorial design, typography, typeface design, web and interaction design, concept development and content strategy and research. Susana also teaches graphic design in the Graphic Design BA course at the Royal Academy of Arts.
`;


var app_1 = new Vue({
  el: '#header',
  data: {
    content_0: content_pt[0],
    content_1: content_pt[1],
    content_2: content_pt[2],
    content_3: content_pt[3]
  }
});

var app_2 = new Vue({
  el: '#name',
  data: {
    content_4: content_pt[4]
  }
});

var app_3 = new Vue({
  el: '#date',
  data: {
    content_5: content_pt[5]
  }
});

var app_4 = new Vue({
  el: '.screen__1',
  data: {
    content_6: content_pt[6],
    content_7: content_pt[7]
  }
});

var app_5 = new Vue({
  el: '.screen__second__wrapper',
  data: {
    content_8: content_pt[8],
    content_9: content_pt[9]
  }
});

var app_6 = new Vue({
  el: '.screen__3',
  data: {
    content_10: content_pt[10],
    content_11: content_pt[11],
    content_12: content_pt[12],
    content_13: content_pt[13],
    content_14: content_pt[14],
    content_15: content_pt[15],
    content_16: content_pt[16],
    content_17: content_pt[17]    
  }
});


(function() {
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
								   || window[vendors[x]+'CancelRequestAnimationFrame'];
	}
 
	if (!window.requestAnimationFrame)
		window.requestAnimationFrame = function(callback, element) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
			var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
			  timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};
 
	if (!window.cancelAnimationFrame)
		window.cancelAnimationFrame = function(id) {
			clearTimeout(id);
		};
}());

var layers = document.getElementsByClassName('layer');
var pageHeight = document.body.clientHeight;


// Get the initial scale of the element at time of DOM load
function getElementScale(elem) {
	var transform = /matrix\([^\)]+\)/.exec(
		window.getComputedStyle(elem)['-webkit-transform']),
		scale = {'x': 1, 'y': 1};
	if( transform ) {
		transform = transform[0].replace(
			'matrix(', '').replace(')', '').split(', ');
		scale.x = parseFloat(transform[0]);
		scale.y = parseFloat(transform[3]);
	}
	return scale;
}

// Hold all scale values in an array of objects
var scaleArray = [];

for ( var i=0; i<layers.length; i++ ){
	scaleArray.push( getElementScale( layers[i] ) );
}

/* =============================================== 
	scaleArray should only be defined one time
	this allows for original CSS transforms to
	be used as a base-point for the push-in effect
/* =============================================== */

var dolly = function(scrollPos) {
	
	requestAnimationFrame( function(){
	
		for( var i=0; i<layers.length; i++){

			var params = [];

			if ( layers[i].getAttribute('data-params') ){
				params = layers[i].getAttribute('data-params').split(',');
			}

			var inpoint = ( params[0] || 0 );
			var outpoint = ( params[1] || pageHeight );
			var speed = ( params[2] || 200 );

			var scaleVal = (
				(scaleArray[i].x + ( (scrollPos - inpoint) / speed ) )
				);

			// At the inpoint: 
			if(scrollPos >= inpoint && scrollPos <= outpoint){
				// make sure the element is visible
				if(layers[i].classList.contains('hide')){
					layers[i].classList.remove('hide');
				}
				// Use move data to recalculate the element's size
				var scaleString = "scale("+scaleVal+")";
				layers[i].style.webkitTransform = scaleString;
				layers[i].style.mozTransform = scaleString;
				layers[i].style.msTransform = scaleString;
				layers[i].style.oTransform = scaleString;
				layers[i].style.transform = scaleString;

			} else { // Before inpoint and after the outpoint:

				// Make sure the element is hidden
				if(!layers[i].classList.contains('hide')){
					layers[i].classList.add('hide');
				}
				// Do not recalculate element's size
			}
		} // For loop
	}); // Request animation frame
} // Dolly function


// Detect when user scrolls or touchmoves

var scrollPos = 0,
	touchStart = null,
	scrollEnd = null;

window.addEventListener("scroll", function(event) {

	scrollPos = window.pageYOffset;

	dolly(scrollPos);
	
});

window.addEventListener("touchstart", function(event) {
	touchStart = event.changedTouches[0].screenY;
});

window.addEventListener("touchmove", function(event) {
	event.preventDefault();
	
	var touchMove = event.changedTouches[0].screenY;
	scrollPos = Math.max(scrollEnd+touchStart-touchMove, 0);
	scrollPos = Math.min(scrollPos, pageHeight-window.innerHeight);
	
	dolly(scrollPos);
});

window.addEventListener("touchend", function(event) {
	scrollEnd = scrollPos;
});
// ----------------------------------------------------------------------------------------------------
// ScrollMe
// A jQuery plugin for adding simple scrolling effects to web pages
// http://scrollme.nckprsn.com
// ----------------------------------------------------------------------------------------------------

var scrollme = ( function( $ )
{
	// ----------------------------------------------------------------------------------------------------
	// ScrollMe object

	var _this = {};

	// ----------------------------------------------------------------------------------------------------
	// Properties

	var $document = $( document );
	var $window = $( window );

	_this.body_height = 0;

	_this.viewport_height = 0;

	_this.viewport_top = 0;
	_this.viewport_bottom = 0;

	_this.viewport_top_previous = -1;

	_this.elements = [];
	_this.elements_in_view = [];

	_this.property_defaults =
	{
		'opacity' : 1,
		'translatex' : 0,
		'translatey' : 0,
		'translatez' : 0,
		'rotatex' : 0,
		'rotatey' : 0,
		'rotatez' : 0,
		'scale' : 1,
		'scalex' : 1,
		'scaley' : 1,
		'scalez' : 1
	};

	_this.scrollme_selector = '.scrollme';
	_this.animateme_selector = '.animateme';

	_this.update_interval = 10;

	// Easing functions

	_this.easing_functions =
	{
		'linear' : function( x )
		{
			return x;
		},

		'easeout' : function( x )
		{
			return x * x * x;
		},

		'easein' : function( x )
		{
			x = 1 - x;
			return 1 - ( x * x * x );
		},

		'easeinout' : function( x )
		{
			if( x < 0.5 )
			{
				return ( 4 * x * x * x );
			}
			else
			{
				x = 1 - x;
				return 1 - ( 4 * x * x * x ) ;
			}
		}
	};

	// Document events to bind initialisation to

	_this.init_events =
	[
		'ready',
		'page:load', // Turbolinks
		'page:change' // Turbolinks
	];

	// ----------------------------------------------------------------------------------------------------
	// Initialisation conditions

	_this.init_if = function() { return true; }

	// ----------------------------------------------------------------------------------------------------
	// Initialisation

	_this.init = function()
	{
		// Cancel if initialisation conditions not met

		if( !_this.init_if() ) return false;

		// Load all elements to animate

		_this.init_elements();

		// Get element & viewport sizes

		_this.on_resize();

		// Recalculate heights & positions on resize and rotate

		$window.on( 'resize orientationchange' , function(){ _this.on_resize(); } );

		// Recalculate heights & positions when page is fully loaded + a bit just in case

		$window.load( function(){ setTimeout( function(){ _this.on_resize(); } , 100 ) });

		// Start animating

		setInterval( _this.update , _this.update_interval );

		return true;
	}

	// ----------------------------------------------------------------------------------------------------
	// Get list and pre-load animated elements

	_this.init_elements = function()
	{
		// For each reference element

		$( _this.scrollme_selector ).each( function()
		{
			var element = {};

			element.element = $( this );

			var effects = [];

			// For each animated element

			$( this ).find( _this.animateme_selector ).addBack( _this.animateme_selector ).each( function()
			{
				// Get effect details

				var effect = {};

				effect.element = $( this );

				effect.when = effect.element.data( 'when' );
				effect.from = effect.element.data( 'from' );
				effect.to = effect.element.data( 'to' );

				if( effect.element.is( '[data-crop]' ) )
				{
					effect.crop = effect.element.data( 'crop' );
				}
				else
				{
					effect.crop = true;
				}

				if( effect.element.is( '[data-easing]' ) )
				{
					effect.easing = _this.easing_functions[ effect.element.data( 'easing' ) ]
				}
				else
				{
					effect.easing = _this.easing_functions[ 'easeout' ];
				}

				// Get animated properties

				var properties = {};

				if( effect.element.is( '[data-opacity]' ) )    properties.opacity    = effect.element.data( 'opacity' );
				if( effect.element.is( '[data-translatex]' ) ) properties.translatex = effect.element.data( 'translatex' );
				if( effect.element.is( '[data-translatey]' ) ) properties.translatey = effect.element.data( 'translatey' );
				if( effect.element.is( '[data-translatez]' ) ) properties.translatez = effect.element.data( 'translatez' );
				if( effect.element.is( '[data-rotatex]' ) )    properties.rotatex    = effect.element.data( 'rotatex' );
				if( effect.element.is( '[data-rotatey]' ) )    properties.rotatey    = effect.element.data( 'rotatey' );
				if( effect.element.is( '[data-rotatez]' ) )    properties.rotatez    = effect.element.data( 'rotatez' );
				if( effect.element.is( '[data-scale]' ) )      properties.scale      = effect.element.data( 'scale' );
				if( effect.element.is( '[data-scalex]' ) )     properties.scalex     = effect.element.data( 'scalex' );
				if( effect.element.is( '[data-scaley]' ) )     properties.scaley     = effect.element.data( 'scaley' );
				if( effect.element.is( '[data-scalez]' ) )     properties.scalez     = effect.element.data( 'scalez' );

				effect.properties = properties;

				effects.push( effect );
			});

			element.effects = effects;

			_this.elements.push( element );
		});
	}

	// ----------------------------------------------------------------------------------------------------
	// Update elements

	_this.update = function()
	{
		window.requestAnimationFrame( function()
		{
			_this.update_viewport_position();

			if( _this.viewport_top_previous != _this.viewport_top )
			{
				_this.update_elements_in_view();
				_this.animate();
			}

			_this.viewport_top_previous = _this.viewport_top;
		});
	}

	// ----------------------------------------------------------------------------------------------------
	// Animate stuff

	_this.animate = function()
	{
		// For each element in viewport

		var elements_in_view_length = _this.elements_in_view.length;

		for( var i=0 ; i<elements_in_view_length ; i++ )
		{
			var element = _this.elements_in_view[i];

			// For each effect

			var effects_length = element.effects.length;

			for( var e=0 ; e<effects_length ; e++ )
			{
				var effect = element.effects[e];

				// Get effect animation boundaries

				switch( effect.when )
				{
					case 'view' : // Maintained for backwards compatibility
					case 'span' :
						var start = element.top - _this.viewport_height;
						var end = element.bottom;
						break;

					case 'exit' :
						var start = element.bottom - _this.viewport_height;
						var end = element.bottom;
						break;

					default :
						var start = element.top - _this.viewport_height;
						var end = element.top;
						break;
				}

				// Crop boundaries

				if( effect.crop )
				{
					if( start < 0 ) start = 0;
					if( end > ( _this.body_height - _this.viewport_height ) ) end = _this.body_height - _this.viewport_height;
				}

				// Get scroll position of reference selector

				var scroll = ( _this.viewport_top - start ) / ( end - start );

				// Get relative scroll position for effect

				var from = effect[ 'from' ];
				var to = effect[ 'to' ];

				var length = to - from;

				var scroll_relative = ( scroll - from ) / length;

				// Apply easing

				var scroll_eased = effect.easing( scroll_relative );

				// Get new value for each property

				var opacity    = _this.animate_value( scroll , scroll_eased , from , to , effect , 'opacity' );
				var translatey = _this.animate_value( scroll , scroll_eased , from , to , effect , 'translatey' );
				var translatex = _this.animate_value( scroll , scroll_eased , from , to , effect , 'translatex' );
				var translatez = _this.animate_value( scroll , scroll_eased , from , to , effect , 'translatez' );
				var rotatex    = _this.animate_value( scroll , scroll_eased , from , to , effect , 'rotatex' );
				var rotatey    = _this.animate_value( scroll , scroll_eased , from , to , effect , 'rotatey' );
				var rotatez    = _this.animate_value( scroll , scroll_eased , from , to , effect , 'rotatez' );
				var scale      = _this.animate_value( scroll , scroll_eased , from , to , effect , 'scale' );
				var scalex     = _this.animate_value( scroll , scroll_eased , from , to , effect , 'scalex' );
				var scaley     = _this.animate_value( scroll , scroll_eased , from , to , effect , 'scaley' );
				var scalez     = _this.animate_value( scroll , scroll_eased , from , to , effect , 'scalez' );

				// Override scale values

				if( 'scale' in effect.properties )
				{
					scalex = scale;
					scaley = scale;
					scalez = scale;
				}

				// Update properties

				effect.element.css(
				{
					'opacity' : opacity,
					'transform' : 'translate3d( '+translatex+'px , '+translatey+'px , '+translatez+'px ) rotateX( '+rotatex+'deg ) rotateY( '+rotatey+'deg ) rotateZ( '+rotatez+'deg ) scale3d( '+scalex+' , '+scaley+' , '+scalez+' )'
				} );
			}
		}
	}

	// ----------------------------------------------------------------------------------------------------
	// Calculate property values

	_this.animate_value = function( scroll , scroll_eased , from , to , effect , property )
	{
		var value_default = _this.property_defaults[ property ];

		// Return default value if property is not animated

		if( !( property in effect.properties ) ) return value_default;

		var value_target = effect.properties[ property ];

		var forwards = ( to > from ) ? true : false;

		// Return boundary value if outside effect boundaries

		if( scroll < from && forwards ) { return value_default; }
		if( scroll > to && forwards ) { return value_target; }

		if( scroll > from && !forwards ) { return value_default; }
		if( scroll < to && !forwards ) { return value_target; }

		// Calculate new property value

		var new_value = value_default + ( scroll_eased * ( value_target - value_default ) );

		// Round as required

		switch( property )
		{
			case 'opacity'    : new_value = new_value.toFixed(2); break;
			case 'translatex' : new_value = new_value.toFixed(0); break;
			case 'translatey' : new_value = new_value.toFixed(0); break;
			case 'translatez' : new_value = new_value.toFixed(0); break;
			case 'rotatex'    : new_value = new_value.toFixed(1); break;
			case 'rotatey'    : new_value = new_value.toFixed(1); break;
			case 'rotatez'    : new_value = new_value.toFixed(1); break;
			case 'scale'      : new_value = new_value.toFixed(3); break;
			default : break;
		}

		// Done

		return new_value;
	}

	// ----------------------------------------------------------------------------------------------------
	// Update viewport position

	_this.update_viewport_position = function()
	{
		_this.viewport_top = $window.scrollTop();
		_this.viewport_bottom = _this.viewport_top + _this.viewport_height;
	}

	// ----------------------------------------------------------------------------------------------------
	// Update list of elements in view

	_this.update_elements_in_view = function()
	{
		_this.elements_in_view = [];

		var elements_length = _this.elements.length;

		for( var i=0 ; i<elements_length ; i++ )
		{
			if ( ( _this.elements[i].top < _this.viewport_bottom ) && ( _this.elements[i].bottom > _this.viewport_top ) )
			{
				_this.elements_in_view.push( _this.elements[i] );
			}
		}
	}

	// ----------------------------------------------------------------------------------------------------
	// Stuff to do on resize

	_this.on_resize = function()
	{
		// Update viewport/element data

		_this.update_viewport();
		_this.update_element_heights();

		// Update display

		_this.update_viewport_position();
		_this.update_elements_in_view();
		_this.animate();
	}

	// ----------------------------------------------------------------------------------------------------
	// Update viewport parameters

	_this.update_viewport = function()
	{
		_this.body_height = $document.height();
		_this.viewport_height = $window.height();
	}

	// ----------------------------------------------------------------------------------------------------
	// Update height of animated elements

	_this.update_element_heights = function()
	{
		var elements_length = _this.elements.length;

		for( var i=0 ; i<elements_length ; i++ )
		{
			var element_height = _this.elements[i].element.outerHeight();
			var position = _this.elements[i].element.offset();

			_this.elements[i].height = element_height;
			_this.elements[i].top = position.top;
			_this.elements[i].bottom = position.top + element_height;
		}
	}

	// ----------------------------------------------------------------------------------------------------
	// Bind initialisation

	$document.on( _this.init_events.join( ' ' ) , function(){ _this.init(); } );

	// ----------------------------------------------------------------------------------------------------

	return _this;

	// ----------------------------------------------------------------------------------------------------

})( jQuery );
