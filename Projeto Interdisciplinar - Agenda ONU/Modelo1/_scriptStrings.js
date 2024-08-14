//Texto dentro da header:
const texto_pHeader = 'Agenda ONU';

//Textos (nomes) dos boões dentro do container
const buttonsName = [
 'Erradicação da Pobreza',
 'Fome Zero e Agricultura Sustentável',
 'Saúde e Bem-estar',
 'Educação de Qualidade',
 'Igualdade de Gênero',
 'Água Potável e Saneamento',
 'Energia Limpa e Acessível',
 'Trabalho Decente e  Crescimento Econômico',
 'Indústria Inovação e Infraestrutura',
 'Redução das Desigualdades',
 'Cidades e Comunidades Sustentáveis',
 'Consumo e Produção Responsáveis',
 'Ação Contra a Mudança Global do Clima',
 'Vida na Água',
 'Vida Terrestre',
 'Paz, Justiça e Instituições Eficazes',
 'Parcerias e Meios de Implementação'
]

//Textos dentro do segundo container
//Título do painel inicial (home):
const titulo_Home = 'Objetivos de Desenvolvimento Sustentável';

//Textos das apresentação das ODSs nos paineis referentes a cada botão do menu.
const texto_Home = `
Painel Home:
Digite aqui o texto que voçê deseja colocar na apresentação deste painel!
`;
const texto_ErradicacaoDaPobreza = `
Painel 1 - Erradicação da Pobreza:
Digite aqui o texto que voçê deseja colocar na apresentação deste painel!
`;
const texto_FomeZero_AgriculturaSustentavel = `
Painel 2 - Fome Zéro e Agricultura Sustentável:
Digite aqui o texto que voçê deseja colocar na apresentação deste painel!
`;
const texto_Saude_BemEstar = `
Painel 3 - Saúde e Bem-estar:
Digite aqui o texto que voçê deseja colocar na apresentação deste painel!
`;
const texto_EducacaoDeQualidade = `
Painel 4 - Educação de Qualidade:
Digite aqui o texto que voçê deseja colocar na apresentação deste painel!
`;
const texto_IgualdadeDeGenero = `
Painel 5 - Igualdade de Gênero:
Digite aqui o texto que voçê deseja colocar na apresentação deste painel!
`;
const texto_AguaPotavel_Saneamento = `
Painel 6 - Água Potável e Saneamento:
Digite aqui o texto que voçê deseja colocar na apresentação deste painel!
`;
const texto_EnergiaLimpaAcessivel = `
Painel 7 - Energia Limpa e Acessível:
Digite aqui o texto que voçê deseja colocar na apresentação deste painel!
`;
const texto_TrabalhoDescente_CrescimentoEconomico = `
Painel 8 - Trabalho Descente e Crescimento Econômico:
Digite aqui o texto que voçê deseja colocar na apresentação deste painel!
`;
const texto_Industria_Inovacao_Infraestrutura = `
Painel 9 - Indústria, Inovação e Infraestrutura:
Digite aqui o texto que voçê deseja colocar na apresentação deste painel!
`;
const texto_ReducaoDasDesigualdades = `
Painel 10 - Reduçao das Desigualdades:
Digite aqui o texto que voçê deseja colocar na apresentação deste painel!
`;
const texto_CidadesComunidadesSustentaveis = `
Painel 11 - Cidades e Comunidades Sustentáveis:
Digite aqui o texto que voçê deseja colocar na apresentação deste painel!
`;
const texto_ConsumoProducaoResponsavel = `
Painel 12 - Consumo e Produçao Responsável:
Digite aqui o texto que voçê deseja colocar na apresentação deste painel!
`;
const texto_AcaoContraMudancaGlobalDoClima = `
Painel 13 Ação Contra Mudanca Global so Clima:
Digite aqui o texto que voçê deseja colocar na apresentação deste painel!
`;
const texto_VidaNaAgua = `
Painel 14 - Vida na Água:
Digite aqui o texto que voçê deseja colocar na apresentação deste painel!
`;
const texto_VidaTerrestre = `
Painel 15 - Vida Terrestre:
Digite aqui o texto que voçê deseja colocar na apresentação deste painel!
`;
const texto_PazJustica_InstituicoesEficazes = `
Painel 16 - Paz Justiça e Instituiçoes Eficazes:
Digite aqui o texto que voçê deseja colocar na apresentação deste painel!
`;
const texto_Parcerias_MeiosDeImplementacao = `
Painel 17 - Parcerias e Meios de Implementação:
Digite aqui o texto que voçê deseja colocar na apresentação deste painel!
`;

//Array com todos os textos das ODSs
var meusTextos = [
 texto_ErradicacaoDaPobreza,
 texto_FomeZero_AgriculturaSustentavel,
 texto_Saude_BemEstar,
 texto_EducacaoDeQualidade,
 texto_IgualdadeDeGenero,
 texto_AguaPotavel_Saneamento,
 texto_EnergiaLimpaAcessivel,
 texto_TrabalhoDescente_CrescimentoEconomico,
 texto_Industria_Inovacao_Infraestrutura,
 texto_ReducaoDasDesigualdades,
 texto_CidadesComunidadesSustentaveis,
 texto_ConsumoProducaoResponsavel,
 texto_AcaoContraMudancaGlobalDoClima,
 texto_VidaNaAgua,
 texto_VidaTerrestre,
 texto_PazJustica_InstituicoesEficazes,
 texto_Parcerias_MeiosDeImplementacao,
 texto_Home
]

// Entidades para enviar a mensagem
const entidade1 = 'ONU Brasil';
const entidade2 = 'Semas - PE, Secretaria de Meio Ambiente e Sustentabilidade de Pernambuco';
const entidade3 = 'SES - PE, Secretaria Estadual de Saúde de Pernambuco';
const entidade4 = 'ANVISA, Agência Nacional de Vigilância Sanitári';
const entidade5 = 'SDS - PE, Secretaria de Defesa Solcia de Pernambuco';
const entidade6 = 'Ibama, Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais';
const entidade7 = 'SJDH, Secretaria de Justiça e Direitos Humanos';
const entidade8 = 'MPPE, Ministério Público de Pernambuco';
const entidade9 = 'MPT - PE, Ministério Público do Trabalho em Pernambuco';
const entidade10 = 'SEDEPE, Secretaria de Desenvolvimento Proficional e Empreendedorismo';
const entidade11 = 'SEE - PE, Secretaria de Educação e Espostes de Pernambuco';
const entidade12 = 'SCJ - PE Secretaria da Criança e da Juventude de Pernambuco';
const entidade13 = 'SDE - PE, Secretaria de Desenvolvimento Econômico de Pernambuco';
const entidade14 = 'Neoenergia - PE';

/*Arrays das entidades para selecionar nos checkbox de cada painel*/
const entidades_ErradicacaoDaPobreza = [entidade1, entidade2, entidade5];
const entidades_FomeZero_AgriculturaSustentavel = [entidade1, entidade2, entidade7, entidade8, entidade13];
const entidades_Saude_BemEstar = [entidade1, entidade3, entidade4, entidade8, entidade12];
const entidades_EducacaoDeQualidade = [entidade1, entidade7, entidade8, entidade10, entidade11, entidade12];
const entidades_IgualdadeDeGenero = [entidade1, entidade5, entidade7, entidade8, entidade9, entidade12];
const entidades_AguaPotavel_Saneamento = [entidade1, entidade2, entidade4, entidade6];
const entidades_EnergiaLimpaAcessivel = [entidade1, entidade2, entidade6, entidade13, entidade14];
const entidades_TrabalhoDescente_CrescimentoEconomico = [entidade1, entidade2, entidade9, entidade10, entidade13];
const entidades_Industria_Inovacao_Infraestrutura = [entidade1, entidade2, entidade10, entidade13];
const entidades_ReducaoDasDesigualdades = [entidade1, entidade7, entidade10, entidade11, entidade12, entidade13];
const entidades_CidadesComunidadesSustentaveis = [entidade1, entidade2, entidade13];
const entidades_ConsumoProducaoResponsavel = [entidade1, entidade2, entidade13];
const entidades_AcaoContraMudancaGlobalDoClima = [entidade1, entidade2, entidade6];
const entidades_VidaNaAgua = [entidade1, entidade2, entidade6];
const entidades_VidaTerrestre = [entidade1, entidade2, entidade6];
const entidades_PazJustica_InstituicoesEficazes = [entidade1, entidade5, entidade7, entidade8, entidade9];
const entidades_Parcerias_MeiosDeImplementacao = [entidade1, entidade2, entidade3, entidade4, entidade5, entidade6, entidade7, entidade8, entidade9, entidade10, entidade11, entidade12, entidade13, entidade14];

var entidades = [
 entidades_ErradicacaoDaPobreza,
 entidades_FomeZero_AgriculturaSustentavel,
 entidades_Saude_BemEstar,
 entidades_EducacaoDeQualidade,
 entidades_IgualdadeDeGenero,
 entidades_AguaPotavel_Saneamento,
 entidades_EnergiaLimpaAcessivel,
 entidades_TrabalhoDescente_CrescimentoEconomico,
 entidades_Industria_Inovacao_Infraestrutura,
 entidades_ReducaoDasDesigualdades,
 entidades_CidadesComunidadesSustentaveis,
 entidades_ConsumoProducaoResponsavel,
 entidades_AcaoContraMudancaGlobalDoClima,
 entidades_VidaNaAgua,
 entidades_VidaTerrestre,
 entidades_PazJustica_InstituicoesEficazes,
 entidades_Parcerias_MeiosDeImplementacao,
]

const tituloChildLeft = 'Para quem você quer enviar a mensagem?';
const tituloChildRight = 'Relate aqui o problema';

//Textos dentro do terceiro container
const tituloDivRight = 'Informações'

const Equipe = `
 Equipe:
 - Arnaldo Júnior,
 - Américo Barros,
 - Fagner Pontes.
`

const Informacoes = `Desenvolvido por Fagner Pontes.

Professor de Desenvolvimento de Sistemas.

Escola Técnica Estadual
Prof. Antônio Carlos Gomes da Costa.

Conhecimentos utilizados:
 - HTML,
 - CSS,
 - Javascript
 - Ícones impordados do Bootstrap

Desenvolvido em junho de 2024.
`

//Textos de alerta:
const atencao1 = `
ATENÇÃO!
Selecione ao menos uma entidade!
`

const atencao2 = `
ATENÇÃO!
A mensagem está vazia, digite sua mensagem.
`