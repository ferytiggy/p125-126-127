//se crea la va
song = "";

//se crea la función preload
function preload()
{
    //se carga la canción en mp3 a la variable song
    song = loadSound("music.mp3");
}



//se crea la función de setup
function setup() {
    //se crea el canvas donde se proyectara el video con tamaño de ancho 600px y alto 500px
    canvas =  createCanvas(600, 500);
    //se manda el canvas al centro
    canvas.center();

//se crea la variable video con la imagen en tiempo real
    video = createCapture(VIDEO);
    //se oculta el video
    video.hide();


}





//se crea la función draw
function draw() {
    //se muestra el video en la posicion x0 y0 y tamaño 500px y 600px
    image(video, 0, 0, 600, 500);




}

//se crea la función de play
function play()
{
    //se empieza a tocar la canción
    song.play();
}




