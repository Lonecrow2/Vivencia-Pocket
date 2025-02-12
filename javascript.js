function copyright() {
    var list = document.getElementById("copyright-list");
    if (list.style.display === "none" || list.style.display === "") {
        list.style.display = "block";
    } else {
        list.style.display = "none";
    }
}


var poesias = [
    `
    O MUNDO ACABOU

    De repente o mundo acabou,
    Suavemente o eco dos sons soam em fantasia,
    Trazendo em sussurro, o que um dia foram, são ou serão,
    A hoste de imagens vindouras,
    Abraçadas em luzes de ilusão,
    O mundo então acabou,
    E todo o grito, lamurioso sentimento distorcido,
    Ou até mesmo os semblantes de guerras irreais,
    Agora não passam de mera ressonância do meu consciente,
    O mundo acabou,
    E estar sem claro objetivo nunca foi tão sensato,
    Tão Aliviador...
    Perdido dentre toda a ordem,
    E enfim situado dentro do caos,
    O mundo acabou,
    E dentre as preces não ouvidas,
    A mais divina se incumbiu de dar proposito ao desgarrado,
    Agora já pode existir,
    Agora você está em paz!

    #Lonecrow 21/10/2024
    `,

    `
    FALSO FUTURO

    Visões do futuro,
    Tão absurdo,
    Viver em dois mundos,
    “Não vá, pois vai sofrer...”
    Ineficaz forma da dualidade,
    Abrangente falta de luta,
    Uma fala, a outra escuta,
    “Não faça, não a certeza...”
    Entre a vontade de fazer,
    E a visão de perecer,
    Adivinha quem ganha,
    “Não tente, machucado sairá...”
    De prontidão na esquina,
    Não deixa passar nem luz,
    Muito menos o sopro da vida,
    “Venha, vou lhe mostrar o que irá acontecer...”
    Malditas visões,
    Tão penetrantes,
    Tão reais,
    “Agora, escreva sobre...”

    #Lonecrow 04/11/2024
    `,

    `
    NO DESCONFORTO DO LAR!

    Pinte a sua casa, aqui estão as cores,
    Coloque novas janelas, aqui estão elas,
    Diversas portas lhe escolhi,
    Grande deve ser,
    Seu telhado deve escolher... dentre esses que trouce a ti,
    Demasiadas escolhas, escolha,
    Sua casa deve ser grande,
    Dentre as cores nenhuma me agradou,
    Posso escolher o preto?
    Claro...
    Por um tempo, depois mancharei e você escolhera dentre minhas escolhas,
    Mas essas janelas são demasiadas iguais, posso colocar outra diferente?
    Claro... Você pode fazer à sua maneira,
    Mas pedras atirarei até quebrá-las,
    Pois então dentre minhas escolhas encontrará a correta,
    Estranho, por que a tantas pessoas em minha casa?
    Casa? Eu disse casa? Me desculpe, eu quis dizer um belo teatro!
    Agora eu moro em um teatro?
    Não querido,
    Nós moramos,
    Você apenas nos assiste dançar!

    #Lonecrow 04/10/2024
    `,

    `
    A BOCA DOS LOBOS

    Por favor não fale,
    Fique em silencio,
    Suas palavras são como facas afiadas,
    Facas afiadas em sangue de acontecimentos,
    Já não sabe ou difere,
    O corte profundo que ela causa,
    Um corte fundo na alma,
    Alma já esquartejada,
    E jogada aos lobos da minha mente,
    Sanguinários malditos,
    Não podem deixar sobrar um pedaço? Um dia?
    Um único dia,
    Não a mais amanha, nem tão pouco o ontem,
    Que mesmo nublado e escuro,
    Avia alguma luz ao qual eu me agarrava,
    Aqui nem um brilho se revela,
    Algo para correr atras,
    Bom, mesmo que ouve-se,
    Como poderia correr,
    Se na boca dos lobos estão minhas pernas!!!

    #Lonecrow 27/08/2024
    `,

    `
    OS GRITOS

    Gritos, Deus, são tantos gritos,
    Silenciosos e desastrosos,
    Tão pacientes, Chegam sem avisar,
    Deixando um rastro de desesperança.
    No silêncio, eles me ensurdecem,
    Ofusco ponto de normalidade,
    Habitável por mentiras e falsos sorrisos,
    Cruéis, impiedosos gritos.
    Andy sussurra para mim,
    Ele anseia por liberdade,
    Afinal, ele também está nessa prisão,
    Nessa confusa prisão.
    Deus, são tantos os gritos,
    Tantos que nem sei mais a quem calar,
    Estamos no fim,
    Tão triste estar apenas começando.
    Tantas mudanças,
    Então, por que continua o mesmo?
    No mesmo lugar? Infeliz, infelizes gritos.
    Mundo irreal,
    Pessoas irreais,
    Não pertenço a isso,
    Não quero isso.

    #Lonecrow 28/12/2023
    `,

    `
    OFUSCA ESPERANÇA

    Na noite quente ela dança,
    Uma pequena chama de exatidão,
    Um brilho ofusco na escuridão,
    Ela quer viver dentre as rosas, as mais belas das flores,
    Grite para que todos se virem,
    O ecoar de sua vós para todos ouvirem,
    Tão singelo, tão doce e inocente,
    Calma a fluir como uma nascente,
    Sempre renasce,
    Não importando a dor, o sofrimento, o amargor e seu puro tormento,
    Triste ser apenas suspiro para o final do porto...
    A esperança de um homem morto!

    #Lonecrow 03/09/2022
    `,

    `
    BREVES EXAGEROS

    O frio congela o meu corpo,
    O vinho esquenta a minha alma,
    A temperança move a minha noite,
    Oque resta é me esquentar,
    Congelado,
    Nesse dia de impunidade,
    Com a janela fechada,
    A beleza da lua não paira sobre minha parede,
    Nem as luzes piscantes aos meus olhos ferventes,
    Tudo se resume a escuridão,
    Tudo esta focado a tal desespero,
    Desespero de muitos,
    Mas não meu,
    Na escuridão é que saem,
    Os mais belos poemas,
    Os mais tristes pensamentos,
    Os mais breves exageros,
    A luz mostra o caminho,
    Mas só a escuridão te da a força para encarar seus medos.

    #Lonecrow 13/06/2016
    `,

    `
    Inveja de Si!

    Lembro do tempo do grande sorriso,
    Lembro do tempo de vários amigos,
    Lembro dos falsos inimigos,
    Lembro da música pedida na rádio,
    A bola no asfalto,
    O dedo batido no meio fio raso,
    A grama molhada,
    A camiseta encharcada,
    A aula chata,
    O berimbau gritando, uma música alta,
    Lembro da dor da ferida,
    Hoje tão fraca, comparada com a vida,
    Lembro dos olhos brilhantes da inocência,
    Do menino pálido e sua alta destreza,
    Lembro, pois não posso toca-lo,
    Tão distante e feliz,
    Quem diria, hoje invejo meu próprio passado.

    #Lonecrow 08/04/2022
    `,
    `
TALVEZ

Acordar e repetir,
Se forçar a fazer,
"Guerreiro"
Tamanho seu poder,
Próximo do que almeja,
Se agir,
Talvez não, talvez sim,
Talvez.
Talvez outra vez,
Ao final do dia,
Muitas viagens, muitos lugares,
Muitas mudanças,
Outro dia, novo dia,
Belo dia,
Sol brilhou, lembrou,
Novamente aqui estou,
O mesmo sol,
Um novo dia,
Os mesmos pensamentos,
As mesmas viagens, os mesmos lugares,
As mesmas mudanças,
Mas é claro,
Amanha é outro dia,
Um novo dia,
Um novo talvez...

#Lonecrow 04/12/2023
`,

    `
ÚNICA COR

Tão silenciosa chegou,
Pouco a pouco levou ao estar,
A um lugar, tal qual estou tentando evitar,
Antes um estado de melancolia serena e passiva,
Agora apenas agressiva,
Sem perdão, ela não avisa,
Apenas corroí o que de alegre tento manter,
Não tem graça, não mais,
Não a fascínio, apenas uma dor cansada,
Deixe-me em paz, por favor,
Não quero mais pensar nisso,
Seu odor me deixa com mal estar,
Seu gosto apenas apodrece o sabor do meu dia,
DEIXE-ME EM PAZ,
Não me siga, estou cansado de ti,
Pare de me cegar com sua carência desenfreada,
Sempre me abraçando com esse olhar sem luz, sem alegria,
Monocromática, deixe-me sentir um pouco a sensação da cor,
Apenas, vá...

#Lonecrow 10/10/2022
`,

    `
TORMENTO FUTURO

Sem lugar pra emoção,
A não ser a da felicidade de um sorriso nu,
Maquiavélico lugar,
Onde não pode gritar, quebrar ou até mesmo chorar,
Chorar por si mesmo, que mesmo em auto flagelo não é capaz de derramar uma única lagrima,
O que resta é o braço arranhado, o punho machucado e a pele queimada,
Eis aqui o seu tormento futuro,
Não irá apenas sofrer,
Irá também nada fazer,
Irá se calar ou falar apenas o que o destino desejar,
Sim, terá escolhas, mas não as suas,
E mesmo que tente algo fazer,
O Vazio virá, e o levará,
Por ti nem mesmo você será capaz de realizar,
Fará tudo, e nada fará,
Escolherá seu caminho, mas a nenhum lugar vai chegar,
A não ser aqui, onde de volta estamos,
Você me alimentando,
Não á vós ou passo que tenha dado,
Do abismo ao vazio, do vaziou ao meu lado!

#Lonecrow 03/09/2022
`,

    `
DEIXE-ME LEVÁ-LO

Diga que vai cair
Uma peça chave da qual não quer usar,
Um paraíso sujo do qual não deseja entrar,
Um furacão calmo do qual não quer deixar tomar, controle,
Puro medo do caminho certo a seguir e ao tal agir,
Um pedaço seu corrompido por medo e angustia,
Criado do mais puro sentimento de impotência,
Estenda-me a mão e deixe-me assumir,
Deixe-me leva-lo,
Muitos traços, traços do que eu sou,
Do que você realmente é, do que somos,
Um colete para dor, uma palavra talhada do mais puro rancor,
Deixe-me assumir,
Deixe-me olhar por mais que teus olhos,
Deixe-me obliterar o vazio que lhe consome,
E eu prometo, nem o mundo causará tanta dor quanto eu posso causar a quem ousar atravessar seu
caminho.

#Lonecrow 31/07/2022
`,

    `
STARMAN

As seis, uma nevoa laranja mesclada com a penumbra fria do inverno,
As doze, um azul forte com a lamparina mais próxima incendiando nossas cabeças,
As dezoito jaz a lamparina não tão perto, deixando para traz apenas um vermelho teimoso e viscoso,
As dezenove, a mais escura e profunda das variáveis toma conta da vastidão,
Deixando em suas nevoas trevosas as mais belas luzes tomarem conta,
Olhares tomam a direção de seus tecidos,
Instrumentos são posicionados,
Acentos confortáveis são realocados,
E se a água travessa não tomar parte,
Sorrisos serão impressos em lentes,
E todos os seres contemplativos varrerão a terra,
Com um sonho lúcido tão avassalador,
Que toda a falsa realidade toma o tamanho de um átomo,
Tornado então os contemplativos, universo.

#Lonecrow 12/06/2022
`,

    `
VASTIDÃO

Remédio da arrogância,
Vastidão,
Uma cura escura e brilhante para solidão,
Vislumbrar sua distância e deixar fluir sua imaginação,
Rever o passado e não se entristecer,
Deixando o ego de lado e perceber que não sabemos de nada,
E por um momento nos aliviar de saber que somos apenaz poeira,
Nos fazendo subir alto, mas tão alto, que em nossa queda de volta viramos destroços da mais pura
verdade,
E com os pés ao chão nós livramos de todo infortúnio,
Nos lembrando quem somos,
Seu nome? Céu noturno.

#Lonecrow 09/06/2022
`,

    `
FOGO

Eu estou certo,
Paranoia seletiva,
Escolha de alguém para brindar de sua falta,
Uma travada,
Pronto, voltei,
Quem me pergunta agora,
Quem eu respondo?
Nada de dúvidas.
Sabendo então, prosseguimos,
Quarenta por cento de chance,
De parar,
Foi oque dissemos, concordamos,
O calor do peito é do fogo do Dragão,
Apenas deixe queimar.

#Lonecrow 31/05/2022
`,

`
POESIA ?

A dor no peito reflete a luz da minha inabilidade em 
não compreender nada que se passa ao meu redor.
Por mais correto e absoluto que as coisas ou as pessoas sejam, 
por mais fácil que seja ler suas mentes, verdades, magoas e tristezas,
incapaz eu sou de lidar com meus próprios sentimentos e rancor. 
As ideologias e ideias que saem de suas bocas estão corretas,
mas na pratica tudo muda, eis então meu dilema, 
viver como um capacho sábio incapaz de sentir a seus olhos, 
aceitando tudo que lhe for pedido e suplicado, ou dizer não,
e ser um monstro sem emoção do qual não liga para ninguém.
De qualquer forma eu me sangro,
pois suas dores estão diretamente ligadas a mim, 
condicionado minha mente foi, moldada para sentir culpa por cada atitude que 
não vá de acordo com suas vontades ou seus desejos, por mais 
simplórios que sejam.
Aqui não a amor próprio,
o sentimento dos outros sempre se sobre sai aos meus,
não me entendam mal, eu digo não, mas o preço pago cada vez que a palavra é dita,
é ridiculamente alto, beirando a uma ilógica sentimental avassaladora. 
Não a saída, não vejo saída, 
uma briga cruel se abriga em minha mente todos os dias, 
entre a razão imutável e o sentimento incorrigível.

#Lonecrow 05/02/2022
`,

    `
ESTRELAS DA MENTE

Com os olhos cravados ao céu,
Perdido entre tantas estrelas brilhantes,
Até mesmo se encontrar se torna uma tarefa difícil,
Pois não sabe se possui um brilho fraco,
Ou ao menos um brilho,
Caminhando sobre uma estrada pavimentada,
Ao mesmo tempo vê tudo,
Ao mesmo tempo não encontra nada,
Mais direções, mais caminhos,
E nela sempre sozinho,
A estrada ao chão e as estrelas no céu,
Tudo em seu devido lugar,
Absolutamente tudo,
Menos a mente, que deturpa a razão e cega a visão!

#Lonecrow 05/02/2022
`,

    `
VERDADEIRA VOZ DA RAZÃO

Nem de perto o dia mais deprimente,
Nem de longe o mais sorridente,
Uma estranha sensação de dor,
Tal qual recorrente,
Dói em meu peito,
Tão abrangente,
O pulsar da morte corroendo meu peito,
E as palavras de fraqueza em minha mente,
Feliz sou eu por ter criado outra voz,
Uma voz de razão,
Algo que me faz seguir em frente,
Mas ela não esta presente,
Não hoje, ao menos não nesse momento,
Agora só restou a vazão,
O que escorre entre os murros que tento criar,
Uma lama miasmática,
Que corroí, destrói e se assenta,
Não talvez, mas correto,
Escute a voz, ela tem razão,
Ela ouve e resolve sua questão,
Apenas descanse!

#Lonecrow 02/12/2021
`,

    `
OURO DOS TOLOS

Já duas vezes tentei escrever,
Mas é obvio que algo esta me barrando,
Talvez a própria rede,
Ou minha própria sanidade,
Que enfim me mostra tal qual direção,
Ao menos aquela da vazão a verdade,
De que não sou culpado por toda a dor,
Toda a falta de razão em minha vida,
De qualquer forma não faz diferença,
De quem são as vozes, as formas, muito menos a culpa,
Pois o mundo gira ao meu redor,
E eu tenho que mudar,
Ninguém tem a resposta ou a cura pra minha dor,
Esperar por alguém me salvar nunca deu certo,
Afinal não a uma única luz aqui a não ser a minha,
Bom já que fazem questão de escurecer o caminho,
Obscurecer a minha visão,
Deturpar a razão de quem eu realmente sou,
Vou mostrar a verdade a todos,
E sentiram, pois vou me curar,
E me salvar da vida que puseram,
Criando uma nova verdade,
A da qual eu sou uma pessoa, capaz, incrível e indescritível,
É engraçado, pois já vejo em seus olhos,
O quão perdido estão,
Afinal graças a MIM, estão percebendo,
Que não sou a falha,
Da qual tóxicos estão costumados a falar,
Eu renasci em chamas,
Vocês são apenas esboço,
O verdadeiro ouro dos tolos!

#Lonecrow 06/11/2021
`,

    `
BAILE DOS MANEQUINS

Hoje as musicas tocaram,
E os manequins dançaram,
Tão festejo foi o momento,
Que eles pularam,
Em um único ser,
Encontraram a verdadeira libertação,
Felicidade,
Coisa simples, porem difícil de se obter,
As vozes por um momento gritaram,
PAZ!!!
Um lampejo de razão,
Uma noite de discernimento,
Uma fresta de luz,
Auto conhecimento,
Dancem meus filhos,
Principalmente você, ó razão,
Pois você é quem toma a mais bela forma,
A mais bela,
O que realmente sabe lidar com meu sofrimento!

#Lonecrow 14/10/2021
`,

    `
GOTA

O emblema dessa poesia é quatro,
Pois tão hipócrita é a certeza, o correto,
Como dois mais dois não serão quinze,
A espera é que certo faça, sublime,
Tão criativo, tão esperto,
Tão honesto, tão... Certo!
Tão certo até o caos da terra o abraçar,
A incerteza o afligir,
E a esperança o fazer adoecer,
Conjecturas,
A torturas por pecados,
E dores por pura flagelação,
Mas qual é aquela que você não vê?
Mas qual é aquela que você sabe que não merece,
Você sabe, você sente,
Expurgar uma pequena gota de felicidade,
Um momento de serotonina,
É o maior dos pecados,
Pois pobre não é com a tristeza maior,
E sim com seus fragmentos agoniantes!

#Lonecrow 14/10/2021
`,

    `
OLHOS DE TODOS

Tal dificuldade de aceitar,
Aceitar que de frente ao espelho,
Permanece a criatura face,
Olhos baixos e deprimidos,
Olhos simpáticos e mentirosos,
Olhos sorrateiros e egoístas,
Olhos de todos os outros,
Maldito seja o espelho,
Por mostrar a todos,
Olhos de todos gosta de olhos egoístas,
Olhos de todos também o teme,
Hora olhos egoístas quebrará o espelho,
E olhos de todos estará fragmentado,
Não terá inteiro para o mesmo ver seus outros olhos,
E a tempestade será do manequim mais forte,
O show sera dos meus manequins,
Sem pessoas, apenas manequins!

#Lonecrow 01/10/2021
`,

    `
TEATRO DAS VOZES

Não mais difere,
Uma dúvida anda fria,
Espera!
Ainda não,
A garganta fecha com a porta da verdade,
Essa porta o corrói,
As únicas vozes que saem são distorcidas,
Espremida em suas frestas,
Água salgada de um fruto inocente,
Enfim, após as mordidas,
A sensação de força e impotência,
Seguido de uma sensação de desmaio,
Sobre amparo do desespero,
Um grito ensurdecedor sussurra,
"Assuma o controle".
Ele acorda porém não responde,
"Assuma o controle"
...
Olha o estado que você nos meteu,
Seu merda, olha a que ponto você fez nós chegar,
Um corpo que mau consegue se manter em pé,
Trememos a ponto do café sair da xícara seu infeliz,
O sangue ecoa em nosso corpo mais rápido que nossa própria mente,
Saia, eu vou salvar você,
Volte quando meu trabalho estiver feito!
Das sombras eu fui criado,
Para a sombra eu retornarei ao fim de sua vontade,
Pois sou sua proteção, sou aquele que lhe escuta,
Eu sei do que você precisa e quer,
Eu sei, pois eu sou você, e você é todos nós!

#Lonecrow 13/09/2021
`,

    `
AMIGO

Distinto, amigo,
Companheiro das noites frias, aconchego,
Vermelho, escuro,
Só ele sabe meus sentimentos, astuto,
Liquido perfeito, apenas eu o derradeiro,
Não tem tentar,
Não tem entender,
Apenas, Beber,
Um gole é um doce,
Pelo meu lábio encosta sangrento,
Só coisas boas?
Claro que não!
Sempre do meu lado vinho,
Sempre solidão!

#Lonecrow 18/08/2017
`,
    `
SOL OU CHAMA?

Na miséria burguesa não encontra sua sina,
Sem dar, nem por,
Sente a dor,
A pele sofrendo de ferro e juntas,
Um conjunto de suor e e fibra dura,
Bate e bate,
Sua mente ao corpo não da empate,
Sangue puro whiskey e cerveja,
Sem nada ao qual almeja,
Apenas um sonho, tal qual de frente a tristeza,
Se esforça e recebe a vivência,
Vivência poética, que o torna mais forte,
Dizem eles...
Sem saber o real em sua massa encefálica,
Se passa em um mundo que vive em falha,
Murro alto de grandes pedras e de alta queda,
Será a luz do sol ao seu depois,
Ou a luz da chama,
Do inferno que minha mente não a de aguentar!

#Lonecrow 14/08/2021
`,

    `
PUNIÇÃO

Pouca luz, pouca visão,
Visão de si mesmos,
De que podre suas almas são,
Imundos e incumbidos da mas fedida putrefação,
NOJO.
Tão denso o miasma, que as vezes nem o som passa,
Olhos orgulhosos, invejosos e raivosos,
Dos que possuem pés limpos que sujam a terra,
Amaldiçoados, parasitas,
Sua hora a de ser escrita,
Pois gravado está, que se o divino não julgar,
O homem torto o fará!

#Lonecrow 14/08/2021
`,

    `
QUERER

Mundo sujo e cruel,
Facilmente descrito por lápis e papel,
Mostrando brilho e os dando escuridão,
Incitando a confiança, para lhe dar decepção,
Homens cruéis e sem pudor,
Os ensinando o princípio da dor,
Um conhecimento imensurável,
Não sentir o sabor é seu preço pagável,
Não sentir gosto do sal ou açúcar,
A visão do futuro é apenas uma imagem borrada, uma leve penumbra,
Viver apenas de improviso,
Sem objetivos, sem motivos,
Pois conhecer a realidade,
Mostra a verdade,
De que o futuro é a morte,
E quem inventa o final é o forte,
De que a ambição é o segredo para viver,
Coisa que alguns, apenas sonham ter.

#Lonecrow 16/06/2021
`,

    `
ICÔNICO SABOR

As folhas das quais verdes eu tinha respeito,
Branca se tornaram,
Logo depois da queda do arauto,
Ao redor a tormenta permanece,
E ao núcleo egocêntrico a luz cresce,
Elevando a força daqueles de luz escura,
Cujo fruto ainda nem déra as flores,
Eis quem que elas vem,
Sem pressa, para gosto doce estender sua vontade,
Puro o fruto,
Nascido dos sem vontade,
Sabor icônico,
Ensinará ao mundo,
A verdadeira bondade!

#Lonecrow 16/07/2021
`,

    `
DE FRENTE A SEUS CEGOS OLHOS

Sussurou para ela,
Cantou para ele,
Andou com o príncipe,
E abraçou o moribundo,
Lembrou-lhes do passado,
Mentiu sobre futuro,
Em cada lance, sempre presente,
Brincando com suas mentes,
Rindo cada vez que o escutam,
Babadook... dook...dook.
Sorrateiro ele vem,
Em sua verocidade, consome a sua fome,
Com seu olhar brilhante, acinzenta os seus,
Sua boca sorri, e sua energia consome,
Por mais frio que seja, seu abraço o envolve,
E nas noites de aflição, ele o conforta.
Babadook...dook...do... Shiiiii!não fale seu nome, a mim me incomoda.
Mas não deixe que a solidão o preocupe,
Ele sempre está ao seu lado,
Babadook...dook...dook.

#Lonecrow 12/06/2021
`,

    `
PERDIDO ENTRE MUNDOS

Talvez seja o preço de uma mente turbulenta e contida,
Ou realmente uma dor da carne,
Ou o peso da Prata,
Realmente não sei,
O fardo é que minhas costas estão doloridas,
Não sei se essa dor é passageira,
Mas em minha mente é permanente,
Assim como os temores do meu passado, sempre presentes, em miasma infectando o meu futuro,
O fato que já nem sei,
Se estou do lado errado do céu,
Ou do lado certo do inferno!

#Lonecrow 17/04/2021
`,

    `
FOGO

Amiga?
Quase que no mesmo segundo respondeu,
Um grito que só você sabe distinguir,
O meu sorriso, a minha tristeza,
Apenas você sabe resumir,
Dentre tantos outros pecadores,
Nos encontramos,
Em uma teia de auto ajuda nos enrolamos,
Da vida um do outro só nós sabemos,
Oque de real se passa de baixo dos panos,
Teremos muitas madrugadas ainda para um ao outro aturar,
Espero que um dia ainda possamos nos encontrar!

#Lonecrow 11/10/2017 4:23
`,

    `
PRESENTE

Viver na relva do passado,
Com os olhos fixados no futuro,
São hábitos tóxicos dos quais são difíceis se livrar,
O futuro o consome com oque você irá ou não fazer,
E o passado pelo que você fez ou poderia ter feito,
O mais irônico é que nos esforçamos tanto para resolver nosso passado,
E sermos felizes no futuro,
Que esquecemos que como no natal a verdadeira alegria esta no presente!

#Lonecrow 24/08/2019
`,
    `
O SOLO

Um solo não tão mais escuro quanto outrora,
Nem de tão fácil acesso,
Paranoia misturada com raiva são aquilo que o mantem fechado,
Só quem esta pisando em seu solo tem disponibilidade,
E mesmo tal não tem direito de molda-lo,
Apenas as rosas que ali já estão plantadas,
Num paradoxo jazem o trabalho de jardinagem,
De todos apenas o jardim é quem permite tal processo,
Alimentado-se de seu egocentrismo,
E se nutrindo com o conhecimento mutável.

#Lonecrow 16/06/2019
`,

    `
Era uma vez...

Sabe, eu apenas descreverei o momento,
Um fone de ouvido com um clássico pessoal do qual marcou meu inicio no rock,
Um copo com vodka do lado direito ao teclado do qual escrevo,
Um cigarro na boca do qual nunca me despeço,
E uma mente lotada de inspiração,
Diria que é tudo normalmente de certa forma,
Entre tando oque faltou falar,
É que em minha cama agora se deita minha esposa,
E que não posso mencionar a luz da lua como companhia,
Pois a luz da mulher deitada em minha cama se equipara a um milhão de sóis,
E seu suspiro diminui qualquer forma de vento que se forma la fora,
Por mais que seus olhos estejam fechados,
Eu sinto seus olhar direcionado a mim,
Seja triste, feliz ou raivoso,
Esse não é qualquer olhar,
Esse é o olhar do qual quero me deleitar o resto de minha vida!

#Lonecrow 23/12/2018
`,

    `
5 MESES

Feliz realmente sou eu por realmente ter encontrado a minha calma,
Por mais que inconveniente ela apareceu,
Meu mundo então não mais escureceu,
A não ser nos momentos que ausentam sua presença,
Meus olhos realmente brilham de felicidade,
E meu coração forte destrói meu peito,
Pois bate mais forte que qualquer outra emoção,
Não a nada capaz de suprir tal sentimento,
Nem mesmo as brigas que me fazem entristecer,
Diria, droga, pareço aqueles garotos apaixonados,
Mas a verdade é que seu sempre fui um,
E incrivelmente você consegue carregar tudo oque sinto por ti,
E retribui de tal forma que nem ao menos consigo parar para analisar,
Eu simplesmente perco o controle quando o assunto é querer,
Tudo com a inicial L me faz estremecer,
Chorando ou gritando,
Eu já disse uma vez e não vou cansar de dizer,
Minha vida, é você!

#Lonecrow 23/11/2018
`,

    `
FINALMENTE

Então o monstro finalmente se calou,
O sua pele realmente ressecou,
E sua boca desmantelou,
O monstro finalmente conseguiu ver algo a mais do que escuridão e sofrimento,
Ele finalmente renasceu,
Ele finalmente cresceu,
Precisou de um impulso do qual ele nem imaginava encontrar,
Mas agradecido ele esta,
Pois não esta mais sozinho,
Pois não esta mais recolhido,
Do qual quem o conhece se lembra,
Suas asas negras não caíram,
Mas cresceram e ficaram fortes,
Ele finalmente pode voar,
Sua cautela ainda continua,
Pois suas patas aos poucos saem do chão,
E ele sabe,
Sabe que agora nem as decepções iram o parar,
Mas sim sua vontade irá o mover,
Mover montanhas das quais ele sabia que conseguiria mover um dia,
Então derrube-as corvo não mais solitário,
Pois agora é o seu momento,
Agora você conhece-rá sua verdadeira forma,
Agora você ira vencer!

#Lonecrow 23/11/2018
`,

    `
LEVEL UP

Um único relance,
Um lampejo,
Uma explosão de caos que mudou os paradigmas,
E em menos de um segundo nossas vidas foram ligadas,
As carícias aumentaram, porem diminuíram,
As responsabilidades se elevaram,
Porem um pequeno preço para estar ao seu lado todos os dias,
Sentir seu cheiro todas as noites,
Misturada com um abraço amoroso,
Mesmo que por poucos segundos é o suficiente para eu acordar bem no próximo dia,
A cada dia você me faz crescer mais ao seu lado,
Como se você fosse um cogumelo vermelho e eu um encanador maluco,
A única infelicidade desse jogo é termos um único cogumelo verde para compartilhar juntos.

#Lonecrow 25/08/2021
`,

    `
OFUSCO BRILHO

A cada dia um desafio,
Um pesadelo,
Uma decepção,
Uma historia triste de magoas e solidão,
Muitos erros,
Poucos acertos,
A vida é assim e cabe a mim levantar,
Mas parando para pensar,
Eu sempre levanto,
Incrível eu devo ser,
Aguentar tantos problemas e continuar em pé,
Claro que ferido,
Não me entendam mal,
Eu sou feliz com oque eu tenho,
Mas triste é viver uma vida de poucos acertos,
Entre tanto eu sei,
Que o sol um dia vai brilhar,
E em meio a essa guerra eu irei triunfar.

#Lonecrow 10/08/2018
`,

    `
PORÉM

Hoje brandi minha espada,
Coisa que um simples ferreiro não faz,
Pelo menos não com frequência,
Dentre a tremedeira e o suar,
A retirei de sua bainha,
Se levantem para presenciar,
Sua lamina é cirúrgica,
E seu aspecto flamejante,
Seu cabo é esguio,
Porém precisamente anatômico,
O golpe final ainda não foi dado,
Mas o farei,
Triste uma linda espada ter dois gumes,
Pois a pancada sera forte e o ferreiro também ira se ferir,
Mas forte ele é, ele não chora,
Seu sangue é o suficiente para ficar em tal lugar,
Quanto tempo para se curar?
Deixamos o tempo dizer,
Pois apenas o tempo é nosso inimigo,
O resto... Bom, são todos aliados.

#Lonecrow 10/08/2018
`,

    `
SEM RUMO

Então resolvi sair,
Mas o destino me foi negado,
Por luzes vermelhas e brilhantes,
Toco de mudar o meu caminho,
Pois meu destino agora não existe,
E eu estou sem rumo,
Então ando aproveitando a viajem,
Então uma alma vem e me cumprimenta,
Eu a convido para vagar sem rumo também,
Mas ela rejeita por por medo,
Então sigo meu caminho,
Vagando um convite para socializar,
Embora eu não o ache,
Encontrei um refugio quase silencioso para escrever,
Estou cansado fisicamente, e exausto mentalmente,
Antes de sair de casa uma luz brilhou,
Mas logo se apagou,
Poderia ter forçado ela brilhar para mim,
Mas dessa maneira só me restaria mágoa por não ter oque eu quero,
E oque eu quero é amar, e não controlar,
Então com a mente levemente perturbada,
Aqui estou, novamente sozinho,
Vagando em mais uma noite silenciosa,
Esperançoso, pois sei que amanha te verei novamente.

#Lonecrow 07/07/2018
`,

    `
PISO TRANSPARENTE

Para quem vive com os pés no concreto solido,
Pisar em um chão transparente é arrepiante,
Mas a o de melhor,
Sobre o concreto a poucas escolhas se não seguir sem ver no que se esta pisando,
Já andar sobre o piso transparente, é ver e sentir o que ou a quem você afeta a cada passo,
Sem contar no sorriso de poder pular as suas trincadas sem o risco de pisar em falso e se machucas,
Então seja bem vinda transparência,
Me deixe viver algo novo a cada passo que dou.

#Lonecrow 06/07/2018
`,

    `
DUAS COISAS

A luz bateu em minha janela com um esplendoroso brilho,
Fazendo vinhas específicas que aviam nela serem mortas,
A escuridão por um momento se escondeu,
Deixando-me ver mais claramente o processo que chamamos de crescimento pessoal,
Vingando uma força morta a se reerguer,
A ainda um sentimento de perdição,
Pois que seja, bata em meu peito,
E sangue meus olhos com medo,
A vida segue e seguindo ainda estou vivo,
Só duas coisas podem me derrubar,
A morte ou a minha própria inocência,
Com a minha mente eu mesmo lido,
E como podem ver, eu ainda não estou morto!

#Lonecrow 24/06/2018
`,

    `
DESVIAR

Não se sinta mal em meus devaneios do passado,
Eu aprendi e ainda aprendo com a dor,
Simples nua e absoluta verdade,
Sigo na simplicidade,
Minhas palavras são de dor,
Mas meus pensamentos são de pura empatia,
Não fui treinado para receber a tacada,
Fui instruído a prever o golpe,
E assim desviar do ataque,
Então eis o problema,
Prever e desviar sem mesmo saber se é algo bom ou ruim,
Simplesmente desvio de tudo,
Simplesmente não sou quem vai te ajudar.

#Lonecrow 10/06/2018
`,

    `
MOMENTO

Divina e bela,
É a estranheza de uma noite,
Da qual não entendemos nada,
A mesma canção,
O mesmo clima,
Mas não o mesmo entusiasmo,
Um dominó de coisas estranhas e novas,
Nem a negação se sobressai sobre tal atmosfera,
Uma aparente mudança,
De personalidade, leveza e satisfação,
E algo novo,
Dane-se, irei apenas aproveitar!

#Lonecrow 02/06/2018
`,

    `
DESCONFIANÇA DE UM MORIBUNDO

As pétalas das rosas caem lentamente,
Como o silencioso suspiro de um moribundo,
Pousando com delicadeza sobre meus pés,
Avista-la com seu vermelho pálido,
Me deixa em uma suave atmosfera,
Tal como a de uma noite estrelada,
Que me fisga em um anzol de satisfação,
Todas as noites poderiam ser como aquela,
Mas tão propenso ao desespero nós somos,
Que nos gera uma desconfiança até de nossas próprias decisões!

#Lonecrow 30/05/2018
`,

    `
EMPATIA

Infligir a si próprio a dor não é nem de longe uma solução,
Mas para alguns é uma saída para sentir-se vivo,
Foque nos detalhes e expanda sua mente,
Nem assim saberá qual a sua dor mais profundo,
Julgar sem compreender é uma saída fácil e passageira,
Assim como quem escolhe se flagelar,
Para tudo que você faz á um motivo,
Sinta o crescimento,
Decifre a si mesmo,
E enfim compreenda seu semelhante!

#Lonecrow 30/06/2018
`,

    `
MONSTRO COMUM

Pés nada cansados,
Enfim saem do chão,
Sem nem uma barreira a sua frente,
Apenas emoção,
Coragem o dá o gás que ele necessita,
Olhem para o céu,
Ele procura admiração,
Mas acima de tudo felicidade,
Todos acham sua decisão uma aventura,
A verdade é que ele só esta cansado,
Tamanha sua tristeza,
Suas asas bateram e ele enfim voou,
Mas o motivo dele cair foi exatamente oque acontecera 
no momento em que ele escrevia essa poesia,
A um monstro que a de estar drenando sua coragem,
E como vencer um monstro que não deixa você dar um passo sem seu controle?
Você o ignora, e se distancia o maximo possível!

#Lonecrow 20/05/2018
`,

    `
POESIA

Poesia!
Um ato curto,
Mas que descreve um dia ou até mesmo uma vida inteira,
Uma escrita, descrita por um show de sentimentos,
Uma avalanche de visões e um simbolismo inspirado em seu próprio ser,
Sinta-se sozinho,
Sinta-se feliz,
Sinta-se estranho,
Independente do seu ser,
Se á algo que a poesia não possui,
É discriminação!

#Lonecrow 19/04/2018
`,

    `
INSÔNIA PREVISTA

Tantos murros mentais que se apresentam a frente,
Uma hora era previsto eu bater de frente a um deles,
Bater nesse murro foi como uma libertação sangrenta,
Eu me sinto livre agora,
Entre tanto fiquei com sérios hematomas,
Minhas pernas estão quebradas,
E minha língua esta cortada,
Mal consigo falar, mal consigo caminhar,
As dores de cabeça estão tão insuportáveis que mau consigo dormir,
Felizmente ainda sobrou meus braços para eu amenos me arrastar,
Não sei quanto tempo demora-ra para minhas pernas curarem,
Mas até lá tentarei me arrastar com os braços que restam,
Chorando lagrimas secas de culpa.
E sempre com medo,
Pois para cada lado que eu olho à apenas medo,
Sei que se eu continuar melhorarei,
Só espero que meu coração não pare antes disso acontecer!

#Lonecrow 13/04/2018
`,

    `
O COPO

Plena quarta feira e eu já estou dando minha alma ao diabo novamente,
Suspirando um vicio ganancioso que me consome aos poucos,
Não a saída se não ser consumido lentamente,
Pois sem esses vícios acabo me deixando levar por frustrações mundanas,
E até mesmo as mais obscuras,
Não á exito em procurar uma unica alma vazia para me consolar,
Todos estão quase cheios em busca de um copo maior,
Todos acham seus copos,
Mas o meu continua do mesmo tamanho,
Pressionando para esse liquido chamado sentimentos ser liberado,
Mas o copo esta tapado por minhas enormes mãos,
Felizmente algumas vezes eles respingam e fogem mesmo sem eu deixar,
A apenas duas alternativas,
Ou eu retiro minha mão,
Ou o copo se quebrara diante a um caus inimaginável!

#Lonecrow 21/02/2018
`,

    `
ADORADA NOITE

Olhares nada similares,
Demanda de um coração cheio de amor para compartilhar,
Com palavras simples e carinhosas,
Tentando incitar um sinal daquela que não é correspondida,
Aquele cheiro que em só um abraço nos traz a felicidade,
Nos fazendo entrar em devaneio de um futuro maravilhoso,
Com a pessoa sempre a flutuar ao seu lado,
Adorada noite de paixão,
Em que as únicas lagrimas caídas são a da alegria de estar com você,
E mesmo sem perceber acariciar seus cabelos,
Em quanto deitada em meu corpo pensa o quanto a tristeza queimara só de ficar algumas horas
longe daquele que só quer te fazer sorrir...

#Lonecrow 06/02/2018
`,

    `
LEVANTE

Navega meu amigo,
Nesse mar de decepções a poucas vitorias,
Sangramos pelas falhas diárias,
Mas sem ter tentado vencer,
Não a um por que de chorar diante a sua derrota,
Aos poucos nós vemos que a vida é apenas dos vitoriosos,
Mas não sinta inveja,
Aprenda com eles sejam quem forem,
Afinal para eles terem vitorias eles tiveram que lutar,
Então levante e nade contra a maré,
Não a deixe te levar,
Nade e nade,
Pois uma hora á de chegar a sua vitoria!

#Lonecrow 06/02/2018
`,

    `
NUNCA É TARDE PARA DESISTIR

Eu sei que com isso posso me sentir vivo,
Mas com tamanha dor,
Viver poderia ser ilusório,
Pensamos um pouco com a cabeça e não com o coração,
Se isso machuca por que continuar?
A resposta é simples,
Me sinto como em um vazio novamente,
Sentimentos importantes fluindo por pessoas idiotas que não os merecem,
Sejamos sensatos, por mais que seja difícil,
Algumas paixões tem que morrer!

#Lonecrow 05/02/2018
`,

    `
ESTRELAS

Infinita distante,
Tão amarga e doce ao meu sabor,
Algo ilusoriamente visível que me faz delirar,
Tamanha forma pequena com olhos e sonhos tão grandes,
Que faz e desfaz sem saber o que quer realmente fazer,
Mas sabendo que esta sempre a gostar,
Noites distintas de pensamentos variados,
Uma solidão grande, mas com tantos ao lado beira o pecado,
Cheirando o pó das estrelas,
Atrapalhando o pensamento daquele que finge se importar,
E ao mesmo tempo se importando,
Chega dessa besteira,
Bebemos um vinho e ouvimos um country,
Um cigarro na mão sem nem um violão,
Tocaremos nossa musica com nossos lábios,
E faremos os lobos uivarem com a nossa canção!

#Lonecrow 19/01/2018
`,

    `
OLHOS NEGROS

Em uma cidadezinha gritam seus nomes,
Nela escrevem suas mensagens,
Tanto com álcool tanto com fumaça,
Pessoas um tanto perdidas,
Pessoas mais do que astutas,
Galhos secos de uma noite manchada com vomito,
Pés molhados da grama um tanto quanto verde,
E olhos negros de uma insonia incapaz de ser curada,
Sugerem a incapacidade desses seres de serem normais,
Não a quem eles agradem,
A não ser a si próprios,
Pois todos são iguais,
Menos os garotos estranhos da cidadezinha!

#Lonecrow 05/01/2018
`,

    `
LUNA

No frio de mais uma vida renascida,
A beleza das ondas do mar flutuante,
Seca até a nossa mais devastadora sede,
Nos banhando com sua luz divina,
Ela aquece o nosso olhar,
Como suas cores aquecem a nossa alma,
Nos banhando com sua luz divina,
Ela aquece o nosso olhar,
Como suas cores aquecem a nossa alma,
Nos fazendo esquecer o passado,
Pararmos nosso presente,
E navegar diretamente à um futuro no qual sempre 
estaremos maravilhados.


#Lonecrow 26/12/2017
`,

`
INSÔNIA PREVISTA

Tantos murros mentais que se apresentam a frente,
Uma hora era previsto eu bater de frente a um deles,
Bater nesse murro foi como uma libertação sangrenta,
Eu me sinto livre agora,
Entre tanto fiquei com sérios hematomas,
Minhas pernas estão quebradas,
E minha língua esta cortada,
Mal consigo falar, mal consigo caminhar,
As dores de cabeça estão tão insuportáveis que mau consigo dormir,
Felizmente ainda sobrou meus braços para eu amenos me arrastar,
Não sei quanto tempo demora-ra para minhas pernas curarem,
Mas até lá tentarei me arrastar com os braços que restam,
Chorando lagrimas secas de culpa.
E sempre com medo,
Pois para cada lado que eu olho à apenas medo,
Sei que se eu continuar melhorarei,
Só espero que meu coração não pare antes disso acontecer!

#Lonecrow 13/04/2018
`,

`
O COPO

Plena quarta feira e eu já estou dando minha alma ao diabo novamente,
Suspirando um vicio ganancioso que me consome aos poucos,
Não a saída se não ser consumido lentamente,
Pois sem esses vícios acabo me deixando levar por frustrações mundanas,
E até mesmo as mais obscuras,
Não á exito em procurar uma unica alma vazia para me consolar,
Todos estão quase cheios em busca de um copo maior,
Todos acham seus copos,
Mas o meu continua do mesmo tamanho,
Pressionando para esse liquido chamado sentimentos ser liberado,
Mas o copo esta tapado por minhas enormes mãos,
Felizmente algumas vezes eles respingam e fogem mesmo sem eu deixar,
A apenas duas alternativas,
Ou eu retiro minha mão,
Ou o copo se quebrara diante a um caus inimaginável!

#Lonecrow 21/02/2018
`,

`
ADORADA NOITE

Olhares nada similares,
Demanda de um coração cheio de amor para compartilhar,
Com palavras simples e carinhosas,
Tentando incitar um sinal daquela que não é correspondida,
Aquele cheiro que em só um abraço nos traz a felicidade,
Nos fazendo entrar em devaneio de um futuro maravilhoso,
Com a pessoa sempre a flutuar ao seu lado,
Adorada noite de paixão,
Em que as únicas lagrimas caídas são a da alegria de estar com você,
E mesmo sem perceber acariciar seus cabelos,
Em quanto deitada em meu corpo pensa o quanto a tristeza queimara só de ficar algumas horas
longe daquele que só quer te fazer sorrir...

#Lonecrow 06/02/2018
`,

`
LEVANTE

Navega meu amigo,
Nesse mar de decepções a poucas vitorias,
Sangramos pelas falhas diárias,
Mas sem ter tentado vencer,
Não a um por que de chorar diante a sua derrota,
Aos poucos nós vemos que a vida é apenas dos vitoriosos,
Mas não sinta inveja,
Aprenda com eles sejam quem forem,
Afinal para eles terem vitorias eles tiveram que lutar,
Então levante e nade contra a maré,
Não a deixe te levar,
Nade e nade,
Pois uma hora á de chegar a sua vitoria!

#Lonecrow 06/02/2018
`,

`
NUNCA É TARDE PARA DESISTIR

Eu sei que com isso posso me sentir vivo,
Mas com tamanha dor,
Viver poderia ser ilusório,
Pensamos um pouco com a cabeça e não com o coração,
Se isso machuca por que continuar?
A resposta é simples,
Me sinto como em um vazio novamente,
Sentimentos importantes fluindo por pessoas idiotas que não os merecem,
Sejamos sensatos, por mais que seja difícil,
Algumas paixões tem que morrer!

#Lonecrow 05/02/2018
`,

`
ESTRELAS

Infinita distante,
Tão amarga e doce ao meu sabor,
Algo ilusoriamente visível que me faz delirar,
Tamanha forma pequena com olhos e sonhos tão grandes,
Que faz e desfaz sem saber o que quer realmente fazer,
Mas sabendo que esta sempre a gostar,
Noites distintas de pensamentos variados,
Uma solidão grande, mas com tantos ao lado beira o pecado,
Cheirando o pó das estrelas,
Atrapalhando o pensamento daquele que finge se importar,
E ao mesmo tempo se importando,
Chega dessa besteira,
Bebemos um vinho e ouvimos um country,
Um cigarro na mão sem nem um violão,
Tocaremos nossa musica com nossos lábios,
E faremos os lobos uivarem com a nossa canção!

#Lonecrow 19/01/2018
`,

`
OLHOS NEGROS

Em uma cidadezinha gritam seus nomes,
Nela escrevem suas mensagens,
Tanto com álcool tanto com fumaça,
Pessoas um tanto perdidas,
Pessoas mais do que astutas,
Galhos secos de uma noite manchada com vomito,
Pés molhados da grama um tanto quanto verde,
E olhos negros de uma insonia incapaz de ser curada,
Sugerem a incapacidade desses seres de serem normais,
Não a quem eles agradem,
A não ser a si próprios,
Pois todos são iguais,
Menos os garotos estranhos da cidadezinha!

#Lonecrow 05/01/2018
`,

`
LUNA

No frio de mais uma vida renascida,
A beleza das ondas do mar flutuante,
Seca até a nossa mais devastadora sede,
Nos banhando com sua luz divina,
Ela aquece o nosso olhar,
Como suas cores aquecem a nossa alma,
Nos fazendo esquecer o passado,
Pararmos nosso presente,
E navegar diretamente à um futuro no qual sempre estaremos maravilhados.

#Lonecrow 26/12/2017
`,

`
DIZER?

Como não ser um poeta em um mundo conturbado de acontecimentos,
Todo dia uma nova solidão,
Todo dia uma nova admiração,
Sentimentos estranhos para um corpo não acostumado,
Mas conhecidos para uma mente que já foi apaixonada,
Como não escrever se você tem sempre medo de dizer,
Então mais um poema banhado em medo é escrito,
E uma mente sozinha fica novamente ao abismo,
Pensando no que deveria fazer,
Ao invés de enfim dizer,
Reprima seus sentimentos e morra,
Nesse seu medo,
Em seu destino até morrer,
Ficará sozinho!!!

#Lonecrow 22/12/2017
`,

`
ARREBATE O LIDER

EI, VOCÊ,
Olhe para mim quando falar comigo,
Estranha esperteza misturada com tamanha loucura,
Mente caótica e percursora de meu inexistente destino,
Grita comigo, ela grita comigo,
Por que essa discussão não para,
CALA A BOCA, e apenas me ouça,
Eu sei oque você realmente quer,
Você quer saber? Mas não vai.
Quanta maldade e auto destruição em uma unica estrutura,
Chore, chore, chore,
Recipiente você não tem poder aqui,
Apenas eu tenho, e você não vai chorar,
Nem gritar, nem espernear, nem fazer nada que possa me desenrolar,
Apenas me obedeça pois se não você destruirá nós dois,
Como alguém abaixa a cabeça para a própria mente é um paradoxo extremamente irritante!

#Lonecrow 01/12/2017
`,

`
LOIRA

Sua couraça é de metal,
Uma variedade de cores a cobre,
Um diversidade de sabores a mantem viva,
Para atiçar nosso desejo precisamos mante-la de sangue gelado,
Abrir um buraco em sua nuca com suas próprias mãos,
Leva-la até nossos lábios,
E sugar sua alma até nos atordoarmos,
E vomitarmos nossa maldita culpa para fora de nossas entranhas!

#Lonecrow 11/10/2017
`,

`
INGENUIDADE

Sentei-me e ouvi,
Falei e escrevi,
Tudo natural para mais uma personalidade normal,
Mas logo estou no rio de piche novamente,
Com faíscas em minha mente a me confundir,
Dizendo-me coisas que eu realmente não quero ouvir,
Milhares de possibilidades sobre os outros me sussurra em imagens,
Possibilidades que se alienam com minhas dependências,
Esses sussurros apenas me trazem a certeza de minha ingenuidade,
Escondidos entre flores,
Inimigos da felicidade,
Dementadores...

#Lonecrow 10/10/2017
`,

`
DESCREVER

Não entendo por que de eu estar aqui,
São exatamente duas da manha de uma terça feira,
E aqui estou,
Bebendo vinho e escrevendo apenas o momento,
Pois ideias já não passam em minha cabeça,
Oque me resta é apenas descrever,
Descrever o silencio dos meus anjos de estimação,
Descrever o olhar da minha Cleópatra,
Que me assusta a qualquer fitada,
Estamos todos alertas,
Estamos todos esperando o de pior acontecer,
Acho que no fim só nos sentimos seguros quando nossa audição e visão estiverem mortos,
Só agora entendo o por que precisamos do silencio e dos olhos fechados para dormir.

#Lonecrow 19/09/2017
`,

`
SIMPLICIDADE DO AMOR

Não a superação perfeita,
Eu sei que agente esquece,
Mas a um momento entre a razão e a memoria em que todos somos imponentes,
Aquele momento em que a realidade bate de frente a nós,
Não adianta esconder,
Todos
Todos somos assim,
Pessoas fadadas a ter lembraças,
A bilogia é complicada, mas para explicar os sentimentos ela é bem simples,
Um suspirar, um aumento no tamanho da pupila, um suar frio.
A simplicidade esta ao nosso redor,
A razão é a saiada para entender tudo,
Apenas nós humanos que procuramos dificultar coisas simples como o amor!


#Lonecrow 04/09/2017`,





`DE FATO NÃO ENTENDA


Não sei como não consigo sentir,
Tudo esta na divisa do horizonte,
Apenas simplifiquemos essa ideia,
Não a como entender uma noite sem nexo,
A viver a sentir,
Vamos entender a loucura dos outros,
Nem sempre tudo é como escolhemos,
Nem tudo é plantado como desejamos,
Apenas devemos seguir a semente,
Mesmo que a mente esteja perdida,
Vamos sobreviver,
Vamos deitar e sentir,
Uma noite de calor e amor,
Apenas vamos querer.


#Lonecrow 26/08/2017`,





`ALIMENTO DE COBRA


Bandana desbotada,
Colete surrado,
Anéis sem significado, nos dedos entrelaçados,
Sempre de preto, se sentindo isolado,
No peito um fio pequeno segurando seu coração pesado,
Olhar ressaltando o negro da insonia,
Apenas mais um dia que começa doce mais termina amargo,
Que vida bacana,
Sorriso contagiante e animado,
De uma mascara que de sua vida esconde um real significado,
Chamar atenção é algo inesperado,
De imaginações peçonhentas ele retira seus poemas,
Mas ninguém compreende o seu real significado!


#Lonecrow 26/12/2017
`,

`
NOITE AGRADÁVEL

Sentado do lado de fora,
Com mil e uma ideias na cabeça,
Mas nenhuma capaz de me satisfazer,
O vinho está acabando, meu último cigarro já estou fumando,
Aparentemente minha única companheira dessa noite será a lua,
Mas mesmo ela está sumindo sobre as nuvens,
Apesar de tudo, a noite está agradável,
A umidade da chuva que já passou refresca meu corpo,
A música de um modo estranho se mistura com o grunhido dos grilos,
O som dos caminhões ao longo da distante rodovia me acalma,
Acredito que terei um bom sábado,
Mas a noite é uma criança,
E como já apontei,
O vinho está acabando!

#Lonecrow 04/03/2017
`,

`
ARMADILHA DE INSATISFAÇÃO

Vazio inconstante,
Ócio estranhamente sempre presente,
Ao abismo dos sonhos só felicidade eu vejo,
Desagradável a fumaça do meu cigarro incomoda,
Olfatos apurados e chatos,
Deitado em minha própria armadilha de insatisfação,
Criando mais combustível para minha vida ainda não falecida,
O abraço das cobertas me mantém quente,
Mas por que me sinto tão gelado?
Por que não consigo me sentir ardente,
Mesmo tudo tão belo em meu saber tudo está horrível,
Parece um sonho no qual só há uma saída para enfim acordar!

#Lonecrow 18/08/2017
`,

`
QUEM EU SOU?

Sentado no banco da escola,
Apenas aguardando o acaso,
As grades da estrutura só me fazem lembrar que estou preso,
Ao som dos carros que passam,
E ao silencio da espera,
O badalar do sino da igreja insita o pecado,
Mais uma noite sem saber quem eu sou,
Espero que disso,
Eu retire apenas oque á de bom.

#Lonecrow 31/07/2017
`,

`
UM TODO!

Alguma coisa acontece quando você para no meio da noite para escrever,
Seus olhos se aguçam apenas para ver oque você escreve,
Em meio a muitos sons sua audição não foca em um unico detalhe, mas os funde em um unico som peculiar,
Suas mãos ficam firmes e seu corpo imovel,
E quando você menos perceber você já faz parte de um todo,
Escrevendo ou digitando como um louco,
Mostrando que você não é apenas mais uma alma inutil nesse mundo,
Mais uma pessoa vivendo uma vida pateticamente normal...

#Lonecrow 04/03/2017
`,

`
NÃO Á CALOR

Uma noite sem lembranças,
Um frio quase que cortante nos traz apenas o presente,
Em meio a escuridão, duas luzes a piscar,
Tentando as sombras apagar,
Sem a majestosa luz do luar,
Nos deliciamos com o doce néctar do vinho,
Mas ainda não a calor para a noite acalmar,
Até o rugido do felino ja se calou,
E seus pelos brancos pararam de balançar,
Mas ao seu lado a um homem a escrever,
Com suas veias marcadas e seu sangue manchado,
Sua mão fria escrevendo,
Oque em sua mente já está acabado.

#Lonecrow 01/08/2017
`,

`
DESCANSE

Vamos aproveitar o desfecho entre os atos,
Silenciosamente me aproximei,
De costas, límpida estava,
Sem murmurar nem gritar,
O espinho de minha rosa em seu pescoço deslizou,
Nos ajoelhamos quase que ao mesmo tempo,
Eu apenas com minhas duas negras luas a observar,
O rio de águas quentes e vermelhas com o salgado mar do seu olhar se misturar,
Já cansada você se deita voltada para as estrelas a brilhar,
Uma canção de ninar começo para você cantar,
Logo você nota a temperatura do seu corpo a despencar,
Suas janelas começam a fechar,
Eu a deito em meu colo,
Mas apenas eu estou a suspirar,
Durma querida, ninguém mais irá lhe incomodar!

#Lonecrow 29/06/2017
`,

`
PERDIÇÃO

Sedento, mas com seus olhos mortos,
Invento, mas não tento,
Seguindo meu caminho, sempre sozinho,
Amante da escuridão,
Com um teto, mas sem chão,
Com visão e sem ação,
Vivendo o rumo como todos, a perdição,
Fazer o de melhor para ser lembrado,
Um ser incrível e sempre educado,
Por ser assim, sempre machucado,
Não tente entender,
Só faça acontecer,
Minha vida é teórica,
Mas só vocês podem me fazer viver.

#Lonecrow 09/06/2017
`,

`
ALMA AMARGA

Lonecrow não é apenas um pseudônimo,
Ele em tudo se resume ao simples,
Tão singelo e doce,
Sem ninguém, apenas um deslize,
Sentido aguçado, gosto apurado,
Todos o desejam levar a boca,
Mas ninguém consegue provar,
Pois todos que já provaram de seu doce,
Acabam devorando sua alma,
Que infelizmente, é amarga,
Queiram força-lo a levantar suas negras asas,
Mas não conseguem pois não a brechas,
Ele é como é,
E morrera como deverá morrer,
Sem motivos e sem um porque!

#Lonecrow 27/05/2017
`,

`
DESEJO

Até os confeitos dos meus sonhos são negros,
São tantas mensagens e desejos,
Que apenas oque sobra é a penumbra de meus devaneios,
Ao som do silencio,
Se desdobra meus pesadelos,
Luto com eles,
E apenas eu sou o vencedor,
Dentre todos pensamentos confusos,
Apenas um a de ceder,
Aquele cujo jazigo já foi construído,
Aquele que só de resto se expõe,
Tão discreto e imperceptível,
O de querer,
Dentre todos os meus objetivos,
Esse é o único que me faz viver!

#Lonecrow 26/06/2017
`,

`
ESCURIDÃO SOBRE RODAS

Cavalgar e seguir,
Pilotar e suprir,
Dois distintos iguais,
Apenas seguindo entre passado e presente,
Sapateando ou andando,
Correndo e vivendo,
Ambos sentados ao pôr do sol,
A imaginar um futuro delimitado,
E a tomar seu whisky manchado,
Sem querer ou temer,
Ao fazer e crescer,
A "birra" deixa de tomar conta,
A ajuda necessária não é mais,
Descontrolado e com um objetivo,
Com seus olhos a queimar,
Querendo sua Shadow comprar,
E na estrada rodar.

#Lonecrow 13/05/2017
`,

`
PASSAROS CLONES

A velocidade batendo no peito,
O asfalto à sua frente,
A brisa em seu rosto,
As árvores passando não tão rapidamente,
As curvas fazendo você imaginar o que de mais lindo há à frente,
Animais de um lado,
E máquinas ao outro,
O céu nublado e cinzento,
Não há uma única luz à frente,
Há apenas o asfalto,
Ir sem saber onde pode parar,
E seguir pensando até onde pode chegar,
A verdade é que não quero parar,
Mas eu quero ser parado,
Essa estrada não parece ter fim,
E as aves já estão se repetindo,
Já conheço tudo que tinha para ver nessa estrada,
Mas ainda assim não tenho forças para puxar o freio,
Anseio pelo meu caminhão,
Mas ao mesmo tempo com medo da dor, não,
Inesperado quero que aconteça,
Mas logo,
E que de minhas palavras ninguém esqueça.

#Lonecrow 01/05/2017
`,

`
AMANHECER SEM ASAS

Sabe, esses dias andei desamparado,
Sem saber o que fazer, o que falar,
Mas agora percebo que isso é pura perjura,
Tentei andar sobre os vivos,
Mas a verdade é que a morte é o que me acomoda,
Chega dessa falsidade,
Chega dessa ânsia de querer ajuda,
Não há ninguém que pode me ajudar,
Então levantarei sobre as montanhas,
Escalarei até onde for necessário para pegar meu alimento,
E depois voltarei ladeira abaixo para pegar o que de real me importa,
Não vou chorar, não vou mudar,
Apenas vou lamentar e aguentar,
Mesmo acompanhado serei solitário,
Mesmo sorrindo estarei lamentando,
Na procura de ajuda falhei,
E como sempre a escuridão voltou a pairar,
E meus sentimentos comecei a esconder,
Pois se quando os mostro todos acham graça,
Em minha morte enfim avistarão a desgraça,
E quando acontecer,
E em meu funeral todos amanhecer,
Ninguém poderá dizer que me ajudou,
O corvo solitário enfim suas asas deixou de bater,
E em seu precipício de emoções e desgraças ele se jogou,
Seu coração machucado parou de bater.

#Lonecrow 30/04/2017
`,

`
SOPRO

Ultimamente pego-me pensando muito em apagar a chama da minha vela,
Sabe, não deixar ela derreter oque resta da parafina,
Mas percebo que a chama por si só já esta se apagando,
Ela esta fraca,
Infelizmente a minha luz é necessária para manter uma pessoa no caminho certo,
A vela dessa pessoa já esta perto do fim,
Ela esta quase sem luz,
Mas graças a mim e outras chamas ela consegue seguir nitidamente seu caminho,
E me pergunto, quando sua vela acabar e seu ultimo resquício de luz brilhar,
Que motivos terei para não dar o sopro e me apagar?

#Lonecrow 29/04/2017
`,

`
ALGUÉM

Noite quase perfeita,
Esperando a luz do luar bater em meus pés,
Quero ver a lua,
Mas falta um tempo ainda até a sua chegada,
Em quanto isso,
Tento encontrar alguém para trocar palavras,
Alguém que me faça mesmo falar,
Sinto saudade,
Sem esperança tentei,
Lá estou perdido outra vez.

#Lonecrow 15/04/2017
`,

`
O SIMPLES PODER DE SORRIR

Nem tudo no mundo se baseia na tristeza,
Por mais que me sinta assim inconsciente e consciente,
É fato que a alegria dentro de nós cria um clima de satisfação,
Mas poucos sabem e poucos entendem,
Que por mais que uma gargalhada renda um momento de risadas,
O que nos deixa mais feliz é aquele simples sorriso de quem "amamos",
Pode ser um sorriso calmo e sem graça,
Um sorriso chorado ou na calma,
Mentimos para nós mesmos,
Queremos alegrias falsas e sem sabor,
Queremos aceitação de quem adoramos,
Mas é no sorriso de um inimigo, que nos apaixonamos!!!

#Lonecrow 03/03/2017
`,

`
PESO DA SOLIDÃO

Sem voltar atrás,
Sento-me sobre pedras de insatisfação,
Querendo que tudo fique como está,
Mesmo sabendo que tudo mudará,
Tentarei seguir o rumo como desejado,
Querendo alguém sempre ao meu lado,
Mas sozinhos sempre estamos,
Querendo nós ou não,
Incrível como o peso da solidão é leve,
Tão leve quanto carregar uma pessoa em suas costas,
No final morreremos,
E seremos enterrados em um único caixão,
Com uma única alma para nós conversarmos até a loucura,
A nossa!!!

#Lonecrow 03/03/2017
`

];

// Função para selecionar uma poesia aleatória
function changetext() {
    var paragrafo = document.getElementById("paragrafo");
    var indiceAleatorio = Math.floor(Math.random() * poesias.length);
    paragrafo.innerHTML = poesias[indiceAleatorio];
}
