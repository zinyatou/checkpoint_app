import React from 'react';

class App extends React.Component {
  state = {
    person: {
      fullName: 'William Henry Gates',
      bio: 'William Henry Gates III, dit Bill Gates [bɪl ɡeɪts], né le 28 octobre 1955 à Seattle est un informaticien, entrepreneur et milliardaire américain. Il est connu pour être le cofondateur de Microsoft en 1975 et son principal actionnaire jusqu’en 2014. ',
      imgSrc: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.gqmagazine.fr%2Fphotos%2F63a19c93b786cc9a9e724d1e%2Fmaster%2Fw_2560%252Cc_limit%2Fbill%252520gates.jpg&tbnid=OQtqDBKPPAV8jM&vet=12ahUKEwjehZzQvPX_AhVXmCcCHQDQDYEQMygDegUIARCsAQ..i&imgrefurl=https%3A%2F%2Fwww.gqmagazine.fr%2Farticle%2Fbill-gates-livres-science-fiction&docid=CBkYm_7JAGHvKM&w=2560&h=1706&q=bill%20gates&ved=2ahUKEwjehZzQvPX_AhVXmCcCHQDQDYEQMygDegUIARCsAQ',
      profession: 'Developer',
    },
    show: false,
    intervalId: null,
    timeInterval: 0,
  };

  componentDidMount() {
    // Start the interval when the component is mounted
    const intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1,
      }));
    }, 1000); // Increment timeInterval every second (1000ms)

    this.setState({ intervalId });
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted
    clearInterval(this.state.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { person, show, timeInterval } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>

        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Profile" />
            <p>Profession: {person.profession}</p>
          </div>
        )}

        <p>Time interval since mount: {timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;
