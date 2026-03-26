// --- DATABASE UTENTI ---
const users = {
  "Alessio": "1234", "Marco": "pelopelo", "Alessia": "oceani", "Anna": "1234", "Alfonso": "1234", "Chiara": "iii"
};

// --- DATABASE CONTENUTI COMPLETO ---
const seriesData = {
  "Ginny e Georgia": {
    img: "https://i.imgur.com/CScKmEZ.jpeg",
    trailer: "9uBrr25Gwj4", 
    desc: "Una madre dallo spirito libero e i suoi figli si trasferiscono al nord per ricominciare da capo in questa serie drammatica e commovente.",
    seasons: {
      1: [
        { episode: 1, title: "Pilot", src: "https://drive.google.com/file/d/12Ew2SflLxJP6C6UuznxfX4ou-1e_1Xcq/preview" },
        { episode: 2, title: "E' un viso, non una maschera", src: "https://drive.google.com/file/d/13wB1kyWtuHqINWpBYsfRSgbOIQ8404UE/preview" },
        { episode: 3, title: "Cose che si addicono solo a gente ricca", src: "https://drive.google.com/file/d/1SagpLPK4OmTmeO0dr23xfeA1rfkmFFv4/preview" },
        { episode: 4, title: "Lydia Bennet è senza dubbio femminista", src: "https://drive.google.com/file/d/1uM6S1cUnBRT_wRLsxvX0VO5oZ6MAIbVU/preview" },
        { episode: 5, title: "Boo, brutta stron*a", src: "https://drive.google.com/file/d/1MFYR1es-2PzE40642-nuaMJQ7GE0QHOZ/preview" },
        { episode: 6, title: "Non mi capite", src: "https://drive.google.com/file/d/1Rfr4vh6xVEoG5f-WMeeQyoChIGInwQAt/preview" },
        { episode: 7, title: "Buon compleanno sciocca", src: "https://drive.google.com/file/d/1Kq7Fs06knX-6VOXQTs0hqphJ3Q3srCun/preview" },
        { episode: 8, title: "Croce su una parte, croce sull'altra", src: "https://drive.google.com/file/d/1kLJ29kNZnz_RF5NDSXVJvSdWUHe6TC5J/preview" },
        { episode: 9, title: "Amare è difficile", src: "https://drive.google.com/file/d/1-1Au2tWQIj37QW_PFj3mG71i_k4YS3Rc/preview" },
        { episode: 10, title: "Il peggior tradimento dai tempi di Jordyn e Kylie", src: "https://drive.google.com/file/d/1jv_pet7AY2Yvrwa0-HmZc_GRGcEeu01o/preview" }
      ],
      2: [
        { episode: 1, title: "Bentornati str**zetti", src: "https://drive.google.com/file/d/13hz6WDbRZN0iN000HEjvPNVrhhO1f75p/preview" },
        { episode: 2, title: "Terribile, ogni volta", src: "https://drive.google.com/file/d/1rstuICrKjXthkzgbm_dIYXPeM-updvTK/preview" },
        { episode: 3, title: "Che cosa hai in mente?", src: "https://drive.google.com/file/d/1OHwtpnbItdGgEzPnc-eT7xDjD5__2c_2/preview" },
        { episode: 4, title: "Buon mio compleanno", src: "https://drive.google.com/file/d/1FJFa-iI6Q0uSc7IFPKI9R-a_xjaWdK5w/preview" },
        { episode: 5, title: "I latkes sono eccellenti", src: "https://drive.google.com/file/d/1CXzJxprhWFgAfYFsVRxmwjcEM76coGhY/preview" },
        { episode: 6, title: "Speciale Natale", src: "https://drive.google.com/file/d/1iWx2hEi-H7BcVC4W-S84mxED2kk-D6NY/preview" },
        { episode: 7, title: "Lascia fare a noi", src: "https://drive.google.com/file/d/1YISd0u7tw9DY38-RQdji_6Mt_SNTBQqQ/preview" },
        { episode: 8, title: "Ascolta! L'oscurità scende", src: "https://drive.google.com/file/d/19_nawVSd7rWaVffpUJSPd_97XAgGYtIp/preview" },
        { episode: 9, title: "Prima o poi lo uccido", src: "https://drive.google.com/file/d/1SYAA10m4LjxaAItsbypN_eK7K9i7IyGl/preview" },
        { episode: 10, title: "Non sono Cenerentola", src: "https://drive.google.com/file/d/1z6ea1hdBPUG3NqaEVv3TE5-YlrAU_lA-/preview" }
      ],
      3: [
        { episode: 1, title: "Non sarebbe un buon podcast", src: "https://drive.google.com/file/d/1UuRAg2JStiRt-X2Q63NH6vN3NADVcInX/preview" },
        { episode: 2, title: "Maledetto bip, bip", src: "https://drive.google.com/file/d/10ipOz6ugcE4hI9JtHyQZJu1azsLuFHgk/preview" },
        { episode: 3, title: "Gli amici ballano", src: "https://drive.google.com/file/d/1pjbdrEG9mpSxP1vvtSlKoqzbPLW7fb6n/preview" },
        { episode: 4, title: "E' tornata la str***a", src: "https://drive.google.com/file/d/18LgMYOeJoMJ9N101H1DOkKnxwQzurj3p/preview" },
        { episode: 5, title: "La dinamite fa bum", src: "https://drive.google.com/file/d/1lYcyzTPVuqTdC5yDG2E_gQyXOOFeHNvX/preview" },
        { episode: 6, title: "Almeno non può andare peggio", src: "https://drive.google.com/file/d/1F-_xjgRZy4SLFgGB9EOOuUfrImfcXmoS/preview" },
        { episode: 7, title: "E' pazzesco", src: "https://drive.google.com/file/d/19T_zEO-PXZZl8uK3Wsu3eDfqQMF8qn5v/preview" },
        { episode: 8, title: "E' un pranzo al sacco?", src: "https://drive.google.com/file/d/1CxoJWegDyFbvtu2XsRZTE5tnVr3geM1x/preview" },
        { episode: 9, title: "E' il momento del mio assolo", src: "https://drive.google.com/file/d/1ZUnk12DxDTH3E36rx7sLH1Qyctwu-Rfv/preview" },
        { episode: 10, title: "Mostri", src: "https://drive.google.com/file/d/1UvEuk_dt2Fv2uwlB_X5NoQ6su4VavjB0/preview" }
      ]
    }
  },
  "Mercoledì": {
    img: "https://i.imgur.com/rZ8CYjh.jpeg",
    trailer: "Di310WS8zLk",
    desc: "Intelligente, sarcastica e un po' morta dentro, Mercoledì Addams indaga su una serie di omicidi.",
    seasons: {
      1: [
        { episode: 1, title: "Chi nasce di Mercoledì", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 2, title: "Un triste isolamento", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 3, title: "Tristemente amici o nemici", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 4, title: "Una triste serata", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 5, title: "Chi semina vento raccoglie tristezza", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 6, title: "Un triste compleanno", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 7, title: "E' triste che tu non mi conosca ancora", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 8, title: "Triste da morire", src: "https://www.youtube.com/embed/HhesaQXLuRY" }
      ]
    }
  },
   "Stranger Things": {
    img: "https://i.imgur.com/yBTjmMZ.jpeg",
    trailer: "yQEondeGvKo",
    desc: "Nella Hawkins degli anni '80, la misteriosa sparizione di un bambino trascina i suoi amici in un'avventura soprannaturale.",
    seasons: {
      1: [
        { episode: 1, title: "Capitolo primo: La scomparsa di Will Byers", src: "https://drive.google.com/file/d/19wMej_hCzL89iiZ6cpW-QCg-aw3JHevQ/preview" },
        { episode: 2, title: "Capitolo due: La stramba di Maple Street", src: "https://drive.google.com/file/d/1MtoapesE_VIncgnd45bmHF7BkrmtmaJT/preview" },
        { episode: 3, title: "Capitolo tre: Luci natalizie", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 4, title: "Capitolo quattro: Il corpo", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 5, title: "Capitolo cinque: La pulce e l'acrobata", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 6, title: "Capitolo sei: Il mostro", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 7, title: "Capitolo sette: La vasca da bagno", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 8, title: "Capitolo otto: Il sottosopra", src: "https://www.youtube.com/embed/HhesaQXLuRY" }
      ],
      2: [
        { episode: 1, title: "Capitolo uno: Mad Max", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 2, title: "Capitolo due: Dolcetto o scherzetto, matto", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 3, title: "Capitolo tre: Il girino", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 4, title: "Capitolo quattro: Will il saggio", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 5, title: "Capitolo cinque: Dig Dug", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 6, title: "Capitolo sei: La spia", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 7, title: "Capitolo sette: La sorella perduta", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 8, title: "Capitolo otto: Il Mind Flayer", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 9, title: "Capitolo nove: La porta", src: "https://www.youtube.com/embed/HhesaQXLuRY" }
      ],
      3: [
        { episode: 1, title: "Capitolo uno: Suzie, mi ricevi?", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 2, title: "Capitolo due: Incubi", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 3, title: "Capitolo tre: Il caso della bagnina scomparsa", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 4, title: "Capitolo quattro: La sauna", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 5, title: "Capitolo cinque: L'esercito del Mind Flayer", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 6, title: "Capitolo sei: L'arma", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 7, title: "Capitolo sette: Il morso", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 8, title: "Capitolo otto: La battaglia di Starcourt", src: "https://www.youtube.com/embed/HhesaQXLuRY" }
      ],
      4: [
        { episode: 1, title: "Capitolo uno: Hellfire Club", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 2, title: "Capitolo due: La maledizione di Vecna", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 3, title: "Capitolo tre: Il mostro e la supereroina", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 4, title: "Capitolo quattro: Caro Billy", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 5, title: "Capitolo cinque: Il progetto Nina", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 6, title: "Capitolo sei: Il tuffo", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 7, title: "Capitolo sette: Il massacro al laboratorio di Hawkins", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 8, title: "Capitolo otto: Papà", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 9, title: "Capitolo nove: Il piano", src: "https://www.youtube.com/embed/HhesaQXLuRY" }
      ],
      5: [
        { episode: 1, title: "Capitolo uno: La missione", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 2, title: "Capitolo due: La scomparsa di Holly Wheeler", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 3, title: "Capitolo tre: La trappola", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 4, title: "Capitolo quattro: Lo stregone", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 5, title: "Capitolo cinque: La scossa", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 6, title: "Capitolo sei: La fuga da Camazotz", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 7, title: "Capitolo sette: Il ponte", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 8, title: "Capitolo otto: Il mondo reale", src: "https://www.youtube.com/embed/HhesaQXLuRY" }
      ]
    }
  }
};

const moviesData = {
  "Il buco: Capitolo 2": {
    img: "https://i.imgur.com/dezd4Vb.jpeg",
    src: "https://drive.google.com/file/d/1WVhXNNE26fbIbweJ-Zk5RzBIQSSolr2t/preview",
    desc: "Il sequel del thriller distopico spagnolo ambientato in una prigione verticale."
  },
  "Harry Potter e i doni della morte": {
    img: "https://i.imgur.com/4q0eRaQ.jpeg",
    trailer: "9hXH0Ackz6w", 
    src: "https://drive.google.com/file/d/1PnyQvFvB1hd92DJYQQRSgElZc1BT77Li/preview",
    desc: "La battaglia finale tra Harry Potter e Lord Voldemort ha inizio."
  },
  "Inception": {
    img: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    trailer: "YoHD9XEInc0", 
    src: "https://drive.google.com/file/d/1D_3ZEoglOfcVeYvBI6EO84v7pH5kXYvi/preview",
    desc: "Un ladro che ruba segreti dai sogni deve compiere l'impresa inversa: innestare un'idea."
  },
  "Five Nights at Freddy's 2": {
    img: "https://imgur.com/bcdkB1z.jpeg",
    src: "https://drive.google.com/file/d/1J62L5-b0ieQk0Q8cx_n7XrbPEZ63su5U/preview",
    desc: "Sopravvivi a nuove notti di terrore con animatronics ancora più letali."
  },
  "Five Nights at Freddy's": {
    img: "https://i.imgur.com/b4dmhBm.jpeg",
    src: "https://drive.google.com/file/d/1C3KSFYfJ4CLlcAvcUh7hdXdGCbHMLSot/preview",
    desc: "Un giovane tormentato accetta un lavoro come guardia notturna."
  },
  "Pirati dei Caraibi: La maledizione della prima luna": {
    img: "https://i.imgur.com/0ZDHV1h.jpeg",
    src: "https://drive.google.com/file/d/1Hye_5rwMA4m71nNXwNhibHV-UdOPjnOJ/preview",
    desc: "Il fabbro Will Turner si allea con l'eccentrico pirata Jack Sparrow."
  },
  "Pirati dei Caraibi – La maledizione del forziere fantasma": {
    img: "https://i.imgur.com/W2kwE5b.jpeg",
    src: "https://drive.google.com/file/d/1TGNfA56R24Nl-wVBtDcNE14q43jW1bs7/preview",
    desc: "Jack Sparrow cerca il cuore pulsante di Davy Jones."
  },
  "Pirati dei Caraibi - Ai confini del mondo": {
    img: "https://i.imgur.com/ZZyA96k.jpeg",
    src: "https://drive.google.com/file/d/1qgSL-IcsE8oArpb1cyE8k_M6q7CJzV6m/preview",
    desc: "Will, Elizabeth e Barbossa viaggiano fino all'aldilà per recuperare Jack."
  },
  "Pirati dei Caraibi - Oltre i confini del mare": {
    img: "https://i.imgur.com/TQg0veB.jpeg",
    src: "https://drive.google.com/file/d/12W2WmhoLA3pWKRzaGxmJJUhxyBRZHXvc/preview",
    desc: "Jack Sparrow è costretto a guidare il temibile Barbanera."
  },
  "Pirati dei Caraibi – La vendetta di Salazar": {
    img: "https://i.imgur.com/dOo7k43.jpeg",
    src: "https://drive.google.com/file/d/1o1od8gVuS4zZryCeXPMh618Dny03YvUC/preview",
    desc: "Inseguito dai fantasmi del Capitano Salazar, Jack deve trovare il leggendario Tridente."
  },
  "SpongeBob - Un'avventura da pirati": {
    img: "https://i.imgur.com/JYRAuVX.jpeg",
    src: "https://drive.google.com/file/d/1H3y9pB9_3PvIP9v6lzvMRORPTlsFxLmI/preview",
    desc: "SpongeBob intraprende una pericolosa discesa negli abissi."
  },
  "Predator: Badlands": {
    img: "https://i.imgur.com/hVWaU85.jpeg",
    src: "https://drive.google.com/file/d/1X9k7-zWLKRBNdRUB_vlxNogxuXWREIpp/preview",
    desc: "Ambientato in un futuro desolato, questo capitolo del franchise ribalta la prospettiva."
  },
  "Un film Minecraft": {
    img: "https://i.imgur.com/ZZTZVUn.jpeg",
    src: "https://drive.google.com/file/d/1EaOb48T6T7oKE1vmKtT01F38Ykv6G87N/preview",
    desc: "Quattro estranei catapultati nel mondo a cubetti dell'Overworld si alleano con l'esperto Steve per sopravvivere e tornare a casa."
  },
  "Love Me Love Me": {
    img: "https://i.imgur.com/3w1uoBa.jpeg",
    src: "https://drive.google.com/file/d/1hUsvHaKSRjdD-uwu9GlleSZKZ_Hvs5V1/preview",
    desc: "La liceale June si ritrova al centro di un tormentato triangolo amoroso tra il dolce Will e il ribelle e misterioso James."
  },
  "Io e te dobbiamo parlare": {
    img: "https://i.imgur.com/7c9dxA1.jpeg",
    src: "https://drive.google.com/file/d/1Z_Kf9dKnAr5FtUCym7wgLEtjBwwxcHNx/preview",
    desc: "Due poliziotti pasticcioni, legati da bizzarri intrecci familiari, devono unire le forze per risolvere il loro primo vero caso criminale."
  }
};

const animeData = {
  "One Piece": {
     img: "https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
     trailer: "A1SqXhU5bQ0",
     desc: "Luffy e la sua ciurma salpano alla ricerca del tesoro supremo: lo One Piece.",
     seasons: { 
         1: [ { episode: 1, title: "Sono Luffy!", src: "https://drive.google.com/file/d/12Ew2SflLxJP6C6UuznxfX4ou-1e_1Xcq/preview" } ] 
     }
  },
  "Attack on Titan": {
     img: "https://flxt.tmsimg.com/assets/p10701949_b_v8_ah.jpg",
     trailer: "MGRm4IzK1SQ",
     desc: "L'umanità combatte per la sopravvivenza contro giganti mangia-uomini.",
     seasons: { 
       1: [
         { episode: 1, title: "A te, fra 2000 anni", src: "https://drive.google.com/file/d/1AjHQP9PkMJEcZNKSuNUMgHgOMqxhPvzd/preview" },
         { episode: 2, title: "Quel giorno", src: "https://drive.google.com/file/d/11PtQl_aUNXA-lWN2xqs2UmDFK3XIGwuW/preview" },
         { episode: 3, title: "La luce opaca", src: "https://drive.google.com/file/d/1FUtG05SwZoT8aoLVq0Y2RX5qYHp8wucZ/preview" },
         { episode: 4, title: "La notte della cerimonia", src: "https://drive.google.com/file/d/1uMVmqK_q2KnBqyIBw0ZFuhHrxr8WV3q1/preview" },
         { episode: 5, title: "Prima battaglia", src: "https://drive.google.com/file/d/138DMRejzZ7p13cvIAXGwhT-x0gHoGGpO/preview" },
         { episode: 6, title: "Il mondo che la ragazza ha visto", src: "https://drive.google.com/file/d/1MCieaCeN00Qe9Eptwo2CLsunoCMCmtCd/preview" },
         { episode: 7, title: "Una piccola lama", src: "https://drive.google.com/file/d/18gRoe6fFZcu_b49LnWn7mKuN4QbhEWnJ/preview" },
         { episode: 8, title: "Il battito del cuore", src: "https://drive.google.com/file/d/1wcN4o269KxZRV2jMVYrsQdz0TKq5SAfq/preview" },
         { episode: 9, title: "Braccio sinistro", src: "https://drive.google.com/file/d/1CWa8WdAneGnV_lNH2o5m9dlxVEtAER2F/preview" },
         { episode: 10, title: "La risposta", src: "https://drive.google.com/file/d/1jVCKgw5ysuSZQMa03cDeaeKWLEUDupSi/preview" },
         { episode: 11, title: "Icona", src: "https://drive.google.com/file/d/14Ot7i-wK8UJyMYf-MT6DgdYFmy79b3mJ/preview" },
         { episode: 12, title: "Ferite", src: "https://drive.google.com/file/d/1LgBJwtvT1EhNMDzU5AAv5-um-igobgkr/preview" },
         { episode: 13, title: "Istinti primordiali", src: "https://drive.google.com/file/d/1qUhBGPoobLgCzPUGb4BRXIwHFxlEcvX7/preview" },
         { episode: 14, title: "Ancora non riesco", src: "https://drive.google.com/file/d/1bjowsUpPkNtOC5-xClTcqI6a99AbUfQX/preview" },
         { episode: 15, title: "L'unità per le operazioni", src: "https://drive.google.com/file/d/1QvdU4KZLvViGf_uUv78NgcfaXdoC9lUT/preview" },
         { episode: 16, title: "Cos'è che deve essere fatto", src: "https://drive.google.com/file/d/1w2VBftQN1tC7IvF8J0yAkmKB6mh0xNif/preview" },
         { episode: 17, title: "Il gigante femminile", src: "https://drive.google.com/file/d/1w0wEWSieCQOSzWDpxTUkT_9yG5-FqnQz/preview" },
         { episode: 18, title: "Il bosco di alberi", src: "https://drive.google.com/file/d/1tNf1vxT3XGFSzT_fl0gXw5jGsBqz_uyV/preview" },
         { episode: 19, title: "Morso", src: "https://drive.google.com/file/d/1RCMXSVdvHTBTeZKIke0IOWFE_WgIrZCq/preview" },
         { episode: 20, title: "Erwin Smith", src: "https://drive.google.com/file/d/1ov1GDEfLkG2_xTcVeD1FN0g7kOeeJrAU/preview" }, 
         { episode: 21, title: "Colpo devastante", src: "https://drive.google.com/file/d/1wa6L9LF69vXoGhqszs3vSPpUnDsdpk7a/preview" },
         { episode: 22, title: "Gli sconfitti", src: "https://drive.google.com/file/d/1h89XzuLmYQcvR3TJIL9nxFqLcmWpjgeJ/preview" },
         { episode: 23, title: "Un sorriso", src: "https://drive.google.com/file/d/1vKrd4tZpK0lZAhb9x5uECxly88AFr04Y/preview" },
         { episode: 24, title: "La grazia", src: "https://drive.google.com/file/d/1JnZKieEO0oG2aB6AOXoTmvWkrXhPJlv4/preview" },
         { episode: 25, title: "Le mura", src: "https://drive.google.com/file/d/1Nlp8pz8FijnWrgiTYupJvKxL8hvcaFy0/preview" }
       ],
       2: [
         { episode: 1, title: "Il gigante bestia", src: "https://drive.google.com/file/d/1VJO8JdZB4EBP0X7mnvxWTp31Pvc0w4rQ/preview" },
         { episode: 2, title: "Sono a casa", src: "https://drive.google.com/file/d/1EsBJRA38COeSBk4fAjbKRKFJ0S1abSi1/preview" },
         { episode: 3, title: "Verso sud-ovest", src: "https://drive.google.com/file/d/1l6TtWt2Mz6fZqwghYhh0cGK2dIGOPU4n/preview" },
         { episode: 4, title: "Soldato", src: "https://drive.google.com/file/d/1zkvYvVTSm2YQrQuSqiweHs0Qo1dPISM9/preview" },
         { episode: 5, title: "Historia", src: "https://drive.google.com/file/d/13Y30p3nQIep0ukoB3vcAqs3Y1mk7GaRp/preview" },
         { episode: 6, title: "Guerriero", src: "https://drive.google.com/file/d/14vw-Cr_sjLGvB1sR6Cgp9lYY9bHneqvS/preview" },
         { episode: 7, title: "Attacco, proiezione", src: "https://drive.google.com/file/d/1mQF1F8-omRUPvUM6J79ZBiAJuVaiZlIn/preview" },
         { episode: 8, title: "Inseguitori", src: "https://drive.google.com/file/d/1mQF1F8-omRUPvUM6J79ZBiAJuVaiZlIn/preview" },
         { episode: 9, title: "Apertura", src: "https://drive.google.com/file/d/1i9rL3hudJ9L6xqA0-3b_eyw_qYWMH1TG/preview" },
         { episode: 10, title: "Bambini", src: "https://drive.google.com/file/d/1BgfksyHHyYZCulD8MRirUOua3Cfa7y1Q/preview" },
         { episode: 11, title: "Carica", src: "https://drive.google.com/file/d/1RKa8yK0NjsA_hZjbtYkoJE0hFBFIq-7V/preview" },
         { episode: 12, title: "Urla", src: "https://drive.google.com/file/d/1VtL1bJArYmmdhiA0GMAGBhHRaTSj9j7F/preview" }
       ],
       3: [
         { episode: 1, title: "Segnale di fumo", src: "https://drive.google.com/file/d/1E6zOMk9OxkFl9s3AwLYzNFJkbtbHn1oY/preview" },
         { episode: 2, title: "Dolore", src: "https://drive.google.com/file/d/1xDR3EZ9MAdVe-zs5vi3yu-mFQjGBN0_W/preview" },
         { episode: 3, title: "Storie passate", src: "https://drive.google.com/file/d/1GSK6HcKETt48MlhR57ANh8Fg5QV0zUsz/preview" },
         { episode: 4, title: "Fiducia", src: "https://drive.google.com/file/d/100vXFzfR5rzsclJZsP6fBz31Rt90uRhY/preview" },
         { episode: 5, title: "Risposta", src: "https://drive.google.com/file/d/1C1qxXz07sfgOwwbBRBfjJCbsWjLHkh5B/preview" },
         { episode: 6, title: "Peccato", src: "https://drive.google.com/file/d/1A1-fR9GuOy7IE4pLpNOpqJpNsk8FpkgB/preview" },
         { episode: 7, title: "Desiderio", src: "https://drive.google.com/file/d/1KhUMmLXVazajwFEb5GfMZw6Xq0nbFTDs/preview" },
         { episode: 8, title: "Le mura del distretto", src: "https://drive.google.com/file/d/1Y35-7T9hLjUNL9A4oS-0-dG2sSB_oyOc/preview" },
         { episode: 9, title: "Monarca delle mura", src: "https://drive.google.com/file/d/1W343mYrRC2gFgNW_vg7PflbnzbfnJncN/preview" },
         { episode: 10, title: "Amici", src: "https://drive.google.com/file/d/1G6ZtBjXx81v2fycJnPsbzQMIYcI3kZQb/preview" },
         { episode: 11, title: "Spettatore", src: "https://drive.google.com/file/d/1nWCxpWO0iV5bHALywTaaKhaXV-kTIxoz/preview" },
         { episode: 12, title: "La notte prima", src: "https://drive.google.com/file/d/14YhZyWqFJwh6jUrARRemdgQMbNN_A2Bv/preview" }
       ],
       4: [
         { episode: 1, title: "La città dove tutto iniziò", src: "https://drive.google.com/file/d/1gAvZWEi_sTqV8qqd6K-dJj0Ss-hvze5a/preview" },
         { episode: 2, title: "Le lance fulmine", src: "https://drive.google.com/file/d/1cJnCOpIlSZka643sQZHRBdqqpn9BCy2S/preview" },
         { episode: 3, title: "La venuta", src: "https://drive.google.com/file/d/10fJ10Pi8J7tDy5dSH9Diq-zSnFRkY1qX/preview" },
         { episode: 4, title: "Partita perfetta", src: "https://drive.google.com/file/d/1n3otr5tm1j1Mm9RMeebUUA3L_Uluqvcp/preview" },
         { episode: 5, title: "Il coraggioso", src: "https://drive.google.com/file/d/1AWJ_ud9_Rj4sYP2R8vPzDNFTvFfiCbmo/preview" },
         { episode: 6, title: "Sole di mezzanotte", src: "https://drive.google.com/file/d/1ban4mTeBq1wOJV9-EFVW9tEVn21YLOQb/preview" },
         { episode: 7, title: "La cantina", src: "https://drive.google.com/file/d/1RewFMljiuVl_tJjPXH69ugb6uny0J_qt/preview" },
         { episode: 8, title: "Quel giorno", src: "https://drive.google.com/file/d/151yTXCmjGI7DsNKT6BcRX-_xfTSElt94/preview" },
         { episode: 9, title: "Il gigante d'attacco", src: "https://drive.google.com/file/d/1pRNlvE6Cb4Gl5O0Tq3PDgHC88qazaEqu/preview" },
         { episode: 10, title: "Al di là delle mura", src: "https://drive.google.com/file/d/19c8wcm1VUHJxhPfMyxSluzGRNQOQ9WQ5/preview" }
       ]
     }
  }
};

/* --- LOGICA APPLICAZIONE --- */
let currentUser = null;
let currentSerieTitle = ""; 
let currentPlayingMeta = null; 

let watchHistory = {}; 
let heroInterval;

const heroSlides = [
    { type: 'serie', key: "Ginny e Georgia" },
    { type: 'movie', key: "Il buco: Capitolo 2" },
    { type: 'anime', key: "One Piece" },
    { type: 'serie', key: "Mercoledì" },
    { type: 'movie', key: "Inception" }
];
let currentHeroIndex = 0;

// Variabili per i Trailer Youtube
let ytTrailerPlayer = null;
let isYtApiReady = false;

function onYouTubeIframeAPIReady() {
    isYtApiReady = true;
}

// --- GESTIONE SCROLL ---
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    let st = window.pageYOffset || document.documentElement.scrollTop;
    
    if (st > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');

    if (ytTrailerPlayer && typeof ytTrailerPlayer.getPlayerState === 'function') {
        const iframe = document.getElementById('yt-trailer-iframe');
        if (iframe) {
            const rect = iframe.getBoundingClientRect();
            
            if (rect.bottom < 0 || rect.top > window.innerHeight) {
                if (ytTrailerPlayer.getPlayerState() === 1) ytTrailerPlayer.pauseVideo();
            } else {
                if (ytTrailerPlayer.getPlayerState() !== 1) ytTrailerPlayer.playVideo();
                
                if (st > lastScrollTop) {
                    if (!ytTrailerPlayer.isMuted()) ytTrailerPlayer.mute();
                } else if (st < lastScrollTop) {
                    if (ytTrailerPlayer.isMuted()) ytTrailerPlayer.unMute();
                }
            }
        }
    }
    lastScrollTop = st <= 0 ? 0 : st;
});

function handleEnter(e) { if(e.key === "Enter") login(); }

function login() {
  const uInput = document.getElementById("username");
  const pInput = document.getElementById("password");
  
  const u = uInput.value.trim();
  const p = pInput.value.trim();
  
  if (users[u] && users[u] === p) {
    currentUser = u;
    
    watchHistory = JSON.parse(localStorage.getItem('nanoFlixHistory_' + currentUser)) || {};
    
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("main-app").style.display = "block";
    
    history.replaceState({view:'home'}, null, "");
    loadHome(false);
  } else {
    document.getElementById("login-error").textContent = "Nome utente o password errati. (Attenzione alle maiuscole!)";
    const box = document.querySelector('.login-box');
    box.style.transform = "translateX(5px)";
    setTimeout(() => box.style.transform = "translateX(0)", 100);
  }
}

function logout() { 
    location.reload(); 
}

function startSearch() { document.body.classList.add('searching'); }
function endSearch() { setTimeout(() => { document.body.classList.remove('searching'); }, 200); }

function toggleMenu(e) {
    e.stopPropagation();
    document.getElementById("dropdown-menu").classList.toggle("show");
}

function filterCategory(cat, e, push = true) {
    if(e) e.stopPropagation();
    document.getElementById("dropdown-menu").classList.remove("show");
    
    if (push) {
        if (cat === 'home') history.pushState({view: 'home'}, null, "");
        else history.pushState({view: 'category', category: cat}, null, "");
    }
    
    hideViews();
    document.getElementById("home-view").style.display = "block";
    
    const hero = document.getElementById("hero-section");
    const hist = document.getElementById("history-section");
    
    const sSec = document.getElementById("series-section");
    const sList = document.getElementById("series-list-div");
    
    const mSec = document.getElementById("movies-section");
    const mList = document.getElementById("movies-list-div");
    
    const aSec = document.getElementById("anime-section");
    const aList = document.getElementById("anime-list-div");

    [sList, mList, aList].forEach(el => el.className = "scroll-container");

    if (cat === 'home') {
        hero.style.display = "flex";
        hist.style.display = (Object.keys(watchHistory).length > 0) ? "block" : "none";
        sSec.style.display = "block"; 
        mSec.style.display = "block"; 
        aSec.style.display = "block";
        startHeroCarousel();
    } else {
        hero.style.display = "none"; 
        hist.style.display = "none";
        clearInterval(heroInterval);
        
        if (cat === 'series') {
            sSec.style.display = "block"; sList.className = "grid-view";
            mSec.style.display = "none"; 
            aSec.style.display = "none";
        } else if (cat === 'movies') {
            sSec.style.display = "none";
            mSec.style.display = "block"; mList.className = "grid-view";
            aSec.style.display = "none";
        } else if (cat === 'anime') {
            sSec.style.display = "none";
            mSec.style.display = "none";
            aSec.style.display = "block"; aList.className = "grid-view";
        }
    }
}

window.onclick = (e) => {
    if (!e.target.closest('.netflix-nav')) document.getElementById("dropdown-menu").classList.remove("show");
};

function startHeroCarousel() {
    if(heroInterval) clearInterval(heroInterval);
    updateHeroUI(currentHeroIndex);
    heroInterval = setInterval(() => nextHero(), 5000); 
}

function updateHeroUI(index) {
    const item = heroSlides[index];
    let data;
    if (item.type === 'movie') data = moviesData[item.key];
    else if (item.type === 'anime') data = animeData[item.key];
    else data = seriesData[item.key];

    if (data) {
        const hero = document.getElementById("hero-section");
        hero.style.backgroundImage = `url('${data.img}')`;
        document.getElementById("hero-title").textContent = item.key;
        document.getElementById("hero-desc").textContent = data.desc || "Guarda ora su NanoFlix";
        
        const content = document.querySelector('.hero-content');
        content.style.opacity = 0;
        setTimeout(() => content.style.opacity = 1, 300);
    }
}

function nextHero(e) {
    if(e) { e.stopPropagation(); clearInterval(heroInterval); }
    currentHeroIndex = (currentHeroIndex + 1) % heroSlides.length;
    updateHeroUI(currentHeroIndex);
}

function prevHero(e) {
    if(e) { e.stopPropagation(); clearInterval(heroInterval); }
    currentHeroIndex = (currentHeroIndex - 1 + heroSlides.length) % heroSlides.length;
    updateHeroUI(currentHeroIndex);
}

function playCurrentHero() {
    const item = heroSlides[currentHeroIndex];
    if (item.type === 'movie') {
        const data = moviesData[item.key];
        if(data) playVideo(data.src, item.key, {img: data.img, type: 'movie'});
    } else {
        const db = (item.type === 'anime') ? animeData : seriesData;
        const data = db[item.key];
        if(data && data.seasons && data.seasons[1]) {
            const ep = data.seasons[1][0];
            currentSerieTitle = item.key;
            playVideo(ep.src, ep.title, { type: item.type, season: 1, episode: 1, img: data.img, fullTitle: ep.title, seriesKey: item.key });
        }
    }
}

function infoCurrentHero() {
    const item = heroSlides[currentHeroIndex];
    openContent(item.key, item.type);
}

window.addEventListener('popstate', (e) => {
    if(e.state) {
        if(e.state.view === 'home') loadHome(false);
        else if(e.state.view === 'category') filterCategory(e.state.category, null, false);
        else if(e.state.view === 'season') showSeasons(e.state.title, e.state.type, false);
        else if(e.state.view === 'movie') showMovieDetail(e.state.title, false);
        else if(e.state.view === 'player') playVideo(e.state.src, e.state.title, e.state.meta, false);
    } else {
        if(document.getElementById("episode-list").style.display === "block") closePlayer(false);
        else loadHome(false);
    }
});

function goBack() {
    if(document.getElementById("episode-list").style.display === "block") closePlayer();
    else if (history.state && history.state.view !== 'home') history.back();
    else loadHome(false);
}

function loadHome(push = true) {
    filterCategory('home', null, push); 
    
    renderList("series-list-div", seriesData, 'serie');
    renderList("movies-list-div", moviesData, 'movie');
    renderList("anime-list-div", animeData, 'anime');
    renderHistory();
}

function renderList(id, dataObj, type) {
    const div = document.getElementById(id);
    div.innerHTML = "";
    
    for(let i=0; i<6; i++) {
        const skel = document.createElement("div");
        skel.className = "skeleton-card";
        div.appendChild(skel);
    }

    setTimeout(() => {
        div.innerHTML = ""; 
        for(const key in dataObj) {
            div.appendChild(createCard(key, dataObj[key], type));
        }
    }, 500);
}

function createCard(title, data, type) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img src="${data.img}"><p class="card-title">${title}</p>`;
    card.onclick = () => openContent(title, type);
    return card;
}

function openContent(title, type) {
    if (type === 'movie') showMovieDetail(title);
    else showSeasons(title, type);
}

function renderHistory() {
    const div = document.getElementById("history-list-div");
    const sec = document.getElementById("history-section");
    div.innerHTML = "";
    
    const keys = Object.keys(watchHistory).sort((a,b) => new Date(watchHistory[b].lastWatched) - new Date(watchHistory[a].lastWatched));
    if(keys.length === 0) { sec.style.display = "none"; return; }
    sec.style.display = "block";

    const numSkeletons = Math.min(keys.length, 5);
    for(let i=0; i<numSkeletons; i++) {
        const skel = document.createElement("div");
        skel.className = "skeleton-card";
        div.appendChild(skel);
    }

    setTimeout(() => {
        div.innerHTML = "";
        keys.forEach(key => {
            const h = watchHistory[key];
            h.seriesKey = h.seriesKey || key; 

            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `<img src="${h.img}"><p class="card-title">${key}</p><p class="card-info">${h.type === 'movie' ? 'Riprendi' : 'S'+h.season+':E'+h.episode}</p>`;
            card.onclick = () => {
                let src = "";
                if(h.type === 'movie') { if(moviesData[key]) src = moviesData[key].src; } 
                else {
                    const db = h.type === 'anime' ? animeData : seriesData;
                    if(db[key] && db[key].seasons[h.season]) {
                        const ep = db[key].seasons[h.season].find(x => x.episode == h.episode);
                        if(ep) src = ep.src;
                    }
                }
                if(src) playVideo(src, h.fullTitle, h);
                else openContent(key, h.type);
            };
            div.appendChild(card);
        });
    }, 500);
}

function addToHistory(title, type, meta) {
    if(!currentUser) return; 

    let mainKey = meta.seriesKey || title; 
    watchHistory[mainKey] = {
        type: type,
        lastWatched: new Date().toISOString(),
        season: meta.season,
        episode: meta.episode,
        img: meta.img,
        fullTitle: meta.fullTitle || title,
        seriesKey: mainKey
    };
    
    localStorage.setItem('nanoFlixHistory_' + currentUser, JSON.stringify(watchHistory));
}

function avviaTrailer(containerId, videoId, imgFallback, buttonId) {
    const container = document.getElementById(containerId);
    
    container.style.backgroundImage = `linear-gradient(to top, #141414, transparent), url('${imgFallback}')`;
    
    const existing = container.querySelector('.yt-trailer-container');
    if(existing) existing.remove();

    if(ytTrailerPlayer) {
        ytTrailerPlayer.destroy();
        ytTrailerPlayer = null;
    }

    const fsBtn = document.getElementById(buttonId);
    if(fsBtn) fsBtn.style.display = (isYtApiReady && videoId) ? "block" : "none";

    if (isYtApiReady && videoId) {
        const ytDiv = document.createElement("div");
        ytDiv.className = "yt-trailer-container";
        ytDiv.innerHTML = `<div id="yt-trailer-iframe"></div>`;
        container.appendChild(ytDiv);

        const progressBar = document.getElementById('trailer-progress-container');
        if (progressBar) {
            progressBar.style.display = 'none'; 
            container.appendChild(progressBar); 
        }

        ytTrailerPlayer = new YT.Player('yt-trailer-iframe', {
            videoId: videoId,
            playerVars: { 
                'autoplay': 1, 'controls': 0, 'mute': 1, 'loop': 1, 
                'playlist': videoId, 'modestbranding': 1, 'rel': 0, 'showinfo': 0 
            },
            events: {
                'onReady': function(event) {
                    event.target.playVideo();
                    event.target.mute(); 
                },
                'onStateChange': onTrailerStateChange
            }
        });
    }
}

function openTrailerFullscreen() {
    const iframe = document.getElementById('yt-trailer-iframe');
    if (iframe) {
        const container = iframe.closest('.details-hero'); 
        
        if (container) {
            if (container.requestFullscreen) container.requestFullscreen();
            else if (container.webkitRequestFullscreen) container.webkitRequestFullscreen();
            else if (container.msRequestFullscreen) container.msRequestFullscreen();
        }
        
        if(ytTrailerPlayer) ytTrailerPlayer.unMute();
    }
}

function toggleTrailerPlay() {
    if (ytTrailerPlayer && typeof ytTrailerPlayer.getPlayerState === 'function') {
        const state = ytTrailerPlayer.getPlayerState();
        if (state === YT.PlayerState.PLAYING) {
            ytTrailerPlayer.pauseVideo();
        } else {
            ytTrailerPlayer.playVideo();
        }
    }
}

function showSeasons(title, type, push = true) {
    currentSerieTitle = title;
    if(push) history.pushState({view:'season', title:title, type:type}, null, "");
    hideViews();
    document.getElementById("season-list").style.display = "block";
    
    const db = type === 'anime' ? animeData : seriesData;
    const data = db[title];
    
    if(data) {
        avviaTrailer("season-hero", data.trailer, data.img, "season-fs-btn");
        document.getElementById("season-title").textContent = title;
        document.getElementById("season-desc").textContent = data.desc || "Nessuna descrizione.";
    }

    const sel = document.getElementById("season-selector");
    sel.innerHTML = "";
    const seasons = Object.keys(data.seasons);
    seasons.forEach(s => {
        const opt = document.createElement("option");
        opt.value = s; opt.textContent = "Stagione " + s;
        sel.appendChild(opt);
    });

    if (currentPlayingMeta && currentPlayingMeta.seriesKey === title && currentPlayingMeta.season) {
        sel.value = currentPlayingMeta.season;
    }

    changeSeason();
}

function changeSeason() {
    const s = document.getElementById("season-selector").value;
    const type = animeData[currentSerieTitle] ? 'anime' : 'serie';
    const db = type === 'anime' ? animeData : seriesData;
    const eps = db[currentSerieTitle].seasons[s];
    
    const ul = document.getElementById("seasons-ul");
    ul.innerHTML = "";
    eps.forEach(ep => {
        const li = document.createElement("li");
        li.innerHTML = `<span>${ep.episode}. ${ep.title}</span> <span>▶</span>`;
        li.onclick = () => playVideo(ep.src, ep.title, {type:type, season:s, episode:ep.episode, img:db[currentSerieTitle].img, fullTitle:ep.title, seriesKey: currentSerieTitle});
        ul.appendChild(li);
    });
}

function showMovieDetail(title, push = true) {
    if(push) history.pushState({view:'movie', title:title}, null, "");
    hideViews();
    document.getElementById("movie-detail-view").style.display = "block";

    const data = moviesData[title];
    if(data) {
        avviaTrailer("movie-hero", data.trailer, data.img, "movie-fs-btn");
        document.getElementById("movie-title").textContent = title;
        document.getElementById("movie-desc").textContent = data.desc || "Nessuna descrizione.";
        
        document.getElementById("movie-play-btn").onclick = function() {
            playVideo(data.src, title, {type:'movie', img:data.img, seriesKey: title});
        };
    }
}

function playVideo(src, title, meta, push = true) {
    clearInterval(heroInterval); 
    if(ytTrailerPlayer) { ytTrailerPlayer.destroy(); ytTrailerPlayer = null; }

    currentPlayingMeta = meta; 
    addToHistory(title, meta.type, meta);
    if(push) history.pushState({view:'player', src:src, title:title, meta:meta}, null, "");
    
    const player = document.getElementById("episode-list");
    player.style.display = "block";
    document.getElementById("episode-title").textContent = title;
    document.getElementById("episodes-container").innerHTML = `<iframe src="${src}" allowfullscreen></iframe>`;

    setupNextButton(meta);
}

function setupNextButton(meta) {
    const nextBtn = document.getElementById("next-ep-btn");
    
    if (meta.type === 'movie' || !meta.seriesKey) { 
        nextBtn.style.display = 'none'; 
        return; 
    }

    const db = meta.type === 'anime' ? animeData : seriesData;
    const data = db[meta.seriesKey];
    if (!data || !data.seasons) { 
        nextBtn.style.display = 'none'; 
        return; 
    }

    const currentS = parseInt(meta.season);
    const currentE = parseInt(meta.episode);
    const seasonEps = data.seasons[currentS];

    let nextEpIndex = seasonEps.findIndex(e => e.episode === currentE) + 1;

    if (nextEpIndex < seasonEps.length) {
        nextBtn.style.display = "block";
        nextBtn.textContent = "Prossimo Episodio ⏭";
        nextBtn.onclick = () => {
            const nextEp = seasonEps[nextEpIndex];
            playVideo(nextEp.src, nextEp.title, {
                ...meta,
                episode: nextEp.episode,
                fullTitle: nextEp.title
            });
        };
    } else if (data.seasons[currentS + 1]) {
        nextBtn.style.display = "block";
        nextBtn.textContent = "Prossima Stagione ⏭";
        nextBtn.onclick = () => {
            const nextEp = data.seasons[currentS + 1][0];
            playVideo(nextEp.src, nextEp.title, {
                ...meta,
                season: currentS + 1,
                episode: nextEp.episode,
                fullTitle: nextEp.title
            });
        };
    } else {
        nextBtn.style.display = "none";
    }
}

function closePlayer(back = true) {
    document.getElementById("episode-list").style.display = "none";
    document.getElementById("episodes-container").innerHTML = "";
    
    if (currentPlayingMeta && currentPlayingMeta.type !== 'movie' && currentSerieTitle === currentPlayingMeta.seriesKey) {
        const sel = document.getElementById("season-selector");
        if (sel && currentPlayingMeta.season) {
            sel.value = currentPlayingMeta.season;
            changeSeason(); 
        }
    }

    if(back) history.back();
}

function hideViews() {
    if(ytTrailerPlayer) { ytTrailerPlayer.destroy(); ytTrailerPlayer = null; }
    
    document.getElementById("hero-section").style.display = "none";
    document.querySelectorAll(".view").forEach(v => v.style.display = "none");
    document.getElementById("episode-list").style.display = "none";
}

function filterContent() {
    const q = document.getElementById("search-bar").value.toLowerCase();
    document.querySelectorAll(".card").forEach(c => {
        c.style.display = c.innerText.toLowerCase().includes(q) ? "block" : "none";
    });
}

// --- BARRA DI PROGRESSO E CONTROLLI TRAILER ---
let trailerProgressInterval;
let isScrubbing = false;

function updateProgressBar() {
    if (ytTrailerPlayer && ytTrailerPlayer.getCurrentTime && !isScrubbing) {
        const currentTime = ytTrailerPlayer.getCurrentTime();
        const duration = ytTrailerPlayer.getDuration();
        
        if (duration > 0) {
            const percentage = (currentTime / duration) * 100;
            document.getElementById('trailer-progress-filled').style.width = `${percentage}%`;
            document.getElementById('trailer-progress-handle').style.left = `${percentage}%`;
        }
    }
}

function seekTrailer(event) {
    if (!ytTrailerPlayer || !ytTrailerPlayer.getDuration) return;
    
    const container = document.getElementById('trailer-progress-bar');
    const rect = container.getBoundingClientRect();
    
    const offsetX = event.clientX || (event.touches && event.touches.length > 0 ? event.touches[0].clientX : 0);
    
    let pos = (offsetX - rect.left) / rect.width;
    pos = Math.max(0, Math.min(1, pos)); 
    
    const duration = ytTrailerPlayer.getDuration();
    const newTime = pos * duration;
    
    ytTrailerPlayer.seekTo(newTime, true);
    
    document.getElementById('trailer-progress-filled').style.width = `${pos * 100}%`;
    document.getElementById('trailer-progress-handle').style.left = `${pos * 100}%`;
}

document.addEventListener('DOMContentLoaded', () => {
    const progressContainer = document.getElementById('trailer-progress-container');
    
    if (progressContainer) {
        progressContainer.addEventListener('mousedown', (e) => {
            isScrubbing = true;
            seekTrailer(e);
        });
        
        document.addEventListener('mousemove', (e) => {
            if (isScrubbing) seekTrailer(e);
        });
        
        document.addEventListener('mouseup', () => {
            isScrubbing = false;
        });
        
        progressContainer.addEventListener('touchstart', (e) => {
            isScrubbing = true;
            seekTrailer(e);
        }, { passive: false });
        
        document.addEventListener('touchmove', (e) => {
            if (isScrubbing) {
                e.preventDefault(); 
                seekTrailer(e);
            }
        }, { passive: false });
        
        document.addEventListener('touchend', () => {
            isScrubbing = false;
        });
    }
});

// --- LOGICA DI SCOMPARSA DELLA BARRA (AUTO-HIDE) ---
let hideControlsTimeout;

function wakeUpControls() {
    const container = document.getElementById('trailer-progress-container');
    
    if (container && container.style.display !== 'none') {
        container.classList.remove('fade-out');
        clearTimeout(hideControlsTimeout);
        
        if (ytTrailerPlayer && typeof ytTrailerPlayer.getPlayerState === 'function' && ytTrailerPlayer.getPlayerState() === YT.PlayerState.PLAYING) {
            hideControlsTimeout = setTimeout(() => {
                if (!isScrubbing) {
                    container.classList.add('fade-out');
                }
            }, 3000);
        }
    }
}

document.addEventListener('mousemove', wakeUpControls);
document.addEventListener('touchstart', wakeUpControls, { passive: true });
document.addEventListener('click', wakeUpControls);

// --- GESTIONE DEGLI STATI DEL TRAILER ---
function onTrailerStateChange(event) {
    const playBtn = document.getElementById('trailer-play-pause');
    const container = document.getElementById('trailer-progress-container');
    
    if (event.data == YT.PlayerState.PLAYING) {
        if(container) container.style.display = 'flex';
        if(playBtn) playBtn.textContent = '⏸';
        
        clearInterval(trailerProgressInterval);
        trailerProgressInterval = setInterval(updateProgressBar, 100); 
        
        wakeUpControls();
        
    } else if (event.data == YT.PlayerState.PAUSED || event.data == YT.PlayerState.ENDED) {
        if(playBtn) playBtn.textContent = '▶';
        clearInterval(trailerProgressInterval);
        
        if(container) container.classList.remove('fade-out');
        clearTimeout(hideControlsTimeout);
    }
}
