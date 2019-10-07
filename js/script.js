$(document).ready(function (){

    //sideBar Toggle
    $("#navButton").click(function (){
        $("#navBar").slideToggle();
        $(".btn1").toggleClass("rotate45c");
        $(".btn3").toggleClass("rotate45a");
        $(".btn2").fadeToggle(0);
        $(".dropdown-content").css("display", "none")
        $(".facilities").fadeToggle();
    })

    //dropdown Toggle 
    let $dropdownSpan = $("#dropdown article");
    let $dropdownContent = $(".1");
            $($dropdownSpan).click(function(){
                $($dropdownContent).slideToggle();
            })
    let $dropdownSpan2 = $("#dropdown2 article");
    let $dropdownContent2 = $(".2");
            $($dropdownSpan2).click(function(){
                $($dropdownContent2).slideToggle();

            })
           


    // setting image focus in Gallery
    let $image = $(".image");
    let $target = $("#screenDisplay img");
        for (i = 0; i < $image.length; i++){
            $($image[i]).click( function(){ 
            $target[0].src = this.src;
        })
        
     }
    // OUR FACILITIES
     let $accordion = $(".facilities");
     for ( var i = 0; i < $accordion.length; i++){
     $($accordion[i]).click(function (){
        $(this).next().slideToggle();
        console.log();
     })
    }

    //schools
    let $heads = $(".sch h3");
    for (var i = 0; i < $heads.length; i++){
    $($heads[i]).click(function(){
        $(this).next().slideToggle();
    })
    }

})







