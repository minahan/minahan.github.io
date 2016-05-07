// var labelColorTestData = [
//   {label: "person a", times: [{"color":"green", "label":"Weeee", "starting_time": 1355752800000, "ending_time": 1355759900000}, {"color":"blue", "label":"Weeee", "starting_time": 1355767900000, "ending_time": 1355774400000}]},
//   {label: "person b", times: [{"color":"pink", "label":"Weeee", "starting_time": 1355759910000, "ending_time": 1355761900000}, ]},
//   {label: "person c", times: [{"color":"yellow", "label":"Weeee", "starting_time": 1355761910000, "ending_time": 1355763910000}]}
// ];

var timeline = {
Chinese: ["1868 Burlingame Treaty","1875 Page Law","1882 Chinese Exclusion Act","1892 Geary Act","1943 Magnuson Act"],
Japanese: ["1907 Gentleman’s Agreement","1917 Immigration Act"],
Korean: [],
Filipino: ["1934: Tydings-McDuffie Act"],
Indian: [],
Everyone: ["1917: Immigration Act","1924 Johnson-Reed Act","1945 War Brides Act"],
US: []
}

function convert(timeline){
  data = []
  for (var race in timeline){
    var events = {};
    events["label"] = race;
    var times = [];
    for (String date : timeline[race]){
      var newEvent = {}
      if (date[4] == "-"){
        newEvent["starting_time"] = parseInt(date.substring(0,4));
        newEvent["ending_time"] = parseInt(date.substring(5,9));
        newEvent["label"] = date.substring(10,date.length);
      } else {
        newEvent["display"] = "circle";
        newEvent["starting_time"] = parseInt(date.substring(0,4));
        newEvent["label"] = date.substring(5,date.length);
      }
    times.push(newEvent);
    }
    data.push(events);
  }
  return data;
}

print
