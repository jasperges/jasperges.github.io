import React from 'react';
import Link from 'gatsby-link';

class Vimeo extends React.Component {
  render() {
    return (
      <div className="vimeo-container">
        <iframe
          src={
            '//player.vimeo.com/video/' +
            this.props.videoId +
            '?title=0&byline=0&portrait=0&color=ff6b6b'
          }
          frameBorder="0"
          width="480"
          height="270"
          webKitAllowFullScreen
          mozAllowFullScreen
          allowFullScreen
        />
      </div>
    );
  }
}

class IndexPage extends React.Component {
  render() {
    const asciiUnder = [
      ' ___  ___  ________   ________  _______   ________             ',
      '|\\  \\|\\  \\|\\   ___  \\|\\   ___ \\|\\  ___ \\ |\\   __  \\            ',
      '\\ \\  \\\\\\  \\ \\  \\\\ \\  \\ \\  \\_|\\ \\ \\   __/|\\ \\  \\|\\  \\           ',
      ' \\ \\  \\\\\\  \\ \\  \\\\ \\  \\ \\  \\ \\\\ \\ \\  \\_|/_\\ \\   _  _\\          ',
      '  \\ \\  \\\\\\  \\ \\  \\\\ \\  \\ \\  \\_\\\\ \\ \\  \\_|\\ \\ \\  \\\\  \\|         ',
      '   \\ \\_______\\ \\__\\\\ \\__\\ \\_______\\ \\_______\\ \\__\\\\ _\\         ',
      '    \\|_______|\\|__| \\|__|\\|_______|\\|_______|\\|__|\\|__|        ',
    ].join('\n');

    const asciiConstruction = [
      ' ________  ________  ________   ________  _________  ________  ___  ___  ________ _________  ___  ________  ________      ',
      '|\\   ____\\|\\   __  \\|\\   ___  \\|\\   ____\\|\\___   ___\\\\   __  \\|\\  \\|\\  \\|\\   ____\\\\___   ___\\\\  \\|\\   __  \\|\\   ___  \\    ',
      '\\ \\  \\___|\\ \\  \\|\\  \\ \\  \\\\ \\  \\ \\  \\___|\\|___ \\  \\_\\ \\  \\|\\  \\ \\  \\\\\\  \\ \\  \\___\\|___ \\  \\_\\ \\  \\ \\  \\|\\  \\ \\  \\\\ \\  \\   ',
      ' \\ \\  \\    \\ \\  \\\\\\  \\ \\  \\\\ \\  \\ \\_____  \\   \\ \\  \\ \\ \\   _  _\\ \\  \\\\\\  \\ \\  \\       \\ \\  \\ \\ \\  \\ \\  \\\\\\  \\ \\  \\\\ \\  \\  ',
      '  \\ \\  \\____\\ \\  \\\\\\  \\ \\  \\\\ \\  \\|____|\\  \\   \\ \\  \\ \\ \\  \\\\  \\\\ \\  \\\\\\  \\ \\  \\____   \\ \\  \\ \\ \\  \\ \\  \\\\\\  \\ \\  \\\\ \\  \\ ',
      '   \\ \\_______\\ \\_______\\ \\__\\\\ \\__\\____\\_\\  \\   \\ \\__\\ \\ \\__\\\\ _\\\\ \\_______\\ \\_______\\  \\ \\__\\ \\ \\__\\ \\_______\\ \\__\\\\ \\__\\',
      '    \\|_______|\\|_______|\\|__| \\|__|\\_________\\   \\|__|  \\|__|\\|__|\\|_______|\\|_______|   \\|__|  \\|__|\\|_______|\\|__| \\|__|',
      '                                  \\|_________|                                                                            ',
    ].join('\n');

    return (
      <div>
        <div className="ascii-art">
          <p>{asciiUnder}</p>
          <p>{asciiConstruction}</p>
        </div>
        <Vimeo videoId="107628264" />
      </div>
    );
  }
}

export default IndexPage;
