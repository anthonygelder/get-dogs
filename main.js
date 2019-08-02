// $(function() {

//     $('#dogForm').submit(function(event){
//         event.preventDefault();
        
//         let dogs = $('#number').val();
//         console.log(dogs);
        
//         if(dogs === '') {
//             dogs = 3;
//         }
//         for(let i = 0; i < dogs; i++) {
//             getDogImage();
//         }

//         $('#number').val('');

//     })

//     function getDogImage() {
//         $('.dogs').empty();
//         fetch('https://dog.ceo/api/breeds/image/random')
//             .then(response => response.json())
//             .then(responseJson => displayDog(responseJson));
        
//     }

//     function displayDog(responseJson) {
//         $('.dogs').append(`<img src="${responseJson.message}">`);
//     }

// })




    function submit() {
        $('#dogForm').submit(function(event){
            event.preventDefault();
            
            let breed = $(event.currentTarget).find('#breed').val();
            console.log(breed);
            
            getDogImage(breed);
            $('#breed').val('');

        })
    }


    function getDogImage(breed) {
        fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
            .then(response => response.json())
            .then(responseJson =>  {
              console.log(responseJson);
              // status checking logic here
              if (responseJson.status === 'error') {
                throw new Error(responseJson.message)
              }
              displayDog(responseJson)
            })
            .catch(error => alert(error));
    }

    function displayDog(responseJson) {
        $('.dogs').html(`<img src="${responseJson.message}">`);
    }

$(submit());