const token = 'BpqKFdy6yqS0MtpYkeZJwzB0Pa6zllSq'
const URL = 'https://api.giphy.com/v1/gifs/random?api_key=BpqKFdy6yqS0MtpYkeZJwzB0Pa6zllSq'//&q=koala
const testGif = document.querySelector('#test-gif')
const searchTerm = document.querySelector('input')

async function testExample() {
    const res = await axios.get(`${URL}&q=koala&limit=1`)

}

async function searchGif() {
    const res = await axios.get(`${URL}&tag=${searchTerm.value}&limit=1`);
    const gifURL = res.data.data.images.original.url;
    const newGif = document.createElement('img');
    newGif.setAttribute('src', gifURL)
    newGif.classList.add('gif')
    $('.gifs').append(newGif);
}

$('#add').on('click', function(e){
    e.preventDefault();
    searchGif();
    searchTerm.value = '';
})

$('form').on('submit', function(e){
    e.preventDefault();
    searchGif();
    searchTerm.value = '';
})

$('#remove').on('click', function(e){
    $('.gifs').html('')

})
