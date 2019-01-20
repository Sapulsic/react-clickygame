import React, { Component } from "react";
import MobCard from "./components/MobCard/MobCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar/Navbar";
import mobpsycho from "./mobpsycho.json";


class App extends Component {
    state = {
        cScore: 0,
        highScore: 0,
        selectedImg: [],
        mobpsycho,
        title: "Mob-PsyClick"
    }

    selectClick = event => {
        this.setState({ cScore: this.state.cScore + 1 });
        if (this.state.cScore + 1 > this.state.highScore) {
            this.setState({ 
                highScore: this.state.highScore + 1,
                mobpsycho: this.state.mobpsycho.sort((a, b) => {
                    return 0.5 - Math.random();
                }),
                selectedImg: [...this.state.selectedImg],
            });
        }
        
    }
    
    selectMemory = event => {
        event.preventDefault();
        console.log(event.target.id);
        if (this.state.selectedImg.indexOf(event.target.alt) === -1) {
            this.state.selectedImg.push(event.target.alt);
            this.selectClick();
        }
        else {
            this.setState({
                mobpsycho: this.state.mobpsycho.sort((a, b) => {
                    return 0.5 - Math.random();
                }),
                selectedImg: [],
                cScore: 0
            });
        }
    }

    render() {
        return (
            <Wrapper>
                <Navbar
                    title={this.state.title}
                    cScore={this.state.cScore}
                    highScore={this.state.highScore}
                />
                <Title>Mob Psycho Clicker</Title>
                <div className="container">
                    {this.state.mobpsycho.map(mobpsycho => (
                        <MobCard
                            id={mobpsycho.id}
                            name={mobpsycho.name}
                            image={mobpsycho.image}
                            selectMemory={this.selectMemory}
                        />
                        ))
                    }
                </div>
            </Wrapper>
        )
    }
}

export default App;