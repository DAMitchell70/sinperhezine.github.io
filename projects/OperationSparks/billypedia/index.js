/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        
        // uncomment this to inspect all available data; delete when done //
         //console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        let topRatedImage ="images/album/voice-in-the-night.jpg";
        let $topRatedContainer =$('<div>')
            .attr('id','topRatedContainer')
            .append($('<img>').attr('id',"topRatedImage").attr('src',topRatedImage))
            .appendTo('#list-top-rated');
        let topRated = data.discography.topRated;
        let topRatedDisplay ="";
       // let $title = $('<div>').attr('class','title');
        _.forEach(topRated, function(recording) {
            const cTopRated= _.map(recording,function(value,pos,collection){
                //console.log(collection);
                if(pos ==="title")return $('<li>').attr('index',pos)
                .data('recording',collection)
                .on('click',()=>ChangeTopRatedImage(collection['art']))
                .text(value);
            });
        var count=0;
        function ChangeTopRatedImage(art){
            console.log("change image");
            count++;
            topRatedImage = art;
            $('#topRatedImage').attr('src',art);
        }
        $('#list-top-rated').append(cTopRated);
        });
        
        $('div').css('color', 'red');
        $('div').css('color', 'black');
        $('#section-quotes').css('background-color', 'grey').css('border-radius', '4px');
        $('.heading-quotes').css('color', 'white').css('padding-left', '10px');
        $('.quote').css('color', 'white').css('font-style', 'italic');
        $('#quotes').css('padding-right', '10px').css('padding-left', '10px');
        $('#quotes:last-child').css('padding-bottom', '4px');
        
        $('#section-quotes').prependTo('#sections');
        $('#image-billy').attr('src', 'images/billy/billy-1.jpg');
        $('#section-bio p:last-child').remove();
        
        //General Recoring Section
        let GeneralRecordingImage ="images/album/eastern-rebellion.jpg;
        let $GeneralRecordingSection = ('<div>')
        .attr('id','GeneralRecordingSection').appendTo('#sidebar');
        let $GeneralRecordingImageDisplay =$('<img>')
        .attr('id','GeneralRecordingImageDisplay').attr('src',GeneralRecordingImage);
        //General Recording image
        //General recoriding text
        // General recoring ablums
        
        // YOUR CODE ABOVE HERE //
    })
    
    
    
    .fail(function() { console.log('getJSON on discography failed!'); });
});


