const TeamData = [
  {
    "team_id": 468245,
    "team_name": "Denmark",
    "team_first_color": "#C603C0"
  },
  {
    "team_id": 468244,
    "team_name": "Uruguay",
    "team_first_color": "#FCD116"
  },
  {
    "team_id": 468236,
    "team_name": "Sweden",
    "team_first_color": "#FECC00"
  },
  {
    "team_id": 468226,
    "team_name": "Russia",
    "team_first_color": "#0039A6"
  },
  {
    "team_id": 468238,
    "team_name": "Switzerland",
    "team_first_color": "#FF0000"
  },
  {
    "team_id": 468243,
    "team_name": "Mexico",
    "team_first_color": "#006847"
  },
  {
    "team_id": 468237,
    "team_name": "Brazil",
    "team_first_color": "#FEDF00"
  },
  {
    "team_id": 468227,
    "team_name": "France",
    "team_first_color": "#002395"
  },
  {
    "team_id": 468246,
    "team_name": "Spain",
    "team_first_color": "#C60B1E"
  },
  {
    "team_id": 468240,
    "team_name": "Belgium",
    "team_first_color": "#ED2939"
  },
  {
    "team_id": 468217,
    "team_name": "England",
    "team_first_color": "#CF081F"
  },
  {
    "team_id": 468241,
    "team_name": "Japan",
    "team_first_color": "#BC002D"
  },
  {
    "team_id": 468233,
    "team_name": "Colombia",
    "team_first_color": "#FCD116"
  },
  {
    "team_id": 468230,
    "team_name": "Portugal",
    "team_first_color": "#006600"
  },
  {
    "team_id": 468231,
    "team_name": "Croatia",
    "team_first_color": "#FF0000"
  },
  {
    "team_id": 468239,
    "team_name": "Argentina",
    "team_first_color": "#74ACDF"
  }
 ]

export default TeamData;



// ------- SORTING TEAMS -------- //

const sortTeamsAlphabetically = TeamData.sort((a, b) => (a.team_name > b.team_name) ? 1 : - 1)

// console.log(sortTeamsAlphabetically)
