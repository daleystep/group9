$("div.login-method > img").on("click", function(){
    $("#login-prompt").html("")
    $("#login-overlay").removeClass("hidden")
    $("#login-prompt").prepend("Allow Gas Buddy to connect with " + this.id + "?")
})

$("#cancel-button").click(function(){
    $("#login-prompt").html("")
    $("#login-overlay").addClass("hidden")
})

$("#zip").change(function(){
    if ($("zip").val != null){
        $("#zip-entry").removeClass("hidden")
    }
})
