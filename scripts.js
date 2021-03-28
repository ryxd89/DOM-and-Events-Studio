// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){
    const takeOffCheck = document.getElementById("takeoff");
    const landCheck = document.getElementById("landing")
    const abortCheck =document.getElementById("missionAbort")
    
    takeOffCheck.addEventListener("click", function(){
        let followUp = window.confirm("Confirm that the shuttle is ready for takeoff")
        if (followUp){
          flightStatus.innerHTML = "Shuttle in flight!";
          spaceShuttleHeight.innerHTML = 10000;
          shuttleBackground.style.backgroundColor = "Blue";
     } 
    })
    
    landCheck.addEventListener("click", function(){
      let landDown = window.alert("The shuttle is landing. Landing gear engaged.")
      flightStatus.innerHTML = "The shuttle has landed"
      spaceShuttleHeight.innerHTML = 0
      shuttleBackground.style.backgroundColor = ""
    })
    
    abortCheck.addEventListener("click", function(){
      let abortMission = window.confirm("Confirm that you want to abort the mission.")
      if (abortMission){
        flightStatus.innerHTML = "Mission aborted"
        spaceShuttleHeight.innerHTML = 0
        shuttleBackground.style.backgroundColor = "green"
    
      }
    })
    }
    
    
    
    window.addEventListener("load", init);