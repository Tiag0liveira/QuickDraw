import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    // ProgressBar
    Format: 'Format',
    Size: 'Size',
    Teams: 'Teams',
    League: 'League',
    Name: 'Name',
    // Footer
    BackBtn: 'Back',
    NextBtn: 'Next',
    Download: 'Download',
    // HomeView
    TournamentFormat: 'Tournament Format',
    SingleElimination: 'Single Elimination',
    SingleEliminationDesc:
      'The loser of each match will be immediately eliminated from the tournament.',
    DoubleElimination: 'Double Elimination',
    DoubleEliminationDesc: 'A participant gets eliminated upon having lost two games or matches.',
    RoundRobin: 'Round Robin',
    RoundRobinDesc: 'Each participant meets all other participants in turn.',
    Swiss: 'Swiss',
    SwissDesc:
      'Participants are paired to ensure that each competitor plays opponents with a similar running score, but not the same opponent more than once.',
    FreeForAll: 'Free For All',
    FreeForAllDesc:
      'Several participants are grouped in one match and the winners will advance to the next round.',
    ThirdPlaceMatch: 'Include a match for 3rd place',
    // SizeView
    TournamentSize: 'Tournament Size',
    ParticipantsByName: 'Use the number of participants provided below',
    ParticipantsByNumber: 'Enter a number and generate a blank bracket',
    Participants: 'Participants',
    NamePerLine: 'One name per line',
    TextareaPlaceholder: 'Enter participants here',
    RandomizeNames: 'Randomize names',
    NumberOfParticipants: 'Number of Participants',
    // TeamsView
    RandomTeams: 'Randomly distributes selections or teams among the participants',
    OnlyOneChampionship: 'Only One Championship',
    OnlyOneChampionshipDesc: 'Only teams from the chosen championship.',
    OnlyOneLeague: 'Only One League',
    OnlyOneLeagueDesc: 'Only teams from the chosen league.',
    OnlyTeams: 'Only Teams',
    OnlyTeamsDesc: 'All the teams from all the leagues.',
    OnlySelections: 'Only Selections',
    OnlySelectionsDesc: 'All selections.',
    // LeagueView
    RandomLeague: 'Randomly choose a league',
    // NameView
    TournamentName: 'Tournament Name',
    TournamentNamePlaceholder: 'Enter the name here',
    TournamentColor: 'Tournament Color',
  },
  pt: {
    // ProgressBar
    Format: 'Formato',
    Size: 'Tamanho',
    Teams: 'Equipas',
    League: 'Ligas',
    Name: 'Nome',
    // Footer
    BackBtn: 'Voltar',
    NextBtn: 'Próximo',
    Download: 'Download',
    // HomeView
    TournamentFormat: 'Formato do Torneio',
    SingleElimination: 'Eliminação Única',
    SingleEliminationDesc: 'O perdedor de cada partida será imediatamente eliminado do torneio.',
    DoubleElimination: 'Eliminação Dupla',
    DoubleEliminationDesc: 'Um participante é eliminado ao perder dois jogos ou partidas.',
    RoundRobin: 'Rodada Robin',
    RoundRobinDesc: 'Cada participante encontra todos os outros participantes por sua vez.',
    Swiss: 'Suíço',
    SwissDesc:
      'Os participantes são emparelhados para garantir que cada competidor enfrente adversários com pontuação semelhante, mas não o mesmo adversário mais de uma vez.',
    FreeForAll: 'Todos Contra Todos',
    FreeForAllDesc:
      'Vários participantes são agrupados em uma partida e os vencedores avançam para a próxima rodada.',
    ThirdPlaceMatch: 'Incluir uma partida para o 3º lugar',
    // SizeView
    TournamentSize: 'Tamanho do Torneio',
    ParticipantsByName: 'Use o número de participantes fornecido abaixo',
    ParticipantsByNumber: 'Insira um número e gere um torneio em branco',
    Participants: 'Participantes',
    NamePerLine: 'Um nome por linha',
    TextareaPlaceholder: 'Insira os participantes aqui',
    RandomizeNames: 'Randomizar nomes',
    NumberOfParticipants: 'Número de Participantes',
    // TeamsView
    RandomTeams: 'Distribui aleatoriamente seleções ou equipes entre os participantes',
    OnlyOneChampionship: 'Apenas um campeonato',
    OnlyOneChampionshipDesc: 'Somente equipes do campeonato escolhido.',
    OnlyOneLeague: 'Apenas Uma Liga',
    OnlyOneLeagueDesc: 'Somente times da liga escolhida.',
    OnlyTeams: 'Somente equipes',
    OnlyTeamsDesc: 'Todas as equipes de todas as ligas.',
    OnlySelections: 'Somente Seleções',
    OnlySelectionsDesc: 'Todas as Seleções.',
    // LeagueView
    RandomLeague: 'Escolha aleatoriamente uma liga',
    // NameView
    TournamentName: 'Nome do Torneio',
    TournamentNamePlaceholder: 'Digite o nome aqui',
    TournamentColor: 'Cor do Torneio',
  },
}

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})

export default i18n
