function Movie_OnStart(1){
StackTrace="On Start";
SoundPlay("star2",true);
VideoSetVolume("video",0);


}

function Movie_OnClick(X,Y,MouseButton){
StackTrace="On Click";


}

function Frame__0_0(ID){
StackTrace="Scene 1 Frame 0";
Pause();


}

function Frame__1_0(ID){
StackTrace="Scene 2 Frame 0";
Pause();


}

function botonpausarvideo_OnClick(){
StackTrace="boton pausar video.On Click";
SoundPlay("se",false);
VideoPause("video");

}

function botonpausarvideo_OnRelease(){
StackTrace="boton pausar video.On Release";
SoundPlay("se",false);
VideoResume("video");


}

function togglebutton1_OnClick(){
StackTrace="togglebutton1.On Click";
SoundPlay("se",false);
VideoSetVolume("video",100);



}

function togglebutton1_OnRelease(){
StackTrace="togglebutton1.On Release";
SoundPlay("se",false);
VideoSetVolume("video",0);

}

function irasonido_OnClick(){
StackTrace="ir a sonido.On Click";
SoundPlay("se",false);
GotoSceneName("Scene2");
}

function togglebutton2_OnClick(){
StackTrace="togglebutton2.On Click";
SoundPlay("se",false);
SoundPause("star2");


}

function togglebutton2_OnRelease(){
StackTrace="togglebutton2.On Release";
SoundResume("star2");
SoundPlay("se",false);

}

function togglebutton2_OnOut(){
StackTrace="togglebutton2.On Out";


}

function iravideo_OnClick(){
StackTrace="ir a video.On Click";
SoundPlay("se",false);
GotoSceneName("Scene1");
}

