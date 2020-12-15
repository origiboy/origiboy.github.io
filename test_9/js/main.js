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
    if (a_t < 0) {
        
        a_t = Math.abs(a_t - top_base) + top_base ;
    }
    if (a_t > $(window).height() * 0.5) {
        a_t = -Math.abs(a_t - top_base) + top_base ;
    }
    
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
    
    
    /* Анимация первых инициалов */
    
    $(".screen__third__firstblock").children(".screen__third__wrapper").mouseover(function(){
        $(this).css("height", "100%");
        $(".screen__third__block").eq(1).children(".screen__third__wrapper").css("height", "30%");
        $(".screen__third__block").eq(2).children(".screen__third__wrapper").css("height", "30%");
        $(".screen__third__block").eq(3).children(".screen__third__wrapper").css("height", "30%");
        $(this).children(".screen__third__date").css("font-size", "36px");
    });
    $(".screen__third__firstblock").children(".screen__third__wrapper").click(function(){
        $(this).children(".screen__third__text").css("display", "flex");
    });
    $(".screen__third__firstblock").children(".screen__third__wrapper").mouseleave(function(){
        $(".screen__third__wrapper").height("50%");
        $(this).children(".screen__third__text").css("display", "none");
        $(this).children(".screen__third__date").css("font-size", "18px");
    });
    
    /* Анимация вторых инициалов */
    
    $(".screen__third__secondblock").children(".screen__third__wrapper").mouseover(function(){
        $(this).css("height", "100%");
        $(".screen__third__block").eq(0).children(".screen__third__wrapper").css("height", "30%");
        $(".screen__third__block").eq(2).children(".screen__third__wrapper").css("height", "30%");
        $(".screen__third__block").eq(3).children(".screen__third__wrapper").css("height", "30%");
        $(this).children(".screen__third__date").css("font-size", "36px");
    });
    $(".screen__third__secondblock").children(".screen__third__wrapper").click(function(){
        $(this).children(".screen__third__text").css("display", "flex");
    });
    $(".screen__third__secondblock").children(".screen__third__wrapper").mouseleave(function(){
        $(".screen__third__wrapper").height("50%");
        $(this).children(".screen__third__text").css("display", "none");
        $(this).children(".screen__third__date").css("font-size", "18px");
    });
    
    /* Анимация третьих инициалов */
    
    $(".screen__third__thirdblock").children(".screen__third__wrapper").mouseover(function(){
        $(this).css("height", "100%");
        $(".screen__third__block").eq(0).children(".screen__third__wrapper").css("height", "30%");
        $(".screen__third__block").eq(1).children(".screen__third__wrapper").css("height", "30%");
        $(".screen__third__block").eq(3).children(".screen__third__wrapper").css("height", "30%");
        $(this).children(".screen__third__date").css("font-size", "36px");
    });
    $(".screen__third__thirdblock").children(".screen__third__wrapper").click(function(){
        $(this).children(".screen__third__text").css("display", "flex");
    });
    $(".screen__third__thirdblock").children(".screen__third__wrapper").mouseleave(function(){
        $(".screen__third__wrapper").height("50%");
        $(this).children(".screen__third__text").css("display", "none");
        $(this).children(".screen__third__date").css("font-size", "18px");
    });
    
    /* Анимация четвертых инициалов */
    
    $(".screen__third__fourthblock").children(".screen__third__wrapper").mouseover(function(){
        $(this).css("height", "100%");
        $(".screen__third__block").eq(0).children(".screen__third__wrapper").css("height", "30%");
        $(".screen__third__block").eq(1).children(".screen__third__wrapper").css("height", "30%");
        $(".screen__third__block").eq(2).children(".screen__third__wrapper").css("height", "30%");
        $(this).children(".screen__third__date").css("font-size", "36px");
    });
    $(".screen__third__fourthblock").children(".screen__third__wrapper").click(function(){
        $(this).children(".screen__third__text").css("display", "flex");
    });
    $(".screen__third__fourthblock").children(".screen__third__wrapper").mouseleave(function(){
        $(".screen__third__wrapper").height("50%");
        $(this).children(".screen__third__text").css("display", "none");
        $(this).children(".screen__third__date").css("font-size", "18px");
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
    $(".background__letters").eq(0).offset({top: $(window).scrollTop()*0.5});
    
    
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