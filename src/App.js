import React, { Component } from "react";
import MobCard from "./components/MobCard/MobCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar/Navbar";
import mobpsycho from "./mobpsycho.json";


class App extends Component {
    state = {
        mobpsycho,
        cScore: 0,
        highScore: 0,
        selectedImg: [],
        title: "Mob-PsyClick"
    };

    selectClick = event => {
        const currentImg = event.target.alt;
        const currentImgEvent = this.state.selectedImg.indexOf(currentImgEvent) > -1;
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
                        />
                    ))}
                </div>
                {/* <Footer /> */}
            </Wrapper>
        )
    }
}

export default App;