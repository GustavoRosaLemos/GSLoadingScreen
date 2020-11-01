
let count = 0;
let thiscount = 0;

const handler = {
    startInitFunctionOrder(data) {
        count = data.count;
    },
    initFunctionInvoking(data) {
        document.querySelector(".loading-progress").style.left = "0%";
        document.querySelector(".loading-progress").style.width = ((data.idx / count) * 100) + "%";
    },
    startDataFileEntries(data) {
        count = data.count;
    },
    performMapLoadFunction(data) {
        ++thiscount
        document.querySelector(".loading-progress").style.left = "0%";
        document.querySelector(".loading-progress").style.width = ((thiscount / count) *100) + "%";
    }
}

window.addEventListener("message", (e) => {
    (handler[e.data.eventName] || function() {})(e.data)
})


window.onload = function() 
{
    
  document.body.addEventListener("mousemove", function(event)
  {
        var cursor = document.getElementById("cursor");

        //TODO: More consistent way of aligning the cursor without awkward offsets?
        var x = event.pageX - cursor.width + 31;
        var y = event.pageY - 1;

        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
  });
}