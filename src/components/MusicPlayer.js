import React, { useState } from 'react';
import '../css/MusicPlayer.css';
import { Howl } from 'howler';
import computer_simulation from '../mp3_files/computer_simulation.mp3'; // Import your MP3 files

export default function MusicPlayer() {
  const [currentSong, setCurrentSong] = useState(null);
  const [sound, setSound] = useState(null);

  const playSong = (song) => {
    if (sound && sound.playing()) {
      // If the song is already playing, do nothing
      return;
    }

    if (sound) {
      sound.stop();
    }

    const newSound = new Howl({
      src: [song],
      onend: () => {
        // Handle the end of the song (e.g., play the next song)
      },
    });

    setCurrentSong(song);
    setSound(newSound);

    newSound.play();
  };

  const stopSong = () => {
    if (sound) {
      sound.stop();
      setCurrentSong(null);
    }
  };

  const rewind = () => {
    if (sound) {
      const currentPosition = sound.seek();
      const newPosition = currentPosition - 5; // Rewind by 5 seconds (adjust as needed)
      sound.seek(newPosition < 0 ? 0 : newPosition);
    }
  };

  const fastForward = () => {
    if (sound) {
      const currentPosition = sound.seek();
      const newPosition = currentPosition + 5; // Fast forward by 5 seconds (adjust as needed)
      sound.seek(
        newPosition > sound.duration() ? sound.duration() : newPosition
      );
    }
  };

  return (
    <div className='music-player-container'>
      <div className='player-header'>
        <h1>Pystrance</h1>
      </div>

      <img
        src='/imgs/computer_simulation_remix_cover.png' // Updated image path
        id='song_image'
        alt='Song Cover'
      />

      <div id='player_buttons'>
        <button
          className='player_button'
          onClick={() => playSong(computer_simulation)}
        >
          <img src='/imgs/play_button.png' className='player_img' />
        </button>

        <button className='player_button' onClick={stopSong}>
          <img className='player_img' src='/imgs/pause_button.jpg' />
        </button>

        <button className='player_button' onClick={rewind}>
          <img className='player_img' src='/imgs/rewind_button.PNG' />
        </button>

        <button className='player_button' onClick={fastForward}>
          <i className='fas fa-forward'></i>
          <img className='player_img' src='/imgs/fast_forward_button.PNG' />
        </button>
      </div>

      <div id='player'></div>
    </div>
  );
}
