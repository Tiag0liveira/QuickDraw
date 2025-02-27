// src/stores/useBracketStore.ts
import { defineStore } from 'pinia'

interface BracketState {
  format: string
  thirdPlace: boolean
  participants: number | string[]
  randomizeNames: boolean
  teams: string
  league: string
  randomLeague: boolean
  name: string
  color: string
}

export const useBracketStore = defineStore('bracket', {
  state: (): BracketState => ({
    format: '',
    thirdPlace: false,
    participants: 0,
    randomizeNames: false,
    teams: '',
    league: '',
    randomLeague: false,
    name: '',
    color: '',
  }),

  actions: {
    setFormat(format: string) {
      this.format = format
    },
    setThirdPlace(thirdPlace: boolean) {
      this.thirdPlace = thirdPlace
    },
    setParticipants(participants: number | string[]) {
      this.participants = participants
    },
    setRandomizeNames(randomizeNames: boolean) {
      this.randomizeNames = randomizeNames
    },
    setTeams(teams: string) {
      this.teams = teams
    },
    setLeague(league: string) {
      this.league = league
    },
    setRandomLeague(randomLeague: boolean) {
      this.randomLeague = randomLeague
    },
    setName(name: string) {
      this.name = name
    },
    setColor(color: string) {
      this.color = color
    },
  },
  persist: true,
})
