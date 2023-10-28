


//Music 
  let EnvMusic;
  let ImpactMusic; 
  let ThemeMusic;

//loading music 
  EnvMusic = loadSound("assets/Pikmin_Environmental_Noises.mp3"); 
  ImpactMusic = loadSound("assets/PikminMusic_The_Impact_Site.mp3"); 
  ThemeMusic = loadSound("assets/Pikmin_Main_Theme.mp3"); 

function keyPressed() { 
//Music system keys 
  if (key == '0'){ // stops playing the songs 
    EnvMusic.stop(); 
    ImpactMusic.stop(); 
    ThemeMusic.stop(); 
  }
  if (key == '1'){ // starts playing Env Music  
    EnvMusic.isPlaying(); 
  }
  if (key == '2'){ // starts playing Impact Music   
    ImpactMusic.play(); 
  }
  if (key == '3'){ // starts playing Theme Music  
    ThemeMusic.play(); 
  }

}